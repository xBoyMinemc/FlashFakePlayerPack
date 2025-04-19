import { type Player, system, world } from "@minecraft/server";
import EventSignal from "@/core/event/signal";

// EventSignal
export const playerReady = new EventSignal();

const playerViewYMap = new Map<Player, number>();

const update = (): void => {
    const playerList = world.getAllPlayers();
    playerList.forEach(player => {
        const { y: currentViewY } = player.getViewDirection();

        const storedViewY = playerViewYMap.get(player);

        if (storedViewY === undefined) {
            // set to Map
            playerViewYMap.set(player, currentViewY);
            return;
        }
        if (storedViewY == currentViewY)
            // nothing
            return;

        // update to Map && Event-trigger
        playerViewYMap.set(player, currentViewY);
        playerReady.trigger();

        system.clearRun(id);
    });
};

const id = system.runInterval(update, 4);
