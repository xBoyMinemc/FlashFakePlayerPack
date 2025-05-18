import { dimensionMap } from "@/constants";
import { commandManager } from "@/core/command";
import type { PID } from "@/core/pid";
import { getSimPlayer } from "@/utils";
import { simulatedPlayerManager } from '@/core/simulated-player';
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.register(['假人位置', '假人坐标'], ({ player, args: [simIndex] }) => {
    if (!player && simIndex === undefined) {
        console.error('error not isEntity');
        return;
    }
    let simulatedPlayer: SimulatedPlayer;
    if (simIndex === undefined) {
        ;
        ; "对准~";
        ;
        simulatedPlayer = getSimPlayer.fromView(player);
        if (!simulatedPlayer) return player.sendMessage("§e§l-面前不存在模拟玩家");
    } else {
        const index = Number(simIndex);
        if (typeof index !== 'number') return player.sendMessage('[模拟玩家] 命令错误，期待数字却得到 ' + typeof Number(simIndex));

        simulatedPlayer = simulatedPlayerManager.get(index as PID)

        if (!simulatedPlayer) return player.sendMessage("§e§l-不存在模拟玩家" + index);
    }

    const { x, y, z } = simulatedPlayer.location;
    player.sendMessage(`§e§l${simulatedPlayer.name} 位于 ${dimensionMap[simulatedPlayer.dimension.id] ?? simulatedPlayer.dimension.id}(${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
});