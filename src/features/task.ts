import { SIGN } from '@/constants';
import type { Vector3 } from '@minecraft/server';
import { system } from '@minecraft/server';
import type { SimulatedPlayer } from '@minecraft/server-gametest';
import { getEntitiesNear, getPlayerNear } from '@/utils';
import { simulatedPlayerManager } from '@/core/simulated-player';
import { gameTestManager } from '@/core/gametest';

const originalPositionMap = new WeakMap<SimulatedPlayer, Vector3>();

//判假人是否存活
function checkIsAlive(simulatedPlayer: SimulatedPlayer): boolean {
    const health = simulatedPlayer.getComponent('minecraft:health');
    return health?.currentValue > 0;
}

const chebyshevDistance3 = (a: Vector3, b: Vector3): number =>
    Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.z - b.z));

// behavior
function AUTO_BEHAVIOR() {
    for (const simulatedPlayer of simulatedPlayerManager.simulatedPlayers.values()) {
        //瞎糊乱改接口名--2023-07-21-02：02
        if (!checkIsAlive(simulatedPlayer)) {
            if (simulatedPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN)) 
                simulatedPlayer.respawn();

            continue;
        }
        if (simulatedPlayer.hasTag(SIGN.AUTO_JUMP_SIGN))
            simulatedPlayer.jump();

        const EntitiesFromView = simulatedPlayer.getEntitiesFromViewDirection({ maxDistance: 4 })[0]?.entity;
        if (simulatedPlayer.hasTag(SIGN.ATTACK_SIGN) && EntitiesFromView)
            simulatedPlayer.attackEntity(EntitiesFromView);

        const EntitiesNear = getEntitiesNear(simulatedPlayer.location, simulatedPlayer.dimension, 4, {})[0];
        if (simulatedPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesNear)
            simulatedPlayer.lookAtEntity(EntitiesNear);
        if (simulatedPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesFromView)
            simulatedPlayer.attackEntity(EntitiesFromView);

        if (simulatedPlayer.hasTag(SIGN.AUTO_TRIDENT_SIGN))
            if (simulatedPlayer.useItemInSlot(0))
                system.runTimeout(() => simulatedPlayer.stopUsingItem(), 10);

        if (simulatedPlayer.hasTag(SIGN.AUTO_CHASE_SIGN)) {
            const entities = [
                ...getEntitiesNear(simulatedPlayer.location, simulatedPlayer.dimension, 12, { families: ["undead"] }),
                ...getEntitiesNear(simulatedPlayer.location, simulatedPlayer.dimension, 12, { families: ["monster"] }),
                ...getPlayerNear(simulatedPlayer, 12, {})
            ];

            let originalPosition = originalPositionMap.get(simulatedPlayer);
            if (!originalPosition) 
                originalPositionMap.set(simulatedPlayer, simulatedPlayer.location);

            if (entities.length > 0) {

                // walk to target
                const target = entities[0];
                if (chebyshevDistance3(target.location, simulatedPlayer.location) <= 4)
                    simulatedPlayer.moveToLocation(gameTestManager.test.relativeLocation(target.location));
            } else if (originalPosition && chebyshevDistance3(simulatedPlayer.location, originalPosition) > 1) {
                simulatedPlayer.moveToLocation(gameTestManager.test.relativeLocation(originalPosition));

            }
        }
    }
}

system.runInterval(AUTO_BEHAVIOR, 20);
