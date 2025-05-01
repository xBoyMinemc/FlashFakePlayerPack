import { world } from "@minecraft/server";
import { TPSMonitor } from "@/core/tps";
import { commandManager } from "@/core/command";

const TPS_TAG = 'tps';

const EVENTS: { subscribe: (...args: any) => void; }[] = [world.afterEvents.playerSpawn, world.afterEvents.playerLeave, world.afterEvents.worldLoad];

const tpsMonitor = new TPSMonitor();

tpsMonitor.tpsUpdate.subscribe(({ tps }) => {
    world.getPlayers({ tags: [TPS_TAG] }).forEach(player => {
        player.onScreenDisplay.setActionBar(`§e§lTPS:§3${tps}`);
    });
});

commandManager.add('tps开', ({ player }) => {
    if (!player) return;

    player.addTag(TPS_TAG);

    autoSwitchTPS();
});

commandManager.add('tps关', ({ player }) => {
    if (!player) return;

    player.removeTag(TPS_TAG);

    autoSwitchTPS();
});

const checkIfRequireTPS = (): boolean => {
    return world.getPlayers({ tags: [TPS_TAG] }).length > 0;
};

const autoSwitchTPS = (): void => {
    if (checkIfRequireTPS())
        tpsMonitor.start();
    else
        tpsMonitor.stop();
};

EVENTS.forEach(event => event.subscribe(autoSwitchTPS));