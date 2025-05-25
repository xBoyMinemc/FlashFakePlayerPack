import { gameTestManager } from '@/core/gametest';
import { simulatedPlayerManager } from '@/core/simulated-player';
import { world } from '@minecraft/server';
import { playerReady } from './player-ready';

simulatedPlayerManager.initialize();

try {
    const test = await gameTestManager.initialize();
    simulatedPlayerManager.test = test;
} catch (e) {
    world.sendMessage('[模拟玩家] 报错了，我也不知道为什么' + e);
    throw e;
}

console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');

await playerReady;
world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
