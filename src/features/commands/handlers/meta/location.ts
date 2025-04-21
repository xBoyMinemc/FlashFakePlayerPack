import { dimensionMap } from "@/constants";
import { commandManager } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/core/queries";
import { simulatedPlayerManager } from '@/core/simulated-player';
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人位置', '假人坐标'], ({ entity, isEntity, args: [simIndex] }) => {
    if (!isEntity && simIndex === undefined) {
        console.error('error not isEntity');
        return;
    }
    let simulatedPlayer: SimulatedPlayer;
    if (simIndex === undefined) {
        ;
        ; "对准~";
        ;
        simulatedPlayer = getSimPlayer.fromView(entity);
        if (!simulatedPlayer) return entity.sendMessage("§e§l-面前不存在模拟玩家");
    } else {
        const index = Number(simIndex);
        if (typeof index !== 'number') return entity.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + typeof Number(simIndex));

        simulatedPlayer = simulatedPlayerManager.get(index as PID)

        if (!simulatedPlayer) return entity.sendMessage("§e§l-不存在模拟玩家" + index);
    }

    const { x, y, z } = simulatedPlayer.location;
    entity.sendMessage(`§e§l${simulatedPlayer.name} 位于 ${dimensionMap[simulatedPlayer.dimension.id] ?? simulatedPlayer.dimension.id}(${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
});