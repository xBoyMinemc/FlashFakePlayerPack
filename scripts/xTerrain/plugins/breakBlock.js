import { SimulatedPlayerEnum, testWorldLocation } from '../main';
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry';
import { getSimPlayer } from '../../lib/xboyPackage/Util';
import { world, system } from "@minecraft/server";
import SIGN from "../../lib/xboyPackage/YumeSignEnum";
export const BreakBlockSimulatedPlayerList = new Set();
export const commandRegistry = new CommandRegistry();
const noArgs = ({ args, entity, isEntity }) => {
    if (args.length !== 1)
        return;
    if (!isEntity)
        return;
    const SimPlayer = getSimPlayer.formView(entity);
    if (!SimPlayer)
        return;
    for (const i in SimulatedPlayerEnum)
        if (SimulatedPlayerEnum[i] === SimPlayer)
            SimPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN);
};
commandRegistry.registerCommand('假人挖掘', noArgs);
commandRegistry.registerAlias('假人摧毁', '假人挖掘');
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    commandRegistry.execute(message, { entity: sender, isEntity: true });
    if (message === 'showshowway') {
        sender.sendMessage(commandRegistry.showList().toString());
    }
});
const Vector_subtract = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x - u, y: y - v, z: z - w });
const Vector_addition = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x + u, y: y + v, z: z + w });
const Vector_multiplication_dot = ({ x, y, z }, u) => ({ x: x * u, y: y * u, z: z * u });
const breaks = (awa = 'awa') => world.getPlayers({ tags: [SIGN.AUTO_BREAKBLOCK_SIGN] }).forEach(async (SimPlayer) => {
    const man = SimPlayer;
    const viewDirection = man.getViewDirection();
    const headLocation = man.getHeadLocation();
    const time = times.get(man.id) ?? 0;
    const whatCanISee = Vector_addition(headLocation, Vector_multiplication_dot(viewDirection, time % 3 + 1));
    const dimension = man.dimension;
    const block = dimension.getBlock(testWorldLocation["worldBlockLocation"](Vector_subtract(whatCanISee, testWorldLocation)));
    time < 600 && dimension.spawnParticle('minecraft:endrod', Vector_addition(block.location, { x: 0.5, y: 0.5, z: 0.5 }));
    if (block.isValid() && !block.isLiquid && !block.isAir) {
        man.breakBlock(Vector_subtract(whatCanISee, testWorldLocation));
    }
    else {
        times.set(man.id, time + 1);
    }
});
const times = new Map();
system.runInterval(breaks, 0);
