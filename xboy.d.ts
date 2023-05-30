import {Entity,EntityDamageCause,EntityEventOptions,Player,BeforeItemUseOnEvent} from "@minecraft/server"


export class World {

    /**
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    events: Events;
}

export class Events {
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
     * Silvigarabis
     * Thie event fires when a player is joining the game.
     */
    playerJoining: PlayerJoiningEventSignal;
    /**
     * Silvigarabis
     * Thie event fires when a player have been joined the game.
     */
    playerJoined: PlayerJoinedEventSignal;
    /**
     * This event fires every tick - which is 20 times per second.
     */
    tick: TickEventSignal;
    /**
     * PrairieFire2b
     * This event fires every times when player wants sleep.
     */
    beforePlayerSleep: BeforePlayerSleepEventSignal;
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
    trigger(EntityDeadByHurt:EntityDeadByHurtEvent): void;
    protected constructor();
}
/**
 * Contains information related to an entity getting dead by
 * another entity.
 */
export class EntityDeadByHurtEvent {
    /**
     * A summary of the reason that damage was caused.
     */
    readonly cause: EntityDamageCause;
    /**
     * Describes the amount of damage caused.
     */
    readonly damage: number;
    /**
     * Optional entity that caused the damaging attack, or
     * undefined if the hurt reason was not because of another
     * entity.
     */
    readonly damagingEntity: Entity;
    /**
     * Entity that was Dead.
     */
    readonly hurtEntity: Entity;
    /**
     * Optional entity for a projectile that potentially hurt an
     * entity.
     */
    readonly projectile: Entity;
    protected constructor();
}

/**
 * xBoyMinemc
 * Manage callback that are triggered to when new FishingHook spawned.
 */
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
    trigger(FishingHookSpawnedEvent:FishingHookSpawnedEvent): void;
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
     */
    subscribe(callback: (arg: FishingHookDespawnedEvent) => void, options?: EntityEventOptions): (arg: FishingHookDespawnedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a FishingHook Despawned.
     * @param callback
     */
    unsubscribe(callback: (arg: FishingHookDespawnedEvent) => void): void;
    trigger(FishingHookDespawnedEvent:FishingHookDespawnedEvent): void;
    protected constructor();
}

// /**
//  * Manage callback that are triggered to when new FishingHook created.
//  */
//  export class EntityCreateEventSignal {
//     subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
//     unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
//     trigger(EntityDeadByHurt:EntityDeadByHurt): void;
// }
export class FishingHookSpawnedEvent {
    /**
     * finshing who
     */
    Fisher: Entity;
    /**
     * id of Hook.
     */
    HookId: string;
    protected constructor();
}
export class FishingHookDespawnedEvent {
    /**
     * finshing who
     */
    Fisher: Entity;
    /**
     * id of Hook.
     */
    HookId: string;
    protected constructor();
}

/**
 * Manage callback that are triggered to when player is joining the game.
 */
export class PlayerJoiningEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player trying to join the game
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoiningEvent) => void): (arg: PlayerJoiningEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player trying to join the game
     * @param callback
     */
    unsubscribe(callback: (arg: PlayerJoiningEvent) => void): void;
    trigger(PlayerJoiningEvent:PlayerJoiningEvent): void;
    protected constructor();
}

export class PlayerJoiningEvent {
    /**
     * the instance of player, note that while player joining game, the instance of player are not able to execute method
     */
    readonly player: Player;
    /**
     * If set to true in a playerJoining event handler, the game will try to kick the player.
     */
    cancel: boolean;
    protected constructor();
}

/**
 * Manage callback that are triggered to when player joined the game.
 */
export class PlayerJoinedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player have been joined the game
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoinedEvent) => void): (arg: PlayerJoinedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player have been joined the game
     * @param callback
     */
    unsubscribe(callback: (arg: PlayerJoinedEvent) => void): void;
    trigger(PlayerJoinedEvent:PlayerJoinedEvent): void;
    protected constructor();
}

export class PlayerJoinedEvent {
    /**
     * the instance of player, note that while player joining game, the instance of player are not able to execute method
     */
    readonly player: Player;
    /**
     * Kick the player that joined the game.
     */
    kickPlayer(): void;
    protected constructor();
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
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called every tick.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
    protected constructor();
}


/**
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    /**
     * Current tick at the time this event was fired.
     */
    readonly currentTick: number;
    /**
     * Time since the last tick was fired.
     */
    readonly deltaTime: number;
}



/**
 * Manages callbacks that are connected to a tick event.
 */
export class BeforePlayerSleepEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called on every event fire.
     * @param callback
     */
    subscribe(callback: (arg: BeforePlayerSleepEvent) => void): (arg: BeforePlayerSleepEvent) => void;
    /**
     * @remarks
     * Removes a callback from it.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforePlayerSleepEvent) => void): void;
}


/**
 * PrairieFire2b
 * This event fires every times when player wants sleep.
 */
export class BeforePlayerSleepEvent extends BeforeItemUseOnEvent {

    /**
     * @remarks
     * player that useOn bed and wants sleep.
     * @param Entity
     */
    // player : Entity;


}

