import { getSimPlayer } from "../../lib/xboyPackage/Util";
import { CommandRegistry } from "../../lib/yumeCommand/CommandRegistry";
import { EquipmentSlot } from "@minecraft/server";
// 后面还要重构一遍
// const commandName1 = '假人背包交换'
// const commandName2 = '假人装备交换'
const commandName3 = '假人背包清空';
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
commandRegistry.registerCommand('假人背包清空', ({ entity, isEntity }) => {
    if (!isEntity) {
        console.error('error not isEntity');
        return;
    }
    const SimPlayer = getSimPlayer.formView(entity);
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
    entity.addExperience(SimPlayer.getTotalXp()) ? SimPlayer.resetLevel() : '??what?';
    // console.error('getTotalXp '+SimPlayer.getTotalXp())
    //获取某一级到下一级需要多少经验
    // const getXpInLevel = (level:number)=>{
    //     if(level<0)level=-level;
    //     if(level<=15)return (level<<1)+7;
    //     if(level<=30)return (level<<2)+level-38;
    //     //>=31
    //     return (level<<3)+level-158;
    //
    //     //别问为什么位运算，问就是我为了给level取个整数
    // }
    // const getXpZero2Level = (level:number)=>  (--level>=1 ? getXpZero2Level(level) :0) + getXpInLevel(level)
    //
    // const total = getXpZero2Level(SimPlayer.level)+SimPlayer.xpEarnedAtCurrentLevel
});
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    const args = CommandRegistry.parse(message);
    if (commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0], { isEntity: true, entity: sender, location: sender.location, args });
});
// 你懂的~
// youAreMine
// ~
console.error('[假人]内置插件youAreMine加载完成');
const getXpInLevel = (level) => {
    if (level < 0)
        level = -level;
    if (level <= 15)
        return (level << 1) + 7;
    if (level <= 30)
        return (level << 2) + level - 38;
    //>=31
    return (level << 3) + level - 158;
    //别问为什么位运算，问就是我为了给level取个整数
};
let level = 29;
let tt = 0;
while (level >= 0) {
    tt += getXpInLevel(level--);
}
console.log(tt);
