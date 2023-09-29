import type { World } from '../../@types/globalThis'
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {spawnSimulatedPlayer, SimulatedPlayerList, spawned as spawnedEvent, GetPID, testWorldLocation} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { getSimPlayer } from '../../lib/xboyPackage/Util'

declare const world: World

const commandName = '假人挖掘'

const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand(commandName)

//
const noArgs = ({args,entity,location,isEntity})=>{
    if(args.length!==1)return

    if(!isEntity)return

    const SimPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return

    // Gets the relative coordinates of the square in front of the dummy entity
    function getCoordinatesFromView(sim:SimulatedPlayer){
        const viewLocation = sim.getBlockFromViewDirection({maxDistance:4}).faceLocation
        const tags = sim.getTags();
        // for(let i in tags)if(tags[i].startsWith("#xyz#"))bornLocation=tags[i].replace("#xyz#","").split("#").map(s=>Number(s))
        const bornLocation:number[] = tags.find(tag=>tag.startsWith("#xyz#")).replace("#xyz#","").split("#").map(s=>Number(s))
        // const x = viewLocation.x - bornLocation[0]
        // const y = viewLocation.y - bornLocation[1]
        // const z = viewLocation.z - bornLocation[2]
        // or
        viewLocation.x -= bornLocation[0]
        viewLocation.y -= bornLocation[1]
        viewLocation.z -= bornLocation[2]
        // viewLocation.x -= testWorldLocation.x
        // viewLocation.y -= testWorldLocation.y
        // viewLocation.z -= testWorldLocation.z

        return viewLocation
    }




}
commandRegistry.registerCommand(commandName,noArgs)


world.afterEvents.chatSend.subscribe(({message, sender})=>{
    if(message!==commandName)return;
    commandRegistry.executeCommand(commandName,{commandName:commandName,entity:sender,isEntity:true,args:CommandRegistry.parse(message)})
})

console.error('[假人]内置插件'+commandName+'加载成功')