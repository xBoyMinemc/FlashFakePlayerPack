import { commandManager } from "@/core/command";
import { getSimPlayer } from "@/core/queries";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

commandManager.add(['假人背包交换','假人交换背包'], ({player,simulatedPlayer: sim}) => {
    if(!player && !sim)return
    const simulatedPlayer:SimulatedPlayer = sim || getSimPlayer.fromView(player)
    if(!simulatedPlayer)return

    const s = simulatedPlayer.getComponent("minecraft:inventory").container

    const p = player.getComponent("minecraft:inventory").container

    for
    (
        let i = p.size;
        i--;
        s.getItem(i)
            ?
            p.getItem(i)
                ? s.swapItems(i, i, p)
                : s.moveItem(i, i, p)
            :
            p.getItem(i)
                ? p.moveItem(i, i, s)
                : "这行代码，我再维护我是狗"
    ) ;

});
