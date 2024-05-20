import { SimulatedPlayerEnum, testWorldLocation } from '../main';
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry';
import { getSimPlayer } from '../../lib/xboyPackage/Util';
import { world, system } from "@minecraft/server";
export const BreakBlockSimulatedPlayerList = new Set();
const commandRegistry = new CommandRegistry();
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
            BreakBlockSimulatedPlayerList.add(i);
};
commandRegistry.registerCommand('假人挖掘', noArgs);
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    commandRegistry.execute(message, { entity: sender, isEntity: true });
    if (message === 'showshowway') {
        sender.sendMessage(commandRegistry.showList().toString());
    }
});
const Vector_subtract = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x - u, y: y - v, z: z - w });
const breaks = () => {
    BreakBlockSimulatedPlayerList.forEach((simIndex) => {
        const blockLocation = SimulatedPlayerEnum[simIndex].getBlockFromViewDirection({ maxDistance: 4 })?.block?.location;
        if (blockLocation)
            SimulatedPlayerEnum[simIndex].breakBlock(Vector_subtract(blockLocation, testWorldLocation));
    });
};
system.runInterval(breaks, 0);
