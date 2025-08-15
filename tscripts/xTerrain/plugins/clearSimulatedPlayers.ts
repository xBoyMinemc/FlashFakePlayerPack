import {Command, commandManager} from "../../lib/yumeCommand/CommandRegistry";
import {listenChatMessage, simulatedPlayers, unlistenChatMessage} from "../main";

const cmd = new Command();
cmd.register(inf => {
    const listener = ({message}) => {
        if (message.toLowerCase() === "n" || message.toLowerCase() !== "y") {
            return;
        }
    };

    if (inf.entity) {
        listenChatMessage(listener);
        inf.entity.sendMessage('确定删除所有假人吗？(请在聊天框回复y/N)');
    }

    for (let simulatedPlayersKey in simulatedPlayers) {
        simulatedPlayers.PID.disconnect();
    }

    unlistenChatMessage(listener);
});

commandManager.registerCommand(['ras', '删除所有假人'], cmd);