import {
    EntityEventOptions,
    Entity,
    Vector3,
    type EntityDieAfterEvent,
} from "@minecraft/server";


//逆码的，乱起来了
import { SimulatedPlayer,
} from "@minecraft/server-gametest";

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