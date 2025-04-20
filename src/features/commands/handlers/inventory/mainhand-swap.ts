import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries/Util";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.registerCommand('假人主手物品交换', ({entity,sim}) => {

    const SimPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(entity)

    const s = SimPlayer.getComponent("minecraft:equippable")

    const p = entity.getComponent("minecraft:equippable")
    const i = EquipmentSlot['Mainhand'] ?? EquipmentSlot['mainhand']
    const _ = s.getEquipment(<EquipmentSlot>i)
    const __ = p.getEquipment(<EquipmentSlot>i)
    s.setEquipment(<EquipmentSlot>i, __)
    p.setEquipment(<EquipmentSlot>i, _)
});
