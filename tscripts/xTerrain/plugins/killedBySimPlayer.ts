import { Player } from '@minecraft/server';
import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import { SimulatedPlayer } from "@minecraft/server-gametest";

entityDeadByHurt.subscribe(({ damageSource: { damagingEntity }, deadEntity }) => {
    if (deadEntity.typeId !== 'minecraft:player' || damagingEntity.typeId !== 'minecraft:player') return;

    if (!(deadEntity instanceof SimulatedPlayer)) return;
    if (damagingEntity instanceof Player)
        damagingEntity.sendMessage('玩不起，就别玩');
    deadEntity.sendMessage('菜，就多练');
});