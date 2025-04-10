import type { Player } from '@minecraft/server';
import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import {simulatedPlayers} from '../main'

entityDeadByHurt.subscribe(({ damageSource: { damagingEntity }, deadEntity }) => {
    if (deadEntity.typeId !== 'minecraft:player' || damagingEntity.typeId !== 'minecraft:player') return;

    if (!(deadEntity.id in simulatedPlayers || damagingEntity.id in simulatedPlayers)) return;

    (<Player>damagingEntity).sendMessage('玩不起，就别玩');
    (<Player>deadEntity).sendMessage('菜，就多练');
});