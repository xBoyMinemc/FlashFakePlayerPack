import { type Player, system, world } from "@minecraft/server";
import EventSignal from "./EventSignal";
import type { playerReadyAfterEventSignal } from "../../@types/globalThis";

// EventSignal
export const playerReady: playerReadyAfterEventSignal = new EventSignal<undefined>();

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
        playerReady.trigger(undefined);

        system.clearRun(id);
    });
};

const id = system.runInterval(update, 4);
