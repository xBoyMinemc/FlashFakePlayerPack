import type { World } from "../../@types/globalThis";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import type { EntityInventoryComponent } from "@minecraft/server";
import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry } from "../../lib/yumeCommand/CommandRegistry";
import {Container, EntityEquippableComponent, EquipmentSlot} from "@minecraft/server";

declare const world: World

// 后面还要重构一遍
const commandName1 = '假人背包交换'
const commandName2 = '假人装备交换'
const commandName3 = '假人背包清空'
// 首先注册命令
const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand(commandName1)
commandRegistry.registerCommand(commandName2)
commandRegistry.registerCommand(commandName3)
commandRegistry.registerCommand(commandName1, ({entity,isEntity}) => {
    if(!isEntity)return
    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return
    const s = (<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container

    const p = (<EntityInventoryComponent>entity.getComponent("minecraft:inventory")).container

    for (let i = entity.getComponent("minecraft:inventory").container.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗") ;

})
commandRegistry.registerCommand(commandName2, ({entity,isEntity}) => {

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable");

    const p = <EntityEquippableComponent>entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand") continue;
        // console.error(i)
        const _ = s.getEquipment(<EquipmentSlot>i);
        const __ = p.getEquipment(<EquipmentSlot>i);
        s.setEquipment(<EquipmentSlot>i, __);
        p.setEquipment(<EquipmentSlot>i, _);
    }
})
commandRegistry.registerCommand(commandName2, ({entity,isEntity}) => {

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable");

    const p = <EntityEquippableComponent>entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand") continue;
        // console.error(i)
        const _ = s.getEquipment(<EquipmentSlot>i);
        const __ = p.getEquipment(<EquipmentSlot>i);
        s.setEquipment(<EquipmentSlot>i, __);
        p.setEquipment(<EquipmentSlot>i, _);
    }
})
commandRegistry.registerCommand(commandName3, ({entity,isEntity}) => {

    if(!isEntity)return console.error('error not isEntity')
    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    const _s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand") continue;
        // 获取
        const _ = _s.getEquipment(<EquipmentSlot>i);
        // 置空
        _s.setEquipment(<EquipmentSlot>i, undefined);
    }
    const s = <Container>(<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container;

    const l = entity.location;
    const d = entity.dimension;


    for (
        let i = (<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container.size;
        i--;
        s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是狗"
    ) ;

})

world.afterEvents.chatSend.subscribe(({message, sender})=> {
    const args = CommandRegistry.parse(message)
    if(args[0]===commandName1)
        return  commandRegistry.executeCommand(commandName1, {
        commandName: commandName1, // 命令名
        entity: sender, // 执行实体
        isEntity: true, // 是否是实体执行
        args: CommandRegistry.parse(message) // 参数
    })
    if(args[0]===commandName2)
        return  commandRegistry.executeCommand(commandName1, {
        commandName: commandName2, // 命令名
        entity: sender, // 执行实体
        isEntity: true, // 是否是实体执行
        args: CommandRegistry.parse(message) // 参数
    })
})
// 你懂的~
// youAreMine
// ~
console.error('[假人]内置插件youAreMine加载完成')

