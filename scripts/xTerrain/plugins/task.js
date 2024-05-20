import { SimulatedPlayerEnum, testWorldLocation } from '../main';
import SIGN from '../../lib/xboyPackage/YumeSignEnum';
import { system, world } from '@minecraft/server';
import { getEntitiesNear, getPlayerNear } from '../../lib/xboyPackage/Util';
const SimulatedPlayerStates = {};
const Vector_subtract = ({ x, y, z }, { x: u, y: v, z: w }) => ({ x: x - u, y: y - v, z: z - w });
function AUTO_BEHAVIOR() {
    let SimulatedPlayerCount = 0;
    const AllPlayerCount = world.getAllPlayers().length;
    for (const index in SimulatedPlayerEnum) {
        if ((Number(index) > 0 ? Number(index) : -Number(index)) > 1000)
            continue;
        const SimPlayer = SimulatedPlayerEnum[index];
        if (!SimPlayer || !SimPlayer?.isValid?.()) {
            delete SimulatedPlayerEnum[SimulatedPlayerEnum[index]];
            delete SimulatedPlayerEnum[index];
            continue;
        }
        ++SimulatedPlayerCount;
        if (SimPlayer.getComponent('minecraft:health').currentValue <= 0) {
            if (SimPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN))
                SimPlayer.respawn();
            continue;
        }
        if (SimPlayer.hasTag(SIGN.AUTO_JUMP_SIGN))
            SimPlayer.jump();
        const EntitiesFromView = SimPlayer.getEntitiesFromViewDirection({ maxDistance: 4 })[0]?.entity;
        if (SimPlayer.hasTag(SIGN.ATTACK_SIGN) && EntitiesFromView)
            SimPlayer.attackEntity(EntitiesFromView);
        const EntitiesNear = getEntitiesNear(SimPlayer.location, SimPlayer.dimension, 4, {})[0];
        if (SimPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesNear)
            SimPlayer.lookAtEntity(EntitiesNear);
        if (SimPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesFromView)
            SimPlayer.attackEntity(EntitiesFromView);
        if (SimPlayer.hasTag(SIGN.AUTO_TRIDENT_SIGN))
            SimPlayer.useItemInSlot(0) ? system.runTimeout(() => SimPlayer.stopUsingItem(), 10) : 0;
        if (SimPlayer.hasTag(SIGN.AUTO_CHASE_SIGN)) {
            const entities = getEntitiesNear(SimPlayer.location, SimPlayer.dimension, 12, { families: ["undead"] })
                .concat(getEntitiesNear(SimPlayer.location, SimPlayer.dimension, 12, { families: ["monster"] }))
                .concat(getPlayerNear(SimPlayer, 12, {}));
            SimulatedPlayerStates[SimPlayer.id] || (SimulatedPlayerStates[SimPlayer.id] = {});
            SimulatedPlayerStates[SimPlayer.id]["o"] || (SimulatedPlayerStates[SimPlayer.id]["o"] = SimPlayer.location);
            const r = (x, _x, v) => x - _x > v || x - _x < -v;
            const r3 = (o, _o, v) => o.x - _o.x > v || o.x - _o.x < -v || o.y - _o.y > v || o.y - _o.y < -v || o.z - _o.z > v || o.z - _o.z < -v;
            const fix = (location) => Vector_subtract(location, testWorldLocation);
            if (entities.length > 0) {
                const target = entities[0];
                if (!r3(target.location, SimPlayer.location, 4)) {
                    SimPlayer.moveToLocation(fix(target.location));
                    console.error(target.typeId, target.location.x, target.location.y, target.location.z);
                }
            }
            else {
                console.error("back");
                if (r3(SimPlayer.location, SimulatedPlayerStates[SimPlayer.id]["o"], 1))
                    SimPlayer.moveToLocation(fix(SimulatedPlayerStates[SimPlayer.id]["o"]));
            }
        }
    }
}
system.runInterval(AUTO_BEHAVIOR, 0);
