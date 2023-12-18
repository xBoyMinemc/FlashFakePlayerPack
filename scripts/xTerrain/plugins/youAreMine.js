import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry } from "../../lib/yumeCommand/CommandRegistry";
import { EquipmentSlot, TicksPerSecond } from "@minecraft/server";
import { SimulatedPlayerEnum } from "../main";
export const commandRegistry = new CommandRegistry();
commandRegistry.registerCommand('假人主手物品交换', ({ entity, sim }) => {
    const SimPlayer = sim || getSimPlayer.formView(entity);
    const s = SimPlayer.getComponent("minecraft:equippable");
    const p = entity.getComponent("minecraft:equippable");
    const i = EquipmentSlot.Mainhand;
    const _ = s.getEquipment(i);
    const __ = p.getEquipment(i);
    s.setEquipment(i, __);
    p.setEquipment(i, _);
});
commandRegistry.registerCommand('假人副手物品交换', ({ entity, sim }) => {
    const SimPlayer = sim || getSimPlayer.formView(entity);
    const s = SimPlayer.getComponent("minecraft:equippable");
    const p = entity.getComponent("minecraft:equippable");
    const i = EquipmentSlot.Offhand;
    const _ = s.getEquipment(i);
    const __ = p.getEquipment(i);
    s.setEquipment(i, __);
    p.setEquipment(i, _);
});
commandRegistry.registerCommand('假人背包交换', ({ entity, isEntity, sim }) => {
    if (!isEntity && !sim)
        return;
    const SimPlayer = sim || getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    const p = entity.getComponent("minecraft:inventory").container;
    for (let i = p.size; i--; s.getItem(i) ? p.getItem(i) ? s.swapItems(i, i, p) : s.moveItem(i, i, p) : p.getItem(i) ? p.moveItem(i, i, s) : "这行代码，我再维护我是狗")
        ;
});
commandRegistry.registerCommand('假人装备交换', ({ entity, isEntity, sim }) => {
    const SimPlayer = sim || getSimPlayer.formView(entity);
    const s = SimPlayer.getComponent("minecraft:equippable");
    const p = entity.getComponent("minecraft:equippable");
    for (const i in EquipmentSlot) {
        if (i === "Mainhand" || i === "mainhand")
            continue;
        const _ = s.getEquipment(i);
        const __ = p.getEquipment(i);
        s.setEquipment(i, __);
        p.setEquipment(i, _);
    }
});
const returnResWithoutArgs = ({ entity, isEntity, sim }) => {
    if (!isEntity && !sim) {
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
        if (i === "Mainhand")
            continue;
        const _ = _s.getEquipment(i);
        if (!_)
            continue;
        d.spawnItem(_, l);
        _s.setEquipment(i, undefined);
    }
    const s = SimPlayer.getComponent("minecraft:inventory").container;
    for (let i = s.size; i--; s.getItem(i) ? (d.spawnItem(s.getItem(i), l), s.setItem(i, null)) : "这行代码，我再维护我是小狗")
        ;
    const total = SimPlayer.getTotalXp();
    if (total !== 0) {
        entity.sendMessage('xp +' + total),
            entity.addExperience(total),
            SimPlayer.resetLevel(),
            entity.playSound('random.levelup');
    }
};
commandRegistry.registerCommand('假人资源回收', returnResWithoutArgs);
commandRegistry.registerAlias('假人背包清空', '假人背包清空');
commandRegistry.registerAlias('假人爆金币', '假人背包清空');
commandRegistry.registerCommand('假人销毁', ({ entity, isEntity, args, sim }) => {
    if (sim)
        return sim.disconnect();
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
        const SimPlayer = SimulatedPlayerEnum[index];
        if (!SimPlayer)
            return entity.sendMessage("§e§l-不存在模拟玩家" + index);
        commandRegistry.executeCommand('假人背包清空', { args: ['假人背包清空'], entity, isEntity, sim: SimPlayer });
        entity.sendMessage("§e§l-拜拜了您内");
        SimPlayer.disconnect();
    }
});
commandRegistry.registerAlias('假人移除', '假人销毁');
commandRegistry.registerAlias('假人清除', '假人销毁');
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
            return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话");
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
        const SimPlayer = SimulatedPlayerEnum[index];
        if (!SimPlayer)
            return entity.sendMessage("§e§l-不存在模拟玩家" + index);
        SimPlayer.respawn();
    }
});
commandRegistry.registerCommand('假人时区', ({ entity }) => {
    const now = new Date();
    const offsetMinutes = now.getTimezoneOffset();
    const offsetHours = offsetMinutes / 60;
    entity.sendMessage(`本地时间：${now}`);
    entity.sendMessage(`UTC偏移量：${offsetMinutes} 分钟`);
    entity.sendMessage(`UTC偏移量：${offsetHours} 小时`);
    entity.sendMessage(`TicksPerSecond：${TicksPerSecond}`);
});
commandRegistry.registerCommand('假人列表', ({ entity }) => {
    if (Object.keys(SimulatedPlayerEnum).length === 0)
        entity.sendMessage('列表空的');
    for (const index in SimulatedPlayerEnum)
        if (SimulatedPlayerEnum[index])
            entity.sendMessage(`§e§l-序号：${index} ## 生成名称: ${SimulatedPlayerEnum[index].name}${SimulatedPlayerEnum[index].name === SimulatedPlayerEnum[index].nameTag ? '' : ' #当前名称: ' + SimulatedPlayerEnum[index].nameTag}`);
});
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
            return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话");
        SimPlayer.nameTag = args[1];
        entity.sendMessage("§e§l-改名成功");
    }
});
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    const args = CommandRegistry.parse(message);
    if (commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0], { isEntity: true, entity: sender, location: sender.location, args });
});
