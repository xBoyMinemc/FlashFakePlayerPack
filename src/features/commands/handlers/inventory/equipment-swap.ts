import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries/Util";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.registerCommand(['假人装备交换','假人交换装备'], ({entity,isEntity,sim}) => {
    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(entity)
    if(!isEntity && !sim)return

    const s = SimPlayer.getComponent("minecraft:equippable") // SimPlayer

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
});
