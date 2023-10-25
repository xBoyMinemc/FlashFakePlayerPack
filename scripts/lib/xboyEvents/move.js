import { system, world } from "@minecraft/server";
import EventSignal from "./EventSignal";
export const playerMove = new EventSignal();
const playerInfo = new Map();
const getFlash = ({ x, y, z }) => String(x) + String(y) + String(z);
const update = () => {
    const playerList = world.getAllPlayers();
    playerList.forEach(player => {
        const location = player.location;
        const viewDirection = player.getViewDirection();
        const flash = getFlash(location) + getFlash(viewDirection);
        const lastInfo = playerInfo.get(player);
        if (lastInfo === undefined)
            return playerInfo.set(player, { location, viewDirection, flash });
        if (lastInfo.flash == flash)
            return void flash;
        playerInfo.set(player, { location, viewDirection, flash });
        const { location: locationBefore, viewDirection: viewDirectionBefore } = playerInfo.get(player);
        playerMove.trigger({ location, viewDirection, locationBefore, viewDirectionBefore });
    });
};
system.runInterval(update, 0);
