import type { Player } from '@minecraft/server';
import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import {simulatedPlayers} from '../main'
import {SimulatedPlayer} from '@minecraft/server-gametest'

entityDeadByHurt.subscribe(({ damageSource: { damagingEntity }, deadEntity }) => {
    if (deadEntity.typeId !== 'minecraft:player' || damagingEntity.typeId !== 'minecraft:player') return;

    if (simulatedPlayers[deadEntity.id])
        return (<Player>damagingEntity).sendMessage('玩不起，就别玩');

    const PID = simulatedPlayers[damagingEntity.id];
    if (!PID) return;

    const SimPlayer = <SimulatedPlayer>simulatedPlayers[PID];

    if (!SimPlayer) return;

    (<Player>deadEntity).sendMessage('菜，就多练');
});