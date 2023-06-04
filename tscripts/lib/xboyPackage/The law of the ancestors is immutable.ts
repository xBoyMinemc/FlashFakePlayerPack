import { world } from "@minecraft/server";
import type { Events as _Events} from "../../@types/temp";
import {
  BlockBreakAfterEventSignal,
  BlockExplodeAfterEventSignal,
  BlockPlaceAfterEventSignal,
  ButtonPushAfterEventSignal,
  ChatSendAfterEventSignal,
  ChatSendBeforeEventSignal,
  DataDrivenEntityTriggerAfterEventSignal,
  DataDrivenEntityTriggerBeforeEventSignal,
  EffectAddAfterEventSignal,
  EntityDieAfterEventSignal,
  EntityHealthChangedAfterEventSignal,
  EntityHitAfterEventSignal,
  EntityHurtAfterEventSignal,
  EntityRemovedAfterEventSignal,
  EntitySpawnAfterEventSignal,
  ExplosionAfterEventSignal,
  ExplosionBeforeEventSignal,
  ItemCompleteUseAfterEventSignal,
  ItemDefinitionAfterEventSignal,
  ItemDefinitionBeforeEventSignal,
  ItemReleaseUseAfterEventSignal,
  ItemStartUseAfterEventSignal,
  ItemStartUseOnAfterEventSignal,
  ItemStopUseAfterEventSignal,
  ItemStopUseOnAfterEventSignal,
  ItemUseAfterEventSignal,
  ItemUseBeforeEventSignal,
  ItemUseOnAfterEventSignal,
  ItemUseOnBeforeEventSignal,
  LeverActionAfterEventSignal,
  PistonActivateAfterEventSignal,
  PistonActivateBeforeEventSignal,
  PlayerJoinAfterEventSignal,
  PlayerLeaveAfterEventSignal,
  PlayerSpawnAfterEventSignal,
  PressurePlatePopAfterEventSignal,
  PressurePlatePushAfterEventSignal,
  ProjectileHitAfterEventSignal,
  ServerMessageAfterEventSignal,
  TargetBlockHitAfterEventSignal,
  TripWireTripAfterEventSignal,
  WeatherChangeAfterEventSignal, WorldInitializeAfterEventSignal
} from "@minecraft/server";

export class Location {
  x: number;
  y: number;
  z: number;
    constructor(x:number, y:number, z:number) {
      this.x = x;
      this.y = y;
      this.z = z;
  }
}


export class BlockLocation extends Location {
  // blocksBetween(BlockLocation){
  //   const BlockLocations = []
  //   x:for(let xOff = this.x - BlockLocation.x;;xOff>0?--xOff:++xOff){
  //     y:for(let yOff = this.y - BlockLocation.y;;yOff>0?--yOff:++yOff){
  //       z:for(let zOff = this.z - BlockLocation.z;;zOff>0?--zOff:++zOff){
  //         // console.error(...[this.x-xOff,this.y-yOff,this.z-zOff])
  //         BlockLocations.push({"x":this.x-xOff,"y":this.y-yOff,"z":this.z-zOff})
  //         // BlockLocations.push([this.x+xOff,this.y+yOff,this.z+zOff])
  //         if(zOff===0)break z;
  //       }
  //       if(yOff===0)break y;
  //     }
  //     if(xOff===0)break x;
  //   }
  //   return BlockLocations;
  // }
  blocksBetween(BlockLocation:BlockLocation){
    const BlockLocations = []
    x:for(let xOff = this.x - BlockLocation.x;xOff!==0;xOff>0?--xOff:++xOff)
    y:for(let yOff = this.y - BlockLocation.y;yOff!==0;yOff>0?--yOff:++yOff)
    z:for(let zOff = this.z - BlockLocation.z;zOff!==0;zOff>0?--zOff:++zOff)
           BlockLocations.push({"x":this.x-xOff,"y":this.y-yOff,"z":this.z-zOff})
    return BlockLocations;
  }
}

// export class WorldBeforeEvents {
//   readonly chatSend: ChatSendBeforeEventSignal;
//   readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;
//   readonly explosion: ExplosionBeforeEventSignal;
//   readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal;
//   readonly itemUse: ItemUseBeforeEventSignal;
//   readonly itemUseOn: ItemUseOnBeforeEventSignal;
//   readonly pistonActivate: PistonActivateBeforeEventSignal;
// }
// export class WorldAfterEvents {
//
//   readonly blockBreak: BlockBreakAfterEventSignal;
//   readonly blockExplode: BlockExplodeAfterEventSignal;
//   readonly blockPlace: BlockPlaceAfterEventSignal;
//   readonly buttonPush: ButtonPushAfterEventSignal;
//   readonly chatSend: ChatSendAfterEventSignal;
//   readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;
//   readonly effectAdd: EffectAddAfterEventSignal;
//   readonly entityDie: EntityDieAfterEventSignal;
//   readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
//   readonly entityHit: EntityHitAfterEventSignal;
//   readonly entityHurt: EntityHurtAfterEventSignal;
//   readonly entityRemoved: EntityRemovedAfterEventSignal;
//   readonly entitySpawn: EntitySpawnAfterEventSignal;
//   readonly explosion: ExplosionAfterEventSignal;
//   readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
//   readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal;
//   readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
//   readonly itemStartUse: ItemStartUseAfterEventSignal;
//   readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
//   readonly itemStopUse: ItemStopUseAfterEventSignal;
//   readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
//   readonly itemUse: ItemUseAfterEventSignal;
//   readonly itemUseOn: ItemUseOnAfterEventSignal;
//   readonly leverActivate: LeverActionAfterEventSignal;
//   readonly messageReceive: ServerMessageAfterEventSignal;
//   readonly pistonActivate: PistonActivateAfterEventSignal;
//   readonly playerJoin: PlayerJoinAfterEventSignal;
//   readonly playerLeave: PlayerLeaveAfterEventSignal;
//   readonly playerSpawn: PlayerSpawnAfterEventSignal;
//   readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
//   readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
//   readonly projectileHit: ProjectileHitAfterEventSignal;
//   readonly targetBlockHit: TargetBlockHitAfterEventSignal;
//   readonly tripWireTrip: TripWireTripAfterEventSignal;
//   readonly weatherChange: WeatherChangeAfterEventSignal;
//   readonly worldInitialize: WorldInitializeAfterEventSignal;
// }
const bf = world.beforeEvents;
const af = world.afterEvents;
export const Events = {
  beforeChat : bf.chatSend,
  beforeDataDrivenEntityTriggerEvent : bf.dataDrivenEntityTriggerEvent,
  beforeExplosion : bf.explosion,
  beforeItemDefinitionEvent:bf.itemDefinitionEvent,
  beforeItemUse:bf.itemUse,
  beforeItemUseOn:bf.itemUseOn,
  beforePistonActivate:bf.pistonActivate,

  blockBreak:af.blockBreak,
  blockExplode:af.blockExplode,
  blockPlace:af.blockPlace,
  buttonPush:af.buttonPush,
  chat:af.chatSend,
  dataDrivenEntityTriggerEvent:af.dataDrivenEntityTriggerEvent,
  effectAdd:af.effectAdd,
  entityDie:af.entityDie,
  entityHit:af.entityHit,
  entityHurt:af.entityHurt,
  entityRemoved:af.entityRemoved, // new
  entitySpawn:af.entitySpawn,
  explosion:af.explosion,
  itemCompleteCharge:af.itemCompleteUse, // rename?
  itemDefinitionEvent:af.itemDefinitionEvent,
  itemReleaseCharge:af.itemReleaseUse, // rename?
  itemStartCharge:af.itemStartUse, // rename?
  itemStartUseOn:af.itemStartUseOn,
  itemStopCharge:af.itemStopUse, // rename?
  itemStopUseOn:af.itemStopUseOn,
  itemUse:af.itemUse,
  itemUseOn:af.itemUseOn,
  leverActivate:af.leverActivate,
  messageReceive:af.messageReceive,
  pistonActivate:af.pistonActivate,
  playerJoin:af.playerJoin,
  playerLeave:af.playerLeave,
  playerSpawn:af.playerSpawn,
  pressurePlatePop:af.pressurePlatePop,
  pressurePlatePush:af.pressurePlatePush,
  projectileHit:af.projectileHit,
  targetBlockHit:af.targetBlockHit, // new
  tripWireTrip:af.tripWireTrip, // new
  weatherChange:af.weatherChange,
  worldInitialize:af.worldInitialize,
}

