import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import { swapEquipment } from "./utils";

commandManager.register(['假人装备交换','假人交换装备'], ({player,simulatedPlayer: sim}) => {
    if(!player && !sim)return
    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)

    for (const i in  EquipmentSlot) {
        if (i === EquipmentSlot.Mainhand) continue
        swapEquipment(player, simulatedPlayer, EquipmentSlot[i])
    }
});
