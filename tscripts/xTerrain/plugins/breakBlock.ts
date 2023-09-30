import type { World } from '../../@types/globalThis'
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {
    spawnSimulatedPlayer,
    SimulatedPlayerList,
    spawned as spawnedEvent,
    GetPID,
    testWorldLocation,
    BreakBlockSimulatedPlayerList
} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { getSimPlayer } from '../../lib/xboyPackage/Util'

declare const world: World

const commandName = '假人挖掘'

const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand(commandName)

//
const noArgs = ({args,entity,isEntity})=>{

    if(args.length!==1)return

    if(!isEntity)return

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return
    // Gets the relative coordinates of the square in front of the dummy entity.
    // when getBlockFromViewDirection unexpected object will make error.
    // const getCoordinatesFromView = (sim:SimulatedPlayer)=> testWorldLocation(sim.getBlockFromViewDirection({maxDistance:4})?.faceLocation)
    // BreakBlockSimulatedPlayerList.set(SimPlayer,getCoordinatesFromView(SimPlayer))
    // SimPlayer.breakBlock(getCoordinatesFromView(SimPlayer))
    const v2ray = ({x,y,z})=>({x,y,z})
    // getCoordinatesFromView(SimPlayer)
    for(const i in SimulatedPlayerList)
        if(SimulatedPlayerList[i]===SimPlayer)
            BreakBlockSimulatedPlayerList.add(i)
    console.error('[假人]内置插件'+commandName+'执行成功')

}
commandRegistry.registerCommand(commandName,noArgs)


world.afterEvents.chatSend.subscribe(({message, sender})=>{
    if(message!==commandName)return;
    commandRegistry.executeCommand(commandName,{commandName:commandName,entity:sender,isEntity:true,args:CommandRegistry.parse(message)})
})

console.error('[假人]内置插件'+commandName+'加载成功')