import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry } from "../../lib/yumeCommand/CommandRegistry";
import { EquipmentSlot } from "@minecraft/server";
import { SimulatedPlayerList } from "../main";
// 后面还要重构一遍
// const commandName1 = '假人背包交换'
// const commandName2 = '假人装备交换'
// const commandName3 = '假人背包清空'
// 首先注册命令
const commandRegistry = new CommandRegistry();
// commandRegistry.registerCommand(commandName1)
// commandRegistry.registerCommand(commandName2)
// commandRegistry.registerCommand(commandName3)
commandRegistry.registerCommand('假人背包交换', ({ entity, isEntity }) => {
    if (!isEntity)
        return;
    const SimPlayer = getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    const p = entity.getComponent("minecraft:inventory").container;
    for (let i = p.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗")
        ;
});
commandRegistry.registerCommand('假人装备交换', ({ entity, isEntity }) => {
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
const returnResWithoutArgs = ({ entity, isEntity, sim }) => {
    if (!isEntity) {
        console.error('error not isEntity');
        return;
    }
    const SimPlayer = sim ?? getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    const _s = SimPlayer.getComponent("minecraft:equippable");
    const l = entity.location;
    const d = entity.dimension;
    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === "Mainhand")
            continue;
        // 获取
        const _ = _s.getEquipment(i);
        if (!_)
            continue;
        // 生成于外部
        d.spawnItem(_, l);
        // 置空
        _s.setEquipment(i, undefined);
    }
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    for (let i = s.size; i--; s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是小狗")
        ;
    // SimPLayer's xp turn to player
    const total = SimPlayer.getTotalXp();
    if (total !== 0) {
        entity.sendMessage('xp +' + total),
            entity.addExperience(total),
            SimPlayer.resetLevel(),
            entity.playSound('random.levelup');
    }
};
commandRegistry.registerCommand('假人背包清空', returnResWithoutArgs);
commandRegistry.registerAlias('假人资源回收', '假人背包清空');
// disconnect
commandRegistry.registerCommand('假人销毁', ({ entity, isEntity, args }) => {
    if (!isEntity) {
        console.error('error not isEntity');
        return;
    }
    if (args.length === 1) {
        const SimPlayer = getSimPlayer.formView(entity);
        if (!SimPlayer)
            return entity.sendMessage("§e§l-面前不存在模拟玩家");
        commandRegistry.executeCommand('假人背包清空', { args: ['假人背包清空'], entity, isEntity, sim: SimPlayer });
        entity.sendMessage("§e§l-拜拜了您内");
        SimPlayer.disconnect();
    }
    else {
        const index = Number(args[1]);
        if (typeof index !== 'number')
            return entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + typeof Number(args[1]));
        const SimPlayer = SimulatedPlayerList[index];
        if (!SimPlayer)
            return entity.sendMessage("§e§l-不存在模拟玩家" + index);
        commandRegistry.executeCommand('假人背包清空', { args: ['假人背包清空'], entity, isEntity, sim: SimPlayer });
        entity.sendMessage("§e§l-拜拜了您内");
        SimPlayer.disconnect();
    }
});
commandRegistry.registerAlias('假人移除', '假人销毁');
commandRegistry.registerAlias('假人清除', '假人销毁');
// respawn
commandRegistry.registerCommand('假人重生', ({ entity, isEntity, args }) => {
    if (!isEntity && args.length === 1) {
        console.error('error not isEntity');
        return;
    }
    if (args.length === 1) {
        ;
        ;
        "对准~";
        ;
        const SimPlayer = getSimPlayer.formView(entity);
        if (!SimPlayer)
            return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话"); //entity.sendMessage("§e§l-面前不存在模拟玩家")
        SimPlayer.respawn();
    }
    else {
        ;
        ;
        "云梦知道有人对不准，所以给你做了指向性的功能，输入假人序号即可";
        ;
        const index = Number(args[1]);
        if (typeof index !== 'number')
            return entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + typeof Number(args[1]));
        const SimPlayer = SimulatedPlayerList[index];
        if (!SimPlayer)
            return entity.sendMessage("§e§l-不存在模拟玩家" + index);
        SimPlayer.respawn();
    }
}
// List
, 
// List
commandRegistry.registerCommand('假人列表', ({ entity }) => {
    if (Object.keys(SimulatedPlayerList).length === 0)
        entity.sendMessage('列表空的');
    for (const index in SimulatedPlayerList)
        if (SimulatedPlayerList[index])
            entity.sendMessage(`§e§l-序号：${index} ## 生成名称: ${SimulatedPlayerList[index].name}${SimulatedPlayerList[index].name === SimulatedPlayerList[index].nameTag ? '' : ' #当前名称: ' + SimulatedPlayerList[index].nameTag}`);
})
// rename
, 
// rename
commandRegistry.registerCommand('假人改名', ({ entity, isEntity, args }) => {
    if (!isEntity && args.length === 1) {
        console.error('error not isEntity');
        return;
    }
    if (args.length === 2) {
        ;
        ;
        "对准~";
        ;
        const SimPlayer = getSimPlayer.formView(entity);
        if (!SimPlayer)
            return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话"); //entity.sendMessage("§e§l-面前不存在模拟玩家")
        SimPlayer.nameTag = args[1];
        entity.sendMessage("§e§l-改名成功");
    }
}), world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    const args = CommandRegistry.parse(message);
    if (commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0], { isEntity: true, entity: sender, location: sender.location, args });
}));
// 你懂的~
// youAreMine
// ~
// console.error('[假人]内置插件youAreMine加载完成')
