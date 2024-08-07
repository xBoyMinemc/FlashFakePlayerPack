import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal,
} from '../@types/globalThis'
import { Dimension, Vector3 } from '@minecraft/server'

import { register } from '@minecraft/server-gametest'


import verify from '../lib/xboyPackage/scoreBase/verifyDataBase'
import EventSignal from '../lib/xboyEvents/EventSignal'

import { SIGN } from '../lib/xboyPackage/YumeSignEnum'
import { world, system } from '@minecraft/server'

import './plugins/noFlashDoor' // pig

import './plugins/chatSpawn'
import './plugins/command'
import './plugins/breakBlock'
import './plugins/youAreMine'
import './plugins/help'
import './plugins/task'
import './plugins/gui'
import './plugins/autoFishing'
import './plugins/killedBySimPlayer'
import './plugins/setting'
import { playerMove } from "../lib/xboyEvents/move";


const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365

// all of SimulatedPlayer List
export const SimulatedPlayerEnum  = {}

let randomTickSpeed = 1
let doDayLightCycle = true
let doMobSpawning = true

let spawnSimulatedPlayer : (location:Vector3, dimension:Dimension, pid: number  )=>SimulatedPlayer
let testWorldLocation : Vector3

const GetPID = ()=> world.scoreboard.getObjective('##FlashPlayer##').addScore('##currentPID',1)
// {
//     const __FlashPlayer__ = <ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##')
//
//     const value = __FlashPlayer__.getScore('##currentPID')
//
//     // __FlashPlayer__.setScore('##currentPID',value+1)
//     __FlashPlayer__.addScore('##currentPID',1)
//
//     return value
// }

export const initialized : initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned : spawnedEventSignal = new EventSignal<spawnedEvent>()
// spawned.subscribe(({spawnedSimulatedPlayer})=>{

// add SimulatedPlayer to SimulatedPlayerList,by ues obj <key,value>

// })




register('我是云梦', '假人', (test:Test) => {
    testWorldLocation = test.worldBlockLocation({ x:0, y:0, z:0 })
    testWorldLocation["worldBlockLocation"] = (v3:Vector3)=>{
        return test.worldBlockLocation(v3)
    }


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{
        // overworld.sendMessage('pid=>'+pid)
        // const dimensionLocation : DimensionLocation = {...location,dimension}
        const SimulatedPlayer = test.spawnSimulatedPlayer({ x:0, y:8, z:0 }, `工具人-${pid}`)
        SimulatedPlayer.addTag('init')
        SimulatedPlayer.addTag(SIGN.YUME_SIM_SIGN)
        SimulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN)

        // SimulatedPlayer.runCommand('tp @a @s')
        // @ts-ignore
        SimulatedPlayer.setSpawnPoint({...location,"dimension":overworld})
        // @ts-ignore
        SimulatedPlayer.teleport(location, { dimension })
        //do not add SimulatedPlayer to SimulatedPlayerList here,just spawn and teleport
        return SimulatedPlayer
    }

    console.error('[假人] init一次')
})
.maxTicks(tickWaitTimes)
.structureName('xboyMinemcSIM:void')
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)

    initialized.subscribe(()=> console.error('[模拟玩家]初始化完毕，开始加载内置插件') );
    // initialized.subscribe(()=>
    //     [
    //     // 'test',
    //     'chatSpawn',
    //     'command',
    //     'breakBlock',
    //     'youAreMine',
    //     'help',
    //     'task',
    //     'gui',
    //     'autoFishing',
    //     'killedBySimPlayer',
    //     'setting',
    //     // 'Deja Vu Yan Returns',
    //     // '鱼肉 ‭‭‭⁧⁧⁧~咕噜咕噜',
    // ].forEach(
    //     name=> import('./plugins/'+name)
    //         .then(()=>console.error('[模拟玩家] '+name+'模块初始化结束'))
    //         .catch((reason) => console.error('[模拟玩家] '+name+' 模块初始化错误 ERROR:' + reason))
    // )
    // )

export { spawnSimulatedPlayer,testWorldLocation,GetPID }
export default spawnSimulatedPlayer

let initCounter = 5
//  # 初始化 init
// how about turn to world.afterEvents.playerSpawn
function init() {
    // world.events.reloadFromCmd.unsubscribe(reload)
        // Limit the number of retries
        if(--initCounter<0){
            world.sendMessage('[模拟玩家] 初始化失败'+initCounter+'次，尝试在控制台输入/reload')
            console.error('[模拟玩家] 初始化失败'+initCounter+'次，尝试在控制台输入/reload')
        }

    const players = world.getAllPlayers()
    if (players.length === 0) return '略略略';
    const player = players[0]
    const {x,y,z} = player.location
    const dimension = player.dimension

    // -使用try实体完成区域加载
     const ceykTry = dimension.spawnEntity('yumecraft:ceyk',{x,y:dimension.heightRange.max,z})
           ceykTry.nameTag = 'try'

    system.run(  ()=>{
        ceykTry.teleport({x: 30000000, y: (overworld.heightRange.max-1), z: 0})

        system.run(()=>{

            console.error('[模拟玩家] 初始化检查开始')

            // -检测0号ceyk(tag:init)实体以及坐标
            const ceykList = overworld.getEntities({type: 'yumecraft:ceyk', tags: ['init']})
            // world.sendMessage('[模拟玩家] ceykList[init].length ==>'+overworld.getEntities({type:'yumecraft:ceyk',tags:['init']}).length)

            if (ceykList.length === 0) {
                // init message
                world.sendMessage('[模拟玩家] 第一次初始化')
                world.sendMessage('[模拟玩家] 直接输入“假人创建”或“假人帮助”')
                // init
                const ceyk = overworld.spawnEntity('yumecraft:ceyk', {x: 30000000, y: 128, z: 0})
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

            randomTickSpeed = world.gameRules.randomTickSpeed
            doDayLightCycle = world.gameRules.doDayLightCycle
            doMobSpawning   = world.gameRules.doMobSpawning

            // -使用fill完成区域清理 (29999997 0 5 30000002 319 -1)
            // * 待商榷改用getBlock
            overworld.runCommand('fill 29999997 0 5 30000002 ' + (overworld.heightRange.max-1) + ' -1 air replace') //height 320
            // -执行gametest创建test环境 坐标 (30000000 128 0)
            overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人')

            // TODO 唤醒 从ceyk[init] 重新生成模拟玩家并配置背包与经验值
            // then initialized
            initialized.trigger(null)

            playerMove.unsubscribe(init)
            console.error('[模拟玩家] 初始化检查完成')
        })
    })


}

// world.events.playerSpawn.subscribe(init)
// init()
playerMove.subscribe(init)

// const reload = ()=>{
//     // world.sendMessage('#reload?2')
//     init()
//     // world.sendMessage('#reload?1')
//     // world.events.playerMove.unsubscribe(init)
//     // world.sendMessage('#reload?3')
//     // world.events.reloadFromCmd.unsubscribe(reload)
// }
// world.events.reloadFromCmd.subscribe(()=>reload())
// export function a(){console.error('a一次') }