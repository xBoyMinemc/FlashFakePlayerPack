import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人改名', '假人重命名', '假人换名'], ({player,args:[newName]}) => {
    if(!player) {
        console.error('error not isEntity')
        return
    }

    if(!newName)
        return player.sendMessage('[模拟玩家] 命令错误，请提供新名称');
    ;
    ; "对准~";
    ;
    const simulatedPlayer: SimulatedPlayer = getSimPlayer.fromView(player);
    if (!simulatedPlayer) return player.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话");  //entity.sendMessage("§e§l-面前不存在模拟玩家")
    simulatedPlayer.nameTag = newName;
    player.sendMessage("§e§l-改名成功")
});
