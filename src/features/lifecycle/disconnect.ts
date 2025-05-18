import { commandManager } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/utils";
import { simulatedPlayerManager } from '@/core/simulated-player';
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.register(['假人销毁','假人移除','假人清除'], ({player,args:[simIndex],simulatedPlayer: sim}) => {
    if(sim)return simulatedPlayerManager.remove(sim);

    // TODO: 支持scriptevent
    if(!player) {
        console.error('error not isEntity')
        return
    }
    if (simIndex === undefined) {
        const simulatedPlayer:SimulatedPlayer = getSimPlayer.fromView(player)
        if(!simulatedPlayer)return player.sendMessage("§e§l-面前不存在模拟玩家")

        commandManager.execute('假人背包清空', [], { player, simulatedPlayer: simulatedPlayer ,location: player.location, dimension: player.dimension})
        player.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(simulatedPlayer)
    }
    else {
        const index = Number(simIndex)

        if(typeof index !== 'number')return  player?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(simIndex))

        const simulatedPlayer:SimulatedPlayer = simulatedPlayerManager.get(index as PID)

        if(!simulatedPlayer)return player.sendMessage("§e§l-不存在模拟玩家"+index)

        commandManager.execute('假人背包清空', [], { player, simulatedPlayer: simulatedPlayer ,location: player.location, dimension: player.dimension})
        player.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(simulatedPlayer)
    }

});