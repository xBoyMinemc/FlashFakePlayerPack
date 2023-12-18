import entityDeadByHurt from '../../lib/xboyEvents/entityDeadByHurt'
import {SimulatedPlayerEnum} from '../main'
import {SimulatedPlayer} from '@minecraft/server-gametest'

entityDeadByHurt.subscribe(({damageSource,hurtEntity})=>{
    // hurtEntity.runCommand('me ??')
    if(hurtEntity.typeId !== 'minecraft:player')return

    // hurtEntity.runCommand('me ??@@')
    const PID = SimulatedPlayerEnum[damageSource.damagingEntity.id]
    // hurtEntity.runCommand('me ??@@PID '+PID)
    if(!PID)return
    // hurtEntity.runCommand('me ??@@))) ')

    const SimPlayer = <SimulatedPlayer>SimulatedPlayerEnum[PID]
    if(!SimPlayer)return

    hurtEntity['sendMessage']('菜就多练')
})