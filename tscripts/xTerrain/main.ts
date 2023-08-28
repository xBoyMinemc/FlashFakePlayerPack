import type { SimulatedPlayer, Test } from '@minecraft/server-gametest'
import type { World, BlockLocation as _BlockLocation } from '../@types/globalThis'
import type { Dimension, DimensionLocation, Entity, ScoreboardObjective, Vector3 } from '@minecraft/server';

import verif from './verifyDataBase'

declare const world: World
declare const BlockLocation: typeof _BlockLocation


const yumeSign = "#yumeSimSign#";                   ;;"假人标签";;
const overworld = world.getDimension('overworld')
const tickWaitTimes = 20*60*60*24*365

const yume = ({x,y,z},{x:a,y:b,z:c})=>Math.sqrt((x-a)**2+(y-b)**2+(z-c)**2)



const taskList = [];
const SimulatedPlayerList = [];
let spawn :Function;
let testWorldLocation : (relativeLocation: Vector3) => Vector3;
let pid = 1

import { register } from "@minecraft/server-gametest"
import ScoreBase from '../lib/xboyPackage/scoreBase/rw';
declare const GameTest:  {"register": typeof register}


register("我是云梦", "假人", (test:Test) => {
        testWorldLocation = test.worldLocation

        overworld.runCommandAsync('gamerule domobspawning true');;;; "凑活解决刷怪问题";;;
        overworld.runCommandAsync('gamerule dodaylightcycle true');;;; "凑活解决时间问题";;;
        overworld.runCommandAsync('gamerule randomtickspeed 1');;;; "凑活解决tick问题";;;
        spawn = (location:DimensionLocation, dimension:Dimension, _pid:number=0):SimulatedPlayer=>{
                const y2 = { x: 0, y: 2, z: 0 }
                        overworld.runCommand('me _pid'+_pid)
                        location.dimension = dimension
                        const SimulatedPlayer = test.spawnSimulatedPlayer(y2, `工具人-${_pid?_pid:pid++}`)
                        SimulatedPlayer.addTag('init')
                        SimulatedPlayer.addTag(yumeSign)
                        // SimulatedPlayer.runCommand("tp @a @s")
                        SimulatedPlayer.setSpawnPoint(location)
                        SimulatedPlayer.teleport(location, { dimension })
                        SimulatedPlayerList.push(SimulatedPlayer)
                        return SimulatedPlayer;
        }
})
.maxTicks(tickWaitTimes)
// .maxTicks(2)
// .maxAttempts(tickWaitTimes)
// .requiredSuccessfulAttempts(tickWaitTimes)
// .padding(0)
.structureName("xboyMinemcSIM:void")

export default spawn


//  # 初始化
function init(){
        const players = world.getAllPlayers()
        if(players.length===0)return;
        world.events.tick.unsubscribe(init)
        const {location,dimension} = players[0]
        // -检测0号ceyk(tag:init)实体以及坐标
        const ceykList = overworld.getEntities({type:'yumecraft:ceyk',tags:['init']})
        overworld.runCommand('me ceykList.length'+ceykList.length)

        // 移除超过1个的ceyk init实体
        while(ceykList.length>1)ceykList.pop().triggerEvent('yumecraft:despawn')
        if(ceykList.length===0){
                const ceyk = dimension.spawnEntity('yumecraft:ceyk',location)
                      ceyk.addTag('init')
                      // -使用0号实体完成区域加载
                      ceyk.teleport({x:30000000,y:128,z:0},{dimension:overworld})
                overworld.runCommand('me '+overworld.getEntities({type:'yumecraft:ceyk',tags:['init']}).length)
        }

        const ceyk = overworld.getEntities({type:'yumecraft:ceyk',tags:['init']})[0]
        // -有则跳过创建或修正坐标
              ceyk.teleport({x:30000000,y:128,z:0},{dimension:overworld})


        // pid初始化 
        verif()
        verif()
        pid = ScoreBase.GetPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),'##currentPID')
        // -使用fill完成区域清理 (29999997 0 5 30000002 319 -1)
        // * 待商榷改用getBlock
        overworld.runCommand('fill 29999997 0 5 30000002 319 -1 air replace') //height 320
        // -执行gametest创建test环境 坐标 (30000000 128 0)
        overworld.runCommand('execute positioned 30000000 128 0 run gametest run 我是云梦:假人')

        // TODO
        // 唤醒
}       
// world.events.playerSpawn.subscribe(init)
world.events.tick.subscribe(init)


world.events.blockBreak.subscribe(()=>{
        // TEST without pid input
        // taskList.push({location:{x:1,y:1,z:1},dimension:overworld,_pid:pid})
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##')
        const SimulatedPlayer :SimulatedPlayer= spawn({x:1,y:1,z:1},overworld,pid)
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id,pid)
        ++pid
        // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),)
        const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')
        __FlashPlayer__.setScore('##currentPID',pid)
        // TEST END
})





const ture = true;
const flase = false;
const xboySimCmdHead = "假人";                      ;;" 命令头 ";;
const 挖掘标识符 = "挖掘标识符";
const 攻击标识符 = "攻击标识符";
const 自动攻击标识符 = "自动攻击标识符";
const 自动追击标识符 = "自动追击标识符";
const 跳跃标识符 = "跳跃标识符";
const 自动重生标识符 = "自动重生标识符";
const 寻路标识符 = "寻路标识符";

function 获取眼前的假人实体(逻辑主体:Entity,距离:number){
        const 最远距离 = {maxDistance:距离} //new EntityRaycastOptions();;;"距离";;
    
        const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);// ViewDirection
    
        return 实体们.find(({entity:实体})=>实体.hasTag(yumeSign))?.entity;;"只返回一个假人";;
};
world.afterEvents.chatSend.subscribe( event => {
        // try{
    
                const {message,sender} = event;
                const 发起者 = sender;
                let   消息   = message;
        
                // // if(消息=="x" ){
                //     console.error((sender.getEntitiesFromViewDirection({maxDistance:8})[0]))
                //     const s = sender.getEntitiesFromViewDirection()[0].entity.getComponent("minecraft:inventory").container;                                     ;;"眼前的假人实体背包";;
                //     const p = sender.getComponent("minecraft:inventory").container;                                          ;;"你这个______的背包";;
                //
                //     for(let i = p.size;i--;s.getItem(i)?p.getItem(i)?s.swapItems(i,i,p):s.moveItem(i,i,p):p.getItem(i)?p.moveItem(i,i,s):"这行代码，我再维护我是狗");
                //
                // // };
                //
                // return ;
                let x = +(发起者.location.x-0.5).toFixed(0);
                let y = + 发起者.location.y.toFixed(0);
                let z = +(发起者.location.z-0.5).toFixed(0); //for blockLocation
        
                if(消息.startsWith(xboySimCmdHead)===false) return"好shit,迟早给你干烂";
                消息 = 消息.replace(xboySimCmdHead,'');     
            
                const 眼前的工具人 = 获取眼前的假人实体(发起者, 16);
                    //懒改--2023-07-21--评
                const TagsManager =(xboy)=>(minemc)=>(need)=>(add)=>(remove)=>xboy===need?(add.length?add.forEach(t=>minemc.addTag(t)):0,remove.length?remove.forEach(t=>minemc.removeTag(t)):0):0;
                const xboy = TagsManager(消息)(眼前的工具人)
                xboy("攻击")([攻击标识符])([自动攻击标识符,挖掘标识符])
                xboy("自动攻击")([自动攻击标识符])([攻击标识符,挖掘标识符])
                xboy("开始跳跃")([跳跃标识符])([])
                xboy("结束跳跃")([])([跳跃标识符])
                // xboy("寻路")([寻路标识符])([])
                xboy("自动追击")([自动追击标识符,自动攻击标识符])([])
                xboy("停止")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
                xboy("开摆")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
                xboy("自动重生")([自动重生标识符])([])

})    