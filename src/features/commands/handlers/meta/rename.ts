import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人改名', '假人重命名', '假人换名'], ({entity,isEntity,args:[newName]}) => {
    if(!isEntity) {
        console.error('error not isEntity')
        return
    }

    if(!newName)
        return entity.sendMessage('[模拟玩家] 命令错误，请提供新名称');
    ;
    ; "对准~";
    ;
    const SimPlayer: SimulatedPlayer = getSimPlayer.fromView(entity);
    if (!SimPlayer) return entity.sendMessage("§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话");  //entity.sendMessage("§e§l-面前不存在模拟玩家")
    SimPlayer.nameTag = newName;
    entity.sendMessage("§e§l-改名成功")
});
