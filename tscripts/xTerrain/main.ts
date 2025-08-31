import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal,
} from '../@types/globalThis'
import { Dimension, LocationOutOfWorldBoundariesError, Player, system, Vector3 } from '@minecraft/server'

import { register } from '@minecraft/server-gametest'

import verify from '../lib/xboyPackage/scoreBase/verifyDataBase'
import EventSignal from '../lib/xboyEvents/EventSignal'

import { SIGN } from '../lib/xboyPackage/YumeSignEnum'
import { world } from '@minecraft/server'

// import './plugins/noFlashDoor' // pig


import './plugins/Backpack2Barrel'
import './plugins/test'
import './plugins/help'

import './plugins/chatSpawn'
import './plugins/command'
import './plugins/breakBlock'
import './plugins/youAreMine'
import './plugins/task'
import './plugins/gui'
import './plugins/autoFishing'
import './plugins/killedBySimPlayer'
// import './plugins/setting'
import './plugins/showCommandsList'
import { playerMove } from "../lib/xboyEvents/move";
import { cannotHandledExceptionWarningText, CommandError, commandManager, getLocationFromEntityLike } from '../lib/yumeCommand/CommandRegistry';
import '../lib/yumeCommand/scriptEventHandler'

const overworld = world.getDimension('overworld')
const tickWaitTimes = 20 * 60 * 60 * 24 * 365
const max_simulatedPlayerCount = 5
// all of SimulatedPlayer List
export const simulatedPlayers = {}

// simulatedPlayers[PID] = simulatedPlayer;
// simulatedPlayers[simulatedPlayer.id] = PID;

export let initSucceed = false

let randomTickSpeed = 1
let doDayLightCycle = true
let doMobSpawning = true

{

    randomTickSpeed = world.gameRules.randomTickSpeed
    doDayLightCycle = world.gameRules.doDayLightCycle
    doMobSpawning = world.gameRules.doMobSpawning

    world.sendMessage('[模拟玩家] 随机刻->' + randomTickSpeed + '时间->' + doDayLightCycle + '生物生成->' + doMobSpawning)
}
//  ?

let spawnSimulatedPlayerByNameTag: (location: Vector3, dimension: Dimension, nameTag: string) => SimulatedPlayer
let testWorldLocation: Vector3
let testWorldDimension: Dimension


if (!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x: 1, y: 1, z: 1 }).saveToWorld()

const GetGlobalPID = () => world.scoreboard.getObjective('##FlashPlayer##').addScore('##currentPID', 1)

// 新增每个玩家的个人假人控制ID
// 使用一个动态属性来管理每个玩家的个人假人控制ID
// 为了一致所以暂不全部迁移到动态属性
const currentPID4EveryPlayer = new Map<string, number>()
const GetCurrentPID4Player = (playerId: string): number | null => {
    const _max_simulatedPlayerCount = GetPlayerSimulatedPlayerCount(playerId)
    if (_max_simulatedPlayerCount <= 0) return null
    const value = currentPID4EveryPlayer.get(playerId) ?? 0

    // 获取此玩家当前可用假人数量
    const valid_CurrentPID_List = []
    for (let i = 1; i <= _max_simulatedPlayerCount; i++) {
        const PID = GetPlayerPID2GlobalPID(playerId, i)
        if (!PID) { valid_CurrentPID_List.push(i); continue }
        if (!simulatedPlayers[PID]?.isValid) { valid_CurrentPID_List.push(i); continue }
    }


    if (valid_CurrentPID_List.length <= 0) return null
    return currentPID4EveryPlayer.set(playerId, value + 1).get(playerId)
}
// 将这个这个每次重启游戏重置为1的玩家假人PID和全局递增PID挂钩并且存储在动态属性以供持久化假人信息
// 每次玩家请求一个假人都会分配一个玩家个人假人PID
// 如果查询到这个玩家的个人假人PID和全局挂钩则将此个人假人PID指向此全局PID以关联持久化信息
// 否则获取一个新的全局PID关联到此假人并且存储到动态属性
// simulatedPlayers中依旧使用全局PID
function SetPlayerPID2GlobalPID(playerId: string, CurrentPID4Player: number, GlobalPID: number) {
    // const ex = {
    //     "-56789": {
    //         "GlobalPID": 1234567890
    //     }
    // }
    // 苦一苦存储，骂名我来担
    let data = <string>world.getDynamicProperty("info4EveryPlayer_" + playerId) ?? "{}"
    const dataObject = JSON.parse(data)
    if (!dataObject[CurrentPID4Player])
        dataObject[CurrentPID4Player] = {}
    dataObject[CurrentPID4Player]["GlobalPID"] = GlobalPID
    data = JSON.stringify(dataObject)
    world.setDynamicProperty("info4EveryPlayer_" + playerId, data)
}
const GetPlayerPID2GlobalPID = (playerId: string, CurrentPID4Player: number): number => {
    const data = <string>world.getDynamicProperty("info4EveryPlayer_" + playerId) ?? "{}"
    const dataObject = JSON.parse(data)
    let GlobalPID = dataObject?.[CurrentPID4Player]?.GlobalPID
    if (!GlobalPID)
        SetPlayerPID2GlobalPID(playerId, CurrentPID4Player, GlobalPID = GetGlobalPID())
    return GlobalPID as number
}

// 每个玩家享受单独的假人限额
const GetPlayerSimulatedPlayerCount = (playerId: string): number => {
    const data = <string>world.getDynamicProperty("info4EveryPlayer_" + playerId) ?? "{}"
    const dataObject = JSON.parse(data)
    let _max_simulatedPlayerCount = dataObject?._max_simulatedPlayerCount
    if (!_max_simulatedPlayerCount) {
        _max_simulatedPlayerCount = max_simulatedPlayerCount
        SetPlayerSimulatedPlayerCount(playerId, _max_simulatedPlayerCount)
        world.sendMessage('[模拟玩家] 每个玩家享受单独的假人限额: ' + _max_simulatedPlayerCount)
    }
    return _max_simulatedPlayerCount as number
}

const SetPlayerSimulatedPlayerCount = (playerId: string, count: number) => {
    let data = <string>world.getDynamicProperty("info4EveryPlayer_" + playerId) ?? "{}"
    const dataObject = JSON.parse(data)
    dataObject._max_simulatedPlayerCount = count
    data = JSON.stringify(dataObject)
    world.setDynamicProperty("info4EveryPlayer_" + playerId, data)
}



export const initialized: initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned: spawnedEventSignal = new EventSignal<spawnedEvent>()

register('我是云梦', '假人', (test: Test) => {
    testWorldLocation = test.worldBlockLocation({ x: 0, y: 0, z: 0 })
    testWorldLocation["worldBlockLocation"] = (v3: Vector3) => test.worldBlockLocation(v3)


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    spawnSimulatedPlayerByNameTag = (location: Vector3, dimension: Dimension, nameTag: string): SimulatedPlayer => {

        // 是的，这个nameTag在这里实际先被作为name
        const simulatedPlayer = test.spawnSimulatedPlayer({ x: 0, y: 8, z: 0 }, nameTag)
        simulatedPlayer.addTag('Backpack2Barrel_init')
        simulatedPlayer.addTag(SIGN.YUME_SIM_SIGN)
        simulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN)
        try {
            //@ts-ignore
            simulatedPlayer.setSpawnPoint({ ...location, dimension })
            //@ts-ignore
            simulatedPlayer.teleport(location, { dimension })
        } catch (e) {
            if (e instanceof LocationOutOfWorldBoundariesError) {
                console.warn('[模拟玩家] 有东西尝试在非法位置生成假人，已阻止');
                simulatedPlayer.disconnect();
            } else {
                throw e;
            }
        }

        return simulatedPlayer
    }

    initialized.trigger(null)
    initSucceed = true
    console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
})
    .maxTicks(tickWaitTimes)
    .structureName('xboyMinemcSIM:void');
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)

// 记分板PID初始化 写的烂 执行两次
verify()
verify()

let z = 11451400 + Math.floor(Math.random() * 114514 * 19)
z -= z % 16
system.run(() => {
    try {
        overworld.runCommand('execute positioned 15000000 256 ' + z + ' run gametest run 我是云梦:假人');
        testWorldDimension = overworld
    } catch (e) {
        world.sendMessage('[模拟玩家] 报错了，我也不知道为什么' + e);
    }
});


let say = false
playerMove.subscribe(() => {
    if (say) return
    say = true
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
    //添加第二行提示
    world.sendMessage('[模拟玩家] 输入“假人帮助”以获取使用说明')
})


world.beforeEvents.chatSend.subscribe(({ message, sender }) => {
    system.run(() => {
        try {
            commandManager.execute(message, {
                entity: sender,
                isEntity: true,
                location: getLocationFromEntityLike(sender)
            });
        } catch (e) {
            if (!(e instanceof CommandError)) {
                console.error(e);
                world.sendMessage(cannotHandledExceptionWarningText);
            }
        }
    });
});

export { spawnSimulatedPlayerByNameTag, testWorldLocation, testWorldDimension, GetGlobalPID, GetCurrentPID4Player, GetPlayerPID2GlobalPID }

