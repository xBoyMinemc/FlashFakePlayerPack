import { Command, commandManager } from '../../lib/yumeCommand/CommandRegistry'
import type { ScoreboardObjective } from '@minecraft/server'
import ScoreBase from '../../lib/xboyPackage/scoreBase/rw'


const settingsCommand = new Command()

settingsCommand.register(({ entity }) => {

    const SetPID = (PID:number=1)=>{
        const __FlashPlayer__ = <ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##')

        const value = ScoreBase.GetPoints(__FlashPlayer__,'##currentPID')

              __FlashPlayer__.setScore('##currentPID',PID)

        return value
    }
    const PID = SetPID(1)
    entity?.sendMessage('重置成功，重置前为'+PID)


    entity?.sendMessage('以前是以前✋ ，现在是现在✋ ，你要是一直拿以前当作现在✋ ，哥们，你怎么不拿你开新档的时候对比')
})

commandManager.registerCommand(['假人重置序号', '假人编号重置', '假人序号重置', '假人重置编号'], settingsCommand);
