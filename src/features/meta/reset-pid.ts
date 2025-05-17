import { commandManager } from '@/core/command'
import { ExistingSimulatedPlayersError, simulatedPlayerManager } from '@/core/simulated-player';

commandManager.add(['假人重置序号', '假人编号重置', '假人序号重置', '假人重置编号'], ({ player }) => {
    try {
        const PID = simulatedPlayerManager.resetPID();

        player?.sendMessage('重置成功，重置前为'+PID)

        player?.sendMessage('以前是以前✋ ，现在是现在✋ ，你要是一直拿以前当作现在✋ ，哥们，你怎么不拿你开新档的时候对比')
    } catch (e) {
        if (e instanceof ExistingSimulatedPlayersError)
            player?.sendMessage('请先移除所有假人');
        else
            throw e;
    }
});
