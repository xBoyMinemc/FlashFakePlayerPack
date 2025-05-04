import { commandManager } from "@/core/command";
import { simulatedPlayerManager } from '@/core/simulated-player';
import { world } from "@minecraft/server";

commandManager.add('假人列表', ({player}) => {
    let target = player ?? world;
    if (simulatedPlayerManager.simulatedPlayers.size === 0) return target.sendMessage('列表空的');
    for (const [index, simulatedPlayer] of simulatedPlayerManager.simulatedPlayers) {
        const message = `§e§l-序号：${index} ## 生成名称: ${simulatedPlayer.name}${simulatedPlayer.name === simulatedPlayer.nameTag ? '' : ' #当前名称: ' + simulatedPlayer.nameTag}`;
        target.sendMessage(message);
    }
});
