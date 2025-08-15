import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal,
} from '../@types/globalThis'
import {Dimension, LocationOutOfWorldBoundariesError, system, Vector3, World} from '@minecraft/server'

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
import './plugins/setting'
import './plugins/showCommandsList'
import './plugins/clearSimulatedPlayers'
import {playerMove} from "../lib/xboyEvents/move";
import { cannotHandledExceptionWarningText, CommandError, commandManager, getLocationFromEntityLike } from '../lib/yumeCommand/CommandRegistry';
import '../lib/yumeCommand/scriptEventHandler'

const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365
// all of SimulatedPlayer List
// const simulatedPlayers: {[number]: SimulatedPlayer, [string]: SimulatedPlayer} = {};

type SimulatedPlayerListElement = {
    player: SimulatedPlayer,
    pid: number,
    uuid: string
};
class SimulatedPlayerList {
    private list = new WhatCanIWriteOnThereSet();

    append(simulatedPlayer: SimulatedPlayer, pid: number, uuid?: string) {
        this.list.add({
            player: simulatedPlayer,
            pid,
            uuid: uuid ?? simulatedPlayer.id
        });
        this.onChange();
    }

    removeByPID(pid: number) {
        for (const item of this.list) {
            if (item.pid === pid) {
                this.list.delete(item);
                return;
            }
        }
        this.onChange();
    }

    removeByUUID(uuid: string) {
        for (const item of this.list) {
            if (item.uuid === uuid) {
                this.list.delete(item);
                return;
            }
        }
        this.onChange();
    }

    onChange() {
        //                                             ↓ 防止注入攻击(真的有人会注入这玩意吗？)
        simulatedPlayers = new WhatCanIWriteOnThereSet(Array.from(this.list));
    }
}
class WhatCanIWriteOnThereSet extends Set<SimulatedPlayerListElement> {
    getByPID(pid: number): SimulatedPlayerListElement["player"] | undefined {
        for (const item of this) {
            if (item.pid === pid) {
                return item.player;
            }
        }
        return undefined;
    }

    getByUUID(uuid: string): SimulatedPlayerListElement["player"] | undefined {
        for (const item of this) {
            if (item.uuid === uuid) {
                return item.player;
            }
        }
        return undefined;
    }

    getPIDList(): number[] {
        const pidList: number[] = [];
        for (const item of this) {
            pidList.push(item.pid);
        }
        return pidList;
    }

    getUUIDList(): string[] {
        const uuidList: string[] = [];
        for (const item of this) {
            uuidList.push(item.uuid);
        }
        return uuidList;
    }
}

/**
 * @example
 * ```ts
 * import { simulatedPlayers } from 'main'
 *
 * // 获取假人数量
 * console.log(simulatedPlayers.size)
 *
 * // 从PID获取假人
 * const simulatedPlayer = simulatedPlayers.getByPID(123);
 *
 * // 从实体ID获取假人
 * const simulatedPlayer = simulatedPlayers.getByUUID('123-456-789');
 * ```
 */
export let simulatedPlayers: Readonly<WhatCanIWriteOnThereSet> = new WhatCanIWriteOnThereSet();
const simulatedPlayersInstance = new SimulatedPlayerList();

// simulatedPlayers[PID] = simulatedPlayer;
// simulatedPlayers[simulatedPlayer.id] = PID;

export let initSucceed = false


let randomTickSpeed = 1
let doDayLightCycle = true
let doMobSpawning = true

{

    randomTickSpeed = world.gameRules.randomTickSpeed
    doDayLightCycle = world.gameRules.doDayLightCycle
    doMobSpawning   = world.gameRules.doMobSpawning

    world.sendMessage('[模拟玩家] 随机刻->'+randomTickSpeed+'时间->'+doDayLightCycle+'生物生成->'+doMobSpawning)
}
//  ?

let spawnSimulatedPlayer : (location:Vector3, dimension:Dimension, pid: number  )=>SimulatedPlayer
let spawnSimulatedPlayerByNameTag : (location:Vector3, dimension:Dimension, nameTag: string  )=>SimulatedPlayer
let testWorldLocation : Vector3
let testWorldDimension : Dimension


if(!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x:1, y:1, z:1 }).saveToWorld()

let currentPID = 0
const GetPID = ()=> ++currentPID


export const initialized : initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned : spawnedEventSignal = new EventSignal<spawnedEvent>()

register('我是云梦', '假人', (test:Test) => {
    testWorldLocation = test.worldBlockLocation({ x:0, y:0, z:0 })
    testWorldLocation["worldBlockLocation"] = (v3:Vector3)=> test.worldBlockLocation(v3)


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{
        return spawnSimulatedPlayerByNameTag(location, dimension, `工具人-${pid}`)
    }
    spawnSimulatedPlayerByNameTag = (location:Vector3, dimension:Dimension, nameTag: string ):SimulatedPlayer=>{

        const simulatedPlayer = test.spawnSimulatedPlayer({ x:0, y:8, z:0 }, nameTag)
        const PID = GetPID()
        simulatedPlayer.addTag('Backpack2Barrel_init')
        simulatedPlayer.addTag(SIGN.YUME_SIM_SIGN)
        simulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN)

        simulatedPlayersInstance.append(simulatedPlayer, PID, simulatedPlayer.id);
        try {
            //@ts-ignore
            simulatedPlayer.setSpawnPoint({...location, dimension})
            //@ts-ignore
            simulatedPlayer.teleport(location, {dimension})
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

    let z = 11451400 +  Math.floor(Math.random() * 114514 * 19 )
    z -= z%16
    system.run(()=>{
        try {
            overworld.runCommand('execute positioned 15000000 256 ' + z + ' run gametest run 我是云梦:假人');
            testWorldDimension = overworld
        } catch (e) {
            world.sendMessage('[模拟玩家] 报错了，我也不知道为什么' + e);
        }
    });


let say = false
playerMove.subscribe(()=>{
    if (say) return
    say = true
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
})

    // initialized.subscribe(()=> console.error('[模拟玩家]初始化完毕，加载内置插件') )
    // initialized.subscribe(()=>
    // {
    // }
    //     // 'test',
    //     // 'chatSpawn',
    //     // 'command',
    //     // 'breakBlock',
    //     // 'youAreMine',
    //     // 'help',
    //     // 'task',
    //     // 'gui',
    //     // 'autoFishing',
    //     // 'killedBySimPlayer',
    //     // 'setting',
    //     // 'Deja Vu Yan Returns',
    //     // '鱼肉 ‭‭‭⁧⁧⁧~咕噜咕噜',
    //
    // )

type abaaba = Parameters<World["beforeEvents"]["chatSend"]["subscribe"]>[0];
const listeningChatMessagesCallbacks = new Set<abaaba>();
export function listenChatMessage(callback: abaaba): void {
    world.beforeEvents.chatSend.subscribe(arg => callback(arg));
    listeningChatMessagesCallbacks.add(callback);
}
export function unlistenChatMessage(callback: abaaba): void {
    world.beforeEvents.chatSend.unsubscribe(callback);
    listeningChatMessagesCallbacks.delete(callback);
}

listenChatMessage(({message, sender}) => {
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

export { spawnSimulatedPlayer,spawnSimulatedPlayerByNameTag,testWorldLocation,testWorldDimension,GetPID }