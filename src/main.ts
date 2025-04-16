import type { Test } from '@minecraft/server-gametest'
import { Vector3 } from '@minecraft/server';
import { register } from '@minecraft/server-gametest'
import { world } from '@minecraft/server'

// import './plugins/noFlashDoor' // pig

import './features'

import {playerMove} from "./lib/xboyEvents/move";
import './triggers'
import { SimulatedPlayerManager } from './core/simulated-player';

const tickWaitTimes = 20*60*60*24*365

let randomTickSpeed = 1
let doDayLightCycle = true
let doMobSpawning = true

{

    randomTickSpeed = world.gameRules.randomTickSpeed
    doDayLightCycle = world.gameRules.doDayLightCycle
    doMobSpawning   = world.gameRules.doMobSpawning

    world.sendMessage('[模拟玩家] 随机刻->'+randomTickSpeed+'时间->'+doDayLightCycle+'生物生成->'+doMobSpawning)
}
//  ?

let testWorldLocation : Vector3


if(!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x:1, y:1, z:1 }).saveToWorld()

register('我是云梦', '假人', (test:Test) => {
    testWorldLocation = test.worldBlockLocation({ x:0, y:0, z:0 })
    testWorldLocation["worldBlockLocation"] = (v3:Vector3)=> test.worldBlockLocation(v3)


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    simulatedPlayerManager.test = test

    console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
})
.maxTicks(tickWaitTimes)
.structureName('xboyMinemcSIM:void');
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)

export const simulatedPlayerManager=new SimulatedPlayerManager();
// @ts-ignore
(world.afterEvents.worldInitialize ?? world.afterEvents['worldLoad']).subscribe(()=>{
    simulatedPlayerManager.initialize();
})

const broadcast = () => {
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
    playerMove.unsubscribe(broadcast);
};
playerMove.subscribe(broadcast);

    // initialized.subscribe(()=> console.error('[模拟玩家]初始化完毕，加载内置插件') )
    // initialized.subscribe(()=>
    // {
    // }
    //     // 'test',
    //     // 'chatSpawn',
    //     // 'command',
    //     // 'breakBlock',
    //     // 'youAreMine',
    //     // 'help',
    //     // 'task',
    //     // 'gui',
    //     // 'autoFishing',
    //     // 'killedBySimPlayer',
    //     // 'setting',
    //     // 'Deja Vu Yan Returns',
    //
    // )

export { testWorldLocation }

