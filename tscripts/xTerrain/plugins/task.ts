//@ts-nocheck
import type { SimulatedPlayer } from '@minecraft/server-gametest'
import {simulatedPlayers, testWorldLocation} from '../main'
import SIGN from '../../lib/xboyPackage/YumeSignEnum'
import type { EntityHealthComponent, Vector3 } from '@minecraft/server'
import { system, world } from '@minecraft/server'
import { getEntitiesNear, getPlayerNear } from '../../lib/xboyPackage/Util'

// @ts-ignore
const simulatedPlayerStates : ({ "str-SimPlayer.id": { o: Vector3 }}) = {}

const Vector_subtract = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x-u,y:y-v,z:z-w})
// behavior
function AUTO_BEHAVIOR(){

    let simulatedPlayerCount = 0
    const AllPlayerCount = world.getAllPlayers().length
    for (const index in simulatedPlayers) {
        if((Number(index)>0?Number(index):-Number(index))>1000)continue

        const SimPlayer:SimulatedPlayer = <SimulatedPlayer>simulatedPlayers[index]
        //判假人是否存在
        if(!SimPlayer || !SimPlayer?.isValid){
            delete simulatedPlayers[simulatedPlayers[index]]
            delete simulatedPlayers[index]
            continue
        }
        ++simulatedPlayerCount
        // world.sendMessage(SimPlayer.nameTag)
        //判假人是否存活
        //瞎糊乱改接口名--2023-07-21-02：02
        if((<EntityHealthComponent>SimPlayer.getComponent('minecraft:health')).currentValue<=0){
            if(SimPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN))SimPlayer.respawn()
            continue
        }
        if(SimPlayer.hasTag(SIGN.AUTO_JUMP_SIGN))SimPlayer.jump()

        const EntitiesFromView = SimPlayer.getEntitiesFromViewDirection({maxDistance:4})[0]?.entity
        if(SimPlayer.hasTag(SIGN.ATTACK_SIGN) && EntitiesFromView)SimPlayer.attackEntity(EntitiesFromView)

        const EntitiesNear = getEntitiesNear(SimPlayer.location,SimPlayer.dimension,4,{})[0]
        if(SimPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesNear)SimPlayer.lookAtEntity(EntitiesNear)
        if(SimPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesFromView)SimPlayer.attackEntity(EntitiesFromView)

        if(SimPlayer.hasTag(SIGN.AUTO_TRIDENT_SIGN))SimPlayer.useItemInSlot(0) ? system.runTimeout(()=>SimPlayer.stopUsingItem(),10) : 0

        if(SimPlayer.hasTag(SIGN.AUTO_CHASE_SIGN)){
            const entities = getEntitiesNear(SimPlayer.location,SimPlayer.dimension,12,{families:["undead"]})
                                    .concat( getEntitiesNear(SimPlayer.location,SimPlayer.dimension,12,{families:["monster"]}) )
                                    .concat( getPlayerNear(SimPlayer,12,{}) )

            simulatedPlayerStates[SimPlayer.id] || (simulatedPlayerStates[SimPlayer.id]={})
            simulatedPlayerStates[SimPlayer.id]["o"] || (simulatedPlayerStates[SimPlayer.id]["o"]=SimPlayer.location)
            // let a: { "str-SimPlayer.id": { o: Vector3 } } = ({
            //     'str-SimPlayer.id':{
            //         'o':SimPlayer.location
            //     }
            // })
            const r = (x:number,_x:number,v:number)=>x-_x>v||x-_x<-v
            const r3 = (o:Vector3,_o:Vector3,v:number)=>o.x-_o.x>v||o.x-_o.x<-v || o.y-_o.y>v||o.y-_o.y<-v || o.z-_o.z>v||o.z-_o.z<-v
            // const fix = (o:Vector3)=>({x:o.x-30000000+1,y:o.y,z:o.z-3})
            const fix = (location:Vector3)=>Vector_subtract(location, testWorldLocation)
            // && r3(SimulatedPlayerStates[SimPlayer]["o"],SimPlayer.location,16)
            if(entities.length>0 ){

                // walk to target
                const target = entities[0]
                if( !r3(target.location,SimPlayer.location,4) ){

                    SimPlayer.moveToLocation(fix(target.location))
                    // console.error(target.typeId,target.location.x,target.location.y,target.location.z)
                }

            }else{
                // console.error("back")
                if( r3(SimPlayer.location,simulatedPlayerStates[SimPlayer.id]["o"],1) )
                    SimPlayer.moveToLocation( fix(simulatedPlayerStates[SimPlayer.id]["o"]) )
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

