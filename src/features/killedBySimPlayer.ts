import type { Player } from '@minecraft/server';
import entityDeadByHurt from '../lib/xboyEvents/entityDeadByHurt'
import { simulatedPlayerManager } from '../main';

entityDeadByHurt.subscribe(({ damageSource: { damagingEntity }, deadEntity }) => {
    if (deadEntity.typeId !== 'minecraft:player' || damagingEntity.typeId !== 'minecraft:player') return;

    if (!(simulatedPlayerManager.has(deadEntity) || simulatedPlayerManager.has(damagingEntity))) return;

    (<Player>damagingEntity).sendMessage('玩不起，就别玩');
    (<Player>deadEntity).sendMessage('菜，就多练');
});