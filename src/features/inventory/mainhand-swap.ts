import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import { swapEquipment } from "./utils";

commandManager.add('假人主手物品交换', ({player,simulatedPlayer: sim}) => {
    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)

    swapEquipment(player, simulatedPlayer, EquipmentSlot.Mainhand)
});
