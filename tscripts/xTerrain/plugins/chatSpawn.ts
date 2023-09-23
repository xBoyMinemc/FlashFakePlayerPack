import type { World } from "../../@types/globalThis";
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {spawnSimulatedPlayer, SimulatedPlayerList, spawned as spawnedEvent, GetPID} from '../main'

declare const world: World

world.afterEvents.chatSend.subscribe((event)=>{
    if(event.message!=='假人创建')return;
    // TEST without pid input

    const PID = GetPID()
    const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
    const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(event.sender.location,event.sender.dimension,PID)

    SimulatedPlayerList[PID]=SimulatedPlayer

    spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
    // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
    __FlashPlayer__.setScore(SimulatedPlayer.id,PID)

    // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),)
    // const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')

    // TEST END
})

console.error('[假人]内置插件chatSpawn加载成功')