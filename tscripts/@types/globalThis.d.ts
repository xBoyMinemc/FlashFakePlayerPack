import {
    World as _World,
    // Events as _Events,
    EntityEventOptions,
    Entity,
    EntityHurtAfterEvent,
    ChatSendBeforeEventSignal,
    DataDrivenEntityTriggerBeforeEventSignal,
    ExplosionBeforeEventSignal,
    ItemDefinitionBeforeEventSignal,
    ItemUseBeforeEventSignal,
    ItemUseOnBeforeEventSignal,
    PistonActivateBeforeEventSignal,
    WorldAfterEvents,
    PlayerBreakBlockAfterEventSignal,
    BlockExplodeAfterEventSignal,
    PlayerPlaceBlockAfterEventSignal,
    ButtonPushAfterEventSignal,
    ChatSendAfterEventSignal,
    DataDrivenEntityTriggerAfterEventSignal,
    EffectAddAfterEventSignal,
    EntityDieAfterEventSignal,
    EntityHealthChangedAfterEventSignal,
    // EntityHitAfterEventSignal,
    EntityHurtAfterEventSignal,
    EntityHitEntityAfterEventSignal,
    // EntityRemovedAfterEventSignal, // matter?
    EntityRemoveAfterEventSignal,
    EntityRemoveBeforeEventSignal,
    EntitySpawnAfterEventSignal,
    ExplosionAfterEventSignal,
    ItemCompleteUseAfterEventSignal,
    ItemDefinitionAfterEventSignal,
    ItemReleaseUseAfterEventSignal,
    ItemStartUseAfterEventSignal,
    ItemStartUseOnAfterEventSignal,
    ItemStopUseAfterEventSignal,
    ItemStopUseOnAfterEventSignal,
    ItemUseAfterEventSignal,
    ItemUseOnAfterEventSignal,
    LeverActionAfterEventSignal,
    ServerMessageAfterEventSignal,
    PistonActivateAfterEventSignal,
    PlayerJoinAfterEventSignal,
    PlayerLeaveAfterEventSignal,
    PlayerSpawnAfterEventSignal,
    PressurePlatePopAfterEventSignal,
    PressurePlatePushAfterEventSignal,
    // ProjectileHitAfterEventSignal,
    ProjectileHitBlockAfterEventSignal,
    TargetBlockHitAfterEventSignal,
    TripWireTripAfterEventSignal,
    WeatherChangeAfterEventSignal,
    WorldInitializeAfterEventSignal,
    EntityHitBlockAfterEventSignal, ProjectileHitEntityAfterEventSignal, Vector3,
} from "@minecraft/server";

// import type {
//     Events as _Events
// } from "./temp"
//逆码的，乱起来了
import {
    register as _register, SimulatedPlayer,
} from "@minecraft/server-gametest";

import {
    Location,
    BlockLocation
} from "../lib/xboyPackage/The law of the ancestors is immutable";

export type Events = _WorldBeforeEvents & _WorldAfterEvents & _Events

// export { };
declare global {
    interface GlobalThis {
      Location: typeof Location;
      BlockLocation: typeof BlockLocation;
      world: _World & {events:Events};
      GameTest:  {"register":typeof _register};
    }
  }





export class _Events {

    /**
     * This event fires every tick - which is 20 times per second.
     */
    tick: TickEventSignal;
    /**
     * This event fires every reload from command.
     */
    reloadFromCmd: reloadFromCmdEventSignal;
    /**
     * xBoyMinemc
     * This event fires when an entity dead by hurt (takes damage).
     */
    entityDeadByHurt: EntityDeadByHurtEventSignal;
    /**
     * xBoyMinemc
     * This event fires when an FishingHook spawned.
     */
    fishingHookSpawned: FishingHookSpawnedEventSignal;
    /**
     * xBoyMinemc
     * This event fires when an FishingHook despawned.
     */
    fishingHookDespawned: FishingHookDespawnedEventSignal;
    /**
     * xBoyMinemc
     * This event fires when a player moved.
     */
    playerMove: playerMoveAfterEventSignal;


}
export class _WorldBeforeEvents {
    readonly beforeChat: ChatSendBeforeEventSignal;
    readonly beforeDataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;
    readonly beforeExplosion: ExplosionBeforeEventSignal;
    readonly beforeItemDefinitionEvent: ItemDefinitionBeforeEventSignal;
    readonly beforeItemUse: ItemUseBeforeEventSignal;
    readonly beforeItemUseOn: ItemUseOnBeforeEventSignal;
    readonly beforePistonActivate: PistonActivateBeforeEventSignal;
    readonly beforeEntityRemoved : EntityRemoveBeforeEventSignal;
}
export class _WorldAfterEvents {
    readonly blockBreak: PlayerBreakBlockAfterEventSignal;
    readonly blockExplode: BlockExplodeAfterEventSignal;
    readonly blockPlace: PlayerPlaceBlockAfterEventSignal;
    readonly buttonPush: ButtonPushAfterEventSignal;
    readonly chatSend: ChatSendAfterEventSignal;
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;
    readonly effectAdd: EffectAddAfterEventSignal;
    readonly entityDie: EntityDieAfterEventSignal;
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    readonly entityHit: EntityHitBlockAfterEventSignal;
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    readonly entityHurt: EntityHurtAfterEventSignal;
    readonly entityRemoved: EntityRemoveAfterEventSignal;
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    readonly explosion: ExplosionAfterEventSignal;
    readonly itemCompleteCharge: ItemCompleteUseAfterEventSignal;
    readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal;
    readonly itemReleaseCharge: ItemReleaseUseAfterEventSignal;
    readonly itemStartCharge: ItemStartUseAfterEventSignal;
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    readonly itemStopCharge: ItemStopUseAfterEventSignal;
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    readonly itemUse: ItemUseAfterEventSignal;
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    readonly leverActivate: LeverActionAfterEventSignal;
    readonly messageReceive: ServerMessageAfterEventSignal;
    readonly pistonActivate: PistonActivateAfterEventSignal;
    readonly playerJoin: PlayerJoinAfterEventSignal;
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    readonly projectileHit: ProjectileHitBlockAfterEventSignal;
    readonly ProjectileHitBlock: ProjectileHitBlockAfterEventSignal;
    readonly ProjectileHitEntity: ProjectileHitEntityAfterEventSignal;
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    readonly weatherChange: WeatherChangeAfterEventSignal;
    readonly worldInitialize: WorldInitializeAfterEventSignal;

}

// @ts-ignore

export class World extends _World {
    /**
     * @beta
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    // @ts-ignore
    events: Events;
}


/**
 * Manages callbacks that are connected to a reloadFromCmd event.
 */
export class reloadFromCmdEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called on every reload from command.
     * @param callback
     */
    subscribe(callback: (arg: reloadFromCmdEvent) => void): void;
    /**
     * @remarks
     * Removes a callback from being called every reload from command.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: reloadFromCmdEvent) => void): void;
    /**
     * @remarks
     * Trigger a callback from being called every reload from command.
     * @throws This function can throw errors.
     */
    trigger(TickEvent): void;
    protected constructor();
}

/**
 * An event for reloadFromCmd, that fires when reload from command.
 */
export class reloadFromCmdEvent {
}





/**
 * Manages callbacks that are connected to a tick event.
 */
export class TickEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called on every tick.
     * @param callback
     */
    subscribe(callback: (arg: TickEvent) => void): void;
    /**
     * @remarks
     * Removes a callback from being called every tick.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
    /**
     * @remarks
     * Trigger a callback from being called every tick.
     * @throws This function can throw errors.
     */
    trigger(TickEvent): void;
    protected constructor();
}


/**
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    // /**
    //  * Current tick at the time this event was fired.
    //  */
    // readonly currentTick: number;
    // /**
    //  * Time since the last tick was fired.
    //  */
    // readonly deltaTime: number;
    // protected constructor();
}

/**
 * xBoyMinemc
 * Manages callbacks that are connected to when an entity dead by hurt.
 */
export class EntityDeadByHurtEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an entity is  dead by hurt.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityDeadByHurtEvent) => void, options?: EntityEventOptions): (arg: EntityDeadByHurtEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is dead by hurt.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDeadByHurtEvent) => void): void;
    trigger(EntityDeadByHurt: EntityDeadByHurtEvent): void;
    protected constructor();
}
/**
 * Contains information related to an entity getting dead by
 * another entity.
 */
// @ts-ignore
export class EntityDeadByHurtEvent extends EntityHurtAfterEvent {
    // /**
    //  * A summary of the reason that damage was caused.
    //  */
    // readonly cause: EntityDamageCause;
    // /**
    //  * Describes the amount of damage caused.
    //  */
    // readonly damage: number;
    // /**
    //  * Optional entity that caused the damaging attack, or
    //  * undefined if the hurt reason was not because of another
    //  * entity.
    //  */
    // readonly damagingEntity: Entity;
    // /**
    //  * Entity that was Dead.
    //  */
    // readonly hurtEntity: Entity;
    // /**
    //  * Optional entity for a projectile that potentially hurt an
    //  * entity.
    //  */
    // readonly projectile: Entity;
    // protected constructor();
}

export class FishingHookSpawnedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a FishingHook spawned.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: FishingHookSpawnedEvent) => void, options?: EntityEventOptions): (arg: FishingHookSpawnedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a FishingHook spawned.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: FishingHookSpawnedEvent) => void): void;
    trigger(FishingHookDespawned: FishingHookSpawnedEvent): void;
    protected constructor();
}
export class FishingHookSpawnedEvent {
    /**
     * fishing who
     */
    Fisher: Entity;
    /**
     * id of Hook.
     */
    HookId: Entity["id"];
    protected constructor();
}
export class FishingHookDespawnedEvent {
    /**
     * fishing who
     */
    Fisher: Entity;
    /**
     * id of Hook.
     */
    HookId: Entity["id"];
    /**
     * array of callback be fired once.
     */
    fishingHookDespawned_TickArray: Array<Function>;
    protected constructor();
}

/**
 * xBoyMinemc
 * Manage callback that are triggered to when FishingHook Despawned.
 */
export class FishingHookDespawnedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a FishingHook Despawned.
     * @param callback
     * @param options?: EntityEventOptions
     */
    subscribe(callback: (arg: FishingHookDespawnedEvent) => void, options?: EntityEventOptions): (arg: FishingHookDespawnedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a FishingHook Despawned.
     * @param callback
     */
    unsubscribe(callback: (arg: FishingHookDespawnedEvent) => void): void;
    trigger(FishingHookDespawnedEvent: FishingHookDespawnedEvent): void;
    protected constructor();
}
export { BlockLocation };

export class initializedEvent {}
export  class initializedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when this initialized.
     * @param callback
     * @param options?: initializedEvent
     */
    subscribe(callback: (arg: initializedEvent) => void): (arg: initializedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when this initialized.
     * @param callback
     */
    unsubscribe(callback: (arg: initializedEvent) => void): void;
    trigger(initializedEvent: initializedEvent): void;
    // protected constructor();
}
export class spawnedEvent {
    // a spawned SimulatedPlayer Entity
    spawnedSimulatedPlayer : SimulatedPlayer;
    // PID
    PID : number;
}
export  class spawnedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a spawned SimulatedPlayer Entity.
     * @param callback
     * @param options?: spawnedEvent
     */
    subscribe(callback: (arg: spawnedEvent) => void): (arg: spawnedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a spawned SimulatedPlayer Entity.
     * @param callback
     */
    unsubscribe(callback: (arg: spawnedEvent) => void): void;
    trigger(initializedEvent: spawnedEvent): void;
    // protected constructor();
}
export class projectileFiredEvent {
    /**
     * who Fired projectile.
     */
    Fisher: Entity;
    /**
     * id of projectile entity.
     */
    HookId: Entity["id"];
    protected constructor();
}
export class projectileFiredEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a projectile Fired.
     * @param callback
     */
    subscribe(callback: (arg: projectileFiredEvent) => void): (arg: projectileFiredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile Fired.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: projectileFiredEvent) => void): void;
    trigger(projectileFired: projectileFiredEvent): void;
    protected constructor();
}
export class playerMoveAfterEvent {
    /**
     * @remarks
     * Describes the location after move.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Describes the viewDirection after move.
     *
     */
    readonly viewDirection: Vector3;
    /**
     * @remarks
     * Describes the location before move.
     *
     */
    readonly locationBefore: Vector3;
    /**
     * @remarks
     * Describes the viewDirection before move.
     *
     */
    readonly viewDirectionBefore: Vector3;
}



export class playerMoveAfterEventSignal {
    subscribe(callback: (arg: playerMoveAfterEvent) => void): (arg: playerMoveAfterEvent) => void;
    unsubscribe(callback: (arg: playerMoveAfterEvent) => void): void;
    trigger(playerMoveAfterEvent: playerMoveAfterEvent): void;
}