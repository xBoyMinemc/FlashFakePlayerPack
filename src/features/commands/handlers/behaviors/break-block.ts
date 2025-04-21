import type { SimulatedPlayer } from '@minecraft/server-gametest';

import { Command, commandManager } from '@/core/command';
import { getSimPlayer } from '@/core/queries';
import { world, system } from "@minecraft/server";
import { SIGN } from "@/constants";
import { gameTestManager } from '@/core/gametest';

const breakBlockCommand = new Command();
breakBlockCommand.register(({ args }) => args.length === 0, ({ entity, isEntity }) => {
    if (!isEntity) {
        console.error('error not isEntity');
        return;
    }

    const SimPlayer: SimulatedPlayer = getSimPlayer.fromView(entity);
    if (!SimPlayer) {
        entity.sendMessage('§e§l-面前不存在模拟玩家');
        return;
    }

    SimPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN);
});
commandManager.add(['假人挖掘', '假人摧毁'], breakBlockCommand);

// task
const breaks = () =>
    world.getPlayers({ tags: [SIGN.AUTO_BREAKBLOCK_SIGN] }).forEach(async SimPlayer => {
        const man = <SimulatedPlayer>SimPlayer;
        const block = man.getBlockFromViewDirection({ maxDistance: 6 })?.block;
        if (!block) return;

        if (block.isValid && !block.isLiquid && !block.isAir) {
            man.breakBlock(gameTestManager.test.relativeBlockLocation(block));
        }
    });

system.runInterval(breaks, 0);

// console.error('[假人]内置插件'+commandName+'加载成功')