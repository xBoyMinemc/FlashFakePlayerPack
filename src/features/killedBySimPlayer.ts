import { EntityDamageCause, world, type Player } from '@minecraft/server';
import { simulatedPlayerManager } from '@/main';

world.afterEvents.entityDie.subscribe(({ damageSource: { cause, damagingEntity }, deadEntity }) => {
    if (cause !== EntityDamageCause.entityAttack) return;

    if (deadEntity.typeId !== 'minecraft:player' || damagingEntity.typeId !== 'minecraft:player') return;

    if (!(simulatedPlayerManager.has(deadEntity) || simulatedPlayerManager.has(damagingEntity))) return;

    (<Player>damagingEntity).sendMessage('玩不起，就别玩');
    (<Player>deadEntity).sendMessage('菜，就多练');
});