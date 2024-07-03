import { register } from '@minecraft/server-gametest';
import verify from '../lib/xboyPackage/scoreBase/verifyDataBase';
import EventSignal from '../lib/xboyEvents/EventSignal';
import { SIGN } from '../lib/xboyPackage/YumeSignEnum';
import { world, system } from '@minecraft/server';
import './plugins/noFlashDoor';
import './plugins/chatSpawn';
import './plugins/command';
import './plugins/breakBlock';
import './plugins/youAreMine';
import './plugins/help';
import './plugins/task';
import './plugins/gui';
import './plugins/autoFishing';
import './plugins/killedBySimPlayer';
import './plugins/setting';
import { playerMove } from "../lib/xboyEvents/move";
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
    testWorldLocation["worldBlockLocation"] = (v3) => {
        return test.worldBlockLocation(v3);
    };
    world.gameRules.randomTickSpeed = randomTickSpeed;
    world.gameRules.doDayLightCycle = doDayLightCycle;
    world.gameRules.doMobSpawning = doMobSpawning;
    spawnSimulatedPlayer = (location, dimension, pid) => {
        const SimulatedPlayer = test.spawnSimulatedPlayer({ x: 0, y: 8, z: 0 }, `工具人-${pid}`);
        SimulatedPlayer.addTag('init');
        SimulatedPlayer.addTag(SIGN.YUME_SIM_SIGN);
        SimulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN);
        SimulatedPlayer.setSpawnPoint({ ...location, "dimension": overworld });
        SimulatedPlayer.teleport(location, { dimension });
        return SimulatedPlayer;
    };
    console.error('[假人] init一次');
})
    .maxTicks(tickWaitTimes)
    .structureName('xboyMinemcSIM:void');
initialized.subscribe(() => console.error('[模拟玩家]初始化完毕，开始加载内置插件'));
export { spawnSimulatedPlayer, testWorldLocation, GetPID };
export default spawnSimulatedPlayer;
let initCounter = 5;
function init() {
    if (--initCounter < 0) {
        world.sendMessage('[模拟玩家] 初始化失败' + initCounter + '次，尝试在控制台输入/reload');
        console.error('[模拟玩家] 初始化失败' + initCounter + '次，尝试在控制台输入/reload');
    }
    const players = world.getAllPlayers();
    if (players.length === 0)
        return '略略略';
    const player = players[0];
    const { x, y, z } = player.location;
    const dimension = player.dimension;
    const ceykTry = dimension.spawnEntity('yumecraft:ceyk', { x, y: dimension.heightRange.max, z });
    ceykTry.nameTag = 'try';
    system.run(() => {
        ceykTry.teleport({ x: 30000000, y: (overworld.heightRange.max - 1), z: 0 });
        system.run(() => {
            console.error('[模拟玩家] 初始化检查开始');
            const ceykList = overworld.getEntities({ type: 'yumecraft:ceyk', tags: ['init'] });
            if (ceykList.length === 0) {
                world.sendMessage('[模拟玩家] 第一次初始化');
                world.sendMessage('[模拟玩家] 直接输入“假人创建”或“假人帮助”');
                const ceyk = overworld.spawnEntity('yumecraft:ceyk', { x: 30000000, y: 128, z: 0 });
                ceyk.addTag('init');
                ceykList.push(ceyk);
            }
            else
                while (ceykList.length > 1)
                    ceykList.pop().triggerEvent('yumecraft:despawn');
            ceykList[0].teleport({ x: 30000000, y: 128, z: 0 }, { dimension: overworld });
            overworld.getEntities({
                type: 'yumecraft:ceyk',
                excludeTags: ['init']
            }).forEach(e => e.triggerEvent('yumecraft:despawn'));
            verify();
            verify();
            randomTickSpeed = world.gameRules.randomTickSpeed;
            doDayLightCycle = world.gameRules.doDayLightCycle;
            doMobSpawning = world.gameRules.doMobSpawning;
            overworld.runCommand('fill 29999997 0 5 30000002 ' + (overworld.heightRange.max - 1) + ' -1 air replace');
            overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人');
            initialized.trigger(null);
            playerMove.unsubscribe(init);
            console.error('[模拟玩家] 初始化检查完成');
        });
    });
}
playerMove.subscribe(init);
