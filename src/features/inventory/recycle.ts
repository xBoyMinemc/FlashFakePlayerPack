import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import { EntityComponentTypes, EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.register(['假人资源回收','假人背包清空','假人爆金币'], ({player,simulatedPlayer: sim})=>{
    if(!player && !sim) {
        console.error('error not isEntity')
        return
    }

    const simulatedPlayer:SimulatedPlayer = sim ?? getSimPlayer.fromView(player)
    if(!simulatedPlayer)return

    const equip = simulatedPlayer.getComponent(EntityComponentTypes.Equippable)

    // emmm你这变量名
    const { location:l, dimension:d } = player

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

    const { container:s } =  simulatedPlayer.getComponent(EntityComponentTypes.Inventory)

    for (
        let i = s.size;
        i--;
        s.getItem(i) && d.spawnItem(s.getItem(i), l) && s.setItem(i, null /* new ItemStack('air') */ )
    ) ;

    // SimPLayer's xp turn to player
    const total = simulatedPlayer.getTotalXp()
    if(total!==0){
        player.sendMessage('xp +'+total);
        player.addExperience(total);
        simulatedPlayer.resetLevel();
        player.playSound('random.levelup');
    }
});
