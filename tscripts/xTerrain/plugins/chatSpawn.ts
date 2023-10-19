import type { World } from '../../@types/globalThis'
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import { spawnSimulatedPlayer, SimulatedPlayerList, spawned as spawnedEvent, GetPID } from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import {Player} from "@minecraft/server";

declare const world: World


const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand('假人生成')
commandRegistry.registerAlias('假人创建','假人生成')

//
const noArgs = ({args,entity,location,isEntity})=>{
    if(args.length!==1)return;
    // TEST with pid input

    if(isEntity){
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer :SimulatedPlayer = spawnSimulatedPlayer(entity.location,entity.dimension,PID)

        SimulatedPlayerList[PID]=SimulatedPlayer

        spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id,PID)

        // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),1)
        // const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')

        // TEST END
    }else {
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(location,entity,PID)

        SimulatedPlayerList[PID]=SimulatedPlayer

        spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
    }


}

commandRegistry.registerCommand('假人生成',noArgs)

const withArgs = ({args,entity,location,isEntity})=>{
    if(args[1]!=='批量')return
    if(typeof Number(args[2]) !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[2]))

    let count = Number(args[2])
    while (count-->0)
        if(isEntity){
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer :SimulatedPlayer = spawnSimulatedPlayer(entity.location,entity.dimension,PID)

            SimulatedPlayerList[PID]=SimulatedPlayer

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)

        }else {
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(location,entity,PID)

            SimulatedPlayerList[PID]=SimulatedPlayer

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
        }
}
commandRegistry.registerCommand('假人生成',withArgs)

world.afterEvents.chatSend.subscribe(({message, sender})=>{
    const cmdArgs = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(cmdArgs[0]))
        commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})
})

// console.error('[假人]内置插件chatSpawn加载成功')