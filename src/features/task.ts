import { SIGN } from '@/constants'
import type { Vector3 } from '@minecraft/server'
import { system } from '@minecraft/server'
import { getEntitiesNear, getPlayerNear } from '@/core/queries'
import { simulatedPlayerManager } from '@/core/simulated-player';
import { gameTestManager } from '@/core/gametest';

const simulatedPlayerStates: Record<string, { o?: Vector3; }> = {}

// behavior
function AUTO_BEHAVIOR(){

    for (const simulatedPlayer of simulatedPlayerManager.simulatedPlayers.values()) {
        //判假人是否存活
        //瞎糊乱改接口名--2023-07-21-02：02
        if((simulatedPlayer.getComponent('minecraft:health')).currentValue<=0){
            if(simulatedPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN))simulatedPlayer.respawn()
                
            continue
        }
        if(simulatedPlayer.hasTag(SIGN.AUTO_JUMP_SIGN))simulatedPlayer.jump()

        const EntitiesFromView = simulatedPlayer.getEntitiesFromViewDirection({maxDistance:4})[0]?.entity
        if(simulatedPlayer.hasTag(SIGN.ATTACK_SIGN) && EntitiesFromView)simulatedPlayer.attackEntity(EntitiesFromView)

        const EntitiesNear = getEntitiesNear(simulatedPlayer.location,simulatedPlayer.dimension,4,{})[0]
        if(simulatedPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesNear)simulatedPlayer.lookAtEntity(EntitiesNear)
        if(simulatedPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesFromView)simulatedPlayer.attackEntity(EntitiesFromView)

        if(simulatedPlayer.hasTag(SIGN.AUTO_TRIDENT_SIGN))simulatedPlayer.useItemInSlot(0) ? system.runTimeout(()=>simulatedPlayer.stopUsingItem(),10) : 0

        if(simulatedPlayer.hasTag(SIGN.AUTO_CHASE_SIGN)){
            const entities = getEntitiesNear(simulatedPlayer.location,simulatedPlayer.dimension,12,{families:["undead"]})
                                    .concat( getEntitiesNear(simulatedPlayer.location,simulatedPlayer.dimension,12,{families:["monster"]}) )
                                    .concat( getPlayerNear(simulatedPlayer,12,{}) )

            simulatedPlayerStates[simulatedPlayer.id] || (simulatedPlayerStates[simulatedPlayer.id]={})
            simulatedPlayerStates[simulatedPlayer.id]["o"] || (simulatedPlayerStates[simulatedPlayer.id]["o"]=simulatedPlayer.location)
            const r3 = (a: Vector3, b: Vector3, threshold: number) => Math.abs(a.x - b.x) > threshold || Math.abs(a.y - b.y) > threshold || Math.abs(a.z - b.z) > threshold
            if(entities.length>0 ){

                // walk to target
                const target = entities[0]
                if( !r3(target.location,simulatedPlayer.location,4) ){

                    simulatedPlayer.moveToLocation(gameTestManager.test.relativeLocation(target.location))
                    // console.error(target.typeId,target.location.x,target.location.y,target.location.z)
                }

            }else{
                console.error("back")
                if( r3(simulatedPlayer.location,simulatedPlayerStates[simulatedPlayer.id]["o"],1) )
                    simulatedPlayer.moveToLocation(gameTestManager.test.relativeLocation(simulatedPlayerStates[simulatedPlayer.id]["o"]))

            }
        }
    }
}

system.runInterval(AUTO_BEHAVIOR,20)
