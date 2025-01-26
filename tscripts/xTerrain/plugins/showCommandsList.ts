import { Command, commandManager } from "../../lib/yumeCommand/CommandRegistry";

const listCommands = new Command();
listCommands.register(({ entity }) => {
    entity?.sendMessage(commandManager.listRegisteredPrefixes().join('\n'));
});
commandManager.registerCommand(['showshowway', '假人命令列表'], listCommands);