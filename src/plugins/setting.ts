import { Command, commandManager } from '../core/command'
import { simulatedPlayerManager } from './main';


const settingsCommand = new Command()

settingsCommand.register(({ entity }) => {
    const PID = simulatedPlayerManager.resetPID()
    entity?.sendMessage('重置成功，重置前为'+PID)


    entity?.sendMessage('以前是以前✋ ，现在是现在✋ ，你要是一直拿以前当作现在✋ ，哥们，你怎么不拿你开新档的时候对比')
})

commandManager.registerCommand(['假人重置序号', '假人编号重置', '假人序号重置', '假人重置编号'], settingsCommand);
