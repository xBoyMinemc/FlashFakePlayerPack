import { EntityComponentTypes, type EquipmentSlot, type Player } from "@minecraft/server";

export const swapEquipment = (playerA: Player, playerB: Player, slot: EquipmentSlot): void => {
    const componentA = playerA.getComponent(EntityComponentTypes.Equippable);
    const componentB = playerB.getComponent(EntityComponentTypes.Equippable);

    const itemA = componentA.getEquipment(slot);
    const itemB = componentB.getEquipment(slot);

    componentA.setEquipment(slot, itemB);
    componentB.setEquipment(slot, itemA);
};
