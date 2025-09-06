import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal,
} from '../@types/globalThis'
import { Dimension, LocationOutOfWorldBoundariesError, system, Vector3 } from '@minecraft/server'

import { register } from '@minecraft/server-gametest'

import verify from '../lib/xboyPackage/scoreBase/verifyDataBase'
import EventSignal from '../lib/xboyEvents/EventSignal'

import { SIGN } from '../lib/xboyPackage/YumeSignEnum'
import { world } from '@minecraft/server'

// import './plugins/noFlashDoor' // pig
// THIS IS A SHIT!!! MEI YOU ZHI YI!!!

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
import './plugins/limitSimplayerNum'
// import './plugins/setting'
import './plugins/showCommandsList'
import { playerMove } from "../lib/xboyEvents/move";
import { cannotHandledExceptionWarningText, CommandError, commandManager, getLocationFromEntityLike } from '../lib/yumeCommand/CommandRegistry';
import '../lib/yumeCommand/scriptEventHandler'

const overworld = world.getDimension('overworld')
const tickWaitTimes = 20 * 60 * 60 * 24 * 365
// const max_simulatedPlayerCount = 5
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
let spawnSimulatedPlayer : (location:Vector3, dimension:Dimension, pid: number  )=>SimulatedPlayer
let testWorldLocation: Vector3
let testWorldDimension: Dimension

let currentPID = 0
const GetPID = ()=> ++currentPID

if (!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x: 1, y: 1, z: 1 }).saveToWorld()

export const initialized: initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned: spawnedEventSignal = new EventSignal<spawnedEvent>()

register('我是云梦', '假人', (test: Test) => {
    testWorldLocation = test.worldBlockLocation({ x: 0, y: 0, z: 0 })
    testWorldLocation["worldBlockLocation"] = (v3: Vector3) => test.worldBlockLocation(v3)


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{
        return spawnSimulatedPlayerByNameTag(location, dimension, `工具人-${pid}`)
    }
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

export { spawnSimulatedPlayerByNameTag, spawnSimulatedPlayer, testWorldLocation, testWorldDimension, currentPID, GetPID }

