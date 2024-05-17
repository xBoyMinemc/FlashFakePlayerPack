import { system } from "@minecraft/server";

// import { world as _world} from "@minecraft/server";

export class Location {
    x:number;
    y:number;
    z:number;
    constructor(x:number, y:number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
export class BlockLocation extends Location {
    blocksBetween(BlockLocation:Location) {
        const BlockLocations = [];
        x: for (let xOff = this.x - BlockLocation.x; xOff !== 0; xOff > 0 ? --xOff : ++xOff)
            y: for (let yOff = this.y - BlockLocation.y; yOff !== 0; yOff > 0 ? --yOff : ++yOff)
                z: for (let zOff = this.z - BlockLocation.z; zOff !== 0; zOff > 0 ? --zOff : ++zOff)
                    BlockLocations.push({ "x": this.x - xOff, "y": this.y - yOff, "z": this.z - zOff });
        return BlockLocations;
    }
}
export class EventSignal<T> {
    listeners = new Set<Function>()
    subscribe(listener : (arg:T) => void) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener: (arg:T) => void) {
        this.listeners.delete(listener)
    }
    trigger(ev: T) {
        this.listeners.forEach((listener: Function) => listener(ev))
    }
}

// const tick : TickEventSignal = new EventSignal<TickEvent>();
//
// system.runInterval(() => tick.trigger({currentTick:system.currentTick}), 1);
//
// // @ts-ignore
// globalThis.tick = tick

//
// const bf = _world.beforeEvents;
// const af = _world.afterEvents;
// export const Events = {
//     tick: tick,
//
//     beforeChat: bf.chatSend,
//     beforeDataDrivenEntityTriggerEvent: bf.dataDrivenEntityTriggerEvent,
//     beforeExplosion: bf.explosion,
//     beforeItemDefinitionEvent: bf.itemDefinitionEvent,
//     beforeItemUse: bf.itemUse,
//     beforeItemUseOn: bf.itemUseOn,
//     beforePistonActivate: bf.pistonActivate,
//
//     blockBreak: af.playerBreakBlock,
//     blockExplode: af.blockExplode,
//     blockPlace: af.playerPlaceBlock,
//     buttonPush: af.buttonPush,
//     chat: af.chatSend,
//     dataDrivenEntityTriggerEvent: af.dataDrivenEntityTriggerEvent,
//     effectAdd: af.effectAdd,
//     entityDie: af.entityDie,
//     // entityHit: af.entityHit, // pupupu 裂开
//     entityHit: af.entityHitBlock,
//     entityHitEntity: af.entityHitEntity,
//     entityHitBlock: af.entityHitBlock,
//     entityHurt: af.entityHurt,
//     entityRemoved: af.entityRemove,
//     entitySpawn: af.entitySpawn,
//     explosion: af.explosion,
//     itemCompleteCharge: af.itemCompleteUse,
//     itemDefinitionEvent: af.itemDefinitionEvent,
//     itemReleaseCharge: af.itemReleaseUse,
//     itemStartCharge: af.itemStartUse,
//     itemStartUseOn: af.itemStartUseOn,
//     itemStopCharge: af.itemStopUse,
//     itemStopUseOn: af.itemStopUseOn,
//     itemUse: af.itemUse,
//     itemUseOn: af.itemUseOn,
//     // leverActivate: af.leverActivate,//有*？
//     leverActivate: af.leverAction,
//     messageReceive: af.messageReceive,
//     pistonActivate: af.pistonActivate,
//     playerJoin: af.playerJoin,
//     playerLeave: af.playerLeave,
//     playerSpawn: af.playerSpawn,
//     pressurePlatePop: af.pressurePlatePop,
//     pressurePlatePush: af.pressurePlatePush,
//     projectileHit: af.projectileHitBlock,
//     projectileHitBlock: af.projectileHitBlock,
//     projectileHitEntity: af.projectileHitEntity,
//     targetBlockHit: af.targetBlockHit,
//     tripWireTrip: af.tripWireTrip,
//     weatherChange: af.weatherChange,
//     worldInitialize: af.worldInitialize,
// };





//   import { register } from "@minecraft/server-gametest";
//
  import type { TickEventSignal, TickEvent } from  "../../@types/globalThis"
//
  declare const globalThis: GlobalThis;
//   declare const world: _World & {events:all_Events} ;
//   export type World =  _World & {events:all_Events}
//   //不会写
//   // @ts-ignore
//   globalThis.world = Object.assign(_world,{events:Events});
//   globalThis.GameTest = {"register":register};
  globalThis.Location = Location;
  globalThis.BlockLocation = BlockLocation;
//