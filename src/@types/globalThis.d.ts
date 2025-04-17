import {
    EntityEventOptions,
    Entity,
    Vector3,
    type EntityDieAfterEvent,
} from "@minecraft/server";


//逆码的，乱起来了
import { SimulatedPlayer,
} from "@minecraft/server-gametest";

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
export class EntityDeadByHurtEvent extends EntityDieAfterEvent {
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

export class playerReadyAfterEventSignal {
    subscribe(undefined): void;
    unsubscribe(undefined): void;
    trigger(undefined): void;
}