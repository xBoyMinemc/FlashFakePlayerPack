import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry } from "../../lib/yumeCommand/CommandRegistry";
import { EquipmentSlot } from "@minecraft/server";
// 后面还要重构一遍
const commandName1 = '假人背包交换';
const commandName2 = '假人装备交换';

const commandName3 = '假人背包清空';
// 首先注册命令
const commandRegistry = new CommandRegistry();
commandRegistry.registerCommand(commandName1);
commandRegistry.registerCommand(commandName2);
commandRegistry.registerCommand(commandName3);
commandRegistry.registerCommand(commandName1, ({ entity, isEntity }) => {
    if (!isEntity)
        return;
    const SimPlayer = getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    const p = entity.getComponent("minecraft:inventory").container;
    for (let i = entity.getComponent("minecraft:inventory").container.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗")
        ;
});
commandRegistry.registerCommand(commandName2, ({ entity, isEntity }) => {
    const SimPlayer = getSimPlayer.formView(entity);
    const s = SimPlayer.getComponent("minecraft:equippable");
    const p = entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand")
            continue;
        // console.error(i)
        const _ = s.getEquipment(i);
        const __ = p.getEquipment(i);
        s.setEquipment(i, __);
        p.setEquipment(i, _);
    }
});
commandRegistry.registerCommand(commandName2, ({ entity, isEntity }) => {
    const SimPlayer = getSimPlayer.formView(entity);
    const s = SimPlayer.getComponent("minecraft:equippable");
    const p = entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand")
            continue;
        // console.error(i)
        const _ = s.getEquipment(i);
        const __ = p.getEquipment(i);
        s.setEquipment(i, __);
        p.setEquipment(i, _);
    }
});
commandRegistry.registerCommand(commandName3, ({ entity, isEntity }) => {
    if (!isEntity)
        return console.error('error not isEntity');
    const SimPlayer = getSimPlayer.formView(entity);
    const _s = SimPlayer.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "mainhand")
            continue;
        // 获取
        const _ = _s.getEquipment(i);
        // 置空
        _s.setEquipment(i, undefined);
    }
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    const l = entity.location;
    const d = entity.dimension;
    for (let i = SimPlayer.getComponent("minecraft:inventory").container.size; i--; s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是狗")
        ;
});
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    const args = CommandRegistry.parse(message);
    if (args[0] === commandName1)
        return commandRegistry.executeCommand(commandName1, {
            commandName: commandName1,
            entity: sender,
            isEntity: true,
            args: CommandRegistry.parse(message) // 参数
        });
    if (args[0] === commandName2)
        return commandRegistry.executeCommand(commandName1, {
            commandName: commandName2,
            entity: sender,
            isEntity: true,
            args: CommandRegistry.parse(message) // 参数
        });
});
// 你懂的~
// youAreMine
// ~
console.error('[假人]内置插件youAreMine加载完成');
