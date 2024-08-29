import { system } from '@minecraft/server';
import { register } from '@minecraft/server-gametest';
import verify from '../lib/xboyPackage/scoreBase/verifyDataBase';
import EventSignal from '../lib/xboyEvents/EventSignal';
import { SIGN } from '../lib/xboyPackage/YumeSignEnum';
import { world } from '@minecraft/server';
import { playerMove } from "../lib/xboyEvents/move";
if (!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x: 1, y: 1, z: 1 }).saveToWorld();
const overworld = world.getDimension('overworld');
const tickWaitTimes = 20 * 60 * 60 * 24 * 365;
export const SimulatedPlayerEnum = {};
let randomTickSpeed = 1;
let doDayLightCycle = true;
let doMobSpawning = true;
let spawnSimulatedPlayer;
let testWorldLocation;
const GetPID = () => world.scoreboard.getObjective('##FlashPlayer##').addScore('##currentPID', 1);
export const initialized = new EventSignal();
export const spawned = new EventSignal();
register('我是云梦', '假人', (test) => {
    testWorldLocation = test.worldBlockLocation({ x: 0, y: 0, z: 0 });
    testWorldLocation["worldBlockLocation"] = (v3) => test.worldBlockLocation(v3);
    world.gameRules.randomTickSpeed = randomTickSpeed;
    world.gameRules.doDayLightCycle = doDayLightCycle;
    world.gameRules.doMobSpawning = doMobSpawning;
    spawnSimulatedPlayer = (location, dimension, pid) => {
        const SimulatedPlayer = test.spawnSimulatedPlayer({ x: 0, y: 8, z: 0 }, `工具人-${pid}`);
        SimulatedPlayer.addTag('init');
        SimulatedPlayer.addTag(SIGN.YUME_SIM_SIGN);
        SimulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN);
        SimulatedPlayer.setSpawnPoint({ ...location, dimension });
        SimulatedPlayer.teleport(location, { dimension });
        return SimulatedPlayer;
    };
    initialized.trigger(null);
    playerMove.unsubscribe(init);
    console.warn('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
})
    .maxTicks(tickWaitTimes)
    .structureName('xboyMinemcSIM:void');
initialized.subscribe(() => console.error('[模拟玩家]初始化完毕，开始加载内置插件'));
initialized.subscribe(() => [
    'chatSpawn',
    'command',
    'breakBlock',
    'youAreMine',
    'help',
    'task',
    'gui',
    'autoFishing',
    'killedBySimPlayer',
    'setting',
].forEach(name => import('./plugins/' + name)
    .then(() => console.error('[模拟玩家] ' + name + '模块初始化结束'))
    .catch((reason) => console.error('[模拟玩家] ' + name + ' 模块初始化错误 ERROR:' + reason))));
export { spawnSimulatedPlayer, testWorldLocation, GetPID };
let initCounter = 100;
async function init() {
    if (--initCounter % 20 !== 0)
        return;
    if (initCounter < 0) {
        world.sendMessage('[模拟玩家] 初始化失败' + initCounter / 20 + '次，尝试在控制台输入/reload');
        console.error('[模拟玩家] 初始化失败' + initCounter / 20 + '次，尝试在控制台输入/reload');
    }
    verify();
    verify();
    randomTickSpeed = world.gameRules.randomTickSpeed;
    doDayLightCycle = world.gameRules.doDayLightCycle;
    doMobSpawning = world.gameRules.doMobSpawning;
    const z = Math.floor(Math.random() * 114514);
    system.run(() => {
        overworld.runCommandAsync('execute positioned 30000000 128 ' + z + ' run gametest run 我是云梦:假人').catch(() => 0);
    });
}
playerMove.subscribe(init);
