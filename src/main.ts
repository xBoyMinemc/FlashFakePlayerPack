import type { Test } from '@minecraft/server-gametest'
import { Vector3 } from '@minecraft/server';
import { register } from '@minecraft/server-gametest'
import { world } from '@minecraft/server'

import './features'

import {playerMove} from "./lib/xboyEvents/move";
import './triggers'
import { SimulatedPlayerManager } from './core/simulated-player';

const maxTicks = 20*60*60*24*365

const { randomTickSpeed, doDayLightCycle, doMobSpawning } = world.gameRules;

world.sendMessage('[模拟玩家] 随机刻->' + randomTickSpeed + '时间->' + doDayLightCycle + '生物生成->' + doMobSpawning);
//  ?

export let testWorldLocation : Vector3


if(!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x:1, y:1, z:1 }).saveToWorld()

register('我是云梦', '假人', (test:Test) => {
    testWorldLocation = test.worldBlockLocation({ x:0, y:0, z:0 })

    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    simulatedPlayerManager.test = test

    console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
})
.maxTicks(maxTicks)
.structureName('xboyMinemcSIM:void');

export const simulatedPlayerManager=new SimulatedPlayerManager();

world.afterEvents.worldLoad.subscribe(()=>{
    simulatedPlayerManager.initialize();
})

const broadcast = () => {
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
    playerMove.unsubscribe(broadcast);
};
playerMove.subscribe(broadcast);
