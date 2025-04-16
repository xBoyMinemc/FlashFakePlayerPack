import { world } from '@minecraft/server'

import './features'

import {playerMove} from "./lib/xboyEvents/move";
import './triggers'
import { SimulatedPlayerManager } from './core/simulated-player';
import { TestManager } from './core/test/manager';

export const simulatedPlayerManager=new SimulatedPlayerManager();

export const testManager = new TestManager()
testManager.onRegistered(()=>{
    simulatedPlayerManager.test=testManager.test
})
testManager.registerTest();

world.afterEvents.worldLoad.subscribe(()=>{
    simulatedPlayerManager.initialize();
})

const broadcast = () => {
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
    playerMove.unsubscribe(broadcast);
};
playerMove.subscribe(broadcast);
