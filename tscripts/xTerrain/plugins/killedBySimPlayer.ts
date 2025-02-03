import type { Player } from '@minecraft/server';
import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import {simulatedPlayers} from '../main'
import {SimulatedPlayer} from '@minecraft/server-gametest'

entityDeadByHurt.subscribe(({ damageSource, deadEntity }) => {
    if (deadEntity.typeId !== 'minecraft:player' || damageSource.damagingEntity.typeId !== 'minecraft:player') return;

    if (simulatedPlayers[deadEntity.id])
        return (<Player>damageSource.damagingEntity).sendMessage('玩不起，就别玩');

    const PID = simulatedPlayers[damageSource.damagingEntity.id];
    if (!PID) return;

    const SimPlayer = <SimulatedPlayer>simulatedPlayers[PID];

    if (!SimPlayer) return;

    (<Player>deadEntity).sendMessage('菜，就多练');
});