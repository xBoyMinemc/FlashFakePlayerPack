import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import {simulatedPlayers} from '../main'
import {SimulatedPlayer} from '@minecraft/server-gametest'

entityDeadByHurt.subscribe(({damageSource,hurtEntity})=>{
    if(hurtEntity.typeId !== 'minecraft:player')return
    if(!damageSource)return

    if(simulatedPlayers[hurtEntity.id])
        return damageSource ?? damageSource?.damagingEntity['sendMessage']('玩不起，就别玩')

    const PID = simulatedPlayers[damageSource.damagingEntity.id]
    if(!PID)return

    const SimPlayer = <SimulatedPlayer>simulatedPlayers[PID]

    if(!SimPlayer)return

    hurtEntity['sendMessage']('菜，就多练')
})