import { world } from "@minecraft/server";
import { TPSMonitor } from "@/core/tps";
import { commandManager } from "@/core/command";
import { playerReady } from "../events/player-ready";

const TPS_TAG = 'tps';

const EVENTS: { subscribe: (...args: any) => void; }[] = [world.afterEvents.playerJoin, world.afterEvents.playerLeave, playerReady];

const tpsMonitor = new TPSMonitor();

tpsMonitor.tpsUpdate.subscribe(({ tps }) => {
    world.getPlayers({ tags: [TPS_TAG] }).forEach(player => {
        player.onScreenDisplay.setActionBar(`§e§lTPS:§3${tps}`);
    });
});

commandManager.registerCommand('tps开', ({ entity }) => {
    if (!entity) return;

    entity.addTag(TPS_TAG);

    autoSwitchTPS();
});

commandManager.registerCommand('tps关', ({ entity }) => {
    if (!entity) return;

    entity.removeTag(TPS_TAG);

    autoSwitchTPS();
});

const checkIfRequireTPS = (): boolean => {
    return world.getPlayers({ tags: [TPS_TAG] }).length > 0;
};

const autoSwitchTPS = (): void => {
    if (checkIfRequireTPS())
        tpsMonitor.on();
    else
        tpsMonitor.off();
};

EVENTS.forEach(event => event.subscribe(autoSwitchTPS));