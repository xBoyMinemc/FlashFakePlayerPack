import { world } from '@minecraft/server'

import './features'

import {playerReady} from "./features/events/player-ready";
import './triggers'
import { SimulatedPlayerManager } from './core/simulated-player';
import { GameTestManager } from './core/gametest/manager';

export const simulatedPlayerManager=new SimulatedPlayerManager();

export const testManager = new GameTestManager()
testManager.ready.then(test => {
    simulatedPlayerManager.test = test;
});
testManager.registerTest();

world.afterEvents.worldLoad.subscribe(() => {
    simulatedPlayerManager.initialize();
    testManager.initialize();
});

playerReady.subscribe(async () => {
    await testManager.ready;
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
});
