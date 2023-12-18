import { register } from '@minecraft/server-gametest';
import verify from '../lib/xboyPackage/scoreBase/verifyDataBase';
import ScoreBase from '../lib/xboyPackage/scoreBase/rw';
import EventSignal from '../lib/xboyEvents/EventSignal';
import { SIGN } from '../lib/xboyPackage/YumeSignEnum';
import { system } from '@minecraft/server';
import './plugins/noFlashDoor';
const overworld = world.getDimension('overworld');
const tickWaitTimes = 20 * 60 * 60 * 24 * 365;
export const SimulatedPlayerEnum = {};
let spawnSimulatedPlayer;
let testWorldLocation;
const GetPID = () => {
    const __FlashPlayer__ = ScoreBase.GetObject('##FlashPlayer##');
    const value = ScoreBase.GetPoints(__FlashPlayer__, '##currentPID');
    __FlashPlayer__.setScore('##currentPID', value + 1);
    return value;
};
export const initialized = new EventSignal();
export const spawned = new EventSignal();
register('我是云梦', '假人', (test) => {
    testWorldLocation = test.worldLocation({ x: 0, y: 0, z: 0 });
    overworld.runCommand('gamerule domobspawning true');
    ;
    ;
    ;
    "凑活解决生物生成被禁用的问题";
    ;
    ;
    overworld.runCommand('gamerule dodaylightcycle true');
    ;
    ;
    ;
    "凑活解决游戏内时间停止问题";
    ;
    ;
    overworld.runCommand('gamerule randomtickspeed 1');
    ;
    ;
    ;
    "凑活解决tick因为gametest而设定为0的问题";
    ;
    ;
    spawnSimulatedPlayer = (location, dimension, pid) => {
        const SimulatedPlayer = test.spawnSimulatedPlayer({ x: 0, y: 2, z: 0 }, `工具人-${pid}`);
        SimulatedPlayer.addTag('init');
        SimulatedPlayer.addTag(SIGN.YUME_SIM_SIGN);
        SimulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN);
        SimulatedPlayer.setSpawnPoint({ ...location, dimension });
        SimulatedPlayer.teleport(location, { dimension });
        return SimulatedPlayer;
    };
    console.error('[假人] init一次');
})
    .maxTicks(tickWaitTimes)
    .structureName('xboyMinemcSIM:void');
initialized.subscribe(() => console.error('[假人]初始化完毕，开始加载内置插件'));
initialized.subscribe(() => [
    'chatSpawn',
    'command',
    'breakBlock',
    'youAreMine',
    'help',
    'task',
    'gui',
    'autoFishing',
].forEach(name => import('./plugins/' + name)
    .then(() => console.error('[模拟玩家] ' + name + '模块初始化结束'))
    .catch((reason) => console.error('[模拟玩家] ' + name + ' 模块初始化错误 ERROR:' + reason))));
export { spawnSimulatedPlayer, testWorldLocation, GetPID };
export default spawnSimulatedPlayer;
let initCounter = 5;
function init() {
    if (--initCounter < 0) {
        world.sendMessage('[模拟玩家] 初始化失败，尝试输入reload' + initCounter);
    }
    const players = world.getAllPlayers();
    if (players.length === 0)
        return;
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
            overworld.runCommand('fill 29999997 0 5 30000002 ' + (overworld.heightRange.max - 1) + ' -1 air replace');
            overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人');
            initialized.trigger(null);
            world.events.playerMove.unsubscribe(init);
            console.error('[模拟玩家] 初始化检查完成');
        });
    });
}
world.events.playerMove.subscribe(init);
const reload = () => {
    init();
};
