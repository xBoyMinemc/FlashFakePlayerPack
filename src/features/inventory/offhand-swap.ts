import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/utils";
import { EquipmentSlot } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import { swapEquipment } from "./utils";

commandManager.register('假人副手物品交换', ({player,simulatedPlayer: sim}) => {
    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)

    swapEquipment(player, simulatedPlayer, EquipmentSlot.Offhand)
});
