import type {SimulatedPlayer} from '@minecraft/server-gametest'

import {
    GetPID, initSucceed,
    SimulatedPlayerEnum,
    spawned as spawnedEvent,
    spawnSimulatedPlayer,
    spawnSimulatedPlayerByNameTag
} from '../main'
import {CommandInfo, CommandRegistry, getLocationFromEntityLike} from '../../lib/yumeCommand/CommandRegistry'
import {ScriptEventRegistry} from "../../lib/yumeCommand/ScriptEventRegistry";
import {Dimension, Vector3, world} from '@minecraft/server'
import {xyz_dododo} from "../../lib/xboyPackage/xyz_dododo";

const overworld = world.getDimension("overworld");


const commandRegistry = new CommandRegistry()
commandRegistry.registerAlias('假人创建','假人生成')
commandRegistry.registerAlias('FFPP','假人生成')
commandRegistry.registerAlias('ffpp','假人生成')
commandRegistry.registerAlias('Ffpp','假人生成')

const scriptEventRegistry = new ScriptEventRegistry()

function noArgs({args,entity,location,isEntity}:CommandInfo) {
    // @ts-ignore
    if(!initSucceed)
        return entity?.sendMessage('[假人] 插件未初始化完成，请重试')
    if(args.length!==1)return;
    // TEST with pid input

    if(isEntity){
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer :SimulatedPlayer = spawnSimulatedPlayer(location,location.dimension,PID)



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
        const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(location,location.dimension,PID)



        SimulatedPlayerEnum[PID]=SimulatedPlayer
        SimulatedPlayerEnum[SimulatedPlayer.id]=PID

        spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
    }


}

commandRegistry.registerCommand('假人生成',noArgs)

function withArgs({args,entity,location,isEntity}:CommandInfo) {
    if(args[1]!=='批量')return
    if(typeof Number(args[2]) !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[2]))

    let count = Number(args[2])
    while (count-->0)
        if(isEntity){
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer :SimulatedPlayer = spawnSimulatedPlayer(location,location.dimension,PID)



            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            SimulatedPlayerEnum[PID]=SimulatedPlayer
            SimulatedPlayerEnum[SimulatedPlayer.id]=PID

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)

        }else {
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(location,location.dimension,PID)



            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            SimulatedPlayerEnum[PID]=SimulatedPlayer
            SimulatedPlayerEnum[SimulatedPlayer.id]=PID

            spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
        }
}
commandRegistry.registerCommand('假人生成',withArgs)
scriptEventRegistry.registerScriptEventHandler('ffp:ffpp',noArgs)
scriptEventRegistry.registerScriptEventHandler('ffp:ffpp',withArgs)
scriptEventRegistry.registerScriptEventHandler('ffp:ffpp',withArgs_xyz_name)

// #56 参考：
// 假人生成 x y z name 维度序号（数字 0-主世界 1-地狱 2-末地）
function withArgs_xyz_name({args,entity}:CommandInfo) {
    let location: Vector3 = null
    let nameTag : string = null
    if (args[1] === '批量' || args.length < 2) return

    // xyz
    if(args.length>=2 && args.length<=3)
        return entity?.sendMessage('[模拟玩家] 命令错误，期待三个坐标数字，得到个数为'+(args.length-1))
    try {
        const [x,y,z] = args.slice(1,4)
        const {x:_x,y:_y,z:_z} = entity.location
        const [__x,__y,__z] = xyz_dododo([x,y,z],[_x,_y,_z])
        location = {x:__x,y:__y,z:__z}
        // 好烂，谁来改改

        // 改xx这代码😡
        // 还是我自己写个addon霸👆🤓
    }catch (e) {
        return entity?.sendMessage('[模拟玩家] 命令错误，期待三个却得到错误的信息 '+args.join(' '))
    }

    // name
    if(args.length>=5){
        try {
            nameTag = args[4]
        }catch (e) {
            return entity?.sendMessage('[模拟玩家] 命令错误，期待文本作为名称却得到 '+args[4])
        }
    }

    // dimension
    let dimension : Dimension;
    if (args.length >= 6) {
        try {
            dimension = world.getDimension(["overworld", "nether", "the end"][Number(args[5])])
        } catch (e) {
            return entity?.sendMessage('[模拟玩家] 命令错误，期待序号作为维度（0-主世界 1-地狱 2-末地）却得到 ' + args[5])
        }
    }

    const PID = GetPID()
    const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')

    const SimulatedPlayer :SimulatedPlayer = nameTag ? spawnSimulatedPlayerByNameTag(location,dimension ?? entity?.dimension ?? overworld,nameTag) : spawnSimulatedPlayer(location,dimension ?? entity?.dimension ?? overworld,PID)

    SimulatedPlayerEnum[PID]=SimulatedPlayer
    SimulatedPlayerEnum[SimulatedPlayer.id]=PID

    spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
    __FlashPlayer__.setScore(SimulatedPlayer.id,PID)
}
commandRegistry.registerCommand('假人生成',withArgs_xyz_name)

world.afterEvents.chatSend.subscribe(({message, sender:entity})=>{
    const cmdArgs = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(cmdArgs[0]))
        commandRegistry.executeCommand(cmdArgs[0],{entity,isEntity:true,args:cmdArgs,location:getLocationFromEntityLike(entity)})

    if(message==='showshowway'){
        entity.sendMessage(commandRegistry.showList().toString())
    }
})

// console.error('[假人]内置插件chatSpawn加载成功')