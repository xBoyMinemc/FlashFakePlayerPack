import { commandManager, getLocationFromEntityLike } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/core/queries";
import { simulatedPlayerManager } from '@/core/simulated-player';
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人销毁','假人移除','假人清除'], ({entity,isEntity,args:[simIndex],sim}) => {
    if(sim)return simulatedPlayerManager.remove(sim);

    if(!isEntity) {
        console.error('error not isEntity')
        return
    }
    if (simIndex === undefined) {
        const simulatedPlayer:SimulatedPlayer = getSimPlayer.fromView(entity)
        if(!simulatedPlayer)return entity.sendMessage("§e§l-面前不存在模拟玩家")

        commandManager.run('假人背包清空', [], { entity, isEntity, sim: simulatedPlayer ,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(simulatedPlayer)
    }
    else {
        const index = Number(simIndex)

        if(typeof index !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(simIndex))

        const simulatedPlayer:SimulatedPlayer = simulatedPlayerManager.get(index as PID)

        if(!simulatedPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        commandManager.run('假人背包清空', [], { entity, isEntity, sim: simulatedPlayer ,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(simulatedPlayer)
    }

});