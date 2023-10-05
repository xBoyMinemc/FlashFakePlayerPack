import type { World } from '../../@types/globalThis'
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {
    SimulatedPlayerList,
    testWorldLocation
} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { getSimPlayer } from '../../lib/xboyPackage/Util'
import { system, Vector } from "@minecraft/server";

declare const world: World

export const BreakBlockSimulatedPlayerList:Set<string> = new Set();

const commandName = '假人挖掘'

const commandRegistry: CommandRegistry = new CommandRegistry()
commandRegistry.registerCommand(commandName)

//
const noArgs = ({args,entity,isEntity})=>{

    if(args.length!==1)return

    if(!isEntity)return

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return

    // const v2ray = ({x,y,z})=>({x,y,z})
    // getCoordinatesFromView(SimPlayer)
    for(const i in SimulatedPlayerList)
        if(SimulatedPlayerList[i]===SimPlayer)
            BreakBlockSimulatedPlayerList.add(i)

    console.error('[假人]内置插件'+commandName+'执行成功')

}
commandRegistry.registerCommand(commandName,noArgs)


world.afterEvents.chatSend.subscribe(({message, sender})=>{
    if(message!==commandName)return;
    commandRegistry.executeCommand(commandName,{entity:sender,isEntity:true,args:CommandRegistry.parse(message)})
})

const breaks = ()=>{
    // TEST
    // for (let simulatedPlayerListKey in SimulatedPlayerList) {
    //
    //     const blockLocation = SimulatedPlayerList[simulatedPlayerListKey].getBlockFromViewDirection({maxDistance: 4})?.block?.location
    //     if (blockLocation)
    //         SimulatedPlayerList[simulatedPlayerListKey].breakBlock(Vector.subtract(blockLocation, testWorldLocation))
    //
    // }
    BreakBlockSimulatedPlayerList.forEach((simIndex)=> {
        const blockLocation = SimulatedPlayerList[simIndex].getBlockFromViewDirection({maxDistance: 4})?.block?.location
        if (blockLocation)
            SimulatedPlayerList[simIndex].breakBlock(Vector.subtract(blockLocation, testWorldLocation))
    })
}
system.runInterval(()=>breaks(),0)

console.error('[假人]内置插件'+commandName+'加载成功')