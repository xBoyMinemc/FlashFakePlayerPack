import { world } from '@minecraft/server'

import '@/features'

import {playerReady} from "@/features/events/player-ready";
import { simulatedPlayerManager } from '@/core/simulated-player';
import { gameTestManager } from '@/core/gametest/manager';


gameTestManager.ready.then(test => {
    simulatedPlayerManager.test = test;
    console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
});
gameTestManager.registerTest();

world.afterEvents.worldLoad.subscribe(() => {
    simulatedPlayerManager.initialize();
    gameTestManager.initialize();
});

playerReady.subscribe(async () => {
    await gameTestManager.ready;
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
});
