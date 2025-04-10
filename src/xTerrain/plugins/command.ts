// @ts-nocheck
// No longer maintained
import { world } from '@minecraft/server'
import type { Entity } from '@minecraft/server'
import type { World } from '../../@types/globalThis'
// import {
//     Container,
//     EntityEquippableComponent,
//     EntityInventoryComponent,
//     EquipmentSlot,
//     system,
//     TicksPerSecond
// } from "@minecraft/server";
// import {
//     spawnSimulatedPlayer,
//     SimulatedPlayerList,
//     SimulatedPlayerList as 工具人们,
//     GetPID,
//     spawned as spawnedEvent,
// } from "../main";

// import qrcode from "../../lib/qrcode-terminal/mod.js";

// import {Location} from "../../lib/xboyPackage/The law of the ancestors is immutable";
import SIGN, { exeBehavior } from "../../lib/xboyPackage/YumeSignEnum";
import {getSimPlayer} from "../../lib/xboyPackage/Util";
//
// import {BlockLocation} from "../../@types/globalThis";
// class BlockLocation extends Location {
//     blocksBetween(BlockLocation:Location) {
//         const BlockLocations = [];
//         x: for (let xOff = this.x - BlockLocation.x; xOff !== 0; xOff > 0 ? --xOff : ++xOff)
//             y: for (let yOff = this.y - BlockLocation.y; yOff !== 0; yOff > 0 ? --yOff : ++yOff)
//                 z: for (let zOff = this.z - BlockLocation.z; zOff !== 0; zOff > 0 ? --zOff : ++zOff)
//                     BlockLocations.push({ "x": this.x - xOff, "y": this.y - yOff, "z": this.z - zOff });
//         return BlockLocations;
//     }
// }
const overworld   = world.getDimension("overworld");


const ture = true;
const flase = false;
const mojang = {};

const debug = flase;

const yumeSimCmdHead = "假人";                      ;;" 命令头 ";;
// const YUME_SIM_SIGN = "#yumeSimSign#";                   ;;"假人标签";;
// const 挖掘标识符 = "挖掘标识符";
// 攻击标识符
// const ATTACK_SIGN = "ATTACK_SIGN";
// // 自动攻击标识符
// const AUTO_ATTACK_SIGN = "AUTO_ATTACK_SIGN";
// // 自动追击标识符
// const AUTO_CHASE_SIGN = "AUTO_CHASE_SIGN";
// const AUTO_JUMP_SIGN = "AUTO_JUMP_SIGN";
// const AUTO_RESPAWN_SIGN = "AUTO_RESPAWN_SIGN";
// const 寻路标识符 = "寻路标识符";


// const 工具人们States:{SimulatedPlayer?:{'o'}} = {};

// function 获取眼前的假人实体(逻辑主体,距离){
//     const 最远距离 = {maxDistance:距离} //new EntityRaycastOptions();;;"距离";;
//
//     const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);// ViewDirection
//
//     return 实体们.find(({entity:实体})=>实体.hasTag(SIGN.YUME_SIM_SIGN))?.entity;;"只返回一个假人";;
// };
// function 获取眼前的实体(逻辑主体,距离){
//     const 最远距离 = {maxDistance:距离}//new EntityRaycastOptions();;;"距离";;
//     const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);
//     return 实体们[0]?.entity;;"只返回一个";;
// };
// function 获取附近的玩家实体(逻辑主体,距离){
//     const 吃个桃桃 = {}//new EntityQueryOptions();
//     吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
//     吃个桃桃.location    = new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
//     吃个桃桃.type = "minecraft:player";                                              ;;"排除掉的实体类型";;
//     吃个桃桃.closest   = 2;
//     const 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
//     const 实体组 = [];
//     for(let 实体 of 实体们)实体组.push(实体);;;;;;;;;;;;
//     return 实体组;;
// };
// function 获取附近的非玩家实体(逻辑主体,距离,昊京牌过滤器){
//     let 吃个桃桃 = {}//new EntityQueryOptions();
//     吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
//     吃个桃桃.location    = 逻辑主体.location;  //new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
//     吃个桃桃.excludeTypes= ["minecraft:player","minecraft:arrow","minecraft:xp_orb","minecraft:item"];                                              ;;"排除掉的实体类型";;
//     吃个桃桃.closest   = 1;
//     Object.assign(吃个桃桃,昊京牌过滤器);;;;"”任何邪恶“";;;
//     let 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
//     let 实体组 = [];
//     for(let 实体 of 实体们)实体组.push(实体);;;;;;;;;;;;
//     return 实体组;;
// };
// function 获取附近的玩家实体2(逻辑主体,距离,昊京牌过滤器){
//     let 吃个桃桃 = {}//new EntityQueryOptions();
//     吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
//     吃个桃桃.location    = 逻辑主体.location;  //new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
//     // 吃个桃桃.excludeTypes= ["minecraft:arrow","minecraft:xp_orb","minecraft:item"];                                              ;;"排除掉的实体类型";;
//     吃个桃桃.closest   = 1;
//     吃个桃桃.excludeTags = [SIGN.YUME_SIM_SIGN]
//     Object.assign(吃个桃桃,昊京牌过滤器);;;;"”任何邪恶“";;;
//     let 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
//     let 实体组 = [];
//     for(let 实体 of 实体们)实体组.push(实体);;;;;;;;;;;;
//     return 实体组;;
// };
// function 获取眼前的方块(逻辑主体,距离){
//     let 最远距离 = {};
//     最远距离.maxDistance = 距离;                                                              ;;"距离";;
//     return 逻辑主体.getBlockFromViewVector(最远距离);
// };
// function 获取假人实体眼前的方块的相对坐标(逻辑主体){
//     let 眼前的方块绝对坐标 = 获取眼前的方块(逻辑主体,4).location;
//     let 源坐标;;;;;;;;;;;;;;;;;;;;;
//     let 标签们 = 逻辑主体.getTags();
//     for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");
//     const x = 眼前的方块绝对坐标.x - 源坐标[0];
//     const y = 眼前的方块绝对坐标.y - 源坐标[1];
//     const z = 眼前的方块绝对坐标.z - 源坐标[2];
//     // 主世界.runCommandAsync(`me ${源坐标.join("#")} x:${眼前的方块绝对坐标.x} y:${眼前的方块绝对坐标.y} z:${眼前的方块绝对坐标.z} ### ${x+'#'+y+'#'+z+'#'}`)
//     return new BlockLocation(x,y,z);;"不绝对咯";;
// };

// let dev_ = flase;
// let 周期 = 0;
// world.events.tick.subscribe(() => {//我()了，这也是一种不（）
//     周期++;
//     // const 有人吗 = overworld.getPlayers();
//     ;;;"又不是不能用";;;
//     // if(!dev_ && 有人吗.length !== 0){
//     //     dev_ = !dev_;
//     //     有人吗[0].runCommandAsync("summon yumecraft:ceyk 30000000 128 0 0 0 事了浮尘去");
//     //     有人吗[0].runCommandAsync("execute positioned 30000000 128 0 run gametest run 我是云梦:假人");
//     //     有人吗[0].runCommandAsync("fill 29999997 0 5 30000002 319 -1 air replace");
//     // }
//     //
//     // while(生产队的驴.length!==0){
//     //     const {驴,location,dimension} = 生产队的驴.pop();
//     //
//     //     const x = (驴.location.x-0.5)>>0;
//     //     const y =  驴.location.y>>0;
//     //     const z = (驴.location.z-0.5)>>0; //for blockLocation
//     //     驴.addTag("#xyz#"+x+"#"+(y-2)+"#"+z);;
//     //     驴.teleport(location,{dimension});
//     //     location.dimension = dimension;
//     //     驴.setSpawnPoint(location);
//     //     驴.addTag(AUTO_RESPAWN_SIGN);
//     //     驴.addTag(yumeSign);
//     //     工具人们.push(驴);
//     // }
//
//     try {
//
//         if(周期<1)return;
//         周期=0;
//         for (const index in 工具人们) {
//
//             const 工具人:SimulatedPlayer = 工具人们[index]
//
//             //判假人是否存在
//             if(!工具人)return;
//             // try{
//             //     //判假人是否存活
//             //     //瞎几把乱改接口名--2023-07-21-02：02
//             //     if(工具人.getComponent("minecraft:health").currentValue<=0){
//             //         if(工具人.hasTag(AUTO_RESPAWN_SIGN))工具人.respawn();
//             //         return;
//             //     };
//             //
//             //     // 工具人.hasTag(攻击标识符)
//             //     // ;;"为什么说屎山代码呢，因为一些莫名其妙的代码增加，它们实现的功能你是完全不知道的，可能修改后会导致另外一个你根本无法察觉的功能报错";;
//             //     // ;;"可能是可控的，也可能是致命的";;
//             //     // ;;"就像这里增加的两个return一样，表面作用都是跳过遍历中的这一次";;
//             // }catch(e){
//             //     '?'
//             // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // if(!工具人)return;
//             //
//             // try{
//             //     if(工具人.hasTag(挖掘标识符))工具人.breakBlock(获取假人实体眼前的方块的相对坐标(工具人));
//             // }catch(e){  主世界.runCommandAsync(`me 挖掘标识符 ${e}`)
//             // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//             //     if(工具人.hasTag(攻击标识符))工具人.attackEntity(获取眼前的实体(工具人,4));
//             // }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//             //     if(工具人.hasTag(自动攻击标识符))工具人.lookAtEntity(获取附近的非玩家实体(工具人,4,{})[0]);
//             // }catch(e){
//             // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//                 // if(工具人.hasTag(SIGN.AUTO_CHASE_SIGN)){
//                 //     const 实体们 = 获取附近的非玩家实体(工具人,12,{families:["undead"]}).concat(获取附近的非玩家实体(工具人,12,{families:["monster"]})).concat(获取附近的玩家实体2(工具人,12,{}));
//                 //
//                 //     工具人们States[工具人]?0:(工具人们States[工具人]={});
//                 //     工具人们States[工具人]["o"]?0:(工具人们States[工具人]["o"]=工具人.location);
//                 //
//                 //     const r = (x,_x,v)=>x-_x>v||x-_x<-v;
//                 //     const r3 = (o,_o,v)=>o.x-_o.x>v||o.x-_o.x<-v || o.y-_o.y>v||o.y-_o.y<-v || o.z-_o.z>v||o.z-_o.z<-v;
//                 //     const fix = (o)=>({x:o.x-30000000+1,y:o.y,z:o.z-3});
//                 //     // && r3(工具人们States[工具人]["o"],工具人.location,16)
//                 //     if(实体们.length>0 ){
//                 //
//                 //         let 挨打实体 = 实体们[0];
//                 //         if( !r3(挨打实体.location,工具人.location,4) ){
//                 //             // 30000000 128 0 {x:-30000000,y:-128,z:0}
//                 //             工具人.moveToLocation(fix(挨打实体.location));
//                 //             console.error(挨打实体.typeId,挨打实体.location.x,挨打实体.location.y,挨打实体.location.z)
//                 //         }
//                 //
//                 //     }else{
//                 //         console.error("back")
//                 //         if( r3(工具人.location,工具人们States[工具人]["o"],1) )
//                 //             工具人.moveToLocation( fix(工具人们States[工具人]["o"]) );
//                 //         // 工具人.moveToLocation({x:-30000000,y:-128,z:0});
//                 //
//                 //     }
//                 // };
//             // }catch(e){
//             // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//             //     if(工具人.hasTag(SIGN.AUTO_ATTACK_SIGN) && 获取眼前的实体(工具人,4).name!="")工具人.attackEntity(获取眼前的实体(工具人,4));
//             // }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//             //     if(工具人.hasTag(SIGN.AUTO_JUMP_SIGN))工具人.jump();
//             // }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//             // try{
//             //   // if(工具人.hasTag(寻路标识符))Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).forEach(_=>工具人.runCommandAsync("me "+JSON.stringify(_.x)));
//             //   if(工具人.hasTag(寻路标识符))工具人.runCommandAsync("me "+Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).length )
//             // }catch(e){
//             //   工具人.runCommandAsync("me "+e)
//             // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//         }
//
//
//     } catch (毛病) {
//         if(debug)
//             overworld.runCommandAsync(`me ${毛病}`)
//     }
// })

//
// world.events.fishingHookDespawned.subscribe(event=>{
//     if(debug)console.error("fishingHook Despawned")
//     if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
//     for (const index in SimulatedPlayerList) {
//         const _ = SimulatedPlayerList[index]
//
//         !_?0:_.id===event.Fisher.id?event.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0
//     }
// })
// world.events.fishingHookSpawned.subscribe(event=>{
//     if(debug)console.error("fishingHook Spawned")
//     if(debug)world.sendMessage("me ##鱼钩生成\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
// })


//扭头 /
//挖掘 /
//放置 O
//投掷三叉戟 /

world.afterEvents.chatSend.subscribe( event => {
        // try
        {

            const {message, sender} = event;
            const 发起者 = sender;
            let 消息 = message;

            let x = +(发起者.location.x - 0.5).toFixed(0);
            let y = + 发起者.location.y.toFixed(0);
            let z = +(发起者.location.z - 0.5).toFixed(0); //for blockLocation

            if (消息.startsWith(yumeSimCmdHead) === false) return "好shit,迟早给你干烂";
            消息 = 消息.replace(yumeSimCmdHead, '');

            const 眼前的工具人 = getSimPlayer.fromView(发起者, 16);
            //懒改--2023-07-21--评
            const TagsManager = (xboy: string) => (minemc: Entity) => (need: string) => (add:String[]=[]) => (remove: string[]=[]) => xboy === need ? (add.length ? add.forEach(t => minemc.addTag(t)) : 0, remove.length ? remove.forEach(t => minemc.removeTag(t)) : 0) : 0;
            const xboy = TagsManager(消息)(眼前的工具人)
            xboy("攻击")([SIGN.ATTACK_SIGN])([SIGN.AUTO_ATTACK_SIGN])
            xboy("自动攻击")([SIGN.AUTO_ATTACK_SIGN])([SIGN.ATTACK_SIGN])
            xboy("开始跳跃")([SIGN.AUTO_JUMP_SIGN])()
            xboy("结束跳跃")()([SIGN.AUTO_JUMP_SIGN])
            // xboy("寻路")([寻路标识符])([])
            xboy("自动追击")([SIGN.AUTO_CHASE_SIGN, SIGN.AUTO_ATTACK_SIGN,SIGN.AUTO_JUMP_SIGN])()
            xboy("停止")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN,SIGN.AUTO_TRIDENT_SIGN])
            xboy("开摆")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN])
            xboy("自动重生")([SIGN.AUTO_RESPAWN_SIGN])()
            xboy("自动丢三叉戟")([SIGN.AUTO_TRIDENT_SIGN])()
            // 并不认为参数默认值在这里是什么好主意--2023-12-14

            // if (消息 == "列表") {
            //     for (let i in 工具人们) if (工具人们[i]) 发起者.sendMessage(`§e§l-序号：${i} ## 生成名称: ${工具人们[i].name}`);
            //     return;
            // }
            // ;
            // if (消息 == "交换背包" || 消息 == "背包交换") {
            //     const s = 眼前的工具人.getComponent("minecraft:inventory").container;
            //     ;
            //     ;"眼前的假人实体背包";
            //     ;
            //     const p = sender.getComponent("minecraft:inventory").container;
            //     ;
            //     ;"你这个______的背包";
            //     ;
            //
            //     for (let i = sender.getComponent("minecraft:inventory").container.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗") ;
            //
            //     "大家好，我是狗 --2023-05-02"
            // }
            // ;
            // if (消息 == "交换装备" || 消息 == "装备交换") {
            //     const s = 眼前的工具人.getComponent("minecraft:equippable");
            //     ;
            //     ;"眼前的假人实体背包";
            //     ;
            //     const p = sender.getComponent("minecraft:equippable");
            //     for (const i in EquipmentSlot) {
            //         //跳过主手
            //         if (i === "mainhand") continue;
            //         // console.error(i)
            //         const _ = s.getEquipment(i);
            //         const __ = p.getEquipment(i);
            //         s.setEquipment(i, __);
            //         p.setEquipment(i, _);
            //     }
            // }
            // ;
            // if (消息 == "清空背包" || 消息 == "爆金币") {
            //     const _s = <EntityEquippableComponent>眼前的工具人.getComponent("minecraft:equippable");
            //     for (const i in EquipmentSlot) {
            //         //跳过主手
            //         if (i === "mainhand") continue;
            //         // 获取
            //         const _ = _s.getEquipment(<EquipmentSlot>i);
            //         // 置空
            //         _s.setEquipment(<EquipmentSlot>i, undefined);
            //     }
            //     const s = <Container>(<EntityInventoryComponent>眼前的工具人.getComponent("minecraft:inventory")).container;
            //     ;
            //     ;"眼前的假人实体背包";
            //     ;
            //     const l = sender.location;
            //     const d = sender.dimension;
            //
            //
            //     for (
            //         let i = 眼前的工具人.getComponent("minecraft:inventory").container.size;
            //         i--;
            //         s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是狗"
            //     ) ;
            //
            // }
            // ;
            // mojang.脑子 = {}
            // if (消息 == "挖掘" && mojang.脑子) {
            //     //正在准备塞入脑子
            //     // 眼前的工具人.breakBlock(new BlockLocation(x,y-1,z))
            //     眼前的工具人.addTag(挖掘标识符);
            //     眼前的工具人.removeTag(攻击标识符);
            //     眼前的工具人.removeTag(自动攻击标识符);
            // }
            // ;
            //
            // move to behavior
            //
            // if (消息 == "扭头" || 消息 == "转向") {
            //     眼前的工具人.lookAtEntity(发起者);
            // }
            // ;
            // if (消息 == "移动") {
            //     !(眼前的工具人)
            //         ? 发起者.sendMessage("§e§l-光标方向，15格内没找到相关实体")
            //         : 眼前的工具人.teleport(发起者.location, {dimension: 眼前的工具人.dimension});
            //     ;
            // }
            // ;
            // if (消息 == "使用") {
            //     眼前的工具人.useItemInSlot(0) ? 眼前的工具人.stopUsingItem() : 0
            // }
            // ;
            // if (消息 == "开始使用") {
            //     眼前的工具人.useItemInSlot(0)
            // }
            // ;
            // if (消息 == "停止使用") {
            //     眼前的工具人.stopUsingItem()
            // }
            // ;
            // if (消息 == "开始交互") {
            //     眼前的工具人.interact()
            // }
            //

            const behavior = 消息 // 坏了，重新审阅代码发现命令行为真是这里控制的，怎么这么重要的东西和shit放在一起--2023-12-14
            exeBehavior(behavior)?.(眼前的工具人,sender)
            ;
            ;"希望你对中文编程没意见，有也给我保留";
            ;
            //
            // if (消息 == "重生") {
            //     ;
            //     ;"对准~";
            //     ;
            //     if (!眼前的工具人) sender.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话")
            //     眼前的工具人.respawn()
            // }
            // ;
            // if (消息.startsWith("重生 ")) {
            //     ;
            //     ;"云梦知道有人对不准，所以给你做了指向性的功能，输入假人序号即可";
            //     ;
            //     let temp = 消息.replace("重生 ", "");
            //
            //     if (temp = Number(temp)) {
            //         工具人们[temp].respawn()
            //     }
            //     ;
            //     ;"能用就行";
            //     ;
            // }
            // ;
            // if (消息.startsWith("批量 ")) {
            //     let temp = 消息.replace("批量 ", "");
            //     if (temp = Number(temp))
            //         while (temp --> 0) {
            //         const PID = GetPID()
            //         const SimulatedPlayer = spawnSimulatedPlayer(发起者.location, 发起者.dimension, PID )
            //             spawnedEvent.trigger({spawnedSimulatedPlayer:SimulatedPlayer,PID})
            //                 工具人们[PID] = SimulatedPlayer
            //         }
            //     // 生产任务.push({
            //     //     location:发起者.location,
            //     //     dimension:发起者.dimension,
            //     //     count:1,
            //     // });
            // }
            // ;
            // if (消息 == "销毁") {
            //     const _s = 眼前的工具人.getComponent("minecraft:equippable");
            //     for (const i in EquipmentSlot) {
            //         //跳过主手
            //         if (i === "mainhand") continue;
            //         const _ = _s.getEquipment(i);
            //         _s.setEquipment(i, undefined);
            //     }
            //     const s = 眼前的工具人.getComponent("minecraft:inventory").container;
            //     ;
            //     ;"眼前的假人实体背包";
            //     ;
            //     const l = sender.location;
            //     const d = sender.dimension;
            //
            //
            //     for (let i = 眼前的工具人.getComponent("minecraft:inventory").container.size; i--; s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是狗") ;
            //
            //
            //     眼前的工具人.sendMessage("§e§l-拜拜了您内" + 眼前的工具人)
            //     眼前的工具人.disconnect()
            // }
            // ;
            // ;"抓住未来!!";
            // if (消息.startsWith("销毁 ")) {
            //     let temp = 消息.replace("销毁 ", "");
            //     if (temp = Number(temp)) {
            //         sender.sendMessage("§e§l-拜拜了您内")
            //         工具人们[temp].disconnect()
            //     }
            //     ;
            //     ;"能用就行";
            //     ;
            // }
            // ;
            // if (消息 == "github") {
            //     Math.random() > 0.5
            //         ?
            //         qrcode.generate("github.com/xBoyMinemc", function (str) {
            //             发起者.sendMessage("  §rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a" + str.replaceAll("#", "\u000a").replaceAll("0", "⬛").replaceAll("1", "  "))
            //         })
            //         :
            //         qrcode.generate("https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4", function (str) {
            //             发起者.sendMessage("§rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a" + str.replaceAll("#", "\u000a").replaceAll("0", "⬛").replaceAll("1", "  "))
            //         })
            // }
            // ;
            // if (消息 == "帮助") {
            //     [
            //         "输入  假人帮助+空格+功能名   获取更详细的帮助", "例如   -假人帮助 重生-",
            //         "###部分功能需要光标对准假人", "创建", "销毁", "列表", "扭头", "停止", "移动","§e§l自动追击§r",
            //         "使用 # 开始使用 # 停止使用 => 使用鱼竿，鱼钩销毁后会自动抛竿（自动钓鱼）", "攻击", "自动攻击", "交换背包",
            //         "一般操作示例 '假人创建' '假人销毁' '假人交换背包'  ’假人github‘  ’假人help‘", "销毁 + 空格 +列表标号",
            //         "销毁示例", "销毁", "销毁 0", "销毁 1", "#赠品：输入'tps开' 或 'tps关'", "https://github.com/xBoyMinemc", "输入'假人help'了解更多", "#赞助作者烂活？得了吧。。"
            //     ].forEach((text) => 发起者.sendMessage(`§e§l-${text}`))
            // }
            // ;
            // if (消息.startsWith("帮助 ")) {
            //     const helpMessage =
            //         ({
            //             "销毁": ["销毁示例", "假人销毁 + 空格 + 序号", "假人销毁 1", "假人销毁 2"],
            //             "重生": ["重生示例", "假人重生 + 空格 + 序号", "假人重生 1", "假人重生 2"],
            //         })
            //             [消息.replace("帮助 ", "")]
            //     ;
            //     helpMessage
            //         ?
            //         sender.sendMessage(helpMessage.join("\u000a"))
            //         :
            //         sender.sendMessage("对不起，没有这种事情，做不到" + (Math.random() < 0.233 ? "给钱也做不到" : "真做不到"))
            // }
            // ;
            // if (消息 == "help") {
            //     [
            //         "§r这里是一些技术解释",
            //         "假人销毁，或游戏重启后，信息完全丢失",
            //         "假人可以捡起掉落物品",
            //         // "如果出现莫名其妙的Refer什么什么错误，可能是1.19.40+的垃圾特性，重启即可，有概率因为/reload或进入游戏而出现",
            //         // "1.19.40版本的假人销毁，并不是真正意义上的销毁，可以定期/reload而真正释放",
            //         "积累过多假人可能会增加不可预测的bug被触发的概率",
            //         "文件充满汉语是整活",
            //         "现在依旧是汉语是因为整活把源文件整丢了",
            //         "输入‘假人github’了解更多"
            //     ].forEach((text) => 发起者.sendMessage(`§e§l-${text}`))
            // }
            // ;
        }
        // catch(e){
        //     console.error('[假人]内置插件command error '+e)
        //
        // }
})


// console.error('[假人]内置插件command加载成功')