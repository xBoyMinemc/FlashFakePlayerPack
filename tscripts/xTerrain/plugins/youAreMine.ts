import type { SimulatedPlayer } from '@minecraft/server-gametest'
import { getSimPlayer } from '../../lib/xboyPackage/Util'
import {CommandRegistry, type CommandInfo, getLocationFromEntityLike} from '../../lib/yumeCommand/CommandRegistry'
import {
    world,
    EntityEquippableComponent,
    EntityInventoryComponent,
    EquipmentSlot,
    TicksPerSecond
} from '@minecraft/server'
import { simulatedPlayers } from '../main'


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

    const p = entity.getComponent("minecraft:equippable")
    const i = EquipmentSlot['Mainhand'] ?? EquipmentSlot['mainhand']
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

    const p = entity.getComponent("minecraft:equippable")
    const i = EquipmentSlot['Offhand'] ?? EquipmentSlot['offhand']
    const _ = s.getEquipment(<EquipmentSlot>i)
    const __ = p.getEquipment(<EquipmentSlot>i)
    s.setEquipment(<EquipmentSlot>i, __)
    p.setEquipment(<EquipmentSlot>i, _)
})


// swapInventory
// commandRegistry.registerAlias('swapInventory','假人背包交换')
commandRegistry.registerAlias('假人交换背包','假人背包交换')
commandRegistry.registerCommand('假人背包交换', ({entity,isEntity,sim}) => {
    if(!isEntity && !sim)return
    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    if(!SimPlayer)return
    const s = (<EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")).container

    const p = entity.getComponent("minecraft:inventory").container

    for
    (
        let i = p.size;
        i--;
        s.getItem(i)
            ?
            p.getItem(i)
                ? s.swapItems(i, i, p)
                : s.moveItem(i, i, p)
            :
            p.getItem(i)
                ? p.moveItem(i, i, s)
                : "这行代码，我再维护我是狗"
    ) ;

})


// swapEquipment
// commandRegistry.registerAlias('swapEquipment','假人装备交换')
commandRegistry.registerAlias('假人交换装备','假人装备交换')
commandRegistry.registerCommand('假人装备交换', ({entity,isEntity,sim}) => {

    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.formView(entity)
    if(!isEntity && !sim)return

    const s = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable") // SimPlayer

    const p = entity.getComponent("minecraft:equippable") // player
    for (const i in  EquipmentSlot) {
        //跳过主手
        if (i === EquipmentSlot['Mainhand']) continue
        // console.error(i)
        const _ = s.getEquipment(<EquipmentSlot>i)
        const __ = p.getEquipment(<EquipmentSlot>i)
        s.setEquipment(<EquipmentSlot>i, __) //set SimPlayer item
        p.setEquipment(<EquipmentSlot>i, _) //set player item
    }
})


const returnResWithoutArgs = ({entity,isEntity,sim}:CommandInfo)=>{
    if(!isEntity && !sim) {
        console.error('error not isEntity')
        return
    }

    const SimPlayer:SimulatedPlayer = sim ?? getSimPlayer.formView(entity)
    if(!SimPlayer)return

    const equip = <EntityEquippableComponent>SimPlayer.getComponent("minecraft:equippable")

    // emmm你这变量名
    const { location:l, dimension:d } = entity

    for (const i in EquipmentSlot) {
        //跳过主手
        if (i === EquipmentSlot['Mainhand']) continue
        // 获取
        const item = equip.getEquipment(<EquipmentSlot>i)
        if(!item)continue
        // 生成于外部
        d.spawnItem(item,l)
        // 置空
        equip.setEquipment(<EquipmentSlot>i, null) //undefined? new ItemStack('air')?
    }
    const { container:s } =  <EntityInventoryComponent>SimPlayer.getComponent("minecraft:inventory")

    for (
        let i = s.size;
        i--;
        s.getItem(i) && d.spawnItem(s.getItem(i), l) && s.setItem(i, null /* new ItemStack('air') */ )
    ) ;

    // SimPLayer's xp turn to player
    const total = SimPlayer.getTotalXp()
    if(total!==0){
        entity.sendMessage('xp +'+total);
        entity.addExperience(total);
        SimPlayer.resetLevel();
        entity.playSound('random.levelup');
    }
}

// recycle item and exp
commandRegistry.registerCommand('假人资源回收', returnResWithoutArgs)
commandRegistry.registerAlias('假人背包清空','假人背包清空')
commandRegistry.registerAlias('假人爆金币','假人背包清空')


// disconnect
commandRegistry.registerAlias('假人移除','假人销毁')
commandRegistry.registerAlias('假人清除','假人销毁')
commandRegistry.registerCommand('假人销毁', ({entity,isEntity,args,sim}) => {
    if(sim)return sim.disconnect()

    if(!isEntity) {
        console.error('error not isEntity')
        return
    }
    if(args.length===1){
        const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
        if(!SimPlayer)return entity.sendMessage("§e§l-面前不存在模拟玩家")

        commandRegistry.executeCommand('假人背包清空',{args:['假人背包清空'],entity,isEntity,sim:SimPlayer,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        SimPlayer.disconnect()
    }
    else {
        const index = Number(args[1])

        if(typeof index !== 'number')return  entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[1]))

        const SimPlayer:SimulatedPlayer = simulatedPlayers[index]

        if(!SimPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        commandRegistry.executeCommand('假人背包清空',{args:['假人背包清空'],entity,isEntity,sim:SimPlayer,location:getLocationFromEntityLike(entity)})
        entity.sendMessage("§e§l-拜拜了您内")
        SimPlayer.disconnect()
    }

})

// respawn
commandRegistry.registerAlias('假人复活','假人重生')
commandRegistry.registerAlias('复活吧，我的爱人','假人重生')
commandRegistry.registerAlias('复活吧！我的爱人','假人重生')
commandRegistry.registerAlias('复活吧!我的爱人','假人重生')
commandRegistry.registerAlias('复活吧我的爱人','假人重生')
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

        if(typeof index !== 'number')return entity?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(args[1]))

        const SimPlayer:SimulatedPlayer = simulatedPlayers[index]

        if(!SimPlayer)return entity.sendMessage("§e§l-不存在模拟玩家"+index)

        SimPlayer.respawn()

    }

})


// time
commandRegistry.registerCommand('假人时区', ({entity}) => {
    // entity.sendMessage(''+Intl.DateTimeFormat().resolvedOptions().timeZone)

    const now = new Date()
    const offsetMinutes = now.getTimezoneOffset()
    const offsetHours = offsetMinutes / 60

    entity.sendMessage(`本地时间：${now}`)
    entity.sendMessage(`UTC偏移量：${offsetMinutes} 分钟`)
    entity.sendMessage(`UTC偏移量：${offsetHours} 小时`)
    entity.sendMessage(`TicksPerSecond：${TicksPerSecond}`)
})

// List
commandRegistry.registerCommand('假人列表', ({entity}) => {
    if(Object.keys(simulatedPlayers).length===0) return entity.sendMessage('列表空的')
    for (const index in simulatedPlayers) if (simulatedPlayers[index] && Number(index)>=0)
        entity.sendMessage(`§e§l-序号：${index} ## 生成名称: ${simulatedPlayers[index].name}${simulatedPlayers[index].name===simulatedPlayers[index].nameTag?'':' #当前名称: '+simulatedPlayers[index].nameTag}`)
})

// rename
commandRegistry.registerAlias('假人重命名','假人改名')
commandRegistry.registerAlias('假人换名','假人改名')
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
        commandRegistry.executeCommand(args[0],{isEntity:true,entity:sender,location:getLocationFromEntityLike(sender),args})

    if(message==='showshowway'){
        sender.sendMessage(commandRegistry.showList().toString())
    }
})

// location
commandRegistry.registerAlias('假人坐标', '假人位置');
commandRegistry.registerCommand('假人位置', ({ entity, isEntity, args }) => {
    if (!isEntity && args.length === 1) {
        console.error('error not isEntity');
        return;
    }
    let SimPlayer: SimulatedPlayer;
    if (args.length === 1) {
        ;
        ; "对准~";
        ;
        SimPlayer = getSimPlayer.formView(entity);
        if (!SimPlayer) return entity.sendMessage("§e§l-面前不存在模拟玩家");
    } else if (args.length === 2) {
        const index = Number(args[1]);
        if (typeof index !== 'number') return entity.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + typeof Number(args[1]));

        SimPlayer = simulatedPlayers[index];

        if (!SimPlayer) return entity.sendMessage("§e§l-不存在模拟玩家" + index);
    }

    const { x, y, z } = SimPlayer.location;
    entity.sendMessage(`§e§l${SimPlayer.name}位于 (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}) 维度: ${SimPlayer.dimension.id}`);
});
// 你懂的~
// youAreMine
// ~
// console.error('[模拟玩家]内置插件youAreMine加载完成')
