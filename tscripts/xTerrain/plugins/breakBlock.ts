import type { World } from '../../@types/globalThis'
import type { SimulatedPlayer } from '@minecraft/server-gametest'

import {
    SimulatedPlayerEnum,
    testWorldLocation
} from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { getSimPlayer } from '../../lib/xboyPackage/Util'
import { system, Vector } from "@minecraft/server"

declare const world: World

export const BreakBlockSimulatedPlayerList:Set<string> = new Set()



const commandRegistry: CommandRegistry = new CommandRegistry()

const noArgs = ({args,entity,isEntity})=>{

    if(args.length!==1)return

    if(!isEntity)return

    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(entity)
    if(!SimPlayer)return

    for(const i in SimulatedPlayerEnum)
        if(SimulatedPlayerEnum[i]===SimPlayer)
            BreakBlockSimulatedPlayerList.add(i)

    // console.error('[假人]内置插件'+'假人挖掘'+'执行成功')

}
commandRegistry.registerCommand('假人挖掘',noArgs)


world.afterEvents.chatSend.subscribe(({message, sender})=>{
    // const cmdArgs = CommandRegistry.parse(message)
    // if(commandRegistry.commandsList.has(cmdArgs[0]))
    //     commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})


    commandRegistry.execute(message,{entity:sender,isEntity:true})
})


// task
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
        const blockLocation = SimulatedPlayerEnum[simIndex].getBlockFromViewDirection({maxDistance: 4})?.block?.location
        if (blockLocation)
            SimulatedPlayerEnum[simIndex].breakBlock(Vector.subtract(blockLocation, testWorldLocation))
    })
}
system.runInterval(breaks,0)

// console.error('[假人]内置插件'+commandName+'加载成功')