import { commandManager, getLocationFromEntityLike } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/core/queries/Util";
import { simulatedPlayerManager } from "@/main";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.registerCommand(['假人销毁','假人移除','假人清除'], ({entity,isEntity,args:[simIndex],sim}) => {
    if(sim)return simulatedPlayerManager.remove(sim);

    if(!isEntity) {
        console.error('error not isEntity')
        return
    }
    if (simIndex === undefined) {
        const SimPlayer:SimulatedPlayer = getSimPlayer.fromView(entity)
        if(!SimPlayer)return entity.sendMessage("§e§l-面前不存在模拟玩家")

        commandManager.executeCommand('假人背包清空', [], { entity, isEntity, sim: SimPlayer ,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(SimPlayer)
    }
    else {
        const index = Number(simIndex)

        if(typeof index !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(simIndex))

        const SimPlayer:SimulatedPlayer = simulatedPlayerManager.get(index as PID)

        if(!SimPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        commandManager.executeCommand('假人背包清空', [], { entity, isEntity, sim: SimPlayer ,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        simulatedPlayerManager.remove(SimPlayer)
    }

});