import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type {
    initializedEvent,
    initializedEventSignal,
    spawnedEvent,
    spawnedEventSignal,
} from '../@types/globalThis'
import {Dimension, system, Vector3} from '@minecraft/server'

import { register } from '@minecraft/server-gametest'

import verify from '../lib/xboyPackage/scoreBase/verifyDataBase'
import EventSignal from '../lib/xboyEvents/EventSignal'

import { SIGN } from '../lib/xboyPackage/YumeSignEnum'
import { world } from '@minecraft/server'

// import './plugins/noFlashDoor' // pig

import { playerMove } from "../lib/xboyEvents/move"

const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365

// all of SimulatedPlayer List
export const SimulatedPlayerEnum  = {}

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
let testWorldLocation : Vector3


if(!world.structureManager.get('xboyMinemcSIM:void'))
    world.structureManager.createEmpty('xboyMinemcSIM:void', { x:1, y:1, z:1 }).saveToWorld()

const GetPID = ()=> world.scoreboard.getObjective('##FlashPlayer##').addScore('##currentPID',1)


export const initialized : initializedEventSignal = new EventSignal<initializedEvent>()
export const spawned : spawnedEventSignal = new EventSignal<spawnedEvent>()

register('我是云梦', '假人', (test:Test) => {
    testWorldLocation = test.worldBlockLocation({ x:0, y:0, z:0 })
    testWorldLocation["worldBlockLocation"] = (v3:Vector3)=> test.worldBlockLocation(v3)


    world.gameRules.randomTickSpeed = randomTickSpeed
    world.gameRules.doDayLightCycle = doDayLightCycle
    world.gameRules.doMobSpawning = doMobSpawning

    spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{

        const SimulatedPlayer = test.spawnSimulatedPlayer({ x:0, y:8, z:0 }, `工具人-${pid}`)
        SimulatedPlayer.addTag('init')
        SimulatedPlayer.addTag(SIGN.YUME_SIM_SIGN)
        SimulatedPlayer.addTag(SIGN.AUTO_RESPAWN_SIGN)

        SimulatedPlayer.setSpawnPoint({...location,dimension})
        SimulatedPlayer.teleport(location, { dimension })

        return SimulatedPlayer
    }

    initialized.trigger(null)

    playerMove.unsubscribe(init)
    console.warn('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
    world.sendMessage('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”')
})
.maxTicks(tickWaitTimes)
.structureName('xboyMinemcSIM:void')
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)

import('./plugins/help')


    initialized.subscribe(()=> console.error('[模拟玩家]初始化完毕，加载内置插件') )
    initialized.subscribe(()=>
    {
        import('./plugins/chatSpawn')
        import('./plugins/command')
        import('./plugins/breakBlock')
        import('./plugins/youAreMine')
        import('./plugins/task')
        import('./plugins/gui')
        import('./plugins/autoFishing')
        import('./plugins/killedBySimPlayer')
        import('./plugins/setting')
    }
        // 'test',
        // 'chatSpawn',
        // 'command',
        // 'breakBlock',
        // 'youAreMine',
        // 'help',
        // 'task',
        // 'gui',
        // 'autoFishing',
        // 'killedBySimPlayer',
        // 'setting',
        // 'Deja Vu Yan Returns',
        // '鱼肉 ‭‭‭⁧⁧⁧~咕噜咕噜',

    )

export { spawnSimulatedPlayer,testWorldLocation,GetPID }

let initCounter = 100
let initLock = false
async function init() {
    initCounter -= 0.5
    if(initLock || initCounter%20 !== 0)return
    initLock = true

    if(initCounter<-200){

        world.sendMessage('[模拟玩家] 初始化失败 10 次，停止尝试')
        console.error('[模拟玩家] 初始化失败 10 次，停止尝试')

        playerMove.unsubscribe(init)
    }


    if(initCounter<0){
        world.sendMessage('[模拟玩家] 初始化失败'+ initCounter/20 +'次，尝试在控制台输入/reload')
        console.error('[模拟玩家] 初始化失败'+ initCounter/20 +'次，尝试在控制台输入/reload')
    }
    // 记分板PID初始化 写的烂 执行两次
    verify()
    verify()


    const z = 11451400 +  Math.floor(Math.random() * 114514 * 19 )
    system.run(()=>{
        overworld.runCommandAsync('execute positioned 15000000 256 '+z+' run gametest run 我是云梦:假人')
            .catch((e) => world.sendMessage('[模拟玩家] 报错了，我也不知道为什么'+e))
            .finally(()=> {
                // world.sendMessage('[模拟玩家] 完成一次命令执行尝试')
                initLock = false
            })
    })

    // TODO 唤醒 从ceyk[init] 重新生成模拟玩家并配置背包与经验值
    // then initialized
}

playerMove.subscribe(init)
