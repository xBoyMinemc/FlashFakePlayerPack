import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人装备交换','假人交换装备'], ({player,simulatedPlayer: sim}) => {
    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)
    if(!player && !sim)return

    const s = simulatedPlayer.getComponent("minecraft:equippable") // SimPlayer

    const p = player.getComponent("minecraft:equippable") // player
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
