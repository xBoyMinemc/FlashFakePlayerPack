import type { SimulatedPlayer } from '@minecraft/server-gametest'
import { SimulatedPlayerList } from '../main'
import SIGN from '../../lib/xboyPackage/YumeSignEnum'
import { type EntityHealthComponent, system, world } from '@minecraft/server'
import { getEntitiesNear, getSimPlayer} from '../../lib/xboyPackage/Util'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'

// behavior
const AUTO_BEHAVIOR = ()=>{

    for (const index in SimulatedPlayerList) {

        const SimPlayer:SimulatedPlayer = SimulatedPlayerList[index]

        //判假人是否存在
        if(!SimPlayer || !SimPlayer.isValid()){
            SimulatedPlayerList[index]=null
            continue
        }
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

        if(SimPlayer.hasTag(SIGN.AUTO_trident_SIGN))SimPlayer.useItemInSlot(0) ? system.runTimeout(()=>SimPlayer.stopUsingItem(),10) : 0


    }

}

system.runInterval(AUTO_BEHAVIOR,0)


const commandRegistry: CommandRegistry = new CommandRegistry('task')



// AUTO_trident_SIGN
// commandRegistry.registerCommand('假人自动丢三叉戟', ({entity,isEntity}) => {
//     if(!isEntity)return
//
//     const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
//
//     if(!SimPlayer)return
//     else
//         SimPlayer.addTag(SIGN.AUTO_trident_SIGN)
//
// })


world.afterEvents.chatSend.subscribe(({message, sender})=> {
    const args = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0],{isEntity:true,entity:sender,location:sender.location,args})
})

