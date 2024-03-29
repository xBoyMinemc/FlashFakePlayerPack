import type { World } from "../../@types/globalThis";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import type {Dimension, Entity, EntityInventoryComponent, Player, Vector3} from "@minecraft/server";
import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry, type commandInfo } from "../../lib/yumeCommand/CommandRegistry";
import {Container, EntityEquippableComponent, EquipmentSlot, TicksPerSecond} from "@minecraft/server";
import { SimulatedPlayerEnum } from "../main";

declare const world: World

// 后面还要重构一遍
// const commandName1 = '假人背包交换'
// const commandName2 = '假人装备交换'
// const commandName3 = '假人背包清空'
// 首先注册命令
export const commandRegistry: CommandRegistry = new CommandRegistry()
// commandRegistry.registerCommand(commandName1)
// commandRegistry.registerCommand(commandName2)
// commandRegistry.registerCommand(commandName3)


// swapMainhandItem
// commandRegistry.registerAlias('swapInventory','假人主手物品交换')
commandRegistry.registerCommand('假人主手物品交换', ({entity,sim}) => {

    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable")

    const p = <EntityEquippableComponent>entity.getComponent("minecraft:equippable")
    const i = EquipmentSlot.Mainhand
    const _ = s.getEquipment(<EquipmentSlot>i)
    const __ = p.getEquipment(<EquipmentSlot>i)
    s.setEquipment(<EquipmentSlot>i, __)
    p.setEquipment(<EquipmentSlot>i, _)
})
// swapOffhandItem
// commandRegistry.registerAlias('swapInventory','假人副手物品交换')
commandRegistry.registerCommand('假人副手物品交换', ({entity,sim}) => {

    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable")

    const p = <EntityEquippableComponent>entity.getComponent("minecraft:equippable")
    const i = EquipmentSlot.Offhand
    const _ = s.getEquipment(<EquipmentSlot>i)
    const __ = p.getEquipment(<EquipmentSlot>i)
    s.setEquipment(<EquipmentSlot>i, __)
    p.setEquipment(<EquipmentSlot>i, _)
})

// swapInventory
// commandRegistry.registerAlias('swapInventory','假人背包交换')
commandRegistry.registerCommand('假人背包交换', ({entity,isEntity,sim}) => {
    if(!isEntity && !sim)return
    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    if(!SimPlayer)return
    const s = (<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container

    const p = (<EntityInventoryComponent>entity.getComponent("minecraft:inventory")).container

    for (let i = p.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗") ;

})
// swapEquipment
// commandRegistry.registerAlias('swapEquipment','假人装备交换')
commandRegistry.registerCommand('假人装备交换', ({entity,isEntity,sim}) => {

    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable");

    const p = <EntityEquippableComponent>entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "Mainhand" || i === "mainhand") continue;
        // console.error(i)
        const _ = s.getEquipment(<EquipmentSlot>i);
        const __ = p.getEquipment(<EquipmentSlot>i);
        s.setEquipment(<EquipmentSlot>i, __);
        p.setEquipment(<EquipmentSlot>i, _);
    }
})



const returnResWithoutArgs = ({entity,isEntity,sim}:commandInfo)=>{
    if(!isEntity && !sim) {
        console.error('error not isEntity')
        return
    }

    const SimPlayer:SimulatedPlayer = sim ?? getSimPlayer.formView(entity)
    if(!SimPlayer)return

    const _s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable")

    const l = <Vector3>entity.location
    const d = <Dimension>entity.dimension

    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "Mainhand") continue;
        // 获取
        const _ = _s.getEquipment(<EquipmentSlot>i)
        if(!_)continue
        // 生成于外部
        d.spawnItem(_,l)
        // 置空
        _s.setEquipment(<EquipmentSlot>i, undefined)

    }
    const s = <Container>(<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container

    for (
        let i = s.size;
        i--;
        s.getItem(i) ? (d.spawnItem(s.getItem(i), l) , s.setItem(i, null)) : "这行代码，我再维护我是小狗"
    ) ;

    // SimPLayer's xp turn to player
    const total = SimPlayer.getTotalXp()
    if(total!==0){
        (<Player>entity).sendMessage('xp +'+total),
            (<Player>entity).addExperience(total),
            SimPlayer.resetLevel(),
            entity.playSound('random.levelup')
    }
}

// recycle item and exp
commandRegistry.registerCommand('假人资源回收', returnResWithoutArgs)
commandRegistry.registerAlias('假人背包清空','假人背包清空')


// disconnect
commandRegistry.registerCommand('假人销毁', ({entity,isEntity,args,sim}) => {
    if(sim)return sim.disconnect()

    if(!isEntity) {
        console.error('error not isEntity')
        return
    }
    if(args.length===1){
        const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
        if(!SimPlayer)return entity.sendMessage("§e§l-面前不存在模拟玩家")

        commandRegistry.executeCommand('假人背包清空',{args:['假人背包清空'],entity,isEntity,sim:SimPlayer})
        entity.sendMessage("§e§l-拜拜了您内")
        SimPlayer.disconnect()
    }
    else {
        const index = Number(args[1])

        if(typeof index !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[1]))

        const SimPlayer:SimulatedPlayer = SimulatedPlayerEnum[index]

        if(!SimPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        commandRegistry.executeCommand('假人背包清空',{args:['假人背包清空'],entity,isEntity,sim:SimPlayer})
        entity.sendMessage("§e§l-拜拜了您内")
        SimPlayer.disconnect()
    }

})


commandRegistry.registerAlias('假人移除','假人销毁')
commandRegistry.registerAlias('假人清除','假人销毁')

// respawn
commandRegistry.registerCommand('假人重生', ({entity,isEntity,args}) => {


    if(!isEntity && args.length===1) {
        console.error('error not isEntity')
        return
    }

    if(args.length===1){
        ;
        ;"对准~";
        ;
        const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
        if(!SimPlayer)return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话")  //entity.sendMessage("§e§l-面前不存在模拟玩家")
        SimPlayer.respawn()
    }else {
        ;
        ;"云梦知道有人对不准，所以给你做了指向性的功能，输入假人序号即可";
        ;
        const index = Number(args[1])

        if(typeof index !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[1]))

        const SimPlayer:SimulatedPlayer = SimulatedPlayerEnum[index]

        if(!SimPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        SimPlayer.respawn()

    }

})

// time
commandRegistry.registerCommand('假人时区', ({entity}) => {
    // entity.sendMessage(''+Intl.DateTimeFormat().resolvedOptions().timeZone)

    const now = new Date();
    const offsetMinutes = now.getTimezoneOffset();
    const offsetHours = offsetMinutes / 60;

    entity.sendMessage(`本地时间：${now}`);
    entity.sendMessage(`UTC偏移量：${offsetMinutes} 分钟`);
    entity.sendMessage(`UTC偏移量：${offsetHours} 小时`);
    entity.sendMessage(`TicksPerSecond：${TicksPerSecond}`);
})

// List
commandRegistry.registerCommand('假人列表', ({entity}) => {
    if(Object.keys(SimulatedPlayerEnum).length===0) entity.sendMessage('列表空的')
    for (const index in SimulatedPlayerEnum) if (SimulatedPlayerEnum[index]) entity.sendMessage(`§e§l-序号：${index} ## 生成名称: ${SimulatedPlayerEnum[index].name}${SimulatedPlayerEnum[index].name===SimulatedPlayerEnum[index].nameTag?'':' #当前名称: '+SimulatedPlayerEnum[index].nameTag}`);
})

// rename
commandRegistry.registerCommand('假人改名', ({entity,isEntity,args})=> {

    if(!isEntity && args.length===1) {
        console.error('error not isEntity')
        return
    }

    if(args.length===2){
        ;
        ;"对准~";
        ;
        const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
        if(!SimPlayer)return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话")  //entity.sendMessage("§e§l-面前不存在模拟玩家")
        SimPlayer.nameTag = args[1]
        entity.sendMessage("§e§l-改名成功")
    }

})


world.afterEvents.chatSend.subscribe(({message, sender})=> {
    const args = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0],{isEntity:true,entity:sender,location:sender.location,args})
})
// 你懂的~
// youAreMine
// ~
// console.error('[假人]内置插件youAreMine加载完成')
