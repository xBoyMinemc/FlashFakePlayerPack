import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt';
import { SimulatedPlayerEnum } from '../main';
entityDeadByHurt.subscribe(({ damageSource, hurtEntity }) => {
    if (hurtEntity.typeId !== 'minecraft:player')
        return;
    if (SimulatedPlayerEnum[hurtEntity.id]) {
        damageSource.damagingEntity['sendMessage']('玩不起，就别玩');
        return;
    }
    const PID = SimulatedPlayerEnum[damageSource.damagingEntity.id];
    if (!PID)
        return;
    const SimPlayer = SimulatedPlayerEnum[PID];
    hurtEntity['sendMessage']('菜，就多练');
});
