import type {SimulatedPlayer} from '@minecraft/server-gametest'

import {
    GetPID, initSucceed,
    simulatedPlayers,
    spawned as spawnedEvent,
    spawnSimulatedPlayer,
    spawnSimulatedPlayerByNameTag
} from '../main'
import { type CommandInfo, commandManager, Command } from '../../lib/yumeCommand/CommandRegistry'
import { Dimension, Vector3, world } from '@minecraft/server'
import {xyz_dododo} from "../../lib/xboyPackage/xyz_dododo";

const overworld = world.getDimension("overworld");


const chatSpawnCommand = new Command()

chatSpawnCommand.register(({args})=>args.length === 0, ({entity,location,isEntity})=>{
    if(!initSucceed)
        return entity?.sendMessage('[假人] 插件未初始化完成，请重试')
    // TEST with pid input

    if (isEntity) {
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer: SimulatedPlayer = spawnSimulatedPlayer(location, location.dimension, PID)


        simulatedPlayers[PID] = SimulatedPlayer
        simulatedPlayers[SimulatedPlayer.id] = PID

        spawnedEvent.trigger({spawnedSimulatedPlayer: SimulatedPlayer, PID})
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id, PID)

        // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),1)
        // const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')

        // TEST END
    } else {
        const PID = GetPID()
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer: SimulatedPlayer = spawnSimulatedPlayer(location, location.dimension, PID)


        simulatedPlayers[PID] = SimulatedPlayer
        simulatedPlayers[SimulatedPlayer.id] = PID

        spawnedEvent.trigger({spawnedSimulatedPlayer: SimulatedPlayer, PID})
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id, PID)
    }


})

chatSpawnCommand.register(({ args }) => args[0] === '批量', ({ args: [, countString], entity, location, isEntity }) => {
    if (!countString) return entity?.sendMessage('[模拟玩家] 命令错误，请提供数字');
    if (!Number.isSafeInteger(Number(countString))) return entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + countString);

    let count = Number(countString);
    while (count-- > 0)
        if (isEntity) {
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer: SimulatedPlayer = spawnSimulatedPlayer(location, location.dimension, PID)


            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            simulatedPlayers[PID] = SimulatedPlayer
            simulatedPlayers[SimulatedPlayer.id] = PID

            spawnedEvent.trigger({spawnedSimulatedPlayer: SimulatedPlayer, PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id, PID)

        } else {
            const PID = GetPID()
            const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
            const SimulatedPlayer: SimulatedPlayer = spawnSimulatedPlayer(location, location.dimension, PID)


            // add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>
            simulatedPlayers[PID] = SimulatedPlayer
            simulatedPlayers[SimulatedPlayer.id] = PID

            spawnedEvent.trigger({spawnedSimulatedPlayer: SimulatedPlayer, PID})
            __FlashPlayer__.setScore(SimulatedPlayer.id, PID)
        }
})

// #56 参考：
// 假人生成 x y z name 维度序号（数字 0-主世界 1-下界 2-末地）
chatSpawnCommand.register(
    ({ args }) => args.length >= 3,
    ({
        args: [targetX, targetY, targetZ, targetName, targetDimension],
        entity,
        location: senderLocation,
    }: CommandInfo) => {
        let location: Vector3;
        let nameTag: string = null;

        // xyz
        try {
            const { x: sourceX, y: sourceY, z: sourceZ } = senderLocation;
            // @ts-ignore
            const [x, y, z] = xyz_dododo([targetX, targetY, targetZ], [sourceX, sourceY, sourceZ])
    
            location = { x, y, z };
    
            // 好烂，谁来改改
    
            // 改xx这代码😡
            // 还是我自己写个addon霸👆🤓
        }catch (e) {
            return entity?.sendMessage(`[模拟玩家] 命令错误，期待三个却得到错误的信息 ${targetX} ${targetY} ${targetZ}`);
        }

        // name
        if (targetName) 
                nameTag = targetName;

        // dimension
        let dimension: Dimension;
        if (targetDimension) {
            try {
                dimension = world.getDimension(['overworld', 'nether', 'the end'][Number(targetDimension)]);
            } catch (e) {
                return entity?.sendMessage('[模拟玩家] 命令错误，期待序号作为维度（0-主世界 1-下界 2-末地）却得到 ' + targetDimension);
            }
        }
        dimension ??= senderLocation.dimension ?? overworld;

        const PID = GetPID();
        const __FlashPlayer__ =
            world.scoreboard.getObjective('##FlashPlayer##');

        const SimulatedPlayer: SimulatedPlayer = nameTag
            ? spawnSimulatedPlayerByNameTag(location, dimension, nameTag)
            : spawnSimulatedPlayer(location, dimension, PID);

        simulatedPlayers[PID] = SimulatedPlayer;
        simulatedPlayers[SimulatedPlayer.id] = PID;

        spawnedEvent.trigger({ spawnedSimulatedPlayer: SimulatedPlayer, PID });
        __FlashPlayer__.setScore(SimulatedPlayer.id, PID);
    }
);

// 捕获命令参数数量错误并提示
chatSpawnCommand.register(({ args, entity }) => {
    entity?.sendMessage('[模拟玩家] 命令错误，期待三个坐标数字，得到个数为' + args.length);
});

commandManager.registerCommand(['假人生成', '假人创建', 'ffpp'], chatSpawnCommand);

// world.afterEvents.chatSend.subscribe(({message, sender})=>{
//     const cmdArgs = CommandRegistry.parse(message)
//     if(commandRegistry.commandsList.has(cmdArgs[0]))
//         commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})

//     if(message==='showshowway'){
//         sender.sendMessage(commandRegistry.showList().toString())
//     }
// })

// console.error('[假人]内置插件chatSpawn加载成功')