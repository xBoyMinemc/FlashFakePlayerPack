import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {spawnSimulatedPlayer, SimulatedPlayerEnum, spawned as spawnedEvent, GetPID, initSucceed} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { world } from '@minecraft/server'


const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand('假人生成')
commandRegistry.registerAlias('假人创建','假人生成')
commandRegistry.registerAlias('FFPP','假人生成')
commandRegistry.registerAlias('ffpp','假人生成')
commandRegistry.registerAlias('Ffpp','假人生成')



const noArgs = ({args,entity,location,isEntity})=>{
    if(!initSucceed)
        return entity?.sendMessage('[假人] 插件未初始化完成，请重试')
    if(args.length!==1)return;
    // TEST with pid input

    if(isEntity){
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer :SimulatedPlayer = spawnSimulatedPlayer(entity.location,entity.dimension,PID)

        

        SimulatedPlayerEnum[PID]=SimulatedPlayer
        SimulatedPlayerEnum[SimulatedPlayer.id]=PID

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

        

        SimulatedPlayerEnum[PID]=SimulatedPlayer
        SimulatedPlayerEnum[SimulatedPlayer.id]=PID

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

            

            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            SimulatedPlayerEnum[PID]=SimulatedPlayer
            SimulatedPlayerEnum[SimulatedPlayer.id]=PID

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)

        }else {
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(location,entity,PID)

            

            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            SimulatedPlayerEnum[PID]=SimulatedPlayer
            SimulatedPlayerEnum[SimulatedPlayer.id]=PID

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
        }
}
commandRegistry.registerCommand('假人生成',withArgs)

world.afterEvents.chatSend.subscribe(({message, sender})=>{
    const cmdArgs = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(cmdArgs[0]))
        commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})

    if(message==='showshowway'){
        sender.sendMessage(commandRegistry.showList().toString())
    }
})

// console.error('[假人]内置插件chatSpawn加载成功')