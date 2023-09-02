import type { World } from "../../@types/globalThis";
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import { spawnSimulatedPlayer,SimulatedPlayerList, pid, spawned as spawnedEvent} from '../main'

declare const world: World


// world.events.blockBreak.subscribe(()=>{
//         // TEST without pid input
//         // taskList.push({location:{x:1,y:1,z:1},dimension:overworld,_pid:pid})
//         const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
//         const SimulatedPlayer :SimulatedPlayer= spawn({x:1,y:1,z:1},overworld,pid)
//         // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
//         __FlashPlayer__.setScore(SimulatedPlayer.id,pid)
//         ++pid
//         // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),)
//         const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')
//         __FlashPlayer__.setScore('##currentPID',pid)
//         // TEST END
// })



world.afterEvents.chatSend.subscribe((event)=>{
    if(event.message!=='假人创建')return;
    // TEST without pid input
    // taskList.push({location:{x:1,y:1,z:1},dimension:overworld,_pid:pid})
    const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
    const SimulatedPlayer :SimulatedPlayer= spawnSimulatedPlayer(event.sender.location,event.sender.dimension,pid)
    spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer})
    // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
    __FlashPlayer__.setScore(SimulatedPlayer.id,pid.value)
    ++pid.value
    // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),)
    const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')
    __FlashPlayer__.setScore('##currentPID',pid.value)
    // TEST END
})

console.error('[假人]内置插件chatSpawn加载成功')