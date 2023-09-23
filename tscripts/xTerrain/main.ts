import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type { World, BlockLocation as _BlockLocation } from '../@types/globalThis'
import type { Dimension, DimensionLocation, ScoreboardObjective, Vector3 } from '@minecraft/server';

import verify from './verifyDataBase'

declare const world: World
// declare const BlockLocation: typeof _BlockLocation

const 自动重生标识符 = "自动重生标识符";

const yumeSign = "#yumeSimSign#";                   ;;"假人标签";;
const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365

// const yume = ({x,y,z},{x:a,y:b,z:c})=>Math.sqrt((x-a)**2+(y-b)**2+(z-c)**2)


export const SimulatedPlayerList = {};
let spawnSimulatedPlayer : (location:Vector3, dimension:Dimension, pid: number  )=>SimulatedPlayer;
let testWorldLocation : (relativeLocation: Vector3) => Vector3;

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
// declare const GameTest:  {"register": typeof register}


register("我是云梦", "假人", (test:Test) => {
        testWorldLocation = test.worldLocation

        overworld.runCommand('gamerule domobspawning true');;;; "凑活解决刷怪问题";;;
        overworld.runCommand('gamerule dodaylightcycle true');;;; "凑活解决时间问题";;;
        overworld.runCommand('gamerule randomtickspeed 1');;;; "凑活解决tick问题";;;

        spawnSimulatedPlayer = (location:Vector3, dimension:Dimension, pid: number ):SimulatedPlayer=>{
                        // const y2 = { x: 0, y: 2, z: 0 }
                        // overworld.runCommand('me pid=>'+(+pid))
                        // const dimensionLocation : DimensionLocation = {...location,dimension}
                        const SimulatedPlayer = test.spawnSimulatedPlayer({ x:0, y:2, z:0 }, `工具人-${pid}`)
                        SimulatedPlayer.addTag('init')
                        SimulatedPlayer.addTag(yumeSign)
                        SimulatedPlayer.addTag(自动重生标识符)
                        // SimulatedPlayer.runCommand("tp @a @s")
                        SimulatedPlayer.setSpawnPoint({...location,dimension})
                        SimulatedPlayer.teleport(location, { dimension })
                        // SimulatedPlayerList.push(SimulatedPlayer)
                        return SimulatedPlayer;
        }
})
.maxTicks(tickWaitTimes)
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)
.structureName("xboyMinemcSIM:void")

export {spawnSimulatedPlayer,testWorldLocation,GetPID}
export default spawnSimulatedPlayer


//  # 初始化
function init(){
        const players = world.getAllPlayers()
        if(players.length===0)return;
        world.events.tick.unsubscribe(init)
        const {location,dimension} = players[0]
        // -检测0号ceyk(tag:init)实体以及坐标
        const ceykList = overworld.getEntities({type:'yumecraft:ceyk',tags:['init']})
        // overworld.runCommand('me ceykList.length'+ceykList.length)

        // 移除超过1个的ceyk init实体
        while(ceykList.length>1)ceykList.pop().triggerEvent('yumecraft:despawn')
        if(ceykList.length===0){

            // init message
            players.forEach(_=>_.sendMessage('[模拟玩家] 假人初始化'))
                // init
                const ceyk = dimension.spawnEntity('yumecraft:ceyk',{x:location.x,y:123,z:location.z})
                      ceyk.addTag('init')
                      // -使用0号实体完成区域加载
                      ceyk.teleport({x:30000000,y:128,z:0},{dimension:overworld})
                // overworld.runCommand('me '+overworld.getEntities({type:'yumecraft:ceyk',tags:['init']}).length)
        }

        const ceyk = overworld.getEntities({type:'yumecraft:ceyk',tags:['init']})[0]
        // -有则跳过创建或修正坐标
              ceyk.teleport({x:30000000,y:128,z:0},{dimension:overworld})


        // pid初始化 
        verify()
        verify()

        // -使用fill完成区域清理 (29999997 0 5 30000002 319 -1)
        // * 待商榷改用getBlock
        overworld.runCommand('fill 29999997 0 5 30000002 319 -1 air replace') //height 320
        // -执行gametest创建test环境 坐标 (30000000 128 0)
        overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人')

        // TODO
        // 唤醒
        initialized.trigger(null)
}       
// world.events.playerSpawn.subscribe(init)
world.events.tick.subscribe(init)

initialized.subscribe(()=>{
    console.error('[假人]初始化完毕，开始加载内置插件')
        import('./plugins/test')
        import('./plugins/chatSpawn')
        import('./plugins/command')
})
console.error('[假人] init一次')

export function a(){console.error('a一次') }
//写一个100次的for循环



