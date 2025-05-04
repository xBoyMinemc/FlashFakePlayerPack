import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add('假人主手物品交换', ({player,simulatedPlayer: sim}) => {

    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)

    const s = simulatedPlayer.getComponent("minecraft:equippable")

    const p = player.getComponent("minecraft:equippable")
    const i = EquipmentSlot['Mainhand'] ?? EquipmentSlot['mainhand']
    const _ = s.getEquipment(<EquipmentSlot>i)
    const __ = p.getEquipment(<EquipmentSlot>i)
    s.setEquipment(<EquipmentSlot>i, __)
    p.setEquipment(<EquipmentSlot>i, _)
});
