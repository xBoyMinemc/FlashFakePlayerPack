import { commandManager } from "../../../core/command";

commandManager.registerCommand(['showshowway', '假人命令列表'], ({ entity }) => {
    entity?.sendMessage(commandManager.listRegisteredPrefixes().join('\n'));
});