import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import type { World } from '../../@types/globalThis'
import { type ScoreboardObjective } from '@minecraft/server'
import ScoreBase from '../../lib/xboyPackage/scoreBase/rw'

declare const world: World

const commandRegistry: CommandRegistry = new CommandRegistry()


commandRegistry.registerAlias('假人重置编号','假人重置序号')
commandRegistry.registerAlias('假人编号重置','假人重置序号')
commandRegistry.registerAlias('假人序号重置','假人重置序号')
commandRegistry.registerAlias('假人序号重置','假人重置序号')
commandRegistry.registerCommand('假人重置序号', ({ entity }) => {

    const SetPID = ()=>{
        const __FlashPlayer__ = <ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##')

        const value = ScoreBase.GetPoints(__FlashPlayer__,'##currentPID')

        __FlashPlayer__.setScore('##currentPID',0)

        return value
    }
    const PID = SetPID()
    entity.sendMessage('重置成功，重置前为'+PID)


    entity.sendMessage('以前是以前✋ ，现在是现在✋ ，你要是一直拿以前当作现在✋ ，哥们，你怎么不拿你开新档的时候对比')
})

world.afterEvents.chatSend.subscribe(({message, sender})=>{
    const cmdArgs = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(cmdArgs[0]))
        commandRegistry.executeCommand(cmdArgs[0],{entity:sender,isEntity:true,args:cmdArgs})

    if(message=='showshowway'){
        sender.sendMessage(commandRegistry.showList().toString())
    }
})