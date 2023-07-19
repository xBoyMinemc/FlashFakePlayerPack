import { world } from "@minecraft/server";
export class Location {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
export class BlockLocation extends Location {
    blocksBetween(BlockLocation) {
        const BlockLocations = [];
        x: for (let xOff = this.x - BlockLocation.x; xOff !== 0; xOff > 0 ? --xOff : ++xOff)
            y: for (let yOff = this.y - BlockLocation.y; yOff !== 0; yOff > 0 ? --yOff : ++yOff)
                z: for (let zOff = this.z - BlockLocation.z; zOff !== 0; zOff > 0 ? --zOff : ++zOff)
                    BlockLocations.push({ "x": this.x - xOff, "y": this.y - yOff, "z": this.z - zOff });
        return BlockLocations;
    }
}
const bf = world.beforeEvents;
const af = world.afterEvents;
export const Events = {
    beforeChat: bf.chatSend,
    beforeDataDrivenEntityTriggerEvent: bf.dataDrivenEntityTriggerEvent,
    beforeExplosion: bf.explosion,
    beforeItemDefinitionEvent: bf.itemDefinitionEvent,
    beforeItemUse: bf.itemUse,
    beforeItemUseOn: bf.itemUseOn,
    beforePistonActivate: bf.pistonActivate,
    blockBreak: af.blockBreak,
    blockExplode: af.blockExplode,
    blockPlace: af.blockPlace,
    buttonPush: af.buttonPush,
    chat: af.chatSend,
    dataDrivenEntityTriggerEvent: af.dataDrivenEntityTriggerEvent,
    effectAdd: af.effectAdd,
    entityDie: af.entityDie,
    entityHit: af.entityHit,
    entityHurt: af.entityHurt,
    entityRemoved: af.entityRemoved,
    entitySpawn: af.entitySpawn,
    explosion: af.explosion,
    itemCompleteCharge: af.itemCompleteUse,
    itemDefinitionEvent: af.itemDefinitionEvent,
    itemReleaseCharge: af.itemReleaseUse,
    itemStartCharge: af.itemStartUse,
    itemStartUseOn: af.itemStartUseOn,
    itemStopCharge: af.itemStopUse,
    itemStopUseOn: af.itemStopUseOn,
    itemUse: af.itemUse,
    itemUseOn: af.itemUseOn,
    leverActivate: af.leverActivate,
    messageReceive: af.messageReceive,
    pistonActivate: af.pistonActivate,
    playerJoin: af.playerJoin,
    playerLeave: af.playerLeave,
    playerSpawn: af.playerSpawn,
    pressurePlatePop: af.pressurePlatePop,
    pressurePlatePush: af.pressurePlatePush,
    projectileHit: af.projectileHit,
    targetBlockHit: af.targetBlockHit,
    tripWireTrip: af.tripWireTrip,
    weatherChange: af.weatherChange,
    worldInitialize: af.worldInitialize,
};
