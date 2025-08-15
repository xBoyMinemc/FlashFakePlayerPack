import {Command, commandManager} from "../../lib/yumeCommand/CommandRegistry";
import {listenChatMessage, simulatedPlayers, unlistenChatMessage} from "../main";
import {system} from "@minecraft/server";

const cmd = new Command();
cmd.register(inf => {
    let reply = false;
    let replied = false;
    const prom = new Promise<void>((resolve, reject) => {
        system.runInterval(() => {
            if (replied) {
                reply
                    ? resolve(undefined)
                    : reject();
            }
        })
    })

    const listener = ({message}) => {
        replied = true;
        if (!(message.toLowerCase() === "n" || message.toLowerCase() !== "y")) {
            reply = true;
        }
    };

    if (inf.entity) {
        listenChatMessage(listener);
        inf.entity.sendMessage('确定删除所有假人吗？(请在聊天框回复y/N)');
    }

    prom.then(() => {
        for (let _x in simulatedPlayers) {
            simulatedPlayers.PID.disconnect();
        }
    }).catch().finally(() => {
        unlistenChatMessage(listener);
    });
});

commandManager.registerCommand(['ras', '删除所有假人'], cmd);