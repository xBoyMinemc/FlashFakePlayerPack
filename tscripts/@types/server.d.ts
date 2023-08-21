import {
    BeforeChatEventSignal_deprecated,
    BeforeDataDrivenEntityTriggerEventSignal_deprecated,
    BeforeExplosionEventSignal_deprecated,
    BeforeItemDefinitionEventSignal_deprecated,
    BeforeItemUseEventSignal_deprecated,
    BeforeItemUseOnEventSignal_deprecated,
    BeforePistonActivateEventSignal_deprecated,
    BlockBreakEventSignal_deprecated,
    BlockExplodeEventSignal_deprecated,
    BlockPlaceEventSignal_deprecated,
    ButtonPushEventSignal_deprecated,
    ChatEventSignal_deprecated,
    DataDrivenEntityTriggerEventSignal_deprecated,
    EffectAddEventSignal_deprecated,
    EntityDieEventSignal_deprecated,
    EntityHitEventSignal_deprecated,
    EntityHurtEventSignal_deprecated,
    EntitySpawnEventSignal_deprecated,
    ExplosionEventSignal_deprecated,
    ItemCompleteChargeEventSignal_deprecated,
    ItemDefinitionEventSignal_deprecated,
    ItemReleaseChargeEventSignal_deprecated,
    ItemStartChargeEventSignal_deprecated,
    ItemStartUseOnEventSignal_deprecated,
    ItemStopChargeEventSignal_deprecated,
    ItemStopUseOnEventSignal_deprecated,
    ItemUseEventSignal_deprecated,
    ItemUseOnEventSignal_deprecated,
    LeverActionEventSignal_deprecated,
    PistonActivateEventSignal_deprecated,
    PlayerJoinEventSignal_deprecated,
    PlayerLeaveEventSignal_deprecated,
    PlayerSpawnEventSignal_deprecated, ProjectileHitEventSignal_deprecated,
    ServerMessageSignal_deprecated, WeatherChangeEventSignal_deprecated, WorldInitializeEventSignal_deprecated
} from "./temp";

/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class Events {
    protected constructor();
    readonly beforeChat: BeforeChatEventSignal_deprecated;
    /**
     * @remarks
     * This event is fired before the triggering of an entity event
     * that updates the component definition state of an entity.
     * Within this event, you can cancel or shape the impacted
     * components and event triggers.
     *
     */
    readonly beforeDataDrivenEntityTriggerEvent: BeforeDataDrivenEntityTriggerEventSignal_deprecated;
    /**
     * @remarks
     * This event is fired before an explosion occurs.
     *
     */
    readonly beforeExplosion: BeforeExplosionEventSignal_deprecated;
    /**
     * @remarks
     * For custom items, this event is triggered before the set of
     * defined components for the item change in response to a
     * triggered event. Note that this event is only fired for
     * custom data-driven items.
     *
     */
    readonly beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal_deprecated;
    /**
     * @remarks
     * This event fires before an item is used by a player.
     *
     */
    readonly beforeItemUse: BeforeItemUseEventSignal_deprecated;
    /**
     * @remarks
     * This event fires before an item is used on a block by an
     * entity or player.
     *
     */
    readonly beforeItemUseOn: BeforeItemUseOnEventSignal_deprecated;
    /**
     * @remarks
     * Fires before a piston is activated.
     *
     */
    readonly beforePistonActivate: BeforePistonActivateEventSignal_deprecated;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     */
    readonly blockBreak: BlockBreakEventSignal_deprecated;
    /**
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     *
     */
    readonly blockExplode: BlockExplodeEventSignal_deprecated;
    /**
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     */
    readonly blockPlace: BlockPlaceEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a button is pushed.
     *
     */
    readonly buttonPush: ButtonPushEventSignal_deprecated;
    readonly chat: ChatEventSignal_deprecated;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     *
     */
    readonly effectAdd: EffectAddEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an entity dies.
     *
     */
    readonly entityDie: EntityDieEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an entity hits (makes a melee attack)
     * and potentially impacts another entity or block.
     *
     */
    readonly entityHit: EntityHitEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     */
    readonly entityHurt: EntityHurtEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     *
     */
    readonly entitySpawn: EntitySpawnEventSignal_deprecated;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     */
    readonly itemCompleteCharge: ItemCompleteChargeEventSignal_deprecated;
    /**
     * @remarks
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     *
     */
    readonly itemDefinitionEvent: ItemDefinitionEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     */
    readonly itemReleaseCharge: ItemReleaseChargeEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     */
    readonly itemStartCharge: ItemStartChargeEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     */
    readonly itemStopCharge: ItemStopChargeEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a lever activates or is deactivated.
     *
     */
    readonly leverActivate: LeverActionEventSignal_deprecated;
    /**
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     */
    readonly messageReceive: ServerMessageSignal_deprecated;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     *
     */
    readonly playerJoin: PlayerJoinEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     *
     */
    readonly playerLeave: PlayerLeaveEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     *
     */
    readonly playerSpawn: PlayerSpawnEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when a projectile hits an entity or block.
     *
     */
    readonly projectileHit: ProjectileHitEventSignal_deprecated;
    /**
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     */
    readonly weatherChange: WeatherChangeEventSignal_deprecated;
    /**
     * @remarks
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     *
     */
    readonly worldInitialize: WorldInitializeEventSignal_deprecated;
}
