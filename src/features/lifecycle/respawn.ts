import { commandManager } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/utils";
import { simulatedPlayerManager } from '@/core/simulated-player';
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.register(['假人重生', '假人复活', '复活吧，我的爱人', '复活吧！我的爱人', '复活吧!我的爱人', '复活吧我的爱人'],
    ({ player, args: [simIndex] }) => {

    if (!player && simIndex === undefined) {
        console.error('error not isEntity')
        return
    }

    if (simIndex === undefined) {
        ;
        ;"对准~";
        ;
        const simulatedPlayer:SimulatedPlayer = getSimPlayer.fromView(player)
        if(!simulatedPlayer)return player.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话")  //entity.sendMessage("§e§l-面前不存在模拟玩家")
        simulatedPlayer.respawn()
    }else {
        ;
        ;"云梦知道有人对不准，所以给你做了指向性的功能，输入假人序号即可";
        ;
        const index = Number(simIndex)

        if(typeof index !== 'number')return player?.sendMessage('[模拟玩家] 命令错误，期待数字却得到 '+typeof Number(simIndex))

        const simulatedPlayer:SimulatedPlayer = simulatedPlayerManager.get(index as PID)

        if(!simulatedPlayer)return player.sendMessage("§e§l-不存在模拟玩家"+index)

        simulatedPlayer.respawn()

    }

});
