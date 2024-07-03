import { SimulatedPlayerEnum, testWorldLocation } from '../main';
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry';
import { getSimPlayer } from '../../lib/xboyPackage/Util';
import { world, system } from "@minecraft/server";
import SIGN from "../../lib/xboyPackage/YumeSignEnum";
export const BreakBlockSimulatedPlayerList = new Set();
export const commandRegistry = new CommandRegistry();
const noArgs = ({ args, entity, isEntity }) => {
    if (args.length !== 1)
        return;
    if (!isEntity)
        return;
    const SimPlayer = getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    for (const i in SimulatedPlayerEnum)
        if (SimulatedPlayerEnum[i] === SimPlayer)
            SimPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN);
};
commandRegistry.registerCommand('假人挖掘', noArgs);
commandRegistry.registerAlias('假人摧毁', '假人挖掘');
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    commandRegistry.execute(message, { entity: sender, isEntity: true });
    if (message === 'showshowway') {
        sender.sendMessage(commandRegistry.showList().toString());
    }
});
const Vector_subtract = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x - u, y: y - v, z: z - w });
const Vector_add = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x + u, y: y + v, z: z + w });
const breaks = (awa = 'awa') => world.getPlayers({ tags: [SIGN.AUTO_BREAKBLOCK_SIGN] }).forEach(async (SimPlayer) => {
    const man = SimPlayer;
    const viewDirection = man.getViewDirection();
    const headLocation = man.getHeadLocation();
    const whatCanISee = Vector_add(headLocation, viewDirection);
    const dimension = man.dimension;
    dimension.spawnParticle('minecraft:endrod', whatCanISee);
    const blockLocation = man.getBlockFromViewDirection({ maxDistance: 4 })?.block?.location;
    if (blockLocation)
        man.breakBlock(Vector_subtract(blockLocation, testWorldLocation));
});
system.runInterval(breaks, 0);
