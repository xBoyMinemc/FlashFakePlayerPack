import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type { World } from '../@types/globalThis'
import type { Dimension, ScoreboardObjective, Vector3 } from '@minecraft/server';

import verify from './verifyDataBase'

declare const world: World
// declare const BlockLocation: typeof _BlockLocation

const 自动重生标识符 = "自动重生标识符";

const yumeSign = "#yumeSimSign#";                   ;;"假人标签";;
const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365


export const SimulatedPlayerList  = {};
export const BreakBlockSimulatedPlayerList:Set<string> = new Set();
let spawnSimulatedPlayer : (location:Vector3, dimension:Dimension, pid: number  )=>SimulatedPlayer;
let testWorldLocation : Vector3;

const GetPID = ()=>{
    const __FlashPlayer__ = <ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##')

    const value = ScoreBase.GetPoints(__FlashPlayer__,'##currentPID')

    __FlashPlayer__.setScore('##currentPID',value+1)

    return value
}
export const initialized : initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned : spawnedEventSignal = new EventSignal<spawnedEvent>()
// spawned.subscribe(({spawnedSimulatedPlayer})=>{
//         // SimulatedPlayerList.push(spawnedSimulatedPlayer)
// })







import { register } from '@minecraft/server-gametest'
import ScoreBase from '../lib/xboyPackage/scoreBase/rw';
import EventSignal from '../lib/xboyEvents/EventSignal';
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal
} from "../@types/globalThis";
import {CommandRegistry} from "../lib/yumeCommand/CommandRegistry";
import {getSimPlayer} from "../lib/xboyPackage/Util";
import {BlockType, system, Vector} from "@minecraft/server";
// declare const GameTest:  {"register": typeof register}


register("我是云梦", "假人", (test:Test) => {
    testWorldLocation = test.worldLocation({ x:0, y:0, z:0 })

    overworld.runCommand('gamerule domobspawning true');;;; "凑活解决生物生成被禁用的问题";;;
    overworld.runCommand('gamerule dodaylightcycle true');;;; "凑活解决游戏内时间停止问题";;;
    overworld.runCommand('gamerule randomtickspeed 1');;;; "凑活解决tick因为gametest而设定为0的问题";;;

    spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{
        // const y2 = { x: 0, y: 2, z: 0 }
        // overworld.runCommand('me pid=>'+(+pid))
        // const dimensionLocation : DimensionLocation = {...location,dimension}
        const SimulatedPlayer = test.spawnSimulatedPlayer({ x:0, y:2, z:0 }, `工具人-${pid}`)
        SimulatedPlayer.addTag('init')
        SimulatedPlayer.addTag(yumeSign)
        SimulatedPlayer.addTag(自动重生标识符)

        // //for blockLocation
        // const x = (SimulatedPlayer.location.x-0.5)>>0
        // const y =  SimulatedPlayer.location.y>>0
        // const z = (SimulatedPlayer.location.z-0.5)>>0
        // SimulatedPlayer.addTag('#xyz#'+x+'#'+(y-2)+'#'+z)

        // SimulatedPlayer.runCommand("tp @a @s")
        SimulatedPlayer.setSpawnPoint({...location,dimension})
        SimulatedPlayer.teleport(location, { dimension })
        // SimulatedPlayerList.push(SimulatedPlayer)
        return SimulatedPlayer
    }

    // initialized.subscribe(()=> console.error('[假人]初始化完毕，开始加载内置插件') )
    // initialized.subscribe(()=> )
    [
        'test',
        'chatSpawn',
        'command',
        'breakBlock',
        // 'newCommand',
    ].forEach(
        name=> import('./plugins/'+name)
            .then(()=>console.error('[模拟玩家] '+name+'模块初始化结束'))
            .catch((reason) => console.error('[模拟玩家] '+name+' 模块初始化错误 ERROR:' + reason))
    )


    const getCoordinatesFromView = (sim:SimulatedPlayer)=> Vector.subtract(sim.getBlockFromViewDirection({maxDistance:4})?.block.location, {x:30000000,y:128,z:0})

    const v2ray = ({x,y,z})=>({x,y,z})
    const breaks = ()=>{
        BreakBlockSimulatedPlayerList.forEach((simIndex)=> {
            const l = SimulatedPlayerList[simIndex].getBlockFromViewDirection({maxDistance: 4})?.block?.location
            if (l)
                SimulatedPlayerList[simIndex].breakBlock(Vector.subtract(l, testWorldLocation))
        })
        test.runAfterDelay(10,()=>breaks())
    }
    breaks()

    console.error('[假人] init一次')
})
    .maxTicks(tickWaitTimes)
    // .maxTicks(2)
    // .maxAttempts(tickWaitTimes)
    // .requiredSuccessfulAttempts(tickWaitTimes)
    // .padding(0)
    .structureName("xboyMinemcSIM:void")

export {spawnSimulatedPlayer,testWorldLocation,GetPID}
export default spawnSimulatedPlayer

//  # 初始化 init
// how about turn to world.afterEvents.playerSpawn
function init() {
    const players = world.getAllPlayers()
    if (players.length === 0) return;
    world.events.tick.unsubscribe(init)
    // -使用try实体完成区域加载
    overworld.runCommandAsync('summon yumecraft:ceyk 30000000 128 0 -1 -1 null try')
        .then(
            (CommandResult) => {
                console.error("[模拟玩家] 初始化检查开始")

                // -检测0号ceyk(tag:init)实体以及坐标
                const ceykList = overworld.getEntities({type: 'yumecraft:ceyk', tags: ['init']})
                // world.sendMessage('[模拟玩家] ceykList[init].length ==>'+overworld.getEntities({type:'yumecraft:ceyk',tags:['init']}).length)

                if (ceykList.length === 0) {
                    // init message
                    world.sendMessage('[模拟玩家] 假人初始化')
                    world.sendMessage('[模拟玩家] 直接输入“假人创建”或“假人帮助”')
                    // init
                    const   ceyk = overworld.spawnEntity('yumecraft:ceyk', {x: 30000000, y: 128, z: 0})
                    ceyk.addTag('init')
                    ceykList.push(ceyk)
                }
                // 移除超过1个的ceyk init实体
                else while (ceykList.length > 1) ceykList.pop().triggerEvent('yumecraft:despawn')


                // const ceyk = overworld.getEntities({type:'yumecraft:ceyk',tags:['init']})[0]
                // -有则跳过创建或修正坐标
                ceykList[0].teleport({x: 30000000, y: 128, z: 0}, {dimension: overworld})

                // 移除其他ceyk
                overworld.getEntities({
                    type: 'yumecraft:ceyk',
                    excludeTags: ['init']
                }).forEach(e => e.triggerEvent('yumecraft:despawn'))

                // 记分板PID初始化 写的烂 执行两次
                verify()
                verify()

                // -使用fill完成区域清理 (29999997 0 5 30000002 319 -1)
                // * 待商榷改用getBlock
                overworld.runCommand('fill 29999997 0 5 30000002 319 -1 air replace') //height 320
                // -执行gametest创建test环境 坐标 (30000000 128 0)
                overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人')

                // TODO
                // 唤醒 从ceyk[init] 重新生成模拟玩家并配置背包与经验值
                initialized.trigger(null)


                console.error("[模拟玩家] 初始化检查完成")
            },
            (reason) => console.error("[模拟玩家] 初始化错误 ERROR:" + reason)
        )
        .catch((reason) => console.error("[模拟玩家] 初始化错误 ERROR:" + reason))
        .finally(() => console.error("[模拟玩家] 初始化检查结束"))
}

// world.events.playerSpawn.subscribe(init)
world.events.tick.subscribe(init)


export function a(){console.error('a一次') }
//写一个100次的for循环



a