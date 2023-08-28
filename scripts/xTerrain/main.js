import verif from './verifyDataBase';
const yumeSign = "#yumeSimSign#";
;
;
"假人标签";
;
const overworld = world.getDimension('overworld');
const tickWaitTimes = 20 * 60 * 60 * 24 * 365;
const yume = ({ x, y, z }, { x: a, y: b, z: c }) => Math.sqrt((x - a) ** 2 + (y - b) ** 2 + (z - c) ** 2);
const taskList = [];
const SimulatedPlayerList = [];
let spawn;
let testWorldLocation;
let pid = 1;
import { register } from "@minecraft/server-gametest";
import ScoreBase from '../lib/xboyPackage/scoreBase/rw';
register("我是云梦", "假人", (test) => {
    testWorldLocation = test.worldLocation;
    overworld.runCommandAsync('gamerule domobspawning true');
    ;
    ;
    ;
    "凑活解决刷怪问题";
    ;
    ;
    overworld.runCommandAsync('gamerule dodaylightcycle true');
    ;
    ;
    ;
    "凑活解决时间问题";
    ;
    ;
    overworld.runCommandAsync('gamerule randomtickspeed 1');
    ;
    ;
    ;
    "凑活解决tick问题";
    ;
    ;
    spawn = (location, dimension, _pid = 0) => {
        const y2 = { x: 0, y: 2, z: 0 };
        overworld.runCommand('me _pid' + _pid);
        location.dimension = dimension;
        const SimulatedPlayer = test.spawnSimulatedPlayer(y2, `工具人-${_pid ? _pid : pid++}`);
        SimulatedPlayer.addTag('init');
        SimulatedPlayer.addTag(yumeSign);
        SimulatedPlayer.setSpawnPoint(location);
        SimulatedPlayer.teleport(location, { dimension });
        SimulatedPlayerList.push(SimulatedPlayer);
        return SimulatedPlayer;
    };
})
    .maxTicks(tickWaitTimes)
    .structureName("xboyMinemcSIM:void");
export default spawn;
function init() {
    const players = world.getAllPlayers();
    if (players.length === 0)
        return;
    world.events.tick.unsubscribe(init);
    const { location, dimension } = players[0];
    const ceykList = overworld.getEntities({ type: 'yumecraft:ceyk', tags: ['init'] });
    overworld.runCommand('me ceykList.length' + ceykList.length);
    while (ceykList.length > 1)
        ceykList.pop().triggerEvent('yumecraft:despawn');
    if (ceykList.length === 0) {
        const ceyk = dimension.spawnEntity('yumecraft:ceyk', location);
        ceyk.addTag('init');
        ceyk.teleport({ x: 30000000, y: 128, z: 0 }, { dimension: overworld });
        overworld.runCommand('me ' + overworld.getEntities({ type: 'yumecraft:ceyk', tags: ['init'] }).length);
    }
    const ceyk = overworld.getEntities({ type: 'yumecraft:ceyk', tags: ['init'] })[0];
    ceyk.teleport({ x: 30000000, y: 128, z: 0 }, { dimension: overworld });
    verif();
    verif();
    pid = ScoreBase.GetPoints(ScoreBase.GetObject('##FlashPlayer##'), '##currentPID');
    overworld.runCommand('fill 29999997 0 5 30000002 319 -1 air replace');
    overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人');
}
world.events.tick.subscribe(init);
world.events.blockBreak.subscribe(() => {
    const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##');
    const SimulatedPlayer = spawn({ x: 1, y: 1, z: 1 }, overworld, pid);
    __FlashPlayer__.setScore(SimulatedPlayer.id, pid);
    ++pid;
    const pidParticipant = __FlashPlayer__.getParticipants().find(P => P.displayName === '##currentPID');
    __FlashPlayer__.setScore('##currentPID', pid);
});
const ture = true;
const flase = false;
const xboySimCmdHead = "假人";
;
;
" 命令头 ";
;
const 挖掘标识符 = "挖掘标识符";
const 攻击标识符 = "攻击标识符";
const 自动攻击标识符 = "自动攻击标识符";
const 自动追击标识符 = "自动追击标识符";
const 跳跃标识符 = "跳跃标识符";
const 自动重生标识符 = "自动重生标识符";
const 寻路标识符 = "寻路标识符";
function 获取眼前的假人实体(逻辑主体, 距离) {
    const 最远距离 = { maxDistance: 距离 };
    const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);
    return 实体们.find(({ entity: 实体 }) => 实体.hasTag(yumeSign))?.entity;
    ;
    "只返回一个假人";
    ;
}
;
world.afterEvents.chatSend.subscribe(event => {
    const { message, sender } = event;
    const 发起者 = sender;
    let 消息 = message;
    let x = +(发起者.location.x - 0.5).toFixed(0);
    let y = +发起者.location.y.toFixed(0);
    let z = +(发起者.location.z - 0.5).toFixed(0);
    if (消息.startsWith(xboySimCmdHead) === false)
        return "好shit,迟早给你干烂";
    消息 = 消息.replace(xboySimCmdHead, '');
    const 眼前的工具人 = 获取眼前的假人实体(发起者, 16);
    const TagsManager = (xboy) => (minemc) => (need) => (add) => (remove) => xboy === need ? (add.length ? add.forEach(t => minemc.addTag(t)) : 0, remove.length ? remove.forEach(t => minemc.removeTag(t)) : 0) : 0;
    const xboy = TagsManager(消息)(眼前的工具人);
    xboy("攻击")([攻击标识符])([自动攻击标识符, 挖掘标识符]);
    xboy("自动攻击")([自动攻击标识符])([攻击标识符, 挖掘标识符]);
    xboy("开始跳跃")([跳跃标识符])([]);
    xboy("结束跳跃")([])([跳跃标识符]);
    xboy("自动追击")([自动追击标识符, 自动攻击标识符])([]);
    xboy("停止")([])([攻击标识符, 自动攻击标识符, 跳跃标识符, 挖掘标识符]);
    xboy("开摆")([])([攻击标识符, 自动攻击标识符, 跳跃标识符, 挖掘标识符]);
    xboy("自动重生")([自动重生标识符])([]);
});
