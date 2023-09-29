import { testWorldLocation } from '../main';
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry';
import { getSimPlayer } from '../../lib/xboyPackage/Util';
const commandName = '假人挖掘';
const commandRegistry = new CommandRegistry();
commandRegistry.registerCommand(commandName);
//
const noArgs = ({ args, entity, location, isEntity }) => {
    if (args.length !== 1)
        return;
    if (!isEntity)
        return;
    const SimPlayer = getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    // Gets the relative coordinates of the square in front of the dummy entity
    function getCoordinatesFromView(sim) {
        const viewLocation = sim.getBlockFromViewDirection({ maxDistance: 4 }).faceLocation;
        return testWorldLocation(viewLocation);
    }
};
commandRegistry.registerCommand(commandName, noArgs);
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    if (message !== commandName)
        return;
    commandRegistry.executeCommand(commandName, { commandName: commandName, entity: sender, isEntity: true, args: CommandRegistry.parse(message) });
});
console.error('[假人]内置插件' + commandName + '加载成功');
