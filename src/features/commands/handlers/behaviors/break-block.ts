import type { SimulatedPlayer } from '@minecraft/server-gametest';

import { Command, commandManager } from '@/core/command';
import { getSimPlayer } from '@/core/queries';
import { world, system } from "@minecraft/server";
import { SIGN } from "@/constants";
import { gameTestManager } from '@/core/gametest';

const breakBlockCommand = new Command();
breakBlockCommand.use(({ args }) => args.length === 0, ({ player }) => {
    if (!player) {
        console.error('error not isEntity');
        return;
    }

    const simulatedPlayer: SimulatedPlayer = getSimPlayer.fromView(player);
    if (!simulatedPlayer) {
        player.sendMessage('§e§l-面前不存在模拟玩家');
        return;
    }

    simulatedPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN);
});
commandManager.add(['假人挖掘', '假人摧毁'], breakBlockCommand);

// task
const breaks = () =>
    world.getPlayers({ tags: [SIGN.AUTO_BREAKBLOCK_SIGN] }).forEach(async simulatedPlayer => {
        const man = <SimulatedPlayer>simulatedPlayer;
        const block = man.getBlockFromViewDirection({ maxDistance: 6 })?.block;
        if (!block) return;

        if (block.isValid && !block.isLiquid && !block.isAir) {
            man.breakBlock(gameTestManager.test.relativeBlockLocation(block));
        }
    });

system.runInterval(breaks, 0);

// console.error('[假人]内置插件'+commandName+'加载成功')