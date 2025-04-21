import { commandManager } from "@/core/command";

commandManager.add(['showshowway', '假人命令列表'], ({ entity }) => {
    entity?.sendMessage(commandManager.list().join('\n'));
});