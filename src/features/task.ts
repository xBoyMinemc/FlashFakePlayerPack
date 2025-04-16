//@ts-nocheck
import type { SimulatedPlayer } from '@minecraft/server-gametest'
import {simulatedPlayerManager, testManager} from '../main'
import SIGN from '../constants/YumeSignEnum'
import type { EntityHealthComponent, Vector3 } from '@minecraft/server'
import { system, world } from '@minecraft/server'
import { getEntitiesNear, getPlayerNear } from '../core/queries/Util'

// @ts-ignore
const simulatedPlayerStates : ({ "str-SimPlayer.id": { o: Vector3 }}) = {}

const Vector_subtract = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x-u,y:y-v,z:z-w})
// behavior
function AUTO_BEHAVIOR(){

    const AllPlayerCount = world.getAllPlayers().length
    for (const [pid, simulatedPlayer] of simulatedPlayerManager.simulatedPlayers) {
        // world.sendMessage(SimPlayer.nameTag)
        //判假人是否存活
        //瞎糊乱改接口名--2023-07-21-02：02
        if((<EntityHealthComponent>simulatedPlayer.getComponent('minecraft:health')).currentValue<=0){
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
            // let a: { "str-SimPlayer.id": { o: Vector3 } } = ({
            //     'str-SimPlayer.id':{
            //         'o':SimPlayer.location
            //     }
            // })
            const r = (x:number,_x:number,v:number)=>x-_x>v||x-_x<-v
            const r3 = (o:Vector3,_o:Vector3,v:number)=>o.x-_o.x>v||o.x-_o.x<-v || o.y-_o.y>v||o.y-_o.y<-v || o.z-_o.z>v||o.z-_o.z<-v
            // const fix = (o:Vector3)=>({x:o.x-30000000+1,y:o.y,z:o.z-3})
            const fix = (location:Vector3)=>Vector_subtract(location, testManager.testLocation)
            // && r3(SimulatedPlayerStates[SimPlayer]["o"],SimPlayer.location,16)
            if(entities.length>0 ){

                // walk to target
                const target = entities[0]
                if( !r3(target.location,simulatedPlayer.location,4) ){

                    simulatedPlayer.moveToLocation(fix(target.location))
                    // console.error(target.typeId,target.location.x,target.location.y,target.location.z)
                }

            }else{
                console.error("back")
                if( r3(simulatedPlayer.location,simulatedPlayerStates[simulatedPlayer.id]["o"],1) )
                    simulatedPlayer.moveToLocation( fix(simulatedPlayerStates[simulatedPlayer.id]["o"]) )
                // SimPlayer.moveToLocation({x:-30000000,y:-128,z:0})

            }
        }
    }

    // /gamerule playerssleepingpercentage 50%
    // SimulatedPlayerCount && world.getDimension('minecraft:overworld').runCommand('gamerule playerssleepingpercentage '+Math.floor(100*SimulatedPlayerCount/AllPlayerCount))
}

system.runInterval(AUTO_BEHAVIOR,20)


// const commandRegistry: CommandRegistry = new CommandRegistry('task')



// AUTO_TRIDENT_SIGN
// commandRegistry.registerCommand('假人自动丢三叉戟', ({entity,isEntity}) => {
//     if(!isEntity)return
//
//     const SimPlayer:SimulatedPlayer = getSimPlayer.fromView(entity)
//
//     if(!SimPlayer)return
//     else
//         SimPlayer.addTag(SIGN.AUTO_TRIDENT_SIGN)
//
// })


// world.afterEvents.chatSend.subscribe(({message, sender})=> {
//     const args = CommandRegistry.parse(message)
//     if(commandRegistry.commandsList.has(args[0]))
//         commandRegistry.executeCommand(args[0],{isEntity:true,entity:sender,location:sender.location,args})
// })

