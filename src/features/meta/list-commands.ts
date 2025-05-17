import { commandManager } from "@/core/command";

commandManager.register(['showshowway', '假人命令列表'], ({ player }) => {
    player?.sendMessage(commandManager.prefixes.join('\n'));
});