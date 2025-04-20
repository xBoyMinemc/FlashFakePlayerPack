import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries/Util";
import { EquipmentSlot, type EntityEquippableComponent, type EntityInventoryComponent } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.registerCommand(['假人资源回收','假人背包清空','假人爆金币'], ({entity,isEntity,sim})=>{
    if(!isEntity && !sim) {
        console.error('error not isEntity')
        return
    }

    const SimPlayer:SimulatedPlayer = sim ?? getSimPlayer.fromView(entity)
    if(!SimPlayer)return

    const equip = <EntityEquippableComponent><unknown>SimPlayer.getComponent("minecraft:equippable")

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

    const { container:s } =  <EntityInventoryComponent><unknown>SimPlayer.getComponent("minecraft:inventory")

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
});
