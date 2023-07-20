// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.1.0"
 * }
 * ```
 *
 */
/**
 * @beta
 * Represents a direction for expressing relative position or
 * facing.
 */
export enum Direction {
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the down (z - 1)
     * direction.
     *
     */
    down = 'down',
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the east (x + 1)
     * direction.
     *
     */
    east = 'east',
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the north (z - 1)
     * direction.
     *
     */
    north = 'north',
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the south (z + 1)
     * direction.
     *
     */
    south = 'south',
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the up (z + 1)
     * direction.
     *
     */
    up = 'up',
    /**
     * @beta
     * @remarks
     * Represents an object located or facing in the west (x - 1)
     * direction.
     *
     */
    west = 'west',
}

/**
 * @beta
 * An enumeration for the locations where scoreboard objectives
 * can be displayed.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * @remarks
     * Score for an objective is displayed below a player's
     * nametag.
     *
     */
    belowname = 'belowname',
    /**
     * @beta
     * @remarks
     * This objective and respective list of players is shown on
     * the Pause menu.
     *
     */
    list = 'list',
    /**
     * @beta
     * @remarks
     * The objective is shown on the right-hand side of the screen.
     *
     */
    sidebar = 'sidebar',
}

/**
 * @beta
 * All the dye types supported by scripting
 */
export enum DyeColor {
    black = 'black',
    blue = 'blue',
    brown = 'brown',
    cyan = 'cyan',
    gray = 'gray',
    green = 'green',
    lightBlue = 'lightBlue',
    lime = 'lime',
    magenta = 'magenta',
    orange = 'orange',
    pink = 'pink',
    purple = 'purple',
    red = 'red',
    silver = 'silver',
    white = 'white',
    yellow = 'yellow',
}

/**
 * @beta
 */
export enum EntityDamageCause {
    anvil = 'anvil',
    blockExplosion = 'blockExplosion',
    charging = 'charging',
    contact = 'contact',
    drowning = 'drowning',
    entityAttack = 'entityAttack',
    entityExplosion = 'entityExplosion',
    fall = 'fall',
    fallingBlock = 'fallingBlock',
    fire = 'fire',
    fireTick = 'fireTick',
    fireworks = 'fireworks',
    flyIntoWall = 'flyIntoWall',
    freezing = 'freezing',
    lava = 'lava',
    lightning = 'lightning',
    magic = 'magic',
    magma = 'magma',
    none = 'none',
    override = 'override',
    piston = 'piston',
    projectile = 'projectile',
    stalactite = 'stalactite',
    stalagmite = 'stalagmite',
    starve = 'starve',
    suffocation = 'suffocation',
    suicide = 'suicide',
    temperature = 'temperature',
    thorns = 'thorns',
    'void' = 'void',
    wither = 'wither',
}

/**
 * @beta
 */
export enum EquipmentSlot {
    chest = 'chest',
    feet = 'feet',
    head = 'head',
    legs = 'legs',
    mainhand = 'mainhand',
    offhand = 'offhand',
}

/**
 * @beta
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @beta
     * @remarks
     * Represents lava as a type of fluid.
     *
     */
    lava = 'lava',
    /**
     * @beta
     * @remarks
     * Represents a potion as a type of fluid.
     *
     */
    potion = 'potion',
    /**
     * @beta
     * @remarks
     * Represents powder snow as a type of fluid.
     *
     */
    powderSnow = 'powderSnow',
    /**
     * @beta
     * @remarks
     * Represents water as a type of fluida.
     *
     */
    water = 'water',
}

/**
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @remarks
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    adventure = 'adventure',
    /**
     * @remarks
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     *
     */
    creative = 'creative',
    spectator = 'spectator',
    /**
     * @remarks
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     *
     */
    survival = 'survival',
}

/**
 * @beta
 */
export enum ItemLockMode {
    inventory = 'inventory',
    none = 'none',
    slot = 'slot',
}

/**
 * @beta
 */
export enum MessageSourceType {
    clientScript = 'clientScript',
    commandBlock = 'commandBlock',
    dialogueCommand = 'dialogueCommand',
    entityCommand = 'entityCommand',
    serverCommand = 'serverCommand',
    serverScript = 'serverScript',
}

/**
 * @beta
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     *
     */
    ascending = 0,
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     *
     */
    descending = 1,
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to an entity.
     *
     */
    entity = 'entity',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    fakePlayer = 'fakePlayer',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a player.
     *
     */
    player = 'player',
}

/**
 * @beta
 */
export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * @beta
     * @remarks
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     *
     */
    hang = 'hang',
    /**
     * @beta
     * @remarks
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     *
     */
    stackOverflow = 'stackOverflow',
}

/**
 * @beta
 */
export class BeforeChatEvent extends ChatEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Updates a list of players that will receive this message.
     *
     * This function can't be called in read-only mode.
     *
     */
    setTargets(players: Player[]): void;
}

/**
 * @beta
 */
export class BeforeChatEventSignal_deprecated extends IBeforeChatEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeDataDrivenEntityTriggerEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
    readonly entity: Entity;
    readonly id: string;
    /**
     * @remarks
     * Retrieves a list of modifications to component state that
     * are the effect of this triggered event.
     *
     * This function can't be called in read-only mode.
     *
     */
    getModifiers(): DefinitionModifier[];
    /**
     * @remarks
     * Updates a list of modifications to component state that are
     * the effect of this triggered event.
     *
     * This function can't be called in read-only mode.
     *
     */
    setModifiers(modifiers: DefinitionModifier[]): void;
}

/**
 * @beta
 */
export class BeforeDataDrivenEntityTriggerEventSignal_deprecated extends IBeforeDataDrivenEntityTriggerEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeExplosionEvent extends ExplosionEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Updates the collection of blocks impacted by this explosion
     * event.
     *
     * This function can't be called in read-only mode.
     *
     */
    setImpactedBlocks(blocks: Vector3[]): void;
}

/**
 * @beta
 */
export class BeforeExplosionEventSignal_deprecated extends IBeforeExplosionEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeItemDefinitionEventSignal_deprecated extends IBeforeItemDefinitionEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeItemDefinitionTriggeredEvent extends ItemDefinitionTriggeredEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 */
export class BeforeItemUseEvent extends ItemUseEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 */
export class BeforeItemUseEventSignal_deprecated extends IBeforeItemUseEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeItemUseOnEvent extends ItemUseOnEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 */
export class BeforeItemUseOnEventSignal_deprecated extends IBeforeItemUseOnEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforePistonActivateEvent extends BlockEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

/**
 * @beta
 */
export class BeforePistonActivateEventSignal_deprecated extends IBeforePistonActivateEventSignal_deprecated {
    protected constructor();
}

/**
 * @beta
 */
export class BeforeWatchdogTerminateEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    cancel: boolean;
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 */
export class BeforeWatchdogTerminateEventSignal_deprecated extends IBeforeWatchdogTerminateEventSignal {
    protected constructor();
}

/**
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    protected constructor();
    /**
     * @remarks
     * Returns the dimension that the block is within.
     *
     */
    readonly dimension: Dimension;
    /**
     * @beta
     * @remarks
     * Returns or sets whether this block has a liquid on it.
     *
     * This property can't be edited in read-only mode.
     *
     */
    isWaterlogged: boolean;
    /**
     * @remarks
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Additional block configuration data that describes the
     * block.
     *
     * @throws This property can throw when used.
     */
    readonly permutation: BlockPermutation;
    /**
     * @beta
     * @remarks
     * Gets the type of block.
     *
     * @throws This property can throw when used.
     */
    readonly 'type': BlockType;
    /**
     * @beta
     * @remarks
     * Identifier of the type of block for this block.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @remarks
     * X coordinate of the block.
     *
     */
    readonly x: number;
    /**
     * @remarks
     * Y coordinate of the block.
     *
     */
    readonly y: number;
    /**
     * @remarks
     * Z coordinate of the block.
     *
     */
    readonly z: number;
    /**
     * @beta
     * @remarks
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block
     *
     * This function can't be called in read-only mode.
     *
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
     */
    canPlace(blockToPlace: BlockPermutation | BlockType, faceToPlaceOn?: Direction): boolean;
    /**
     * @beta
     * @remarks
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     *
     * This function can't be called in read-only mode.
     *
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, minecraft: is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): BlockComponent | undefined;
    /**
     * @beta
     * @remarks
     * Creates a prototype item stack based on this block that can
     * be used with Container/ContainerSlot APIs.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Number of instances of this block to place in the item
     * stack.
     * @param withData
     * Whether additional data facets of the item stack are
     * included.
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack;
    /**
     * @beta
     * @remarks
     * Returns the net redstone power of this block.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     */
    getRedstonePower(): number | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of tags for a block.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * The list of tags that the block has.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     *        console.log(`Block is dirt: ${block.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${block.hasTag("wood")}`);
     *        console.log(`Block is stone: ${block.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isAir(): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is a liquid block - (e.g., a
     * water block and a lava black are liquid, while an air block
     * and a stone block are not).
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isLiquid(): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is solid and impassible - (e.g.,
     * a cobblestone block and a diamond block are solid, while a
     * ladder block and a fence block are not).
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isSolid(): boolean;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @beta
     * @remarks
     * Sets the type of block.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     * @throws This function can throw errors.
     */
    setType(blockType: BlockType): void;
    /**
     * @beta
     * @remarks
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
     * Returns `true` if the block permutation data was
     * successfully set, else `false`.
     * @throws This function can throw errors.
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
}

/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * @remarks
     * X size (west to east) component of this block area.
     *
     * This property can't be edited in read-only mode.
     *
     */
    x: number;
    /**
     * @remarks
     * Y size (down to up) of this block area size.
     *
     * This property can't be edited in read-only mode.
     *
     */
    y: number;
    /**
     * @remarks
     * Z size (south to north) of this block area size.
     *
     * This property can't be edited in read-only mode.
     *
     */
    z: number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     *
     * This function can't be called in read-only mode.
     *
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     *
     * This function can't be called in read-only mode.
     *
     */
    equals(other: BlockAreaSize): boolean;
}

/**
 * @beta
 */
export class BlockBreakEvent extends BlockEvent {
    protected constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly player: Player;
}

/**
 * @beta
 */
export class BlockBreakEventSignal_deprecated extends IBlockBreakEventSignal {
    protected constructor();
}

/**
 * @beta
 * Base type for components associated with blocks.
 */
export class BlockComponent extends Component {
    protected constructor();
    /**
     * @remarks
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}

/**
 * @beta
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    protected constructor();
    /**
     * @remarks
     * Block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * Dimension that contains the block that is the subject of
     * this event.
     *
     */
    readonly dimension: Dimension;
}

/**
 * @beta
 */
export class BlockExplodeEvent extends BlockEvent {
    protected constructor();
    readonly source: Entity;
}

/**
 * @beta
 */
export class BlockExplodeEventSignal_deprecated extends IBlockExplodeEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
export class BlockInventoryComponent extends BlockComponent {
    protected constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container: Container;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:inventory.
     *
     */
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * lava.
 */
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:lavaContainer.
     *
     */
    static readonly componentId = 'minecraft:lavaContainer';
}

/**
 * @beta
 */
export class BlockLiquidContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    fillLevel: number;
}

/**
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
    * Block}). This type was introduced as of version 1.17.10.21.
 */
export class BlockPermutation {
    protected constructor();
    /**
     * @beta
     * @remarks
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @beta
     * @remarks
     * Creates a copy of this permutation.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getAllProperties(): Record<string, boolean | number | string>;
    /**
     * @beta
     * @remarks
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Number of instances of this block to place in the prototype
     * item stack.
     */
    getItemStack(amount?: number): ItemStack;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getProperty(propertyName: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Creates a copy of the permutation.
     *
     * This function can't be called in read-only mode.
     *
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks to see if the permutation has a specific tag.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     *        console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean;
    /**
     * @beta
     * @remarks
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * This function can't be called in read-only mode.
     *
     * @param name
     * Identifier of the block property.
     * @param value
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withProperty(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * This function can't be called in read-only mode.
     *
     * @param blockName
     * Identifier of the block to check.
     * @param properties
     * Optional additional set of properties to check against.
     * @throws This function can throw errors.
     */
    static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation;
}

/**
 * @beta
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
export class BlockPistonComponent extends BlockComponent {
    protected constructor();
    /**
     * @remarks
     * Whether the piston is fully expanded.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanded: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding or
     * retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * Whether the piston is fully retracted.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracted: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracting: boolean;
    /**
     * @remarks
     * Identifier of this component.
     *
     */
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * Retrieves a set of blocks that this piston is connected
     * with.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Vector3[];
}

/**
 * @beta
 */
export class BlockPlaceEvent extends BlockEvent {
    protected constructor();
    readonly player: Player;
}

/**
 * @beta
 */
export class BlockPlaceEventSignal_deprecated extends IBlockPlaceEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 */
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:potionContainer.
     *
     */
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param item
     * Potion to use as the type of potion for this potion
     * container.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
}

/**
 * @beta
 */
export class BlockProperties {
    protected constructor();
    /**
     * @remarks
     * Retrieves a specific block property instance.
     *
     * This function can't be called in read-only mode.
     *
     */
    static get(propertyName: string): BlockPropertyType;
    /**
     * @remarks
     * Retrieves a set of all available block properties.
     *
     * This function can't be called in read-only mode.
     *
     */
    static getAll(): BlockPropertyType[];
}

/**
 * @beta
 */
export class BlockProperty {
    protected constructor();
    readonly name: string;
}

/**
 * @beta
 */
export class BlockPropertyType {
    protected constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
}

/**
 * @beta
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:recordPlayer.
     *
     */
    static readonly componentId = 'minecraft:recordPlayer';
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
}

/**
 * @beta
 * Represents a block that can display text on it.
 */
export class BlockSignComponent extends BlockComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:sign.
     *
     */
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRawText(): RawText | undefined;
    /**
     * @remarks
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getText(): string | undefined;
    /**
     * @remarks
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTextDyeColor(): DyeColor | undefined;
    /**
     * @remarks
     * Sets the text of the sign component.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText. If set to a
     * RawText, then calling `getRawText` will return the same
     * object that was passed in.
     * @throws This function can throw errors.
     * @example SetRawMessage.ts
     * ```typescript
     *        const helloWorldMessage: RawMessage = { text: 'Hello World' };
     *        sign.setText(helloWorldMessage);
     *
     *        // Sign text will be saved as a RawText
     *        const result: RawText = sign.getRawText();
     *        JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetRawText.ts
     * ```typescript
     *        const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
     *        sign.setText(helloWorldText);
     *
     *        // There will be no data transformation unlike calling setText with a RawMessage
     *        const result: RawText = sign.getRawText();
     *        JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetString.ts
     * ```typescript
     *        // Set sign to say 'Hello'
     *        sign.setText('Hello');
     *        sign.getText(); // 'Hello'
     * ```
     */
    setText(message: RawMessage | RawText | string): void;
    /**
     * @remarks
     * Sets the dye color of the text.
     *
     * This function can't be called in read-only mode.
     *
     * @param color
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor): void;
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * snow.
 */
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:snowContainer.
     *
     */
    static readonly componentId = 'minecraft:snowContainer';
}

/**
 * @beta
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    protected constructor();
    /**
     * @remarks
     * Represents whether this type of block can be waterlogged.
     *
     */
    readonly canBeWaterlogged: boolean;
    /**
     * @remarks
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 */
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:waterContainer.
     *
     */
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    /**
     * @remarks
     * Retrieves a custom base color used for the sign text.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Color that is used as the base color for sign text.
     * @throws This function can throw errors.
     */
    getCustomColor(): Color;
    /**
     * @remarks
     * Sets a custom base color used for the sign text.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCustomColor(color: Color): void;
}

/**
 * @beta
 */
export class ButtonPushEvent extends BlockEvent {
    protected constructor();
    readonly source: Entity;
}

/**
 * @beta
 */
export class ButtonPushEventSignal_deprecated extends IButtonPushEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ChatEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    message: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    sender: Player;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    sendToTargets: boolean;
    /**
     * @remarks
     * Returns a list of players that will receive this message.
     *
     * This function can't be called in read-only mode.
     *
     */
    getTargets(): Player[];
}

/**
 * @beta
 */
export class ChatEventSignal_deprecated extends IChatEventSignal {
    protected constructor();
}

/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    protected constructor();
    /**
     * @remarks
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}

/**
 * @beta
 */
export class Component {
    protected constructor();
    readonly typeId: string;
}

/**
 * @beta
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
    protected constructor();
    /**
     * @remarks
     * Count of the slots in the container that are empty.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): ItemStack;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
        * Container.getSlot}.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example getItem.ts
     * ```typescript
     *        // Get a copy of the first item in the player's hotbar
     *        const inventory = player.getComponent("inventory") as EntityInventoryComponent;
     *        const itemStack = inventory.container.getItem(0);
     *
     * ```
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example moveItem.ts
     * ```typescript
     *        // Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory
     *        const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        fromInventory.container.moveItem(0, 4, toInventory.container);
     *
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     * @example swapItems.ts
     * ```typescript
     *        // Swaps an item between slots 0 and 4 in the player's inventory
     *        const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        inventory.container.swapItems(0, 4, inventory);
     *
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example transferItem.ts
     * ```typescript
     *        // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
     *        const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        fromInventory.container.transferItem(0, toInventory.container);
     *
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack;
}

/**
 * @beta
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    protected constructor();
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly isStackable: boolean;
    readonly isValid: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly typeId?: string;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getItem(): ItemStack;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * Throws if the slot's container is invalid.
     */
    getLore(): string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    setLore(loreList?: string[]): void;
}

/**
 * @beta
 */
export class DataDrivenEntityTriggerEvent {
    protected constructor();
    readonly entity: Entity;
    readonly id: string;
    /**
     * @remarks
     * A list of modifications to component state that are the
     * effect of this triggered event.
     *
     * This function can't be called in read-only mode.
     *
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * @beta
 */
export class DataDrivenEntityTriggerEventSignal_deprecated extends IDataDrivenEntityTriggerEventSignal {
    protected constructor();
}

/**
 * @beta
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     * This function can't be called in read-only mode.
     *
     */
    getComponentGroupsToAdd(): string[];
    /**
     * @remarks
     * Retrieves the list of component groups that will be removed
     * via this definition modification.
     *
     * This function can't be called in read-only mode.
     *
     */
    getComponentGroupsToRemove(): string[];
    /**
     * @remarks
     * Retrieves the list of entity definition events that will be
     * fired via this update.
     *
     * This function can't be called in read-only mode.
     *
     */
    getTriggers(): Trigger[];
    /**
     * @remarks
     * Updates the list of component groups that will be added via
     * this definition modification.
     *
     * This function can't be called in read-only mode.
     *
     */
    setComponentGroupsToAdd(newGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of component groups that will be removed
     * via this definition modification.
     *
     * This function can't be called in read-only mode.
     *
     */
    setComponentGroupsToRemove(removedGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of entity definition events that will be
     * fired via this update.
     *
     * This function can't be called in read-only mode.
     *
     */
    setTriggers(newTriggers: Trigger[]): void;
}

/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    protected constructor();
    /**
     * @remarks
     * Identifier of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Creates an explosion at the specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     * @example createExplosion.ts
     * ```typescript
     *          overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
     * ```
     * @example createFireAndWaterExplosions.ts
     * ```typescript
     *        const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };
     *
     *        const fireExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode with fire
     *        fireExplosionOptions.causesFire = true;
     *
     *        overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
     *        const waterExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode in water
     *        waterExplosionOptions.allowUnderwater = true;
     *
     *        const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };
     *
     *        overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
     *
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     *        const explosionOptions = new mc.ExplosionOptions();
     *
     *        // Start by exploding without breaking blocks
     *        explosionOptions.breaksBlocks = false;
     *
     *        const explodeNoBlocksLoc: mc.Vector3 = {
     *          x: Math.floor(targetLocation.x + 1),
     *          y: Math.floor(targetLocation.y + 2),
     *          z: Math.floor(targetLocation.z + 1),
     *        };
     *
     *        overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
     *
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void;
    /**
     * @beta
     * @remarks
     * Fills an area between begin and end with block of type
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @param begin
     * The lower northwest starting corner of the area.
     * @param end
     * The upper southeast ending corner of the area.
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a matching block to
     * potentially replace this fill block with.
     * @returns
     *  Returns number of blocks placed.
     * @throws This function can throw errors.
     */
    fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number;
    /**
     * @remarks
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location.
     * @throws This function can throw errors.
     */
    getBlock(location: Vector3): Block;
    /**
     * @beta
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): Block;
    /**
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
     * @returns
     * An entity array.
     * @throws This function can throw errors.
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     *        const query = {
     *          type: "item",
     *          location: targetLocation,
     *        };
     *        const items = overworld.getEntities(query);
     *
     *        for (const item of items) {
     *          const itemComp = item.getComponent("item") as any;
     *
     *          if (itemComp) {
     *            if (itemComp.itemStack.id.endsWith("feather")) {
     *              console.log("Success! Found a feather", 1);
     *            }
     *          }
     *        }
     *
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * Returns a set of entities at a particular location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @beta
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     * @example createOldHorse.ts
     * ```typescript
     *          // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult
     *          overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     * ```
     * @example trapTick.ts
     * ```typescript
     *          let ticks = 0;
     *
     *          mc.world.events.tick.subscribe((event: mc.TickEvent) => {
     *            ticks++;
     *
     *            // Minecraft runs at 20 ticks per second
     *            if (ticks % 1200 === 0) {
     *              overworld.runCommand("say Another minute passes...");
     *            }
     *          });
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     * @example itemStacks.ts
     * ```typescript
     *        const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
     *        const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
     *
     *        const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
     *        const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
     *        const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
     *
     *        overworld.spawnItem(oneEmerald, oneItemLoc);
     *        overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *        overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     *
     * ```
     * @example spawnItem.ts
     * ```typescript
     *          const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);
     *
     *          overworld.spawnItem(featherItem, targetLocation);
     *          log("New feather created!");
     * ```
     */
    spawnItem(item: ItemStack, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of additional, customizable variables that can be
     * adjusted for this particle emitter.
     * @returns
     * Newly created entity at the specified location.
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables: MolangVariableMap): void;
}

/**
 * @beta
 * For block properties that take a direction, provides a
 * structured way to specify the direction of a block property.
 */
export class DirectionBlockProperty extends BlockProperty {
    protected constructor();
    /**
     * @remarks
     * Value of the block property.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: Direction;
    /**
     * @remarks
     * Returns a set of acceptable potential values for the
     * direction-based block property.
     *
     * This function can't be called in read-only mode.
     *
     */
    getValidValues(): Direction[];
}

/**
 * @beta
 * Class used in conjunction with {@link PropertyRegistry} to
 * define dynamic properties that can be used on entities of a
 * specified type or at the global World- level.
 */
export class DynamicPropertiesDefinition {
    /**
     * @remarks
     * Defines a boolean dynamic property.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    defineBoolean(identifier: string): void;
    /**
     * @remarks
     * Defines a number dynamic property.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    defineNumber(identifier: string): void;
    /**
     * @remarks
     * Defines a string dynamic property.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    defineString(identifier: string, maxLength: number): void;
}

/**
 * @beta
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    protected constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this
     * effect.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
}

/**
 * @beta
 */
export class EffectAddEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    effect: Effect;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    effectState: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}

/**
 * @beta
 */
export class EffectAddEventSignal_deprecated extends IEffectAddEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    protected constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
}

/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     *
     * This property can't be edited in read-only mode.
     *
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     *
     */
    readonly 'type': EnchantmentType;
    /**
     * @remarks
     * Creates a new particular type of enchantment configuration.
     *
     * This function can't be called in read-only mode.
     *
     * @param enchantmentType
     * Type of the enchantment.
     * @param level
     * Level of the enchantment.
     */
    constructor(enchantmentType: EnchantmentType, level?: number);
}

/**
 * @beta
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * @remarks
     * The item slot/type that this collection is applied to.
     *
     */
    readonly slot: number;
    /**
     * @remarks
     * Creates a new EnchantmentList.
     *
     * This function can't be called in read-only mode.
     *
     */
    constructor(enchantmentSlot: number);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     *
     * This function can't be called in read-only mode.
     *
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     *
     * This function can't be called in read-only mode.
     *
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     *
     * This function can't be called in read-only mode.
     *
     */
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     *
     * This function can't be called in read-only mode.
     *
     */
    hasEnchantment(enchantmentType: EnchantmentType): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     *
     * This function can't be called in read-only mode.
     *
     */
    removeEnchantment(enchantmentType: EnchantmentType): void;
}

/**
 * @beta
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
export class EnchantmentSlot {
    protected constructor();
    static readonly all = -1;
    static readonly armorFeet = 4;
    static readonly armorHead = 1;
    static readonly armorLegs = 8;
    static readonly armorTorso = 2;
    static readonly axe = 512;
    static readonly bow = 32;
    static readonly carrotStick = 8192;
    static readonly cosmeticHead = 262144;
    static readonly crossbow = 65536;
    static readonly elytra = 16384;
    static readonly fishingRod = 4096;
    static readonly flintsteel = 256;
    static readonly gArmor = 15;
    static readonly gDigging = 3648;
    static readonly gTool = 131520;
    static readonly hoe = 64;
    static readonly none = 0;
    static readonly pickaxe = 1024;
    static readonly shears = 128;
    static readonly shield = 131072;
    static readonly shovel = 2048;
    static readonly spear = 32768;
    static readonly sword = 16;
}

/**
 * @beta
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    protected constructor();
    /**
     * @remarks
     * The name of the enchantment type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The maximum level this type of enchantment can have.
     *
     */
    readonly maxLevel: number;
}

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * This property can't be edited in read-only mode.
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    nameTag: string;
    /**
     * @beta
     * @throws This property can throw when used.
     */
    readonly scoreboard: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     *
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    /**
     * @remarks
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Adds an effect, like poison, to the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @throws This function can throw errors.
     * @example addEffect.js
     * ```typescript
     *        const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
     *        const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const villager = test.spawn(villagerId, villagerLoc);
     *        const duration = 20;
     *
     *        villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
     *
     *
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     *
     * ```
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Applies a set of damage to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @throws This function can throw errors.
     */
    applyDamage(amount: number, source?: EntityDamageSource): boolean;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @beta
     * @remarks
     * Sets the current velocity of the Entity to zero. Note that
     * this method may not have an impact on Players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearVelocity(): void;
    /**
     * @beta
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * @throws This function can throw errors.
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): EntityComponent;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     *
     * This function can't be called in read-only mode.
     *
     */
    getComponents(): EntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @beta
     * @remarks
     * Returns a set of effects applied to this item.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Returns a potential set of entities from the direction that
     * this entity is looking at.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns the current rotation component of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRotation(): XYRotation;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * Returns the current view direction of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Tests whether an entity has a particular tag.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     *
     * This function can't be called in read-only mode.
     *
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param seconds
     * Length of time to set the entity on fire.
     * @throws This function can throw errors.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param xRotation
     * X rotation of the entity after teleportation.
     * @param yRotation
     * Y rotation of the entity after teleportation.
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location, and will
     * have the entity facing a specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param facingLocation
     * Location that this entity will be facing.
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}

/**
 * @beta
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
export class EntityAddRiderComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:addrider.
     *
     */
    static readonly componentId = 'minecraft:addrider';
}

/**
 * @beta
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
export class EntityAgeableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Event to run when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:ageable.
     *
     */
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * List of items that the entity drops when it grows up.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * @beta
 */
export class EntityAttributeComponent extends EntityComponent {
    protected constructor();
    readonly current: number;
    readonly value: number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}

/**
 * @beta
 * Base class for a family of entity movement events.
 */
export class EntityBaseMovementComponent extends EntityComponent {
    protected constructor();
    readonly maxTurn: number;
}

/**
 * @beta
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
export class EntityBreathableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * If true, this entity can breathe in air.
     *
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in lava.
     *
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in solid blocks.
     *
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in water.
     *
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @remarks
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * Time in seconds to recover breath to maximum.
     *
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * Time in seconds between suffocation damage.
     *
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * Time in seconds the entity can hold its breath.
     *
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:breathable.
     *
     */
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * List of blocks this entity can't breathe in.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * Sets the current air supply of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
export class EntityCanClimbComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     *
     */
    static readonly componentId = 'minecraft:can_climb';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
export class EntityCanFlyComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     *
     */
    static readonly componentId = 'minecraft:can_fly';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
export class EntityCanPowerJumpComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     *
     */
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * @beta
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (sheep, llama, shulker).
 */
export class EntityColorComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The palette color value of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:color.
     *
     */
    static readonly componentId = 'minecraft:color';
}

/**
 * @beta
 * Base class for downstream entity components.
 */
export class EntityComponent extends Component {
    protected constructor();
}

/**
 * @beta
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    protected constructor();
    /**
     * @remarks
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
}

/**
 * @beta
 * Contains information related to the death of an entity.
 */
export class EntityDieEvent {
    protected constructor();
    /**
     * @remarks
     * Returns the source of the death-dealing damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Entity that has died.
     *
     */
    readonly deadEntity: Entity;
}

/**
 * @beta
 */
export class EntityDieEventSignal_deprecated extends IEntityDieEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class EntityEquipmentInventoryComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:equipment_inventory';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void;
}

/**
 * @beta
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
export class EntityFireImmuneComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     *
     */
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
export class EntityFloatsInLiquidComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     *
     */
    static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * @beta
 * Represents the flying speed of an entity.
 */
export class EntityFlyingSpeedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Speed while flying value of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     *
     */
    static readonly componentId = 'minecraft:flying_speed';
}

/**
 * @beta
 * Defines how much friction affects this entity.
 */
export class EntityFrictionModifierComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The higher the number, the more the friction affects this
     * entity. A value of 1.0 means regular friction, while 2.0
     * means twice as much.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     *
     */
    static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * @beta
 * Sets the offset from the ground that the entity is actually
 * at.
 */
export class EntityGroundOffsetComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The value of the entity's offset from the terrain, in
     * blocks.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     *
     */
    static readonly componentId = 'minecraft:ground_offset';
}

/**
 * @beta
 * Defines the interactions with this entity for healing it.
 */
export class EntityHealableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * A set of filters for when these Healable items would apply.
     *
     * @throws This property can throw when used.
     */
    readonly filters: FilterGroup;
    /**
     * @remarks
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:healable.
     *
     */
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * A set of items that can specifically heal this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

/**
 * @beta
 * Defines the health properties of an entity.
 */
export class EntityHealthComponent extends EntityAttributeComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:health.
     *
     */
    static readonly componentId = 'minecraft:health';
}

/**
 * @beta
 */
export class EntityHitEvent {
    protected constructor();
    readonly entity: Entity;
    readonly hitBlock?: Block;
    readonly hitEntity?: Entity;
}

/**
 * @beta
 */
export class EntityHitEventSignal_deprecated extends IEntityHitEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class EntityHurtEvent {
    protected constructor();
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

/**
 * @beta
 */
export class EntityHurtEventSignal_deprecated extends IEntityHurtEventSignal {
    protected constructor();
}

/**
 * @beta
 * Defines this entity's inventory properties.
 */
export class EntityInventoryComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * Defines the container for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly container: Container;
    /**
     * @remarks
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:inventory.
     *
     */
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * When added, this component signifies that this entity is a
 * baby.
 */
export class EntityIsBabyComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     *
     */
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * charged.
 */
export class EntityIsChargedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     *
     */
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
export class EntityIsChestedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     *
     */
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * @beta
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
export class EntityIsDyableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     *
     */
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     *
     */
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * @beta
 * When added, this component signifies that this entity this
 * currently on fire.
 */
export class EntityIsIgnitedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     *
     */
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * @beta
 * When added, this component signifies that this entity is an
 * illager captain.
 */
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     *
     */
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently saddled.
 */
export class EntityIsSaddledComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     *
     */
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently shaking.
 */
export class EntityIsShakingComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     *
     */
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently sheared.
 */
export class EntityIsShearedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     *
     */
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * @beta
 * When added, this component signifies that this entity can be
 * stacked.
 */
export class EntityIsStackableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     *
     */
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently stunned.
 */
export class EntityIsStunnedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     *
     */
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently tamed.
 */
export class EntityIsTamedComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     *
     */
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * @beta
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
export class EntityItemComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Identifier of this component.
     *
     */
    static readonly componentId = 'minecraft:item';
}

/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Entity>;
}

/**
 * @beta
 * Defines the base movement speed in lava of this entity.
 */
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     *
     */
    static readonly componentId = 'minecraft:lava_movement';
}

/**
 * @beta
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
export class EntityLeashableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:leashable.
     *
     */
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}

/**
 * @beta
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
export class EntityMarkVariantComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     *
     */
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * @beta
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
export class EntityMountTamingComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     *
     */
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     *
     * This function can't be called in read-only mode.
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
}

/**
 * @beta
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
export class EntityMovementAmphibiousComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The maximum number in degrees the mob can turn per tick.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     *
     */
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * @beta
 * This component accents the movement of an entity.
 */
export class EntityMovementBasicComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The maximum number in degrees the mob can turn per tick.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     *
     */
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * @beta
 * Defines the general movement speed of this entity.
 */
export class EntityMovementComponent extends EntityAttributeComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.
     *
     */
    static readonly componentId = 'minecraft:movement';
}

/**
 * @beta
 * When added, this move control causes the mob to fly.
 */
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     *
     */
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * @beta
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     *
     */
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * @beta
 * When added, this movement control allows the mob to glide.
 */
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     *
     */
    static readonly componentId = 'minecraft:movement.glide';
}

/**
 * @beta
 * When added, this move control causes the mob to hover.
 */
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     *
     */
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * @beta
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     *
     */
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * @beta
 * When added, this move control causes the mob to hop as it
 * moves.
 */
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     *
     */
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * @beta
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * @remarks
     * Amplitude of the sway motion.
     *
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     *
     */
    static readonly componentId = 'minecraft:movement.sway';
}

/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     *
     */
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
export class EntityNavigationComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     *
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid water when creating a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     *
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     *
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can float.
     *
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump up blocks.
     *
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * Whether a path can be created through a door.
     *
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can start pathing when in the
     * air.
     *
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     *
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     *
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     *
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     *
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     *
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
}

/**
 * @beta
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     *
     */
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     *
     */
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * @beta
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     *
     */
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     *
     */
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * @beta
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     *
     */
    static readonly componentId = 'minecraft:navigation.walk';
}

/**
 * @beta
 * When present on an entity, this entity is on fire.
 */
export class EntityOnFireComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}

/**
 * @beta
 * Sets the distance through which the entity can push through.
 */
export class EntityPushThroughComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The value of the entity's push-through, in blocks.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:push_through.
     *
     */
    static readonly componentId = 'minecraft:push_through';
}

/**
 * @beta
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 */
export class EntityRideableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @remarks
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * Number of seats for riders defined for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:rideable.
     *
     */
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     *
     * This function can't be called in read-only mode.
     *
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

/**
 * @beta
 * This component is added to any entity when it is riding
 * another entity.
 */
export class EntityRidingComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The entity this entity is currently riding on.
     *
     * @throws This property can throw when used.
     */
    readonly entityRidingOn: Entity;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:riding.
     *
     */
    static readonly componentId = 'minecraft:riding';
}

/**
 * @beta
 * Sets the entity's visual size.
 */
export class EntityScaleComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The value of the scale. 1.0 means the entity will appear at
     * the scale they are defined in their model. Higher numbers
     * make the entity bigger.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:scale.
     *
     */
    static readonly componentId = 'minecraft:scale';
}

/**
 * @beta
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
export class EntitySkinIdComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The identifier of the skin. By convention, 0 is the
     * identifier of the base skin.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     *
     */
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * @beta
 */
export class EntitySpawnEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}

/**
 * @beta
 */
export class EntitySpawnEventSignal_deprecated extends IEntitySpawnEventSignal {
    protected constructor();
}

/**
 * @beta
 * Defines the entity's strength to carry items.
 */
export class EntityStrengthComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     *
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * @remarks
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:strength.
     *
     */
    static readonly componentId = 'minecraft:strength';
}

/**
 * @beta
 * Defines the rules for an entity to be tamed by the player.
 */
export class EntityTameableComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    readonly tameEvent: Trigger;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:tameable.
     *
     */
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTameItems(): string[];
    /**
     * @remarks
     * Tames this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

/**
 * @beta
 * Represents information about a type of entity.
 */
export class EntityType {
    protected constructor();
    /**
     * @remarks
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<EntityType>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<EntityType>;
}

/**
 * @beta
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    protected constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     *
     * This function can't be called in read-only mode.
     *
     */
    static get(identifier: string): EntityType;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     *
     * This function can't be called in read-only mode.
     *
     */
    static getAll(): EntityTypeIterator;
}

/**
 * @beta
 * Defines the general movement speed underwater of this
 * entity.
 */
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     *
     */
    static readonly componentId = 'minecraft:underwater_movement';
}

/**
 * @beta
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
export class EntityVariantComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:variant.
     *
     */
    static readonly componentId = 'minecraft:variant';
}

/**
 * @beta
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
export class EntityWantsJockeyComponent extends EntityComponent {
    protected constructor();
    /**
     * @remarks
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     *
     */
    static readonly componentId = 'minecraft:wants_jockey';
}

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

/**
 * @beta
 */
export class ExplosionEvent {
    protected constructor();
    readonly dimension: Dimension;
    readonly source: Entity;
    /**
     * @remarks
     * A collection of blocks impacted by this explosion event.
     *
     * This function can't be called in read-only mode.
     *
     */
    getImpactedBlocks(): Vector3[];
}

/**
 * @beta
 */
export class ExplosionEventSignal_deprecated extends IExplosionEventSignal {
    protected constructor();
}

/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    protected constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     * This function can't be called in read-only mode.
     *
     */
    getEffects(): FeedItemEffect[];
}

/**
 * @beta
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    protected constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}

/**
 * @beta
 * Represents a set of filters for when an event should occur.
 */
export class FilterGroup {
    protected constructor();
}

/**
 * @beta
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
    protected constructor();
    /**
     * @remarks
     * Constant that represents the maximum fill level of a fluid
     * container.
     *
     */
    static readonly maxFillLevel = 6;
    /**
     * @remarks
     * Constant that represents the minimum fill level of a fluid
     * container.
     *
     */
    static readonly minFillLevel = 0;
}

/**
 * @beta
 */
export class IBeforeChatEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeDataDrivenEntityTriggerEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeExplosionEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeItemDefinitionEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,
    ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeItemUseEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeItemUseOnEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforePistonActivateEventSignal_deprecated {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
}

/**
 * @beta
 */
export class IBeforeWatchdogTerminateEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): (arg: BeforeWatchdogTerminateEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void;
}

/**
 * @beta
 */
export class IBlockBreakEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
}

/**
 * @beta
 */
export class IBlockExplodeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
}

/**
 * @beta
 */
export class IBlockPlaceEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
}

/**
 * @beta
 */
export class IButtonPushEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ButtonPushEvent) => void): (arg: ButtonPushEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushEvent) => void): void;
}

/**
 * @beta
 */
export class IChatEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatEvent) => void): void;
}

/**
 * @beta
 */
export class IDataDrivenEntityTriggerEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}

/**
 * @beta
 */
export class IEffectAddEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
}

/**
 * @beta
 */
export class IEntityDieEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EntityDieEvent) => void, options?: EntityEventOptions): (arg: EntityDieEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieEvent) => void): void;
}

/**
 * @beta
 */
export class IEntityHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}

/**
 * @beta
 */
export class IEntityHurtEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}

/**
 * @beta
 */
export class IEntitySpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EntitySpawnEvent) => void): (arg: EntitySpawnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnEvent) => void): void;
}

/**
 * @beta
 */
export class IExplosionEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
}

/**
 * @beta
 */
export class IItemCompleteChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}

/**
 * @beta
 */
export class IItemDefinitionEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
}

/**
 * @beta
 */
export class IItemReleaseChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}

/**
 * @beta
 */
export class IItemStartChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}

/**
 * @beta
 */
export class IItemStartUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseOnEvent) => void): (arg: ItemStartUseOnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void;
}

/**
 * @beta
 */
export class IItemStopChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}

/**
 * @beta
 */
export class IItemStopUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopUseOnEvent) => void): (arg: ItemStopUseOnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void;
}

/**
 * @beta
 */
export class IItemUseEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
}

/**
 * @beta
 */
export class IItemUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}

/**
 * @beta
 */
export class ILeverActionEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
}

/**
 * @beta
 */
export class IPistonActivateEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
}

/**
 * @beta
 */
export class IPlayerJoinEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}

/**
 * @beta
 */
export class IPlayerLeaveEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}

/**
 * @beta
 */
export class IPlayerSpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerSpawnEvent) => void): (arg: PlayerSpawnEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnEvent) => void): void;
}

/**
 * @beta
 */
export class IProjectileHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ProjectileHitEvent) => void): (arg: ProjectileHitEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEvent) => void): void;
}

/**
 * @beta
 */
export class IScriptEventCommandMessageSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageEvent) => void): void;
}

/**
 * @beta
 */
export class IServerMessageSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveEvent) => void): void;
}

/**
 * @beta
 */
export class ItemCompleteChargeEvent {
    protected constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
    readonly useDuration: number;
}

/**
 * @beta
 */
export class ItemCompleteChargeEventSignal_deprecated extends IItemCompleteChargeEventSignal {
    protected constructor();
}

/**
 * @beta
 * Base class for item components.
 */
export class ItemComponent extends Component {
    protected constructor();
}

/**
 * @beta
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
export class ItemCooldownComponent extends ItemComponent {
    protected constructor();
    /**
     * @remarks
     * Represents the cooldown category that this item is
     * associated with.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * 'minecraft:cooldown'.
     *
     */
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

/**
 * @beta
 */
export class ItemDefinitionEventSignal_deprecated extends IItemDefinitionEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ItemDefinitionTriggeredEvent {
    protected constructor();
    readonly eventName: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    item: ItemStack;
    readonly source: Entity;
}

/**
 * @beta
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 */
export class ItemDurabilityComponent extends ItemComponent {
    protected constructor();
    /**
     * @remarks
     * Returns the current damage level of this particular item.
     *
     * This property can't be edited in read-only mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * 'minecraft:durability'.
     *
     */
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     *
     * This function can't be called in read-only mode.
     *
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreaking?: number): number;
    /**
     * @remarks
     * A range of numbers that describes the chance of the item
     * losing durability.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDamageRange(): NumberRange;
}

/**
 * @beta
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
export class ItemEnchantsComponent extends ItemComponent {
    protected constructor();
    /**
     * @remarks
     * Returns a collection of the enchantments applied to this
     * item stack.
     *
     * This property can't be edited in read-only mode.
     *
     */
    enchantments: EnchantmentList;
    /**
     * @remarks
     * Identifier of this component.
     *
     */
    static readonly componentId = 'minecraft:enchantments';
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
}

/**
 * @beta
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
export class ItemFoodComponent extends ItemComponent {
    protected constructor();
    /**
     * @remarks
     * If true, the player can always eat this item (even when not
     * hungry).
     *
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     *
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @remarks
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     *
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * When specified, converts the active item to the one
     * specified by this property.
     *
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    /**
     * @remarks
     * Identifier of this component. Should always be
     * 'minecraft:food'.
     *
     */
    static readonly componentId = 'minecraft:food';
}

/**
 * @beta
 */
export class ItemReleaseChargeEvent {
    protected constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
    readonly useDuration: number;
}

/**
 * @beta
 */
export class ItemReleaseChargeEventSignal_deprecated extends IItemReleaseChargeEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents a collection of all of the available item types
 * in Minecraft.
 */
export class Items {
    protected constructor();
    /**
     * @remarks
     * Returns an item type given an item type identifier.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemId
     * Type of the item to return.
     */
    static get(itemId: string): ItemType;
}

/**
 * @beta
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemType
     * Type of item to create. See the {@link MinecraftItemTypes}
     * enumeration for a list of standard item types in Minecraft
     * experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * This function can't be called in read-only mode.
     *
     */
    clone(): ItemStack;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed. If the component is not present on the item
     * stack, undefined is returned.
     * @example durability.ts
     * ```typescript
     *        // Get the maximum durability of a custom sword item
     *        const itemStack = new ItemStack("custom:sword");
     *        const durability = itemStack.getComponent("minecraft:durability") as ItemDurabilityComponent;
     *        const maxDurability = durability.maxDurability;
     *
     * ```
     */
    getComponent(componentId: string): ItemComponent | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     *
     * This function can't be called in read-only mode.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * This function can't be called in read-only mode.
     *
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     *        // Creates a diamond pickaxe that can destroy cobblestone and obsidian
     *        const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
     *        specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
     *
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     *        // Creates a gold block that can be placed on grass and dirt
     *        const specialGoldBlock = new ItemStack("minecraft:gold_block");
     *        specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
     *
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @example multilineLore.ts
     * ```typescript
     *        // Set the lore of an item to multiple lines of text
     *        const itemStack = new ItemStack("minecraft:diamond_sword");
     *        itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     *
     * ```
     */
    setLore(loreList?: string[]): void;
    /**
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}

/**
 * @beta
 */
export class ItemStartChargeEvent {
    protected constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
    readonly useDuration: number;
}

/**
 * @beta
 */
export class ItemStartChargeEventSignal_deprecated extends IItemStartChargeEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ItemStartUseOnEvent {
    protected constructor();
    readonly blockFace: Direction;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    item: ItemStack;
    readonly source: Entity;
    /**
     * @remarks
     * Location of the block being impacted.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockLocation(): Vector3;
    /**
     * @remarks
     * Location of the resulting build block position. Useful for
     * determining where a block was placed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBuildBlockLocation(): Vector3;
}

/**
 * @beta
 */
export class ItemStartUseOnEventSignal_deprecated extends IItemStartUseOnEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ItemStopChargeEvent {
    protected constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
    readonly useDuration: number;
}

/**
 * @beta
 */
export class ItemStopChargeEventSignal_deprecated extends IItemStopChargeEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ItemStopUseOnEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    item: ItemStack;
    readonly source: Entity;
    /**
     * @remarks
     * Location of the block being impacted.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockLocation(): Vector3;
}

/**
 * @beta
 */
export class ItemStopUseOnEventSignal_deprecated extends IItemStopUseOnEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    protected constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * An iterator over a set of available item types.
 */
export class ItemTypeIterator implements Iterable<ItemType> {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<ItemType>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<ItemType>;
}

/**
 * @beta
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    protected constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     *
     * This function can't be called in read-only mode.
     *
     */
    static get(itemId: string): ItemType;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     *
     * This function can't be called in read-only mode.
     *
     */
    static getAll(): ItemTypeIterator;
}

/**
 * @beta
 */
export class ItemUseEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    item: ItemStack;
    readonly source: Entity;
}

/**
 * @beta
 */
export class ItemUseEventSignal_deprecated extends IItemUseEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ItemUseOnEvent {
    protected constructor();
    readonly blockFace: Direction;
    readonly faceLocationX: number;
    readonly faceLocationY: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    item: ItemStack;
    readonly source: Entity;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockLocation(): Vector3;
}

/**
 * @beta
 */
export class ItemUseOnEventSignal_deprecated extends IItemUseOnEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class IWeatherChangeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}

/**
 * @beta
 */
export class IWorldInitializeEventSignal {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}

/**
 * @beta
 */
export class LeverActionEvent extends BlockEvent {
    protected constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

/**
 * @beta
 */
export class LeverActionEventSignal_deprecated extends ILeverActionEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class MessageReceiveEvent {
    protected constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
    readonly sourceType: MessageSourceType;
}

/**
 * @beta
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
export class MinecraftBlockTypes {
    protected constructor();
    /**
     * @remarks
     * Represents an acacia button within Minecraft.
     *
     */
    static readonly acaciaButton: BlockType;
    /**
     * @remarks
     * Represents an acacia door within Minecraft.
     *
     */
    static readonly acaciaDoor: BlockType;
    static readonly acaciaFence: BlockType;
    /**
     * @remarks
     * Represents an acacia fence gate within Minecraft.
     *
     */
    static readonly acaciaFenceGate: BlockType;
    static readonly acaciaHangingSign: BlockType;
    static readonly acaciaLog: BlockType;
    /**
     * @remarks
     * Represents an acacia pressure plate within Minecraft.
     *
     */
    static readonly acaciaPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of acacia stairs within Minecraft.
     *
     */
    static readonly acaciaStairs: BlockType;
    /**
     * @remarks
     * Represents an acacia standing sign within Minecraft.
     *
     */
    static readonly acaciaStandingSign: BlockType;
    /**
     * @remarks
     * Represents an acacia trapdoor within Minecraft.
     *
     */
    static readonly acaciaTrapdoor: BlockType;
    /**
     * @remarks
     * Represents an acacia wall sign within Minecraft.
     *
     */
    static readonly acaciaWallSign: BlockType;
    /**
     * @remarks
     * Represents an activator rail within Minecraft.
     *
     */
    static readonly activatorRail: BlockType;
    /**
     * @remarks
     * Represents an empty space (air) within Minecraft.
     *
     */
    static readonly air: BlockType;
    /**
     * @remarks
     * Represents an allow block within Minecraft.
     *
     */
    static readonly allow: BlockType;
    /**
     * @remarks
     * Represents an amethyst block within Minecraft.
     *
     */
    static readonly amethystBlock: BlockType;
    /**
     * @remarks
     * Represents a cluster of amethyst within Minecraft.
     *
     */
    static readonly amethystCluster: BlockType;
    /**
     * @remarks
     * Represents ancient debris within Minecraft.
     *
     */
    static readonly ancientDebris: BlockType;
    /**
     * @remarks
     * Represents andesite stairs within Minecraft.
     *
     */
    static readonly andesiteStairs: BlockType;
    /**
     * @remarks
     * Represents an anvil within Minecraft.
     *
     */
    static readonly anvil: BlockType;
    /**
     * @remarks
     * Represents an azalea flowering plant within Minecraft.
     *
     */
    static readonly azalea: BlockType;
    /**
     * @remarks
     * Represents azalea leaves within Minecraft.
     *
     */
    static readonly azaleaLeaves: BlockType;
    /**
     * @remarks
     * Represents flowered azalea leaves within Minecraft.
     *
     */
    static readonly azaleaLeavesFlowered: BlockType;
    /**
     * @remarks
     * Represents a bamboo tree within Minecraft.
     *
     */
    static readonly bamboo: BlockType;
    static readonly bambooBlock: BlockType;
    static readonly bambooButton: BlockType;
    static readonly bambooDoor: BlockType;
    static readonly bambooDoubleSlab: BlockType;
    static readonly bambooFence: BlockType;
    static readonly bambooFenceGate: BlockType;
    static readonly bambooHangingSign: BlockType;
    static readonly bambooMosaic: BlockType;
    static readonly bambooMosaicDoubleSlab: BlockType;
    static readonly bambooMosaicSlab: BlockType;
    static readonly bambooMosaicStairs: BlockType;
    static readonly bambooPlanks: BlockType;
    static readonly bambooPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a bamboo sapling within Minecraft.
     *
     */
    static readonly bambooSapling: BlockType;
    static readonly bambooSlab: BlockType;
    static readonly bambooStairs: BlockType;
    static readonly bambooStandingSign: BlockType;
    static readonly bambooTrapdoor: BlockType;
    static readonly bambooWallSign: BlockType;
    /**
     * @remarks
     * Represents a barrel within Minecraft.
     *
     */
    static readonly barrel: BlockType;
    /**
     * @remarks
     * Represents an invisible but logical barrier within
     * Minecraft.
     *
     */
    static readonly barrier: BlockType;
    /**
     * @remarks
     * Represents a basalt block within Minecraft.
     *
     */
    static readonly basalt: BlockType;
    /**
     * @remarks
     * Represents a beacon within Minecraft.
     *
     */
    static readonly beacon: BlockType;
    /**
     * @remarks
     * Represents a bed within Minecraft.
     *
     */
    static readonly bed: BlockType;
    /**
     * @remarks
     * Represents a bedrock block within Minecraft.
     *
     */
    static readonly bedrock: BlockType;
    /**
     * @remarks
     * Represents a beehive within Minecraft.
     *
     */
    static readonly beehive: BlockType;
    /**
     * @remarks
     * Represents a bee nest within Minecraft.
     *
     */
    static readonly beeNest: BlockType;
    /**
     * @remarks
     * Represents a beetroot vegetable within Minecraft.
     *
     */
    static readonly beetroot: BlockType;
    /**
     * @remarks
     * Represents a bell within Minecraft.
     *
     */
    static readonly bell: BlockType;
    /**
     * @remarks
     * Represents a big dripleaf plant within Minecraft.
     *
     */
    static readonly bigDripleaf: BlockType;
    /**
     * @remarks
     * Represents a birch button within Minecraft.
     *
     */
    static readonly birchButton: BlockType;
    /**
     * @remarks
     * Represents a birch door within Minecraft.
     *
     */
    static readonly birchDoor: BlockType;
    static readonly birchFence: BlockType;
    /**
     * @remarks
     * Represents a birch fence gate within Minecraft.
     *
     */
    static readonly birchFenceGate: BlockType;
    static readonly birchHangingSign: BlockType;
    static readonly birchLog: BlockType;
    /**
     * @remarks
     * Represents a birch pressure plate within Minecraft.
     *
     */
    static readonly birchPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a birch stairs block within Minecraft.
     *
     */
    static readonly birchStairs: BlockType;
    /**
     * @remarks
     * Represents a birch standing sign within Minecraft.
     *
     */
    static readonly birchStandingSign: BlockType;
    /**
     * @remarks
     * Represents a birch trapdoor within Minecraft.
     *
     */
    static readonly birchTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a birch wall sign within Minecraft.
     *
     */
    static readonly birchWallSign: BlockType;
    /**
     * @remarks
     * Represents a black candle within Minecraft.
     *
     */
    static readonly blackCandle: BlockType;
    /**
     * @remarks
     * Represents a black candle cake within Minecraft.
     *
     */
    static readonly blackCandleCake: BlockType;
    /**
     * @remarks
     * Represents a black glazed terracotta block within Minecraft.
     *
     */
    static readonly blackGlazedTerracotta: BlockType;
    /**
     * @remarks
     * Represents a blackstone block within Minecraft.
     *
     */
    static readonly blackstone: BlockType;
    /**
     * @remarks
     * Represents a blackstone double slab within Minecraft.
     *
     */
    static readonly blackstoneDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a blackstone slab within Minecraft.
     *
     */
    static readonly blackstoneSlab: BlockType;
    /**
     * @remarks
     * Represents blackstone stairs within Minecraft.
     *
     */
    static readonly blackstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a blackstone wall within Minecraft.
     *
     */
    static readonly blackstoneWall: BlockType;
    static readonly blackWool: BlockType;
    /**
     * @remarks
     * Represents a blast furnace within Minecraft.
     *
     */
    static readonly blastFurnace: BlockType;
    /**
     * @remarks
     * Represents a blue candle within Minecraft.
     *
     */
    static readonly blueCandle: BlockType;
    /**
     * @remarks
     * Represents a blue candle cake within Minecraft.
     *
     */
    static readonly blueCandleCake: BlockType;
    /**
     * @remarks
     * Represents a blue glazed terracotta block within Minecraft.
     *
     */
    static readonly blueGlazedTerracotta: BlockType;
    /**
     * @remarks
     * Represents a blue ice block within Minecraft.
     *
     */
    static readonly blueIce: BlockType;
    static readonly blueWool: BlockType;
    /**
     * @remarks
     * Represents a bone block within Minecraft.
     *
     */
    static readonly boneBlock: BlockType;
    /**
     * @remarks
     * Represents an unbreakable border block within Minecraft.
     *
     */
    static readonly bookshelf: BlockType;
    /**
     * @remarks
     * Represents a border block within Minecraft.
     *
     */
    static readonly borderBlock: BlockType;
    /**
     * @remarks
     * Represents a brewing stand within Minecraft.
     *
     */
    static readonly brewingStand: BlockType;
    /**
     * @remarks
     * Represents a block of brick within Minecraft.
     *
     */
    static readonly brickBlock: BlockType;
    /**
     * @remarks
     * Represents brick stairs within Minecraft.
     *
     */
    static readonly brickStairs: BlockType;
    /**
     * @remarks
     * Represents a brown candle within Minecraft.
     *
     */
    static readonly brownCandle: BlockType;
    /**
     * @remarks
     * Represents a brown candle cake within Minecraft.
     *
     */
    static readonly brownCandleCake: BlockType;
    /**
     * @remarks
     * Represents a brown glazed terracotta block within Minecraft.
     *
     */
    static readonly brownGlazedTerracotta: BlockType;
    /**
     * @remarks
     * Represents a brown mushroom within Minecraft.
     *
     */
    static readonly brownMushroom: BlockType;
    /**
     * @remarks
     * Represents a block of brown mushroom within Minecraft.
     *
     */
    static readonly brownMushroomBlock: BlockType;
    static readonly brownWool: BlockType;
    /**
     * @remarks
     * Represents a column of bubbles within Minecraft.
     *
     */
    static readonly bubbleColumn: BlockType;
    /**
     * @remarks
     * Represents a block of budding amethyst within Minecraft.
     *
     */
    static readonly buddingAmethyst: BlockType;
    /**
     * @remarks
     * Represents a cactus within Minecraft.
     *
     */
    static readonly cactus: BlockType;
    /**
     * @remarks
     * Represents a cake within Minecraft.
     *
     */
    static readonly cake: BlockType;
    /**
     * @remarks
     * Represents a calcite block within Minecraft.
     *
     */
    static readonly calcite: BlockType;
    static readonly calibratedSculkSensor: BlockType;
    /**
     * @remarks
     * Represents a camera within Minecraft Education Edition. It
     * is not available in Minecraft Bedrock Edition.
     *
     */
    static readonly camera: BlockType;
    /**
     * @remarks
     * Represents a campfire within Minecraft.
     *
     */
    static readonly campfire: BlockType;
    /**
     * @remarks
     * Represents a candle within Minecraft.
     *
     */
    static readonly candle: BlockType;
    /**
     * @remarks
     * Represents a cake with candles within Minecraft.
     *
     */
    static readonly candleCake: BlockType;
    /**
     * @remarks
     * Represents a carpet within Minecraft.
     *
     */
    static readonly carpet: BlockType;
    /**
     * @remarks
     * Represents carrots within Minecraft.
     *
     */
    static readonly carrots: BlockType;
    /**
     * @remarks
     * Represents a cartography table block within Minecraft.
     *
     */
    static readonly cartographyTable: BlockType;
    /**
     * @remarks
     * Represents a carved pumpkin within Minecraft.
     *
     */
    static readonly carvedPumpkin: BlockType;
    /**
     * @remarks
     * Represents a cauldron within Minecraft.
     *
     */
    static readonly cauldron: BlockType;
    /**
     * @remarks
     * Represents a set of cave vines within Minecraft.
     *
     */
    static readonly caveVines: BlockType;
    /**
     * @remarks
     * Represents the body of a set of cave vines with berries
     * within Minecraft.
     *
     */
    static readonly caveVinesBodyWithBerries: BlockType;
    /**
     * @remarks
     * Represents the head of a set of cave vines with berries
     * within Minecraft.
     *
     */
    static readonly caveVinesHeadWithBerries: BlockType;
    /**
     * @remarks
     * Represents a metallic chain within Minecraft.
     *
     */
    static readonly chain: BlockType;
    /**
     * @remarks
     * Represents a block that gives off heat but not light, within
     * Minecraft Education Edition or Bedrock Edition with
     * Education features.
     *
     */
    static readonly chainCommandBlock: BlockType;
    /**
     * @remarks
     * Represents a chemical heat block within Minecraft.
     *
     */
    static readonly chemicalHeat: BlockType;
    /**
     * @remarks
     * Represents a chemistry table within Minecraft Education
     * experiences.
     *
     */
    static readonly chemistryTable: BlockType;
    static readonly cherryButton: BlockType;
    static readonly cherryDoor: BlockType;
    static readonly cherryDoubleSlab: BlockType;
    static readonly cherryFence: BlockType;
    static readonly cherryFenceGate: BlockType;
    static readonly cherryHangingSign: BlockType;
    static readonly cherryLeaves: BlockType;
    static readonly cherryLog: BlockType;
    static readonly cherryPlanks: BlockType;
    static readonly cherryPressurePlate: BlockType;
    static readonly cherrySapling: BlockType;
    static readonly cherrySlab: BlockType;
    static readonly cherryStairs: BlockType;
    static readonly cherryStandingSign: BlockType;
    static readonly cherryTrapdoor: BlockType;
    static readonly cherryWallSign: BlockType;
    static readonly cherryWood: BlockType;
    /**
     * @remarks
     * Represents a chest within Minecraft.
     *
     */
    static readonly chest: BlockType;
    static readonly chiseledBookshelf: BlockType;
    /**
     * @remarks
     * Represents a set of chiseled deepslate within Minecraft.
     *
     */
    static readonly chiseledDeepslate: BlockType;
    /**
     * @remarks
     * Represents a block of chiseled nether bricks within
     * Minecraft.
     *
     */
    static readonly chiseledNetherBricks: BlockType;
    /**
     * @remarks
     * Represents a block of chiseled polished blackstone within
     * Minecraft.
     *
     */
    static readonly chiseledPolishedBlackstone: BlockType;
    /**
     * @remarks
     * Represents a chorus flower within Minecraft.
     *
     */
    static readonly chorusFlower: BlockType;
    /**
     * @remarks
     * Represents a chorus plant within Minecraft.
     *
     */
    static readonly chorusPlant: BlockType;
    /**
     * @remarks
     * Represents a block of clay within Minecraft.
     *
     */
    static readonly clay: BlockType;
    static readonly clientRequestPlaceholderBlock: BlockType;
    /**
     * @remarks
     * Represents a block of solid coal within Minecraft.
     *
     */
    static readonly coalBlock: BlockType;
    /**
     * @remarks
     * Represents a block with embedded coal ore within Minecraft.
     *
     */
    static readonly coalOre: BlockType;
    /**
     * @remarks
     * Represents a block of cobbled deepslate within Minecraft.
     *
     */
    static readonly cobbledDeepslate: BlockType;
    /**
     * @remarks
     * Represents a double slab of cobbled deepslate within
     * Minecraft.
     *
     */
    static readonly cobbledDeepslateDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a slab of deepslate within Minecraft.
     *
     */
    static readonly cobbledDeepslateSlab: BlockType;
    /**
     * @remarks
     * Represents cobbled deepslate stairs within Minecraft.
     *
     */
    static readonly cobbledDeepslateStairs: BlockType;
    /**
     * @remarks
     * Represents a cobbled deepslate wall within Minecraft.
     *
     */
    static readonly cobbledDeepslateWall: BlockType;
    /**
     * @remarks
     * Represents a block of cobblestone within Minecraft.
     *
     */
    static readonly cobblestone: BlockType;
    /**
     * @remarks
     * Represents a wall of cobblestone within Minecraft.
     *
     */
    static readonly cobblestoneWall: BlockType;
    /**
     * @remarks
     * Represents a set of cocoa beans (typically on a tree) within
     * Minecraft.
     *
     */
    static readonly cocoa: BlockType;
    /**
     * @remarks
     * Represents blue/purple torches within Minecraft.
     *
     */
    static readonly coloredTorchBp: BlockType;
    /**
     * @remarks
     * Represents red/green torches within Minecraft.
     *
     */
    static readonly coloredTorchRg: BlockType;
    /**
     * @remarks
     * Represents a block that can run commands within Minecraft.
     *
     */
    static readonly commandBlock: BlockType;
    /**
     * @remarks
     * Represents a composter block within Minecraft.
     *
     */
    static readonly composter: BlockType;
    /**
     * @remarks
     * Represents a block of concrete powder within Minecraft.
     *
     */
    static readonly concrete: BlockType;
    /**
     * @remarks
     * Represents a block of concrete powder within Minecraft.
     *
     */
    static readonly concretePowder: BlockType;
    /**
     * @remarks
     * Represents a conduit block within Minecraft.
     *
     */
    static readonly conduit: BlockType;
    /**
     * @remarks
     * Represents a solid block of copper within Minecraft.
     *
     */
    static readonly copperBlock: BlockType;
    /**
     * @remarks
     * Represents a block with embedded copper ore within
     * Minecraft.
     *
     */
    static readonly copperOre: BlockType;
    /**
     * @remarks
     * Represents coral within Minecraft.
     *
     */
    static readonly coral: BlockType;
    /**
     * @remarks
     * Represents a solid block of coral within Minecraft.
     *
     */
    static readonly coralBlock: BlockType;
    /**
     * @remarks
     * Represents a fan formation of coral within Minecraft.
     *
     */
    static readonly coralFan: BlockType;
    /**
     * @remarks
     * Represents a fan formation of dead coral within Minecraft.
     *
     */
    static readonly coralFanDead: BlockType;
    /**
     * @remarks
     * Represents a hanging fan formation of coral within
     * Minecraft.
     *
     */
    static readonly coralFanHang: BlockType;
    /**
     * @remarks
     * Represents an alternate hanging fan formation of coral (#2)
     * within Minecraft.
     *
     */
    static readonly coralFanHang2: BlockType;
    /**
     * @remarks
     * Represents an alternate hanging fan formation of coral (#3)
     * within Minecraft.
     *
     */
    static readonly coralFanHang3: BlockType;
    /**
     * @remarks
     * Represents a block of cracked deepslate bricks within
     * Minecraft.
     *
     */
    static readonly crackedDeepslateBricks: BlockType;
    /**
     * @remarks
     * Represents tiles of cracked deepslate within Minecraft.
     *
     */
    static readonly crackedDeepslateTiles: BlockType;
    /**
     * @remarks
     * Represents a block of cracked nether bricks within
     * Minecraft.
     *
     */
    static readonly crackedNetherBricks: BlockType;
    /**
     * @remarks
     * Represents a block of cracked and polished blackstone bricks
     * within Minecraft.
     *
     */
    static readonly crackedPolishedBlackstoneBricks: BlockType;
    /**
     * @remarks
     * Represents a crafting table within Minecraft.
     *
     */
    static readonly craftingTable: BlockType;
    /**
     * @remarks
     * Represents a crimson button within Minecraft.
     *
     */
    static readonly crimsonButton: BlockType;
    /**
     * @remarks
     * Represents a crimson door within Minecraft.
     *
     */
    static readonly crimsonDoor: BlockType;
    /**
     * @remarks
     * Represents a crimson double slab within Minecraft.
     *
     */
    static readonly crimsonDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a crimson fence within Minecraft.
     *
     */
    static readonly crimsonFence: BlockType;
    /**
     * @remarks
     * Represents a crimson fence gate within Minecraft.
     *
     */
    static readonly crimsonFenceGate: BlockType;
    /**
     * @remarks
     * Represents a crimson fungus within Minecraft.
     *
     */
    static readonly crimsonFungus: BlockType;
    static readonly crimsonHangingSign: BlockType;
    /**
     * @remarks
     * Represents crimson hyphae within Minecraft.
     *
     */
    static readonly crimsonHyphae: BlockType;
    /**
     * @remarks
     * Represents crimson nylium within Minecraft.
     *
     */
    static readonly crimsonNylium: BlockType;
    /**
     * @remarks
     * Represents a set of crimson planks within Minecraft.
     *
     */
    static readonly crimsonPlanks: BlockType;
    /**
     * @remarks
     * Represents a crimson pressure plate within Minecraft.
     *
     */
    static readonly crimsonPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of crimson roots within Minecraft.
     *
     */
    static readonly crimsonRoots: BlockType;
    /**
     * @remarks
     * Represents a crimson slab within Minecraft.
     *
     */
    static readonly crimsonSlab: BlockType;
    /**
     * @remarks
     * Represents a set of crimson stairs within Minecraft.
     *
     */
    static readonly crimsonStairs: BlockType;
    /**
     * @remarks
     * Represents a crimson standing sign within Minecraft.
     *
     */
    static readonly crimsonStandingSign: BlockType;
    /**
     * @remarks
     * Represents a crimson stem within Minecraft.
     *
     */
    static readonly crimsonStem: BlockType;
    /**
     * @remarks
     * Represents a crimson trapdoor within Minecraft.
     *
     */
    static readonly crimsonTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a crimson wall sign within Minecraft.
     *
     */
    static readonly crimsonWallSign: BlockType;
    /**
     * @remarks
     * Represents crying obsidian within Minecraft.
     *
     */
    static readonly cryingObsidian: BlockType;
    /**
     * @remarks
     * Represents a cut copper block within Minecraft.
     *
     */
    static readonly cutCopper: BlockType;
    /**
     * @remarks
     * Represents a cut copper slab within Minecraft.
     *
     */
    static readonly cutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of cut copper stairs within Minecraft.
     *
     */
    static readonly cutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a cyan-colored candle within Minecraft.
     *
     */
    static readonly cyanCandle: BlockType;
    /**
     * @remarks
     * Represents a cake with a cyan-colored candle within
     * Minecraft.
     *
     */
    static readonly cyanCandleCake: BlockType;
    /**
     * @remarks
     * Represents a block of cyan-colored glazed terracotta within
     * Minecraft.
     *
     */
    static readonly cyanGlazedTerracotta: BlockType;
    static readonly cyanWool: BlockType;
    /**
     * @remarks
     * Represents a dark oak button within Minecraft.
     *
     */
    static readonly darkOakButton: BlockType;
    /**
     * @remarks
     * Represents a dark oak door within Minecraft.
     *
     */
    static readonly darkOakDoor: BlockType;
    static readonly darkOakFence: BlockType;
    /**
     * @remarks
     * Represents a dark oak fence gate within Minecraft.
     *
     */
    static readonly darkOakFenceGate: BlockType;
    static readonly darkOakHangingSign: BlockType;
    static readonly darkOakLog: BlockType;
    /**
     * @remarks
     * Represents a dark oak pressure plate within Minecraft.
     *
     */
    static readonly darkOakPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of dark oak stairs within Minecraft.
     *
     */
    static readonly darkOakStairs: BlockType;
    /**
     * @remarks
     * Represents a dark oak standing sign within Minecraft.
     *
     */
    static readonly darkoakStandingSign: BlockType;
    /**
     * @remarks
     * Represents a dark oak trapdoor within Minecraft.
     *
     */
    static readonly darkOakTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a dark oak wall sign within Minecraft.
     *
     */
    static readonly darkoakWallSign: BlockType;
    /**
     * @remarks
     * Represents a set of dark prismarine stairs within Minecraft.
     *
     */
    static readonly darkPrismarineStairs: BlockType;
    /**
     * @remarks
     * Represents a daylight detector within Minecraft.
     *
     */
    static readonly daylightDetector: BlockType;
    /**
     * @remarks
     * Represents an inverted daylight detector within Minecraft.
     *
     */
    static readonly daylightDetectorInverted: BlockType;
    /**
     * @remarks
     * Represents a dead bush within Minecraft.
     *
     */
    static readonly deadbush: BlockType;
    static readonly decoratedPot: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate within Minecraft.
     *
     */
    static readonly deepslate: BlockType;
    /**
     * @remarks
     * Represents a double slab of deepslate brick within
     * Minecraft.
     *
     */
    static readonly deepslateBrickDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate bricks within Minecraft.
     *
     */
    static readonly deepslateBricks: BlockType;
    /**
     * @remarks
     * Represents a slab of deepslate brick within Minecraft.
     *
     */
    static readonly deepslateBrickSlab: BlockType;
    /**
     * @remarks
     * Represents a set of deepslate brick stairs within Minecraft.
     *
     */
    static readonly deepslateBrickStairs: BlockType;
    /**
     * @remarks
     * Represents a deepslate brick wall within Minecraft.
     *
     */
    static readonly deepslateBrickWall: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded coal ore
     * within Minecraft.
     *
     */
    static readonly deepslateCoalOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded copper ore
     * within Minecraft.
     *
     */
    static readonly deepslateCopperOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded diamond ore
     * within Minecraft.
     *
     */
    static readonly deepslateDiamondOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded emerald ore
     * within Minecraft.
     *
     */
    static readonly deepslateEmeraldOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded gold ore
     * within Minecraft.
     *
     */
    static readonly deepslateGoldOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded iron ore
     * within Minecraft.
     *
     */
    static readonly deepslateIronOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded lapis lazuli
     * ore within Minecraft.
     *
     */
    static readonly deepslateLapisOre: BlockType;
    /**
     * @remarks
     * Represents a block of deepslate with embedded redstone ore
     * within Minecraft.
     *
     */
    static readonly deepslateRedstoneOre: BlockType;
    /**
     * @remarks
     * Represents a double slab of tiled deepslate within
     * Minecraft.
     *
     */
    static readonly deepslateTileDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a set of deepslate tiles within Minecraft.
     *
     */
    static readonly deepslateTiles: BlockType;
    /**
     * @remarks
     * Represents a slab of deepslate tiles within Minecraft.
     *
     */
    static readonly deepslateTileSlab: BlockType;
    /**
     * @remarks
     * Represents a set of deepslate tile stairs within Minecraft.
     *
     */
    static readonly deepslateTileStairs: BlockType;
    /**
     * @remarks
     * Represents a wall of deepslate tile within Minecraft.
     *
     */
    static readonly deepslateTileWall: BlockType;
    /**
     * @remarks
     * Represents a logical but generally invisible Deny logic
     * block within Minecraft.
     *
     */
    static readonly deny: BlockType;
    /**
     * @remarks
     * Represents a detector rail within Minecraft.
     *
     */
    static readonly detectorRail: BlockType;
    /**
     * @remarks
     * Represents a block of diamond within Minecraft.
     *
     */
    static readonly diamondBlock: BlockType;
    /**
     * @remarks
     * Represents a block with embedded diamond ore within
     * Minecraft.
     *
     */
    static readonly diamondOre: BlockType;
    /**
     * @remarks
     * Represents a set of diorite stairs within Minecraft.
     *
     */
    static readonly dioriteStairs: BlockType;
    /**
     * @remarks
     * Represents a block of dirt within Minecraft.
     *
     */
    static readonly dirt: BlockType;
    /**
     * @remarks
     * Represents a block of dirt with roots within Minecraft.
     *
     */
    static readonly dirtWithRoots: BlockType;
    /**
     * @remarks
     * Represents a dispenser within Minecraft.
     *
     */
    static readonly dispenser: BlockType;
    /**
     * @remarks
     * Represents a slab of double cut copper within Minecraft.
     *
     */
    static readonly doubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a double plant within Minecraft.
     *
     */
    static readonly doublePlant: BlockType;
    static readonly doubleStoneBlockSlab: BlockType;
    static readonly doubleStoneBlockSlab2: BlockType;
    static readonly doubleStoneBlockSlab3: BlockType;
    static readonly doubleStoneBlockSlab4: BlockType;
    /**
     * @remarks
     * Represents a double slab of stone within Minecraft.
     *
     */
    static readonly doubleStoneSlab: BlockType;
    /**
     * @remarks
     * Represents an alternate double slab of stone (#2) within
     * Minecraft.
     *
     */
    static readonly doubleStoneSlab2: BlockType;
    /**
     * @remarks
     * Represents an alternate double slab of stone (#3) within
     * Minecraft.
     *
     */
    static readonly doubleStoneSlab3: BlockType;
    /**
     * @remarks
     * Represents an alternate double slab of stone (#4) within
     * Minecraft.
     *
     */
    static readonly doubleStoneSlab4: BlockType;
    /**
     * @remarks
     * Represents a double slab of wood within Minecraft.
     *
     */
    static readonly doubleWoodenSlab: BlockType;
    /**
     * @remarks
     * Represents a dragon egg within Minecraft.
     *
     */
    static readonly dragonEgg: BlockType;
    /**
     * @remarks
     * Represents a block of dried kelp within Minecraft.
     *
     */
    static readonly driedKelpBlock: BlockType;
    /**
     * @remarks
     * Represents a block of dripstone within Minecraft.
     *
     */
    static readonly dripstoneBlock: BlockType;
    /**
     * @remarks
     * Represents a dropper within Minecraft.
     *
     */
    static readonly dropper: BlockType;
    /**
     * @remarks
     * Represents an element in Minecraft Education experiences.
     *
     */
    static readonly element0: BlockType;
    /**
     * @remarks
     * Represents the hydrogen element in Minecraft Education
     * experiences.
     *
     */
    static readonly element1: BlockType;
    /**
     * @remarks
     * Represents the neon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element10: BlockType;
    /**
     * @remarks
     * Represents the fermium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element100: BlockType;
    /**
     * @remarks
     * Represents the mendelevium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element101: BlockType;
    /**
     * @remarks
     * Represents the nobelium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element102: BlockType;
    /**
     * @remarks
     * Represents the lawrencium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element103: BlockType;
    /**
     * @remarks
     * Represents the rutherfordium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element104: BlockType;
    /**
     * @remarks
     * Represents the dubnium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element105: BlockType;
    /**
     * @remarks
     * Represents the seaborgium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element106: BlockType;
    /**
     * @remarks
     * Represents the bohrium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element107: BlockType;
    /**
     * @remarks
     * Represents the hassium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element108: BlockType;
    /**
     * @remarks
     * Represents the meitnerium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element109: BlockType;
    /**
     * @remarks
     * Represents the sodium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element11: BlockType;
    /**
     * @remarks
     * Represents the darmstadtium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element110: BlockType;
    /**
     * @remarks
     * Represents the roentgenium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element111: BlockType;
    /**
     * @remarks
     * Represents the copernicium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element112: BlockType;
    /**
     * @remarks
     * Represents the nihonium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element113: BlockType;
    /**
     * @remarks
     * Represents the flerovium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element114: BlockType;
    /**
     * @remarks
     * Represents the moscovium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element115: BlockType;
    /**
     * @remarks
     * Represents the livermorium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element116: BlockType;
    /**
     * @remarks
     * Represents the tennessine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element117: BlockType;
    /**
     * @remarks
     * Represents the oganesson element in Minecraft Education
     * experiences.
     *
     */
    static readonly element118: BlockType;
    /**
     * @remarks
     * Represents the magnesium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element12: BlockType;
    /**
     * @remarks
     * Represents the aluminum element in Minecraft Education
     * experiences.
     *
     */
    static readonly element13: BlockType;
    /**
     * @remarks
     * Represents the silicon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element14: BlockType;
    /**
     * @remarks
     * Represents the phosphorus element in Minecraft Education
     * experiences.
     *
     */
    static readonly element15: BlockType;
    /**
     * @remarks
     * Represents the sulfur element in Minecraft Education
     * experiences.
     *
     */
    static readonly element16: BlockType;
    /**
     * @remarks
     * Represents the chlorine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element17: BlockType;
    /**
     * @remarks
     * Represents the argon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element18: BlockType;
    /**
     * @remarks
     * Represents the potassium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element19: BlockType;
    /**
     * @remarks
     * Represents the helium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element2: BlockType;
    /**
     * @remarks
     * Represents the calcium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element20: BlockType;
    /**
     * @remarks
     * Represents the scandium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element21: BlockType;
    /**
     * @remarks
     * Represents the titanium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element22: BlockType;
    /**
     * @remarks
     * Represents the vanadium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element23: BlockType;
    /**
     * @remarks
     * Represents the chromium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element24: BlockType;
    /**
     * @remarks
     * Represents the manganese element in Minecraft Education
     * experiences.
     *
     */
    static readonly element25: BlockType;
    /**
     * @remarks
     * Represents the iron element in Minecraft Education
     * experiences.
     *
     */
    static readonly element26: BlockType;
    /**
     * @remarks
     * Represents the cobalt element in Minecraft Education
     * experiences.
     *
     */
    static readonly element27: BlockType;
    /**
     * @remarks
     * Represents the nickel element in Minecraft Education
     * experiences.
     *
     */
    static readonly element28: BlockType;
    /**
     * @remarks
     * Represents the copper element in Minecraft Education
     * experiences.
     *
     */
    static readonly element29: BlockType;
    /**
     * @remarks
     * Represents a lithium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element3: BlockType;
    /**
     * @remarks
     * Represents the zinc element in Minecraft Education
     * experiences.
     *
     */
    static readonly element30: BlockType;
    /**
     * @remarks
     * Represents the gallium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element31: BlockType;
    /**
     * @remarks
     * Represents a germanium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element32: BlockType;
    /**
     * @remarks
     * Represents the arsenic element in Minecraft Education
     * experiences.
     *
     */
    static readonly element33: BlockType;
    /**
     * @remarks
     * Represents the selenium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element34: BlockType;
    /**
     * @remarks
     * Represents the bromine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element35: BlockType;
    /**
     * @remarks
     * Represents the krypton element in Minecraft Education
     * experiences.
     *
     */
    static readonly element36: BlockType;
    /**
     * @remarks
     * Represents the rubidium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element37: BlockType;
    /**
     * @remarks
     * Represents the strontium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element38: BlockType;
    /**
     * @remarks
     * Represents the yttrium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element39: BlockType;
    /**
     * @remarks
     * Represents a beryllium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element4: BlockType;
    /**
     * @remarks
     * Represents the zirconium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element40: BlockType;
    /**
     * @remarks
     * Represents the niobium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element41: BlockType;
    /**
     * @remarks
     * Represents the molybdenum element in Minecraft Education
     * experiences.
     *
     */
    static readonly element42: BlockType;
    /**
     * @remarks
     * Represents the technetium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element43: BlockType;
    /**
     * @remarks
     * Represents the ruthenium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element44: BlockType;
    /**
     * @remarks
     * Represents the rhodium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element45: BlockType;
    /**
     * @remarks
     * Represents the palladium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element46: BlockType;
    /**
     * @remarks
     * Represents the silver element in Minecraft Education
     * experiences.
     *
     */
    static readonly element47: BlockType;
    /**
     * @remarks
     * Represents the cadmium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element48: BlockType;
    /**
     * @remarks
     * Represents the indium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element49: BlockType;
    /**
     * @remarks
     * Represents the boron element in Minecraft Education
     * experiences.
     *
     */
    static readonly element5: BlockType;
    /**
     * @remarks
     * Represents the tin element in Minecraft Education
     * experiences.
     *
     */
    static readonly element50: BlockType;
    /**
     * @remarks
     * Represents the antimony element in Minecraft Education
     * experiences.
     *
     */
    static readonly element51: BlockType;
    /**
     * @remarks
     * Represents the tellurium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element52: BlockType;
    /**
     * @remarks
     * Represents the iodine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element53: BlockType;
    /**
     * @remarks
     * Represents the xenon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element54: BlockType;
    /**
     * @remarks
     * Represents the cesium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element55: BlockType;
    /**
     * @remarks
     * Represents the barium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element56: BlockType;
    /**
     * @remarks
     * Represents the lanthanum element in Minecraft Education
     * experiences.
     *
     */
    static readonly element57: BlockType;
    /**
     * @remarks
     * Represents the cerium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element58: BlockType;
    /**
     * @remarks
     * Represents the praseodymium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element59: BlockType;
    /**
     * @remarks
     * Represents the carbon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element6: BlockType;
    /**
     * @remarks
     * Represents the neodymium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element60: BlockType;
    /**
     * @remarks
     * Represents the promethium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element61: BlockType;
    /**
     * @remarks
     * Represents the samarium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element62: BlockType;
    /**
     * @remarks
     * Represents the europium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element63: BlockType;
    /**
     * @remarks
     * Represents the gadolinium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element64: BlockType;
    /**
     * @remarks
     * Represents a terbium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element65: BlockType;
    /**
     * @remarks
     * Represents the dysprosium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element66: BlockType;
    /**
     * @remarks
     * Represents the holmium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element67: BlockType;
    /**
     * @remarks
     * Represents the erbium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element68: BlockType;
    /**
     * @remarks
     * Represents the thulium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element69: BlockType;
    /**
     * @remarks
     * Represents the nitrogen element in Minecraft Education
     * experiences.
     *
     */
    static readonly element7: BlockType;
    /**
     * @remarks
     * Represents the ytterbium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element70: BlockType;
    /**
     * @remarks
     * Represents the lutetium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element71: BlockType;
    /**
     * @remarks
     * Represents a hafnium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element72: BlockType;
    /**
     * @remarks
     * Represents the tantalum element in Minecraft Education
     * experiences.
     *
     */
    static readonly element73: BlockType;
    /**
     * @remarks
     * Represents the tungsten element in Minecraft Education
     * experiences.
     *
     */
    static readonly element74: BlockType;
    /**
     * @remarks
     * Represents the rhenium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element75: BlockType;
    /**
     * @remarks
     * Represents the osmium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element76: BlockType;
    /**
     * @remarks
     * Represents the iridium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element77: BlockType;
    /**
     * @remarks
     * Represents the platinum element in Minecraft Education
     * experiences.
     *
     */
    static readonly element78: BlockType;
    /**
     * @remarks
     * Represents the gold element in Minecraft Education
     * experiences.
     *
     */
    static readonly element79: BlockType;
    /**
     * @remarks
     * Represents the oxygen element in Minecraft Education
     * experiences.
     *
     */
    static readonly element8: BlockType;
    /**
     * @remarks
     * Represents the mercury element in Minecraft Education
     * experiences.
     *
     */
    static readonly element80: BlockType;
    /**
     * @remarks
     * Represents the thallium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element81: BlockType;
    /**
     * @remarks
     * Represents the lead element in Minecraft Education
     * experiences.
     *
     */
    static readonly element82: BlockType;
    /**
     * @remarks
     * Represents the bismuth element in Minecraft Education
     * experiences.
     *
     */
    static readonly element83: BlockType;
    /**
     * @remarks
     * Represents the polonium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element84: BlockType;
    /**
     * @remarks
     * Represents the astatine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element85: BlockType;
    /**
     * @remarks
     * Represents the radon element in Minecraft Education
     * experiences.
     *
     */
    static readonly element86: BlockType;
    /**
     * @remarks
     * Represents the francium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element87: BlockType;
    /**
     * @remarks
     * Represents the radium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element88: BlockType;
    /**
     * @remarks
     * Represents the actinium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element89: BlockType;
    /**
     * @remarks
     * Represents the fluorine element in Minecraft Education
     * experiences.
     *
     */
    static readonly element9: BlockType;
    /**
     * @remarks
     * Represents the thorium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element90: BlockType;
    /**
     * @remarks
     * Represents the protactinium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element91: BlockType;
    /**
     * @remarks
     * Represents the uranium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element92: BlockType;
    /**
     * @remarks
     * Represents the neptunium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element93: BlockType;
    /**
     * @remarks
     * Represents the plutonium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element94: BlockType;
    /**
     * @remarks
     * Represents the americium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element95: BlockType;
    /**
     * @remarks
     * Represents the curium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element96: BlockType;
    /**
     * @remarks
     * Represents the berkelium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element97: BlockType;
    /**
     * @remarks
     * Represents the californium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element98: BlockType;
    /**
     * @remarks
     * Represents the einsteinium element in Minecraft Education
     * experiences.
     *
     */
    static readonly element99: BlockType;
    /**
     * @remarks
     * Represents a block of emerald within Minecraft.
     *
     */
    static readonly emeraldBlock: BlockType;
    /**
     * @remarks
     * Represents a block with embedded emerald ore within
     * Minecraft.
     *
     */
    static readonly emeraldOre: BlockType;
    /**
     * @remarks
     * Represents an enchanting table within Minecraft.
     *
     */
    static readonly enchantingTable: BlockType;
    /**
     * @remarks
     * Represents an end bricks block within Minecraft.
     *
     */
    static readonly endBricks: BlockType;
    /**
     * @remarks
     * Represents a set of end brick stairs within Minecraft.
     *
     */
    static readonly endBrickStairs: BlockType;
    /**
     * @remarks
     * Represents an ender chest within Minecraft.
     *
     */
    static readonly enderChest: BlockType;
    /**
     * @remarks
     * Represents an end gateway within Minecraft.
     *
     */
    static readonly endGateway: BlockType;
    /**
     * @remarks
     * Represents an end portal block within Minecraft.
     *
     */
    static readonly endPortal: BlockType;
    /**
     * @remarks
     * Represents an end portal frame within Minecraft.
     *
     */
    static readonly endPortalFrame: BlockType;
    /**
     * @remarks
     * Represents an end rod within Minecraft.
     *
     */
    static readonly endRod: BlockType;
    /**
     * @remarks
     * Represents an end stone block within Minecraft.
     *
     */
    static readonly endStone: BlockType;
    /**
     * @remarks
     * Represents a block of exposed copper within Minecraft.
     *
     */
    static readonly exposedCopper: BlockType;
    /**
     * @remarks
     * Represents a block of exposed cut copper within Minecraft.
     *
     */
    static readonly exposedCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of exposed cut copper within Minecraft.
     *
     */
    static readonly exposedCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of exposed cut copper stairs within
     * Minecraft.
     *
     */
    static readonly exposedCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of exposed cut copper within
     * Minecraft.
     *
     */
    static readonly exposedDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a farmland block within Minecraft.
     *
     */
    static readonly farmland: BlockType;
    /**
     * @remarks
     * Represents a fence gate within Minecraft.
     *
     */
    static readonly fenceGate: BlockType;
    /**
     * @remarks
     * Represents a fire within Minecraft.
     *
     */
    static readonly fire: BlockType;
    /**
     * @remarks
     * Represents a fletching table within Minecraft.
     *
     */
    static readonly fletchingTable: BlockType;
    /**
     * @remarks
     * Represents a flowering azalea plant within Minecraft.
     *
     */
    static readonly floweringAzalea: BlockType;
    /**
     * @remarks
     * Represents a flower pot within Minecraft.
     *
     */
    static readonly flowerPot: BlockType;
    /**
     * @remarks
     * Represents flowing lava within Minecraft.
     *
     */
    static readonly flowingLava: BlockType;
    /**
     * @remarks
     * Represents flowing water within Minecraft.
     *
     */
    static readonly flowingWater: BlockType;
    /**
     * @remarks
     * Represents a frame within Minecraft.
     *
     */
    static readonly frame: BlockType;
    static readonly frogSpawn: BlockType;
    /**
     * @remarks
     * Represents a frosted ice block within Minecraft.
     *
     */
    static readonly frostedIce: BlockType;
    /**
     * @remarks
     * Represents a furnace within Minecraft.
     *
     */
    static readonly furnace: BlockType;
    /**
     * @remarks
     * Represents a block of gilded blackstone within Minecraft.
     *
     */
    static readonly gildedBlackstone: BlockType;
    /**
     * @remarks
     * Represents a glass block within Minecraft.
     *
     */
    static readonly glass: BlockType;
    /**
     * @remarks
     * Represents a pane of glass within Minecraft.
     *
     */
    static readonly glassPane: BlockType;
    /**
     * @remarks
     * Represents a glowing frame within Minecraft.
     *
     */
    static readonly glowFrame: BlockType;
    /**
     * @remarks
     * Represents a glowing obsidian block within Minecraft.
     *
     */
    static readonly glowingobsidian: BlockType;
    /**
     * @remarks
     * Represents glow lichen within Minecraft.
     *
     */
    static readonly glowLichen: BlockType;
    /**
     * @remarks
     * Represents a block of glowstone within Minecraft.
     *
     */
    static readonly glowstone: BlockType;
    /**
     * @remarks
     * Represents a gold block within Minecraft.
     *
     */
    static readonly goldBlock: BlockType;
    /**
     * @remarks
     * Represents a golden rail element within Minecraft.
     *
     */
    static readonly goldenRail: BlockType;
    /**
     * @remarks
     * Represents a block with embedded gold ore within Minecraft.
     *
     */
    static readonly goldOre: BlockType;
    /**
     * @remarks
     * Represents a set of granite stairs within Minecraft.
     *
     */
    static readonly graniteStairs: BlockType;
    /**
     * @remarks
     * Represents a block of dirt and grass within Minecraft.
     *
     */
    static readonly grass: BlockType;
    /**
     * @remarks
     * Represents a block of dirt and grass with a path within
     * Minecraft.
     *
     */
    static readonly grassPath: BlockType;
    /**
     * @remarks
     * Represents a block of gravel within Minecraft.
     *
     */
    static readonly gravel: BlockType;
    /**
     * @remarks
     * Represents a gray-colored candle within Minecraft.
     *
     */
    static readonly grayCandle: BlockType;
    /**
     * @remarks
     * Represents a cake with gray-colored candle within Minecraft.
     *
     */
    static readonly grayCandleCake: BlockType;
    /**
     * @remarks
     * Represents a gray-colored block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly grayGlazedTerracotta: BlockType;
    static readonly grayWool: BlockType;
    /**
     * @remarks
     * Represents a green-colored candle within Minecraft.
     *
     */
    static readonly greenCandle: BlockType;
    /**
     * @remarks
     * Represents a green-colored candle cake within Minecraft.
     *
     */
    static readonly greenCandleCake: BlockType;
    /**
     * @remarks
     * Represents a green block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly greenGlazedTerracotta: BlockType;
    static readonly greenWool: BlockType;
    /**
     * @remarks
     * Represents a grindstone within Minecraft.
     *
     */
    static readonly grindstone: BlockType;
    /**
     * @remarks
     * Represents a set of hanging roots within Minecraft.
     *
     */
    static readonly hangingRoots: BlockType;
    /**
     * @remarks
     * Represents a block of hardened clay within Minecraft.
     *
     */
    static readonly hardenedClay: BlockType;
    /**
     * @remarks
     * Represents a block of hard glass within Minecraft.
     *
     */
    static readonly hardGlass: BlockType;
    /**
     * @remarks
     * Represents a pane of hard glass within Minecraft.
     *
     */
    static readonly hardGlassPane: BlockType;
    /**
     * @remarks
     * Represents a stained hard glass block within Minecraft.
     *
     */
    static readonly hardStainedGlass: BlockType;
    /**
     * @remarks
     * Represents a stained pane of hard glass within Minecraft.
     *
     */
    static readonly hardStainedGlassPane: BlockType;
    /**
     * @remarks
     * Represents a block of hay within Minecraft.
     *
     */
    static readonly hayBlock: BlockType;
    /**
     * @remarks
     * Represents a heavy weighted pressure plate within Minecraft.
     *
     */
    static readonly heavyWeightedPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a block of honey within Minecraft.
     *
     */
    static readonly honeyBlock: BlockType;
    /**
     * @remarks
     * Represents a honeycomb block within Minecraft.
     *
     */
    static readonly honeycombBlock: BlockType;
    /**
     * @remarks
     * Represents a hopper within Minecraft.
     *
     */
    static readonly hopper: BlockType;
    /**
     * @remarks
     * Represents a block of ice within Minecraft.
     *
     */
    static readonly ice: BlockType;
    /**
     * @remarks
     * Represents an infested block of deepslate within Minecraft.
     *
     */
    static readonly infestedDeepslate: BlockType;
    /**
     * @remarks
     * Represents an information update block within Minecraft.
     *
     */
    static readonly infoUpdate: BlockType;
    /**
     * @remarks
     * Represents an information update block within Minecraft.
     *
     */
    static readonly infoUpdate2: BlockType;
    /**
     * @remarks
     * Represents an invisible boundary bedrock block within
     * Minecraft.
     *
     */
    static readonly invisibleBedrock: BlockType;
    /**
     * @remarks
     * Represents iron bars within Minecraft.
     *
     */
    static readonly ironBars: BlockType;
    /**
     * @remarks
     * Represents a block of iron within Minecraft.
     *
     */
    static readonly ironBlock: BlockType;
    /**
     * @remarks
     * Represents an iron door within Minecraft.
     *
     */
    static readonly ironDoor: BlockType;
    /**
     * @remarks
     * Represents a block with embedded iron ore within Minecraft.
     *
     */
    static readonly ironOre: BlockType;
    /**
     * @remarks
     * Represents an iron trapdoor within Minecraft.
     *
     */
    static readonly ironTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a jigsaw within Minecraft.
     *
     */
    static readonly jigsaw: BlockType;
    /**
     * @remarks
     * Represents a jukebox within Minecraft.
     *
     */
    static readonly jukebox: BlockType;
    /**
     * @remarks
     * Represents jungle wood button within Minecraft.
     *
     */
    static readonly jungleButton: BlockType;
    /**
     * @remarks
     * Represents a jungle wood door within Minecraft.
     *
     */
    static readonly jungleDoor: BlockType;
    static readonly jungleFence: BlockType;
    /**
     * @remarks
     * Represents a jungle wood fence gate within Minecraft.
     *
     */
    static readonly jungleFenceGate: BlockType;
    static readonly jungleHangingSign: BlockType;
    static readonly jungleLog: BlockType;
    /**
     * @remarks
     * Represents a jungle wood pressure plate within Minecraft.
     *
     */
    static readonly junglePressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of jungle wood stairs within Minecraft.
     *
     */
    static readonly jungleStairs: BlockType;
    /**
     * @remarks
     * Represents a jungle wood standing sign within Minecraft.
     *
     */
    static readonly jungleStandingSign: BlockType;
    /**
     * @remarks
     * Represents a jungle wood trapdoor within Minecraft.
     *
     */
    static readonly jungleTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a jungle wood wall sign within Minecraft.
     *
     */
    static readonly jungleWallSign: BlockType;
    /**
     * @remarks
     * Represents a set of kelp within Minecraft.
     *
     */
    static readonly kelp: BlockType;
    /**
     * @remarks
     * Represents a ladder within Minecraft.
     *
     */
    static readonly ladder: BlockType;
    /**
     * @remarks
     * Represents a lantern within Minecraft.
     *
     */
    static readonly lantern: BlockType;
    /**
     * @remarks
     * Represents a block of lapis lazuli within Minecraft.
     *
     */
    static readonly lapisBlock: BlockType;
    /**
     * @remarks
     * Represents a block with embedded lapis lazuli within
     * Minecraft.
     *
     */
    static readonly lapisOre: BlockType;
    /**
     * @remarks
     * Represents a bud of large amethyst within Minecraft.
     *
     */
    static readonly largeAmethystBud: BlockType;
    /**
     * @remarks
     * Represents lava within Minecraft.
     *
     */
    static readonly lava: BlockType;
    /**
     * @remarks
     * Represents a cauldron filled with lava within Minecraft.
     *
     */
    static readonly lavaCauldron: BlockType;
    /**
     * @remarks
     * Represents a set of leaves within Minecraft.
     *
     */
    static readonly leaves: BlockType;
    /**
     * @remarks
     * Represents an updated set of leaves within Minecraft.
     *
     */
    static readonly leaves2: BlockType;
    /**
     * @remarks
     * Represents a lectern within Minecraft.
     *
     */
    static readonly lectern: BlockType;
    /**
     * @remarks
     * Represents a lever within Minecraft.
     *
     */
    static readonly lever: BlockType;
    /**
     * @remarks
     * Represents a block of light within Minecraft.
     *
     */
    static readonly lightBlock: BlockType;
    /**
     * @remarks
     * Represents a light blue candle within Minecraft.
     *
     */
    static readonly lightBlueCandle: BlockType;
    /**
     * @remarks
     * Represents a light blue candle cake within Minecraft.
     *
     */
    static readonly lightBlueCandleCake: BlockType;
    /**
     * @remarks
     * Represents a light blue block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly lightBlueGlazedTerracotta: BlockType;
    static readonly lightBlueWool: BlockType;
    /**
     * @remarks
     * Represents a light gray candle within Minecraft.
     *
     */
    static readonly lightGrayCandle: BlockType;
    /**
     * @remarks
     * Represents a light gray candle cake within Minecraft.
     *
     */
    static readonly lightGrayCandleCake: BlockType;
    static readonly lightGrayWool: BlockType;
    /**
     * @remarks
     * Represents a lightning rod within Minecraft.
     *
     */
    static readonly lightningRod: BlockType;
    /**
     * @remarks
     * Represents a light weighted pressure plate within Minecraft.
     *
     */
    static readonly lightWeightedPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a lime candle within Minecraft.
     *
     */
    static readonly limeCandle: BlockType;
    /**
     * @remarks
     * Represents a lime-colored candle cake within Minecraft.
     *
     */
    static readonly limeCandleCake: BlockType;
    /**
     * @remarks
     * Represents a lime-colored block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly limeGlazedTerracotta: BlockType;
    static readonly limeWool: BlockType;
    /**
     * @remarks
     * Represents a lit blast furnace within Minecraft.
     *
     */
    static readonly litBlastFurnace: BlockType;
    /**
     * @remarks
     * Represents lit deepslate redstone ore within Minecraft.
     *
     */
    static readonly litDeepslateRedstoneOre: BlockType;
    /**
     * @remarks
     * Represents a lit furnace within Minecraft.
     *
     */
    static readonly litFurnace: BlockType;
    /**
     * @remarks
     * Represents a lit pumpkin within Minecraft.
     *
     */
    static readonly litPumpkin: BlockType;
    /**
     * @remarks
     * Represents a lit redstone lamp within Minecraft.
     *
     */
    static readonly litRedstoneLamp: BlockType;
    /**
     * @remarks
     * Represents lit redstone ore within Minecraft.
     *
     */
    static readonly litRedstoneOre: BlockType;
    /**
     * @remarks
     * Represents a lit smoker within Minecraft.
     *
     */
    static readonly litSmoker: BlockType;
    /**
     * @remarks
     * Represents a lodestone within Minecraft.
     *
     */
    static readonly lodestone: BlockType;
    /**
     * @remarks
     * Represents a loom within Minecraft.
     *
     */
    static readonly loom: BlockType;
    /**
     * @remarks
     * Represents a magenta candle within Minecraft.
     *
     */
    static readonly magentaCandle: BlockType;
    /**
     * @remarks
     * Represents a magenta candle cake within Minecraft.
     *
     */
    static readonly magentaCandleCake: BlockType;
    /**
     * @remarks
     * Represents a block of magenta-colored glazed terracotta
     * within Minecraft.
     *
     */
    static readonly magentaGlazedTerracotta: BlockType;
    static readonly magentaWool: BlockType;
    /**
     * @remarks
     * Represents magma within Minecraft.
     *
     */
    static readonly magma: BlockType;
    static readonly mangroveButton: BlockType;
    static readonly mangroveDoor: BlockType;
    static readonly mangroveDoubleSlab: BlockType;
    static readonly mangroveFence: BlockType;
    static readonly mangroveFenceGate: BlockType;
    static readonly mangroveHangingSign: BlockType;
    static readonly mangroveLeaves: BlockType;
    static readonly mangroveLog: BlockType;
    static readonly mangrovePlanks: BlockType;
    static readonly mangrovePressurePlate: BlockType;
    static readonly mangrovePropagule: BlockType;
    static readonly mangroveRoots: BlockType;
    static readonly mangroveSlab: BlockType;
    static readonly mangroveStairs: BlockType;
    static readonly mangroveStandingSign: BlockType;
    static readonly mangroveTrapdoor: BlockType;
    static readonly mangroveWallSign: BlockType;
    static readonly mangroveWood: BlockType;
    /**
     * @remarks
     * Represents a medium-sized bud of amethyst within Minecraft.
     *
     */
    static readonly mediumAmethystBud: BlockType;
    /**
     * @remarks
     * Represents a block of melon within Minecraft.
     *
     */
    static readonly melonBlock: BlockType;
    /**
     * @remarks
     * Represents a stem of melon within Minecraft.
     *
     */
    static readonly melonStem: BlockType;
    /**
     * @remarks
     * Represents a mob spawner within Minecraft.
     *
     */
    static readonly mobSpawner: BlockType;
    /**
     * @remarks
     * Represents a monster egg within Minecraft.
     *
     */
    static readonly monsterEgg: BlockType;
    /**
     * @remarks
     * Represents a block of moss within Minecraft.
     *
     */
    static readonly mossBlock: BlockType;
    /**
     * @remarks
     * Represents a carpet of moss within Minecraft.
     *
     */
    static readonly mossCarpet: BlockType;
    /**
     * @remarks
     * Represents a block of cobblestone with moss within
     * Minecraft.
     *
     */
    static readonly mossyCobblestone: BlockType;
    /**
     * @remarks
     * Represents a set of mossy cobblestone stairs within
     * Minecraft.
     *
     */
    static readonly mossyCobblestoneStairs: BlockType;
    /**
     * @remarks
     * Represents a set of mossy stone brick stairs within
     * Minecraft.
     *
     */
    static readonly mossyStoneBrickStairs: BlockType;
    static readonly movingBlock: BlockType;
    static readonly mud: BlockType;
    static readonly mudBrickDoubleSlab: BlockType;
    static readonly mudBricks: BlockType;
    static readonly mudBrickSlab: BlockType;
    static readonly mudBrickStairs: BlockType;
    static readonly mudBrickWall: BlockType;
    static readonly muddyMangroveRoots: BlockType;
    /**
     * @remarks
     * Represents a mycelium plant within Minecraft.
     *
     */
    static readonly mycelium: BlockType;
    /**
     * @remarks
     * Represents a nether brick block within Minecraft.
     *
     */
    static readonly netherBrick: BlockType;
    /**
     * @remarks
     * Represents a nether brick fence within Minecraft.
     *
     */
    static readonly netherBrickFence: BlockType;
    /**
     * @remarks
     * Represents a set of nether brick stairs within Minecraft.
     *
     */
    static readonly netherBrickStairs: BlockType;
    /**
     * @remarks
     * Represents a block of nether with embedded gold ore within
     * Minecraft.
     *
     */
    static readonly netherGoldOre: BlockType;
    /**
     * @remarks
     * Represents a block of netherite within Minecraft.
     *
     */
    static readonly netheriteBlock: BlockType;
    /**
     * @remarks
     * Represents a block of netherrack within Minecraft.
     *
     */
    static readonly netherrack: BlockType;
    /**
     * @remarks
     * Represents a nether rock within Minecraft.
     *
     */
    static readonly netherreactor: BlockType;
    /**
     * @remarks
     * Represents nether sprouts within Minecraft.
     *
     */
    static readonly netherSprouts: BlockType;
    /**
     * @remarks
     * Represents nether wart within Minecraft.
     *
     */
    static readonly netherWart: BlockType;
    /**
     * @remarks
     * Represents a block of nether wart within Minecraft.
     *
     */
    static readonly netherWartBlock: BlockType;
    /**
     * @remarks
     * Represents a standard set of stone stairs within Minecraft.
     *
     */
    static readonly normalStoneStairs: BlockType;
    /**
     * @remarks
     * Represents a note block within Minecraft.
     *
     */
    static readonly noteblock: BlockType;
    static readonly oakFence: BlockType;
    static readonly oakHangingSign: BlockType;
    static readonly oakLog: BlockType;
    /**
     * @remarks
     * Represents a set of oak stairs within Minecraft.
     *
     */
    static readonly oakStairs: BlockType;
    /**
     * @remarks
     * Represents an observer within Minecraft.
     *
     */
    static readonly observer: BlockType;
    /**
     * @remarks
     * Represents an obsidian block within Minecraft.
     *
     */
    static readonly obsidian: BlockType;
    static readonly ochreFroglight: BlockType;
    /**
     * @remarks
     * Represents an orange candle within Minecraft.
     *
     */
    static readonly orangeCandle: BlockType;
    /**
     * @remarks
     * Represents an orange candle cake within Minecraft.
     *
     */
    static readonly orangeCandleCake: BlockType;
    /**
     * @remarks
     * Represents a block of orange-colored glazed terracotta
     * within Minecraft.
     *
     */
    static readonly orangeGlazedTerracotta: BlockType;
    static readonly orangeWool: BlockType;
    /**
     * @remarks
     * Represents a block of oxidized copper within Minecraft.
     *
     */
    static readonly oxidizedCopper: BlockType;
    /**
     * @remarks
     * Represents a block of oxidized cut copper within Minecraft.
     *
     */
    static readonly oxidizedCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of oxidized cut copper within Minecraft.
     *
     */
    static readonly oxidizedCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of oxidized cut copper stairs within
     * Minecraft.
     *
     */
    static readonly oxidizedCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of oxidized cut copper within
     * Minecraft.
     *
     */
    static readonly oxidizedDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a block of packed ice within Minecraft.
     *
     */
    static readonly packedIce: BlockType;
    static readonly packedMud: BlockType;
    static readonly pearlescentFroglight: BlockType;
    /**
     * @remarks
     * Represents a pink candle within Minecraft.
     *
     */
    static readonly pinkCandle: BlockType;
    /**
     * @remarks
     * Represents a pink candle cake within Minecraft.
     *
     */
    static readonly pinkCandleCake: BlockType;
    /**
     * @remarks
     * Represents a pink-colored block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly pinkGlazedTerracotta: BlockType;
    static readonly pinkPetals: BlockType;
    static readonly pinkWool: BlockType;
    /**
     * @remarks
     * Represents a piston within Minecraft.
     *
     */
    static readonly piston: BlockType;
    static readonly pistonArmCollision: BlockType;
    /**
     * @remarks
     * Represents a set of planks within Minecraft.
     *
     */
    static readonly planks: BlockType;
    /**
     * @remarks
     * Represents podzol within Minecraft.
     *
     */
    static readonly podzol: BlockType;
    /**
     * @remarks
     * Represents pointed dripstone within Minecraft.
     *
     */
    static readonly pointedDripstone: BlockType;
    /**
     * @remarks
     * Represents a set of polished andesite stairs within
     * Minecraft.
     *
     */
    static readonly polishedAndesiteStairs: BlockType;
    /**
     * @remarks
     * Represents a block of polished basalt within Minecraft.
     *
     */
    static readonly polishedBasalt: BlockType;
    /**
     * @remarks
     * Represents a block of polished blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstone: BlockType;
    /**
     * @remarks
     * Represents a double slab of polished blackstone brick within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a block of polished blackstone bricks within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneBricks: BlockType;
    /**
     * @remarks
     * Represents a slab of polished blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickSlab: BlockType;
    /**
     * @remarks
     * Represents a set of polished blackstone brick stairs within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickStairs: BlockType;
    /**
     * @remarks
     * Represents a polished blackstone brick wall within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickWall: BlockType;
    /**
     * @remarks
     * Represents a polished blackstone button within Minecraft.
     *
     */
    static readonly polishedBlackstoneButton: BlockType;
    /**
     * @remarks
     * Represents a double slab of polished blackstone within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a polished blackstone pressure plate within
     * Minecraft.
     *
     */
    static readonly polishedBlackstonePressurePlate: BlockType;
    /**
     * @remarks
     * Represents a slab of polished blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstoneSlab: BlockType;
    /**
     * @remarks
     * Represents a set of polished blackstone stairs within
     * Minecraft.
     *
     */
    static readonly polishedBlackstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a polished blackstone wall within Minecraft.
     *
     */
    static readonly polishedBlackstoneWall: BlockType;
    /**
     * @remarks
     * Represents a block of polished deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslate: BlockType;
    /**
     * @remarks
     * Represents a double slab of polished deepslate within
     * Minecraft.
     *
     */
    static readonly polishedDeepslateDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a slab of polished deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslateSlab: BlockType;
    /**
     * @remarks
     * Represents a set of polished deepslate stairs within
     * Minecraft.
     *
     */
    static readonly polishedDeepslateStairs: BlockType;
    /**
     * @remarks
     * Represents a wall of polished deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslateWall: BlockType;
    /**
     * @remarks
     * Represents a block of polished diorite within Minecraft.
     *
     */
    static readonly polishedDioriteStairs: BlockType;
    /**
     * @remarks
     * Represents a set of polished granite stairs within
     * Minecraft.
     *
     */
    static readonly polishedGraniteStairs: BlockType;
    /**
     * @remarks
     * Represents a portal within Minecraft.
     *
     */
    static readonly portal: BlockType;
    /**
     * @remarks
     * Represents a set of potatoes within Minecraft.
     *
     */
    static readonly potatoes: BlockType;
    /**
     * @remarks
     * Represents a block of powder snow within Minecraft.
     *
     */
    static readonly powderSnow: BlockType;
    /**
     * @remarks
     * Represents a powered comparator within Minecraft.
     *
     */
    static readonly poweredComparator: BlockType;
    /**
     * @remarks
     * Represents a powered repeater within Minecraft.
     *
     */
    static readonly poweredRepeater: BlockType;
    /**
     * @remarks
     * Represents a block of prismarine within Minecraft.
     *
     */
    static readonly prismarine: BlockType;
    /**
     * @remarks
     * Represents a set of prismarine brick stairs within
     * Minecraft.
     *
     */
    static readonly prismarineBricksStairs: BlockType;
    /**
     * @remarks
     * Represents a set of prismarine stairs within Minecraft.
     *
     */
    static readonly prismarineStairs: BlockType;
    /**
     * @remarks
     * Represents a pumpkin within Minecraft.
     *
     */
    static readonly pumpkin: BlockType;
    /**
     * @remarks
     * Represents a pumpkin stem within Minecraft.
     *
     */
    static readonly pumpkinStem: BlockType;
    /**
     * @remarks
     * Represents a purple candle within Minecraft.
     *
     */
    static readonly purpleCandle: BlockType;
    /**
     * @remarks
     * Represents a purple colored candle cake within Minecraft.
     *
     */
    static readonly purpleCandleCake: BlockType;
    /**
     * @remarks
     * Represents a purple-colored block of glazed terracotta
     * within Minecraft.
     *
     */
    static readonly purpleGlazedTerracotta: BlockType;
    static readonly purpleWool: BlockType;
    /**
     * @remarks
     * Represents a purpur block within Minecraft.
     *
     */
    static readonly purpurBlock: BlockType;
    /**
     * @remarks
     * Represents a set of purpur stairs within Minecraft.
     *
     */
    static readonly purpurStairs: BlockType;
    /**
     * @remarks
     * Represents a block of solid quartz within Minecraft.
     *
     */
    static readonly quartzBlock: BlockType;
    /**
     * @remarks
     * Represents a block of solid quartz bricks within Minecraft.
     *
     */
    static readonly quartzBricks: BlockType;
    /**
     * @remarks
     * Represents a block with embedded quartz ore within
     * Minecraft.
     *
     */
    static readonly quartzOre: BlockType;
    /**
     * @remarks
     * Represents a set of quartz stairs within Minecraft.
     *
     */
    static readonly quartzStairs: BlockType;
    /**
     * @remarks
     * Represents a set of rails within Minecraft.
     *
     */
    static readonly rail: BlockType;
    /**
     * @remarks
     * Represents a block of raw copper within Minecraft.
     *
     */
    static readonly rawCopperBlock: BlockType;
    /**
     * @remarks
     * Represents a block of raw gold within Minecraft.
     *
     */
    static readonly rawGoldBlock: BlockType;
    /**
     * @remarks
     * Represents a block of raw iron within Minecraft.
     *
     */
    static readonly rawIronBlock: BlockType;
    /**
     * @remarks
     * Represents a red candle within Minecraft.
     *
     */
    static readonly redCandle: BlockType;
    /**
     * @remarks
     * Represents a red candle cake within Minecraft.
     *
     */
    static readonly redCandleCake: BlockType;
    /**
     * @remarks
     * Represents a red flower within Minecraft.
     *
     */
    static readonly redFlower: BlockType;
    /**
     * @remarks
     * Represents a red-colored block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly redGlazedTerracotta: BlockType;
    /**
     * @remarks
     * Represents a red mushroom within Minecraft.
     *
     */
    static readonly redMushroom: BlockType;
    /**
     * @remarks
     * Represents a block of red mushroom within Minecraft.
     *
     */
    static readonly redMushroomBlock: BlockType;
    /**
     * @remarks
     * Represents a block of red nether brick within Minecraft.
     *
     */
    static readonly redNetherBrick: BlockType;
    /**
     * @remarks
     * Represents a set of red nether brick stairs within
     * Minecraft.
     *
     */
    static readonly redNetherBrickStairs: BlockType;
    /**
     * @remarks
     * Represents a block of red sandstone within Minecraft.
     *
     */
    static readonly redSandstone: BlockType;
    /**
     * @remarks
     * Represents a set of red sandstone stairs within Minecraft.
     *
     */
    static readonly redSandstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a block of redstone within Minecraft.
     *
     */
    static readonly redstoneBlock: BlockType;
    /**
     * @remarks
     * Represents a redstone lamp within Minecraft.
     *
     */
    static readonly redstoneLamp: BlockType;
    /**
     * @remarks
     * Represents a block with embedded redstone ore within
     * Minecraft.
     *
     */
    static readonly redstoneOre: BlockType;
    /**
     * @remarks
     * Represents a redstone torch within Minecraft.
     *
     */
    static readonly redstoneTorch: BlockType;
    /**
     * @remarks
     * Represents a redstone wire within Minecraft.
     *
     */
    static readonly redstoneWire: BlockType;
    static readonly redWool: BlockType;
    /**
     * @remarks
     * Represents reeds within Minecraft.
     *
     */
    static readonly reeds: BlockType;
    static readonly reinforcedDeepslate: BlockType;
    /**
     * @remarks
     * Represents a repeating command block within Minecraft.
     *
     */
    static readonly repeatingCommandBlock: BlockType;
    /**
     * @remarks
     * Represents a reserved block within Minecraft.
     *
     */
    static readonly reserved6: BlockType;
    /**
     * @remarks
     * Represents a respawn anchor within Minecraft.
     *
     */
    static readonly respawnAnchor: BlockType;
    /**
     * @remarks
     * Represents a block of sand within Minecraft.
     *
     */
    static readonly sand: BlockType;
    /**
     * @remarks
     * Represents a block of sandstone within Minecraft.
     *
     */
    static readonly sandstone: BlockType;
    /**
     * @remarks
     * Represents a set of sandstone stairs within Minecraft.
     *
     */
    static readonly sandstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a sapling within Minecraft.
     *
     */
    static readonly sapling: BlockType;
    /**
     * @remarks
     * Represents a set of scaffolding within Minecraft.
     *
     */
    static readonly scaffolding: BlockType;
    static readonly sculk: BlockType;
    static readonly sculkCatalyst: BlockType;
    /**
     * @remarks
     * Represents a sculk sensor within Minecraft.
     *
     */
    static readonly sculkSensor: BlockType;
    static readonly sculkShrieker: BlockType;
    static readonly sculkVein: BlockType;
    /**
     * @remarks
     * Represents seagrass within Minecraft.
     *
     */
    static readonly seagrass: BlockType;
    /**
     * @remarks
     * Represents a sealantern within Minecraft.
     *
     */
    static readonly seaLantern: BlockType;
    /**
     * @remarks
     * Represents a seapickle within Minecraft.
     *
     */
    static readonly seaPickle: BlockType;
    /**
     * @remarks
     * Represents a shroom light within Minecraft.
     *
     */
    static readonly shroomlight: BlockType;
    /**
     * @remarks
     * Represents a shulker box within Minecraft.
     *
     */
    static readonly shulkerBox: BlockType;
    /**
     * @remarks
     * Represents a silver-colored block of glazed terracotta
     * within Minecraft.
     *
     */
    static readonly silverGlazedTerracotta: BlockType;
    /**
     * @remarks
     * Represents a skull within Minecraft.
     *
     */
    static readonly skull: BlockType;
    /**
     * @remarks
     * Represents slime within Minecraft.
     *
     */
    static readonly slime: BlockType;
    /**
     * @remarks
     * Represents a small bud of amethyst within Minecraft.
     *
     */
    static readonly smallAmethystBud: BlockType;
    /**
     * @remarks
     * Represents a small dripleaf block within Minecraft.
     *
     */
    static readonly smallDripleafBlock: BlockType;
    /**
     * @remarks
     * Represents a smithing table within Minecraft.
     *
     */
    static readonly smithingTable: BlockType;
    /**
     * @remarks
     * Represents a smoker within Minecraft.
     *
     */
    static readonly smoker: BlockType;
    /**
     * @remarks
     * Represents a block of smooth basalt within Minecraft.
     *
     */
    static readonly smoothBasalt: BlockType;
    /**
     * @remarks
     * Represents a set of smooth quartz stairs within Minecraft.
     *
     */
    static readonly smoothQuartzStairs: BlockType;
    /**
     * @remarks
     * Represents a set of smooth red sandstone stairs within
     * Minecraft.
     *
     */
    static readonly smoothRedSandstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a set of smooth redstone stairs within Minecraft.
     *
     */
    static readonly smoothSandstoneStairs: BlockType;
    /**
     * @remarks
     * Represents a smooth stone block within Minecraft.
     *
     */
    static readonly smoothStone: BlockType;
    /**
     * @remarks
     * Represents snow within Minecraft.
     *
     */
    static readonly snow: BlockType;
    /**
     * @remarks
     * Represents a layer of snow within Minecraft.
     *
     */
    static readonly snowLayer: BlockType;
    /**
     * @remarks
     * Represents a soul campfire within Minecraft.
     *
     */
    static readonly soulCampfire: BlockType;
    /**
     * @remarks
     * Represents soul fire within Minecraft.
     *
     */
    static readonly soulFire: BlockType;
    /**
     * @remarks
     * Represents a soul lantern within Minecraft.
     *
     */
    static readonly soulLantern: BlockType;
    /**
     * @remarks
     * Represents a block of soul sand within Minecraft.
     *
     */
    static readonly soulSand: BlockType;
    /**
     * @remarks
     * Represents soul soil within Minecraft.
     *
     */
    static readonly soulSoil: BlockType;
    /**
     * @remarks
     * Represents a soul torch within Minecraft.
     *
     */
    static readonly soulTorch: BlockType;
    /**
     * @remarks
     * Represents a sponge within Minecraft.
     *
     */
    static readonly sponge: BlockType;
    /**
     * @remarks
     * Represents a spore blossom within Minecraft.
     *
     */
    static readonly sporeBlossom: BlockType;
    /**
     * @remarks
     * Represents a spruce wood button within Minecraft.
     *
     */
    static readonly spruceButton: BlockType;
    /**
     * @remarks
     * Represents a spruce wood door within Minecraft.
     *
     */
    static readonly spruceDoor: BlockType;
    static readonly spruceFence: BlockType;
    /**
     * @remarks
     * Represents a spruce wood fence gate within Minecraft.
     *
     */
    static readonly spruceFenceGate: BlockType;
    static readonly spruceHangingSign: BlockType;
    static readonly spruceLog: BlockType;
    /**
     * @remarks
     * Represents a spruce wood pressure plate within Minecraft.
     *
     */
    static readonly sprucePressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of spruce wood stairs within Minecraft.
     *
     */
    static readonly spruceStairs: BlockType;
    /**
     * @remarks
     * Represents a spruce wood standing sign within Minecraft.
     *
     */
    static readonly spruceStandingSign: BlockType;
    /**
     * @remarks
     * Represents a spruce wood trapdoor within Minecraft.
     *
     */
    static readonly spruceTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a spruce wood wall sign within Minecraft.
     *
     */
    static readonly spruceWallSign: BlockType;
    /**
     * @remarks
     * Represents stained glass within Minecraft.
     *
     */
    static readonly stainedGlass: BlockType;
    /**
     * @remarks
     * Represents a pane of stained glass within Minecraft.
     *
     */
    static readonly stainedGlassPane: BlockType;
    /**
     * @remarks
     * Represents a block of stained hardened clay within
     * Minecraft.
     *
     */
    static readonly stainedHardenedClay: BlockType;
    /**
     * @remarks
     * Represents a standing banner within Minecraft.
     *
     */
    static readonly standingBanner: BlockType;
    /**
     * @remarks
     * Represents a standing sign within Minecraft.
     *
     */
    static readonly standingSign: BlockType;
    /**
     * @remarks
     * Represents a piston block with a sticky arm within
     * Minecraft.
     *
     */
    static readonly stickyPiston: BlockType;
    static readonly stickyPistonArmCollision: BlockType;
    /**
     * @remarks
     * Represents a block of stone within Minecraft.
     *
     */
    static readonly stone: BlockType;
    static readonly stoneBlockSlab: BlockType;
    static readonly stoneBlockSlab2: BlockType;
    static readonly stoneBlockSlab3: BlockType;
    static readonly stoneBlockSlab4: BlockType;
    /**
     * @remarks
     * Represents a block of stone brick within Minecraft.
     *
     */
    static readonly stonebrick: BlockType;
    /**
     * @remarks
     * Represents a set of stone brick stairs within Minecraft.
     *
     */
    static readonly stoneBrickStairs: BlockType;
    /**
     * @remarks
     * Represents a stone button within Minecraft.
     *
     */
    static readonly stoneButton: BlockType;
    /**
     * @remarks
     * Represents a stonecutter within Minecraft.
     *
     */
    static readonly stonecutter: BlockType;
    /**
     * @remarks
     * Represents a stonecutter block within Minecraft.
     *
     */
    static readonly stonecutterBlock: BlockType;
    /**
     * @remarks
     * Represents a stone pressure plate within Minecraft.
     *
     */
    static readonly stonePressurePlate: BlockType;
    /**
     * @remarks
     * Represents a slab of stone within Minecraft.
     *
     */
    static readonly stoneSlab: BlockType;
    /**
     * @remarks
     * Represents a variant of a slab of stone (#2) within
     * Minecraft.
     *
     */
    static readonly stoneSlab2: BlockType;
    /**
     * @remarks
     * Represents a slab of stone (variant #3) within Minecraft.
     *
     */
    static readonly stoneSlab3: BlockType;
    /**
     * @remarks
     * Represents a slab of stone (variant #4) within Minecraft.
     *
     */
    static readonly stoneSlab4: BlockType;
    /**
     * @remarks
     * Represents a set of stone stairs within Minecraft.
     *
     */
    static readonly stoneStairs: BlockType;
    /**
     * @remarks
     * Represents a stripped acacia log within Minecraft.
     *
     */
    static readonly strippedAcaciaLog: BlockType;
    static readonly strippedBambooBlock: BlockType;
    /**
     * @remarks
     * Represents a stripped birch log within Minecraft.
     *
     */
    static readonly strippedBirchLog: BlockType;
    static readonly strippedCherryLog: BlockType;
    static readonly strippedCherryWood: BlockType;
    /**
     * @remarks
     * Represents stripped crimson hyphae within Minecraft.
     *
     */
    static readonly strippedCrimsonHyphae: BlockType;
    /**
     * @remarks
     * Represents a stripped crimson stem within Minecraft.
     *
     */
    static readonly strippedCrimsonStem: BlockType;
    /**
     * @remarks
     * Represents a stripped dark oak log within Minecraft.
     *
     */
    static readonly strippedDarkOakLog: BlockType;
    /**
     * @remarks
     * Represents a stripped jungle log within Minecraft.
     *
     */
    static readonly strippedJungleLog: BlockType;
    static readonly strippedMangroveLog: BlockType;
    static readonly strippedMangroveWood: BlockType;
    /**
     * @remarks
     * Represents a stripped oak log within Minecraft.
     *
     */
    static readonly strippedOakLog: BlockType;
    /**
     * @remarks
     * Represents a stripped spruce log within Minecraft.
     *
     */
    static readonly strippedSpruceLog: BlockType;
    /**
     * @remarks
     * Represents stripped warped hyphae within Minecraft.
     *
     */
    static readonly strippedWarpedHyphae: BlockType;
    /**
     * @remarks
     * Represents stripped warped stem within Minecraft.
     *
     */
    static readonly strippedWarpedStem: BlockType;
    /**
     * @remarks
     * Represents a structure block, which provides for the saving
     * and loading of block structures, within Minecraft.
     *
     */
    static readonly structureBlock: BlockType;
    /**
     * @remarks
     * Represents a structure void within Minecraft.
     *
     */
    static readonly structureVoid: BlockType;
    static readonly suspiciousGravel: BlockType;
    static readonly suspiciousSand: BlockType;
    /**
     * @remarks
     * Represents a sweet berry bush within Minecraft.
     *
     */
    static readonly sweetBerryBush: BlockType;
    /**
     * @remarks
     * Represents tall grass within Minecraft.
     *
     */
    static readonly tallgrass: BlockType;
    /**
     * @remarks
     * Represents a target within Minecraft.
     *
     */
    static readonly target: BlockType;
    /**
     * @remarks
     * Represents tinted glass within Minecraft.
     *
     */
    static readonly tintedGlass: BlockType;
    /**
     * @remarks
     * Represents a block of TnT within Minecraft.
     *
     */
    static readonly tnt: BlockType;
    /**
     * @remarks
     * Represents a torch within Minecraft.
     *
     */
    static readonly torch: BlockType;
    static readonly torchflower: BlockType;
    static readonly torchflowerCrop: BlockType;
    /**
     * @remarks
     * Represents a trapdoor within Minecraft.
     *
     */
    static readonly trapdoor: BlockType;
    /**
     * @remarks
     * Represents a trapped chest within Minecraft.
     *
     */
    static readonly trappedChest: BlockType;
    static readonly tripWire: BlockType;
    /**
     * @remarks
     * Represents a tripwire hook within Minecraft.
     *
     */
    static readonly tripwireHook: BlockType;
    /**
     * @remarks
     * Represents a block of tuff within Minecraft.
     *
     */
    static readonly tuff: BlockType;
    /**
     * @remarks
     * Represents a turtle egg within Minecraft.
     *
     */
    static readonly turtleEgg: BlockType;
    /**
     * @remarks
     * Represents a set of twisting vines within Minecraft.
     *
     */
    static readonly twistingVines: BlockType;
    /**
     * @remarks
     * Represents an underwater torch within Minecraft.
     *
     */
    static readonly underwaterTorch: BlockType;
    /**
     * @remarks
     * Represents an undyed shulker box within Minecraft.
     *
     */
    static readonly undyedShulkerBox: BlockType;
    /**
     * @remarks
     * Represents an unknown block within Minecraft.
     *
     */
    static readonly unknown: BlockType;
    /**
     * @remarks
     * Represents an unlit redstone torch within Minecraft.
     *
     */
    static readonly unlitRedstoneTorch: BlockType;
    /**
     * @remarks
     * Represents an unpowered comparator within Minecraft.
     *
     */
    static readonly unpoweredComparator: BlockType;
    /**
     * @remarks
     * Represents an unpowered repeater within Minecraft.
     *
     */
    static readonly unpoweredRepeater: BlockType;
    static readonly verdantFroglight: BlockType;
    /**
     * @remarks
     * Represents a set of vines within Minecraft.
     *
     */
    static readonly vine: BlockType;
    /**
     * @remarks
     * Represents a wall banner within Minecraft.
     *
     */
    static readonly wallBanner: BlockType;
    /**
     * @remarks
     * Represents a wall sign within Minecraft.
     *
     */
    static readonly wallSign: BlockType;
    /**
     * @remarks
     * Represents a warped button within Minecraft.
     *
     */
    static readonly warpedButton: BlockType;
    /**
     * @remarks
     * Represents a warped door within Minecraft.
     *
     */
    static readonly warpedDoor: BlockType;
    /**
     * @remarks
     * Represents a double slab of warped within Minecraft.
     *
     */
    static readonly warpedDoubleSlab: BlockType;
    /**
     * @remarks
     * Represents a warped fence within Minecraft.
     *
     */
    static readonly warpedFence: BlockType;
    /**
     * @remarks
     * Represents a warped fence gate within Minecraft.
     *
     */
    static readonly warpedFenceGate: BlockType;
    /**
     * @remarks
     * Represents warped fungus within Minecraft.
     *
     */
    static readonly warpedFungus: BlockType;
    static readonly warpedHangingSign: BlockType;
    /**
     * @remarks
     * Represents warped hyphae within Minecraft.
     *
     */
    static readonly warpedHyphae: BlockType;
    /**
     * @remarks
     * Represents warped nylium within Minecraft.
     *
     */
    static readonly warpedNylium: BlockType;
    /**
     * @remarks
     * Represents warped planks within Minecraft.
     *
     */
    static readonly warpedPlanks: BlockType;
    /**
     * @remarks
     * Represents a warped pressure plate within Minecraft.
     *
     */
    static readonly warpedPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a set of warped roots within Minecraft.
     *
     */
    static readonly warpedRoots: BlockType;
    /**
     * @remarks
     * Represents a slab of warped material within Minecraft.
     *
     */
    static readonly warpedSlab: BlockType;
    /**
     * @remarks
     * Represents a set of warped stairs within Minecraft.
     *
     */
    static readonly warpedStairs: BlockType;
    /**
     * @remarks
     * Represents a warped standing sign within Minecraft.
     *
     */
    static readonly warpedStandingSign: BlockType;
    /**
     * @remarks
     * Represents a warped stem within Minecraft.
     *
     */
    static readonly warpedStem: BlockType;
    /**
     * @remarks
     * Represents a warped trapdoor within Minecraft.
     *
     */
    static readonly warpedTrapdoor: BlockType;
    /**
     * @remarks
     * Represents a warped wall sign within Minecraft.
     *
     */
    static readonly warpedWallSign: BlockType;
    /**
     * @remarks
     * Represents a warped wart block within Minecraft.
     *
     */
    static readonly warpedWartBlock: BlockType;
    /**
     * @remarks
     * Represents water within Minecraft.
     *
     */
    static readonly water: BlockType;
    /**
     * @remarks
     * Represents a water lily within Minecraft.
     *
     */
    static readonly waterlily: BlockType;
    /**
     * @remarks
     * Represents a block of waxed copper within Minecraft.
     *
     */
    static readonly waxedCopper: BlockType;
    /**
     * @remarks
     * Represents a block of waxed cut copper within Minecraft.
     *
     */
    static readonly waxedCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of waxed cut copper within Minecraft.
     *
     */
    static readonly waxedCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of waxed cut copper stairs within
     * Minecraft.
     *
     */
    static readonly waxedCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of waxed cut copper within
     * Minecraft.
     *
     */
    static readonly waxedDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a block of waxed exposed copper within Minecraft.
     *
     */
    static readonly waxedExposedCopper: BlockType;
    /**
     * @remarks
     * Represents a block of waxed exposed cut copper within
     * Minecraft.
     *
     */
    static readonly waxedExposedCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of waxed exposed cut copper within
     * Minecraft.
     *
     */
    static readonly waxedExposedCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of waxed exposed cut copper stairs within
     * Minecraft.
     *
     */
    static readonly waxedExposedCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of waxed exposed cut copper within
     * Minecraft.
     *
     */
    static readonly waxedExposedDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a block of waxed oxidized copper within
     * Minecraft.
     *
     */
    static readonly waxedOxidizedCopper: BlockType;
    /**
     * @remarks
     * Represents a block of waxed oxidized cut copper within
     * Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of waxed oxidized cut copper within
     * Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of waxed oxidized cut copper stairs within
     * Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of waxed oxidized cut copper within
     * Minecraft.
     *
     */
    static readonly waxedOxidizedDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a block of waxed weathered copper within
     * Minecraft.
     *
     */
    static readonly waxedWeatheredCopper: BlockType;
    /**
     * @remarks
     * Represents a block of waxed weathered cut copper within
     * Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of waxed weathered cut copper within
     * Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of waxed weathered cut copper stairs within
     * Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of waxed weathered cut copper
     * within Minecraft.
     *
     */
    static readonly waxedWeatheredDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a block of weathered copper within Minecraft.
     *
     */
    static readonly weatheredCopper: BlockType;
    /**
     * @remarks
     * Represents a block of weathered cut copper within Minecraft.
     *
     */
    static readonly weatheredCutCopper: BlockType;
    /**
     * @remarks
     * Represents a slab of weathered cut copper within Minecraft.
     *
     */
    static readonly weatheredCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a set of weathered cut copper stairs within
     * Minecraft.
     *
     */
    static readonly weatheredCutCopperStairs: BlockType;
    /**
     * @remarks
     * Represents a double slab of weathered cut copper within
     * Minecraft.
     *
     */
    static readonly weatheredDoubleCutCopperSlab: BlockType;
    /**
     * @remarks
     * Represents a web within Minecraft.
     *
     */
    static readonly web: BlockType;
    /**
     * @remarks
     * Represents a set of weeping vines within Minecraft.
     *
     */
    static readonly weepingVines: BlockType;
    /**
     * @remarks
     * Represents wheat within Minecraft.
     *
     */
    static readonly wheat: BlockType;
    /**
     * @remarks
     * Represents a white candle within Minecraft.
     *
     */
    static readonly whiteCandle: BlockType;
    /**
     * @remarks
     * Represents a white candle cake within Minecraft.
     *
     */
    static readonly whiteCandleCake: BlockType;
    /**
     * @remarks
     * Represents a block of white glazed terracotta within
     * Minecraft.
     *
     */
    static readonly whiteGlazedTerracotta: BlockType;
    static readonly whiteWool: BlockType;
    /**
     * @remarks
     * Represents a wither rose within Minecraft.
     *
     */
    static readonly witherRose: BlockType;
    /**
     * @remarks
     * Represents a block of wood within Minecraft.
     *
     */
    static readonly wood: BlockType;
    /**
     * @remarks
     * Represents a wooden button within Minecraft.
     *
     */
    static readonly woodenButton: BlockType;
    /**
     * @remarks
     * Represents a wooden door within Minecraft.
     *
     */
    static readonly woodenDoor: BlockType;
    /**
     * @remarks
     * Represents a wooden pressure plate within Minecraft.
     *
     */
    static readonly woodenPressurePlate: BlockType;
    /**
     * @remarks
     * Represents a wooden slab within Minecraft.
     *
     */
    static readonly woodenSlab: BlockType;
    /**
     * @remarks
     * Represents a yellow candle within Minecraft.
     *
     */
    static readonly yellowCandle: BlockType;
    /**
     * @remarks
     * Represents a yellow candle cake within Minecraft.
     *
     */
    static readonly yellowCandleCake: BlockType;
    /**
     * @remarks
     * Represents a yellow flower within Minecraft.
     *
     */
    static readonly yellowFlower: BlockType;
    /**
     * @remarks
     * Represents a yellow block of glazed terracotta within
     * Minecraft.
     *
     */
    static readonly yellowGlazedTerracotta: BlockType;
    static readonly yellowWool: BlockType;
    /**
     * @remarks
     * Returns a specific Minecraft block type given a type id.
     *
     * This function can't be called in read-only mode.
     *
     */
    static get(typeName: string): BlockType;
    /**
     * @remarks
     * Returns an array of all block types within Minecraft.
     *
     * This function can't be called in read-only mode.
     *
     */
    static getAllBlockTypes(): BlockType[];
}

/**
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    protected constructor();
    /**
     * @remarks
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     *
     */
    static readonly nether = 'minecraft:nether';
    /**
     * @remarks
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     *
     */
    static readonly overworld = 'minecraft:overworld';
    /**
     * @remarks
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     *
     */
    static readonly theEnd = 'minecraft:the_end';
}

/**
 * @beta
 * Returns available installed effect types within Minecraft.
 */
export class MinecraftEffectTypes {
    protected constructor();
    static readonly absorption: EffectType;
    static readonly badOmen: EffectType;
    static readonly blindness: EffectType;
    static readonly conduitPower: EffectType;
    static readonly darkness: EffectType;
    static readonly empty: EffectType;
    static readonly fatalPoison: EffectType;
    static readonly fireResistance: EffectType;
    static readonly haste: EffectType;
    static readonly healthBoost: EffectType;
    static readonly hunger: EffectType;
    static readonly instantDamage: EffectType;
    static readonly instantHealth: EffectType;
    static readonly invisibility: EffectType;
    static readonly jumpBoost: EffectType;
    static readonly levitation: EffectType;
    static readonly miningFatigue: EffectType;
    static readonly nausea: EffectType;
    static readonly nightVision: EffectType;
    static readonly poison: EffectType;
    static readonly regeneration: EffectType;
    static readonly resistance: EffectType;
    static readonly saturation: EffectType;
    static readonly slowFalling: EffectType;
    static readonly slowness: EffectType;
    static readonly speed: EffectType;
    static readonly strength: EffectType;
    static readonly villageHero: EffectType;
    static readonly waterBreathing: EffectType;
    static readonly weakness: EffectType;
    static readonly wither: EffectType;
}

/**
 * @beta
 * Describes a set of enchantment types.
 */
export class MinecraftEnchantmentTypes {
    protected constructor();
    static readonly aquaAffinity: EnchantmentType;
    static readonly baneOfArthropods: EnchantmentType;
    static readonly binding: EnchantmentType;
    static readonly blastProtection: EnchantmentType;
    static readonly channeling: EnchantmentType;
    static readonly depthStrider: EnchantmentType;
    static readonly efficiency: EnchantmentType;
    static readonly featherFalling: EnchantmentType;
    static readonly fireAspect: EnchantmentType;
    static readonly fireProtection: EnchantmentType;
    static readonly flame: EnchantmentType;
    static readonly fortune: EnchantmentType;
    static readonly frostWalker: EnchantmentType;
    static readonly impaling: EnchantmentType;
    static readonly infinity: EnchantmentType;
    static readonly knockback: EnchantmentType;
    static readonly looting: EnchantmentType;
    static readonly loyalty: EnchantmentType;
    static readonly luckOfTheSea: EnchantmentType;
    static readonly lure: EnchantmentType;
    static readonly mending: EnchantmentType;
    static readonly multishot: EnchantmentType;
    static readonly piercing: EnchantmentType;
    static readonly power: EnchantmentType;
    static readonly projectileProtection: EnchantmentType;
    static readonly protection: EnchantmentType;
    static readonly punch: EnchantmentType;
    static readonly quickCharge: EnchantmentType;
    static readonly respiration: EnchantmentType;
    static readonly riptide: EnchantmentType;
    static readonly sharpness: EnchantmentType;
    static readonly silkTouch: EnchantmentType;
    static readonly smite: EnchantmentType;
    static readonly soulSpeed: EnchantmentType;
    static readonly swiftSneak: EnchantmentType;
    static readonly thorns: EnchantmentType;
    static readonly unbreaking: EnchantmentType;
    static readonly vanishing: EnchantmentType;
}

/**
 * @beta
 */
export class MinecraftEntityTypes {
    protected constructor();
    static readonly agent: EntityType;
    static readonly allay: EntityType;
    static readonly areaEffectCloud: EntityType;
    static readonly armorStand: EntityType;
    static readonly arrow: EntityType;
    static readonly axolotl: EntityType;
    static readonly bat: EntityType;
    static readonly bee: EntityType;
    static readonly blaze: EntityType;
    static readonly boat: EntityType;
    static readonly cat: EntityType;
    static readonly caveSpider: EntityType;
    static readonly chestBoat: EntityType;
    static readonly chestMinecart: EntityType;
    static readonly chicken: EntityType;
    static readonly cod: EntityType;
    static readonly commandBlockMinecart: EntityType;
    static readonly cow: EntityType;
    static readonly creeper: EntityType;
    static readonly dolphin: EntityType;
    static readonly donkey: EntityType;
    static readonly dragonFireball: EntityType;
    static readonly drowned: EntityType;
    static readonly egg: EntityType;
    static readonly elderGuardian: EntityType;
    static readonly enderCrystal: EntityType;
    static readonly enderDragon: EntityType;
    static readonly enderman: EntityType;
    static readonly endermite: EntityType;
    static readonly enderPearl: EntityType;
    static readonly evocationIllager: EntityType;
    static readonly eyeOfEnderSignal: EntityType;
    static readonly fireball: EntityType;
    static readonly fireworksRocket: EntityType;
    static readonly fishingHook: EntityType;
    static readonly fox: EntityType;
    static readonly frog: EntityType;
    static readonly ghast: EntityType;
    static readonly glowSquid: EntityType;
    static readonly goat: EntityType;
    static readonly guardian: EntityType;
    static readonly hoglin: EntityType;
    static readonly hopperMinecart: EntityType;
    static readonly horse: EntityType;
    static readonly husk: EntityType;
    static readonly ironGolem: EntityType;
    static readonly lightningBolt: EntityType;
    static readonly lingeringPotion: EntityType;
    static readonly llama: EntityType;
    static readonly llamaSpit: EntityType;
    static readonly magmaCube: EntityType;
    static readonly minecart: EntityType;
    static readonly mooshroom: EntityType;
    static readonly mule: EntityType;
    static readonly npc: EntityType;
    static readonly ocelot: EntityType;
    static readonly panda: EntityType;
    static readonly parrot: EntityType;
    static readonly phantom: EntityType;
    static readonly pig: EntityType;
    static readonly piglin: EntityType;
    static readonly piglinBrute: EntityType;
    static readonly pillager: EntityType;
    static readonly player: EntityType;
    static readonly polarBear: EntityType;
    static readonly pufferfish: EntityType;
    static readonly rabbit: EntityType;
    static readonly ravager: EntityType;
    static readonly salmon: EntityType;
    static readonly sheep: EntityType;
    static readonly shulker: EntityType;
    static readonly shulkerBullet: EntityType;
    static readonly silverfish: EntityType;
    static readonly skeleton: EntityType;
    static readonly skeletonHorse: EntityType;
    static readonly slime: EntityType;
    static readonly smallFireball: EntityType;
    static readonly snowball: EntityType;
    static readonly snowGolem: EntityType;
    static readonly spider: EntityType;
    static readonly splashPotion: EntityType;
    static readonly squid: EntityType;
    static readonly stray: EntityType;
    static readonly strider: EntityType;
    static readonly tadpole: EntityType;
    static readonly thrownTrident: EntityType;
    static readonly tnt: EntityType;
    static readonly tntMinecart: EntityType;
    static readonly traderLlama: EntityType;
    static readonly tripodCamera: EntityType;
    static readonly tropicalfish: EntityType;
    static readonly turtle: EntityType;
    static readonly vex: EntityType;
    static readonly villager: EntityType;
    static readonly villagerV2: EntityType;
    static readonly vindicator: EntityType;
    static readonly wanderingTrader: EntityType;
    static readonly warden: EntityType;
    static readonly witch: EntityType;
    static readonly wither: EntityType;
    static readonly witherSkeleton: EntityType;
    static readonly witherSkull: EntityType;
    static readonly witherSkullDangerous: EntityType;
    static readonly wolf: EntityType;
    static readonly xpBottle: EntityType;
    static readonly xpOrb: EntityType;
    static readonly zoglin: EntityType;
    static readonly zombie: EntityType;
    static readonly zombieHorse: EntityType;
    static readonly zombiePigman: EntityType;
    static readonly zombieVillager: EntityType;
    static readonly zombieVillagerV2: EntityType;
}

/**
 * @beta
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
export class MinecraftItemTypes {
    protected constructor();
    static readonly acaciaBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia button within
     * Minecraft.
     *
     */
    static readonly acaciaButton: ItemType;
    static readonly acaciaChestBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia door within
     * Minecraft.
     *
     */
    static readonly acaciaDoor: ItemType;
    static readonly acaciaFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia fence gate
     * within Minecraft.
     *
     */
    static readonly acaciaFenceGate: ItemType;
    static readonly acaciaLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia pressure plate
     * within Minecraft.
     *
     */
    static readonly acaciaPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia sign within
     * Minecraft.
     *
     */
    static readonly acaciaSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of acacia stairs
     * within Minecraft.
     *
     */
    static readonly acaciaStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place an acacia trapdoor within
     * Minecraft.
     *
     */
    static readonly acaciaTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place an activator rail within
     * Minecraft.
     *
     */
    static readonly activatorRail: ItemType;
    static readonly allaySpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place an allow block within
     * Minecraft.
     *
     */
    static readonly allow: ItemType;
    /**
     * @remarks
     * Represents an item that can place an amethyst block within
     * Minecraft.
     *
     */
    static readonly amethystBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cluster of amethyst
     * within Minecraft.
     *
     */
    static readonly amethystCluster: ItemType;
    static readonly amethystShard: ItemType;
    /**
     * @remarks
     * Represents an item that can place ancient debris within
     * Minecraft.
     *
     */
    static readonly ancientDebris: ItemType;
    /**
     * @remarks
     * Represents an item that can place andesite stairs within
     * Minecraft.
     *
     */
    static readonly andesiteStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place an anvil within Minecraft.
     *
     */
    static readonly anvil: ItemType;
    static readonly apple: ItemType;
    static readonly armorStand: ItemType;
    static readonly arrow: ItemType;
    static readonly axolotlBucket: ItemType;
    static readonly axolotlSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place an azalea flowering plant
     * within Minecraft.
     *
     */
    static readonly azalea: ItemType;
    /**
     * @remarks
     * Represents an item that can place azalea leaves within
     * Minecraft.
     *
     */
    static readonly azaleaLeaves: ItemType;
    /**
     * @remarks
     * Represents flowered azalea leaves within Minecraft.
     *
     */
    static readonly azaleaLeavesFlowered: ItemType;
    static readonly bakedPotato: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bamboo tree within
     * Minecraft.
     *
     */
    static readonly bamboo: ItemType;
    static readonly banner: ItemType;
    static readonly bannerPattern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a barrel within Minecraft.
     *
     */
    static readonly barrel: ItemType;
    /**
     * @remarks
     * Represents an item that can place an invisible but logical
     * barrier within Minecraft.
     *
     */
    static readonly barrier: ItemType;
    /**
     * @remarks
     * Represents an item that can place a basalt block within
     * Minecraft.
     *
     */
    static readonly basalt: ItemType;
    static readonly batSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a beacon within Minecraft.
     *
     */
    static readonly beacon: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bed within Minecraft.
     *
     */
    static readonly bed: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bedrock block within
     * Minecraft.
     *
     */
    static readonly bedrock: ItemType;
    static readonly beef: ItemType;
    /**
     * @remarks
     * Represents an item that can place a beehive within
     * Minecraft.
     *
     */
    static readonly beehive: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bee nest within
     * Minecraft.
     *
     */
    static readonly beeNest: ItemType;
    static readonly beeSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a beetroot vegetable
     * within Minecraft.
     *
     */
    static readonly beetroot: ItemType;
    static readonly beetrootSeeds: ItemType;
    static readonly beetrootSoup: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bell within Minecraft.
     *
     */
    static readonly bell: ItemType;
    /**
     * @remarks
     * Represents an item that can place a big dripleaf plant
     * within Minecraft.
     *
     */
    static readonly bigDripleaf: ItemType;
    static readonly birchBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch button within
     * Minecraft.
     *
     */
    static readonly birchButton: ItemType;
    static readonly birchChestBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch door within
     * Minecraft.
     *
     */
    static readonly birchDoor: ItemType;
    static readonly birchFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch fence gate within
     * Minecraft.
     *
     */
    static readonly birchFenceGate: ItemType;
    static readonly birchLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch pressure plate
     * within Minecraft.
     *
     */
    static readonly birchPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch sign within
     * Minecraft.
     *
     */
    static readonly birchSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch stairs block
     * within Minecraft.
     *
     */
    static readonly birchStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a birch trapdoor within
     * Minecraft.
     *
     */
    static readonly birchTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a black candle within
     * Minecraft.
     *
     */
    static readonly blackCandle: ItemType;
    static readonly blackDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a black glazed terracotta
     * block within Minecraft.
     *
     */
    static readonly blackGlazedTerracotta: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blackstone block within
     * Minecraft.
     *
     */
    static readonly blackstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blackstone slab within
     * Minecraft.
     *
     */
    static readonly blackstoneSlab: ItemType;
    /**
     * @remarks
     * Represents blackstone stairs within Minecraft.
     *
     */
    static readonly blackstoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blackstone wall within
     * Minecraft.
     *
     */
    static readonly blackstoneWall: ItemType;
    static readonly blackWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blast furnace within
     * Minecraft.
     *
     */
    static readonly blastFurnace: ItemType;
    static readonly blazePowder: ItemType;
    static readonly blazeRod: ItemType;
    static readonly blazeSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blue candle within
     * Minecraft.
     *
     */
    static readonly blueCandle: ItemType;
    static readonly blueDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blue glazed terracotta
     * block within Minecraft.
     *
     */
    static readonly blueGlazedTerracotta: ItemType;
    /**
     * @remarks
     * Represents an item that can place a blue ice block within
     * Minecraft.
     *
     */
    static readonly blueIce: ItemType;
    static readonly blueWool: ItemType;
    static readonly boat: ItemType;
    static readonly bone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bone block within
     * Minecraft.
     *
     */
    static readonly boneBlock: ItemType;
    static readonly boneMeal: ItemType;
    static readonly book: ItemType;
    /**
     * @remarks
     * Represents an item that can place an unbreakable border
     * block within Minecraft.
     *
     */
    static readonly bookshelf: ItemType;
    /**
     * @remarks
     * Represents an item that can place a border block within
     * Minecraft.
     *
     */
    static readonly borderBlock: ItemType;
    static readonly bordureIndentedBannerPattern: ItemType;
    static readonly bow: ItemType;
    static readonly bowl: ItemType;
    static readonly bread: ItemType;
    /**
     * @remarks
     * Represents an item that can place a brewing stand within
     * Minecraft.
     *
     */
    static readonly brewingStand: ItemType;
    static readonly brick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of brick within
     * Minecraft.
     *
     */
    static readonly brickBlock: ItemType;
    /**
     * @remarks
     * Represents brick stairs within Minecraft.
     *
     */
    static readonly brickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a brown candle within
     * Minecraft.
     *
     */
    static readonly brownCandle: ItemType;
    static readonly brownDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a brown glazed terracotta
     * block within Minecraft.
     *
     */
    static readonly brownGlazedTerracotta: ItemType;
    /**
     * @remarks
     * Represents an item that can place a brown mushroom within
     * Minecraft.
     *
     */
    static readonly brownMushroom: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of brown mushroom
     * within Minecraft.
     *
     */
    static readonly brownMushroomBlock: ItemType;
    static readonly brownWool: ItemType;
    static readonly bucket: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of budding
     * amethyst within Minecraft.
     *
     */
    static readonly buddingAmethyst: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cactus within Minecraft.
     *
     */
    static readonly cactus: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cake within Minecraft.
     *
     */
    static readonly cake: ItemType;
    /**
     * @remarks
     * Represents an item that can place a calcite block within
     * Minecraft.
     *
     */
    static readonly calcite: ItemType;
    /**
     * @remarks
     * Represents an item that can place a campfire within
     * Minecraft.
     *
     */
    static readonly campfire: ItemType;
    /**
     * @remarks
     * Represents an item that can place a candle within Minecraft.
     *
     */
    static readonly candle: ItemType;
    /**
     * @remarks
     * Represents an item that can place a carpet within Minecraft.
     *
     */
    static readonly carpet: ItemType;
    static readonly carrot: ItemType;
    static readonly carrotOnAStick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cartography table block
     * within Minecraft.
     *
     */
    static readonly cartographyTable: ItemType;
    /**
     * @remarks
     * Represents an item that can place a carved pumpkin within
     * Minecraft.
     *
     */
    static readonly carvedPumpkin: ItemType;
    static readonly catSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cauldron within
     * Minecraft.
     *
     */
    static readonly cauldron: ItemType;
    static readonly caveSpiderSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a metallic chain within
     * Minecraft.
     *
     */
    static readonly chain: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block that gives off
     * heat but not light, within Minecraft Education Edition or
     * Bedrock Edition with Education features.
     *
     */
    static readonly chainCommandBlock: ItemType;
    static readonly chainmailBoots: ItemType;
    static readonly chainmailChestplate: ItemType;
    static readonly chainmailHelmet: ItemType;
    static readonly chainmailLeggings: ItemType;
    static readonly charcoal: ItemType;
    /**
     * @remarks
     * Represents an item that can place a chest within Minecraft.
     *
     */
    static readonly chest: ItemType;
    static readonly chestBoat: ItemType;
    static readonly chestMinecart: ItemType;
    static readonly chicken: ItemType;
    static readonly chickenSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of chiseled
     * deepslate within Minecraft.
     *
     */
    static readonly chiseledDeepslate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of chiseled nether
     * bricks within Minecraft.
     *
     */
    static readonly chiseledNetherBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of chiseled
     * polished blackstone within Minecraft.
     *
     */
    static readonly chiseledPolishedBlackstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a chorus flower within
     * Minecraft.
     *
     */
    static readonly chorusFlower: ItemType;
    static readonly chorusFruit: ItemType;
    /**
     * @remarks
     * Represents an item that can place a chorus plant within
     * Minecraft.
     *
     */
    static readonly chorusPlant: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of clay within
     * Minecraft.
     *
     */
    static readonly clay: ItemType;
    static readonly clayBall: ItemType;
    static readonly clock: ItemType;
    static readonly coal: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of solid coal
     * within Minecraft.
     *
     */
    static readonly coalBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded coal
     * ore within Minecraft.
     *
     */
    static readonly coalOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cobbled
     * deepslate within Minecraft.
     *
     */
    static readonly cobbledDeepslate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of deepslate within
     * Minecraft.
     *
     */
    static readonly cobbledDeepslateSlab: ItemType;
    /**
     * @remarks
     * Represents cobbled deepslate stairs within Minecraft.
     *
     */
    static readonly cobbledDeepslateStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cobbled deepslate wall
     * within Minecraft.
     *
     */
    static readonly cobbledDeepslateWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cobblestone
     * within Minecraft.
     *
     */
    static readonly cobblestone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wall of cobblestone
     * within Minecraft.
     *
     */
    static readonly cobblestoneWall: ItemType;
    static readonly cocoaBeans: ItemType;
    static readonly cod: ItemType;
    static readonly codBucket: ItemType;
    static readonly codSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block that can run
     * commands within Minecraft.
     *
     */
    static readonly commandBlock: ItemType;
    static readonly commandBlockMinecart: ItemType;
    static readonly comparator: ItemType;
    static readonly compass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a composter block within
     * Minecraft.
     *
     */
    static readonly composter: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of concrete powder
     * within Minecraft.
     *
     */
    static readonly concrete: ItemType;
    static readonly concretePowder: ItemType;
    /**
     * @remarks
     * Represents an item that can place a conduit block within
     * Minecraft.
     *
     */
    static readonly conduit: ItemType;
    static readonly cookedBeef: ItemType;
    static readonly cookedChicken: ItemType;
    static readonly cookedCod: ItemType;
    static readonly cookedMutton: ItemType;
    static readonly cookedPorkchop: ItemType;
    static readonly cookedRabbit: ItemType;
    static readonly cookedSalmon: ItemType;
    static readonly cookie: ItemType;
    /**
     * @remarks
     * Represents an item that can place a solid block of copper
     * within Minecraft.
     *
     */
    static readonly copperBlock: ItemType;
    static readonly copperIngot: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * copper ore within Minecraft.
     *
     */
    static readonly copperOre: ItemType;
    /**
     * @remarks
     * Represents coral within Minecraft.
     *
     */
    static readonly coral: ItemType;
    /**
     * @remarks
     * Represents an item that can place a solid block of coral
     * within Minecraft.
     *
     */
    static readonly coralBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a fan formation of coral
     * within Minecraft.
     *
     */
    static readonly coralFan: ItemType;
    /**
     * @remarks
     * Represents an item that can place a fan formation of dead
     * coral within Minecraft.
     *
     */
    static readonly coralFanDead: ItemType;
    static readonly cowSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cracked
     * deepslate bricks within Minecraft.
     *
     */
    static readonly crackedDeepslateBricks: ItemType;
    /**
     * @remarks
     * Represents tiles of cracked deepslate within Minecraft.
     *
     */
    static readonly crackedDeepslateTiles: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cracked nether
     * bricks within Minecraft.
     *
     */
    static readonly crackedNetherBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cracked and
     * polished blackstone bricks within Minecraft.
     *
     */
    static readonly crackedPolishedBlackstoneBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crafting table within
     * Minecraft.
     *
     */
    static readonly craftingTable: ItemType;
    static readonly creeperBannerPattern: ItemType;
    static readonly creeperSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson button within
     * Minecraft.
     *
     */
    static readonly crimsonButton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson door within
     * Minecraft.
     *
     */
    static readonly crimsonDoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson fence within
     * Minecraft.
     *
     */
    static readonly crimsonFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson fence gate
     * within Minecraft.
     *
     */
    static readonly crimsonFenceGate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson fungus within
     * Minecraft.
     *
     */
    static readonly crimsonFungus: ItemType;
    /**
     * @remarks
     * Represents crimson hyphae within Minecraft.
     *
     */
    static readonly crimsonHyphae: ItemType;
    /**
     * @remarks
     * Represents crimson nylium within Minecraft.
     *
     */
    static readonly crimsonNylium: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of crimson planks
     * within Minecraft.
     *
     */
    static readonly crimsonPlanks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson pressure plate
     * within Minecraft.
     *
     */
    static readonly crimsonPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of crimson roots
     * within Minecraft.
     *
     */
    static readonly crimsonRoots: ItemType;
    static readonly crimsonSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson slab within
     * Minecraft.
     *
     */
    static readonly crimsonSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of crimson stairs
     * within Minecraft.
     *
     */
    static readonly crimsonStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson stem within
     * Minecraft.
     *
     */
    static readonly crimsonStem: ItemType;
    /**
     * @remarks
     * Represents an item that can place a crimson trapdoor within
     * Minecraft.
     *
     */
    static readonly crimsonTrapdoor: ItemType;
    static readonly crossbow: ItemType;
    /**
     * @remarks
     * Represents crying obsidian within Minecraft.
     *
     */
    static readonly cryingObsidian: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cut copper block within
     * Minecraft.
     *
     */
    static readonly cutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cut copper slab within
     * Minecraft.
     *
     */
    static readonly cutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of cut copper stairs
     * within Minecraft.
     *
     */
    static readonly cutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a cyan-colored candle
     * within Minecraft.
     *
     */
    static readonly cyanCandle: ItemType;
    static readonly cyanDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cyan-colored
     * glazed terracotta within Minecraft.
     *
     */
    static readonly cyanGlazedTerracotta: ItemType;
    static readonly cyanWool: ItemType;
    static readonly darkOakBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak button within
     * Minecraft.
     *
     */
    static readonly darkOakButton: ItemType;
    static readonly darkOakChestBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak door within
     * Minecraft.
     *
     */
    static readonly darkOakDoor: ItemType;
    static readonly darkOakFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak fence gate
     * within Minecraft.
     *
     */
    static readonly darkOakFenceGate: ItemType;
    static readonly darkOakLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak pressure plate
     * within Minecraft.
     *
     */
    static readonly darkOakPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak sign within
     * Minecraft.
     *
     */
    static readonly darkOakSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of dark oak stairs
     * within Minecraft.
     *
     */
    static readonly darkOakStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dark oak trapdoor within
     * Minecraft.
     *
     */
    static readonly darkOakTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of dark prismarine
     * stairs within Minecraft.
     *
     */
    static readonly darkPrismarineStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a daylight detector within
     * Minecraft.
     *
     */
    static readonly daylightDetector: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dead bush within
     * Minecraft.
     *
     */
    static readonly deadbush: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate
     * within Minecraft.
     *
     */
    static readonly deepslate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate
     * bricks within Minecraft.
     *
     */
    static readonly deepslateBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of deepslate brick
     * within Minecraft.
     *
     */
    static readonly deepslateBrickSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of deepslate brick
     * stairs within Minecraft.
     *
     */
    static readonly deepslateBrickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a deepslate brick wall
     * within Minecraft.
     *
     */
    static readonly deepslateBrickWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded coal ore within Minecraft.
     *
     */
    static readonly deepslateCoalOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded copper ore within Minecraft.
     *
     */
    static readonly deepslateCopperOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded diamond ore within Minecraft.
     *
     */
    static readonly deepslateDiamondOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded emerald ore within Minecraft.
     *
     */
    static readonly deepslateEmeraldOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded gold ore within Minecraft.
     *
     */
    static readonly deepslateGoldOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded iron ore within Minecraft.
     *
     */
    static readonly deepslateIronOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded lapis lazuli ore within Minecraft.
     *
     */
    static readonly deepslateLapisOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of deepslate with
     * embedded redstone ore within Minecraft.
     *
     */
    static readonly deepslateRedstoneOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of deepslate tiles
     * within Minecraft.
     *
     */
    static readonly deepslateTiles: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of deepslate tiles
     * within Minecraft.
     *
     */
    static readonly deepslateTileSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of deepslate tile
     * stairs within Minecraft.
     *
     */
    static readonly deepslateTileStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wall of deepslate tile
     * within Minecraft.
     *
     */
    static readonly deepslateTileWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a logical but generally
     * invisible Deny logic block within Minecraft.
     *
     */
    static readonly deny: ItemType;
    /**
     * @remarks
     * Represents an item that can place a detector rail within
     * Minecraft.
     *
     */
    static readonly detectorRail: ItemType;
    static readonly diamond: ItemType;
    static readonly diamondAxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of diamond within
     * Minecraft.
     *
     */
    static readonly diamondBlock: ItemType;
    static readonly diamondBoots: ItemType;
    static readonly diamondChestplate: ItemType;
    static readonly diamondHelmet: ItemType;
    static readonly diamondHoe: ItemType;
    static readonly diamondHorseArmor: ItemType;
    static readonly diamondLeggings: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * diamond ore within Minecraft.
     *
     */
    static readonly diamondOre: ItemType;
    static readonly diamondPickaxe: ItemType;
    static readonly diamondShovel: ItemType;
    static readonly diamondSword: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of diorite stairs
     * within Minecraft.
     *
     */
    static readonly dioriteStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dirt within
     * Minecraft.
     *
     */
    static readonly dirt: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dirt with roots
     * within Minecraft.
     *
     */
    static readonly dirtWithRoots: ItemType;
    static readonly discFragment5: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dispenser within
     * Minecraft.
     *
     */
    static readonly dispenser: ItemType;
    static readonly dolphinSpawnEgg: ItemType;
    static readonly donkeySpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a double plant within
     * Minecraft.
     *
     */
    static readonly doublePlant: ItemType;
    static readonly dragonBreath: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dragon egg within
     * Minecraft.
     *
     */
    static readonly dragonEgg: ItemType;
    static readonly driedKelp: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dried kelp
     * within Minecraft.
     *
     */
    static readonly driedKelpBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dripstone
     * within Minecraft.
     *
     */
    static readonly dripstoneBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a dropper within
     * Minecraft.
     *
     */
    static readonly dropper: ItemType;
    static readonly drownedSpawnEgg: ItemType;
    static readonly dye: ItemType;
    static readonly echoShard: ItemType;
    static readonly egg: ItemType;
    static readonly elderGuardianSpawnEgg: ItemType;
    static readonly elytra: ItemType;
    static readonly emerald: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of emerald within
     * Minecraft.
     *
     */
    static readonly emeraldBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * emerald ore within Minecraft.
     *
     */
    static readonly emeraldOre: ItemType;
    static readonly emptyMap: ItemType;
    static readonly enchantedBook: ItemType;
    static readonly enchantedGoldenApple: ItemType;
    /**
     * @remarks
     * Represents an item that can place an enchanting table within
     * Minecraft.
     *
     */
    static readonly enchantingTable: ItemType;
    /**
     * @remarks
     * Represents an item that can place an end bricks block within
     * Minecraft.
     *
     */
    static readonly endBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of end brick stairs
     * within Minecraft.
     *
     */
    static readonly endBrickStairs: ItemType;
    static readonly endCrystal: ItemType;
    /**
     * @remarks
     * Represents an item that can place an ender chest within
     * Minecraft.
     *
     */
    static readonly enderChest: ItemType;
    static readonly enderDragonSpawnEgg: ItemType;
    static readonly enderEye: ItemType;
    static readonly endermanSpawnEgg: ItemType;
    static readonly endermiteSpawnEgg: ItemType;
    static readonly enderPearl: ItemType;
    /**
     * @remarks
     * Represents an item that can place an end portal frame within
     * Minecraft.
     *
     */
    static readonly endPortalFrame: ItemType;
    /**
     * @remarks
     * Represents an item that can place an end rod within
     * Minecraft.
     *
     */
    static readonly endRod: ItemType;
    /**
     * @remarks
     * Represents an item that can place an end stone block within
     * Minecraft.
     *
     */
    static readonly endStone: ItemType;
    static readonly evokerSpawnEgg: ItemType;
    static readonly experienceBottle: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of exposed copper
     * within Minecraft.
     *
     */
    static readonly exposedCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of exposed cut
     * copper within Minecraft.
     *
     */
    static readonly exposedCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of exposed cut
     * copper within Minecraft.
     *
     */
    static readonly exposedCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of exposed cut
     * copper stairs within Minecraft.
     *
     */
    static readonly exposedCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a farmland block within
     * Minecraft.
     *
     */
    static readonly farmland: ItemType;
    static readonly feather: ItemType;
    /**
     * @remarks
     * Represents an item that can place a fence within Minecraft.
     *
     */
    static readonly fence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a fence gate within
     * Minecraft.
     *
     */
    static readonly fenceGate: ItemType;
    static readonly fermentedSpiderEye: ItemType;
    static readonly fieldMasonedBannerPattern: ItemType;
    static readonly filledMap: ItemType;
    static readonly fireCharge: ItemType;
    static readonly fireworkRocket: ItemType;
    static readonly fireworkStar: ItemType;
    static readonly fishingRod: ItemType;
    /**
     * @remarks
     * Represents an item that can place a fletching table within
     * Minecraft.
     *
     */
    static readonly fletchingTable: ItemType;
    static readonly flint: ItemType;
    static readonly flintAndSteel: ItemType;
    static readonly flowerBannerPattern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a flowering azalea plant
     * within Minecraft.
     *
     */
    static readonly floweringAzalea: ItemType;
    /**
     * @remarks
     * Represents an item that can place a flower pot within
     * Minecraft.
     *
     */
    static readonly flowerPot: ItemType;
    static readonly foxSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a frame within Minecraft.
     *
     */
    static readonly frame: ItemType;
    static readonly frogSpawn: ItemType;
    static readonly frogSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a frosted ice block within
     * Minecraft.
     *
     */
    static readonly frostedIce: ItemType;
    /**
     * @remarks
     * Represents an item that can place a furnace within
     * Minecraft.
     *
     */
    static readonly furnace: ItemType;
    static readonly ghastSpawnEgg: ItemType;
    static readonly ghastTear: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of gilded
     * blackstone within Minecraft.
     *
     */
    static readonly gildedBlackstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a glass block within
     * Minecraft.
     *
     */
    static readonly glass: ItemType;
    static readonly glassBottle: ItemType;
    /**
     * @remarks
     * Represents an item that can place a pane of glass within
     * Minecraft.
     *
     */
    static readonly glassPane: ItemType;
    static readonly glisteringMelonSlice: ItemType;
    static readonly globeBannerPattern: ItemType;
    static readonly glowBerries: ItemType;
    /**
     * @remarks
     * Represents an item that can place a glowing frame within
     * Minecraft.
     *
     */
    static readonly glowFrame: ItemType;
    static readonly glowInkSac: ItemType;
    /**
     * @remarks
     * Represents glow lichen within Minecraft.
     *
     */
    static readonly glowLichen: ItemType;
    static readonly glowSquidSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of glowstone
     * within Minecraft.
     *
     */
    static readonly glowstone: ItemType;
    static readonly glowstoneDust: ItemType;
    static readonly goatHorn: ItemType;
    static readonly goatSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a gold block within
     * Minecraft.
     *
     */
    static readonly goldBlock: ItemType;
    static readonly goldenApple: ItemType;
    static readonly goldenAxe: ItemType;
    static readonly goldenBoots: ItemType;
    static readonly goldenCarrot: ItemType;
    static readonly goldenChestplate: ItemType;
    static readonly goldenHelmet: ItemType;
    static readonly goldenHoe: ItemType;
    static readonly goldenHorseArmor: ItemType;
    static readonly goldenLeggings: ItemType;
    static readonly goldenPickaxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a golden rail element
     * within Minecraft.
     *
     */
    static readonly goldenRail: ItemType;
    static readonly goldenShovel: ItemType;
    static readonly goldenSword: ItemType;
    static readonly goldIngot: ItemType;
    static readonly goldNugget: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded gold
     * ore within Minecraft.
     *
     */
    static readonly goldOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of granite stairs
     * within Minecraft.
     *
     */
    static readonly graniteStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dirt and grass
     * within Minecraft.
     *
     */
    static readonly grass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of dirt and grass
     * with a path within Minecraft.
     *
     */
    static readonly grassPath: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of gravel within
     * Minecraft.
     *
     */
    static readonly gravel: ItemType;
    /**
     * @remarks
     * Represents an item that can place a gray-colored candle
     * within Minecraft.
     *
     */
    static readonly grayCandle: ItemType;
    static readonly grayDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a gray-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly grayGlazedTerracotta: ItemType;
    static readonly grayWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a green-colored candle
     * within Minecraft.
     *
     */
    static readonly greenCandle: ItemType;
    static readonly greenDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a green block of glazed
     * terracotta within Minecraft.
     *
     */
    static readonly greenGlazedTerracotta: ItemType;
    static readonly greenWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a grindstone within
     * Minecraft.
     *
     */
    static readonly grindstone: ItemType;
    static readonly guardianSpawnEgg: ItemType;
    static readonly gunpowder: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of hanging roots
     * within Minecraft.
     *
     */
    static readonly hangingRoots: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of hardened clay
     * within Minecraft.
     *
     */
    static readonly hardenedClay: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of hay within
     * Minecraft.
     *
     */
    static readonly hayBlock: ItemType;
    static readonly heartOfTheSea: ItemType;
    /**
     * @remarks
     * Represents an item that can place a heavy weighted pressure
     * plate within Minecraft.
     *
     */
    static readonly heavyWeightedPressurePlate: ItemType;
    static readonly hoglinSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of honey within
     * Minecraft.
     *
     */
    static readonly honeyBlock: ItemType;
    static readonly honeyBottle: ItemType;
    static readonly honeycomb: ItemType;
    /**
     * @remarks
     * Represents an item that can place a honeycomb block within
     * Minecraft.
     *
     */
    static readonly honeycombBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a hopper within Minecraft.
     *
     */
    static readonly hopper: ItemType;
    static readonly hopperMinecart: ItemType;
    static readonly horseSpawnEgg: ItemType;
    static readonly huskSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of ice within
     * Minecraft.
     *
     */
    static readonly ice: ItemType;
    /**
     * @remarks
     * Represents an item that can place an infested block of
     * deepslate within Minecraft.
     *
     */
    static readonly infestedDeepslate: ItemType;
    static readonly inkSac: ItemType;
    static readonly ironAxe: ItemType;
    /**
     * @remarks
     * Represents iron bars within Minecraft.
     *
     */
    static readonly ironBars: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of iron within
     * Minecraft.
     *
     */
    static readonly ironBlock: ItemType;
    static readonly ironBoots: ItemType;
    static readonly ironChestplate: ItemType;
    /**
     * @remarks
     * Represents an item that can place an iron door within
     * Minecraft.
     *
     */
    static readonly ironDoor: ItemType;
    static readonly ironGolemSpawnEgg: ItemType;
    static readonly ironHelmet: ItemType;
    static readonly ironHoe: ItemType;
    static readonly ironHorseArmor: ItemType;
    static readonly ironIngot: ItemType;
    static readonly ironLeggings: ItemType;
    static readonly ironNugget: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded iron
     * ore within Minecraft.
     *
     */
    static readonly ironOre: ItemType;
    static readonly ironPickaxe: ItemType;
    static readonly ironShovel: ItemType;
    static readonly ironSword: ItemType;
    /**
     * @remarks
     * Represents an item that can place an iron trapdoor within
     * Minecraft.
     *
     */
    static readonly ironTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jigsaw within Minecraft.
     *
     */
    static readonly jigsaw: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jukebox within
     * Minecraft.
     *
     */
    static readonly jukebox: ItemType;
    static readonly jungleBoat: ItemType;
    /**
     * @remarks
     * Represents jungle wood button within Minecraft.
     *
     */
    static readonly jungleButton: ItemType;
    static readonly jungleChestBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jungle wood door within
     * Minecraft.
     *
     */
    static readonly jungleDoor: ItemType;
    static readonly jungleFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jungle wood fence gate
     * within Minecraft.
     *
     */
    static readonly jungleFenceGate: ItemType;
    static readonly jungleLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jungle wood pressure
     * plate within Minecraft.
     *
     */
    static readonly junglePressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jungle sign within
     * Minecraft.
     *
     */
    static readonly jungleSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of jungle wood
     * stairs within Minecraft.
     *
     */
    static readonly jungleStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a jungle wood trapdoor
     * within Minecraft.
     *
     */
    static readonly jungleTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of kelp within
     * Minecraft.
     *
     */
    static readonly kelp: ItemType;
    /**
     * @remarks
     * Represents an item that can place a ladder within Minecraft.
     *
     */
    static readonly ladder: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lantern within
     * Minecraft.
     *
     */
    static readonly lantern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of lapis lazuli
     * within Minecraft.
     *
     */
    static readonly lapisBlock: ItemType;
    static readonly lapisLazuli: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * lapis lazuli within Minecraft.
     *
     */
    static readonly lapisOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a bud of large amethyst
     * within Minecraft.
     *
     */
    static readonly largeAmethystBud: ItemType;
    static readonly lavaBucket: ItemType;
    static readonly lead: ItemType;
    static readonly leather: ItemType;
    static readonly leatherBoots: ItemType;
    static readonly leatherChestplate: ItemType;
    static readonly leatherHelmet: ItemType;
    static readonly leatherHorseArmor: ItemType;
    static readonly leatherLeggings: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of leaves within
     * Minecraft.
     *
     */
    static readonly leaves: ItemType;
    /**
     * @remarks
     * Represents an item that can place an updated set of leaves
     * within Minecraft.
     *
     */
    static readonly leaves2: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lectern within
     * Minecraft.
     *
     */
    static readonly lectern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lever within Minecraft.
     *
     */
    static readonly lever: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of light within
     * Minecraft.
     *
     */
    static readonly lightBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a light blue candle within
     * Minecraft.
     *
     */
    static readonly lightBlueCandle: ItemType;
    static readonly lightBlueDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a light blue block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly lightBlueGlazedTerracotta: ItemType;
    static readonly lightBlueWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a light gray candle within
     * Minecraft.
     *
     */
    static readonly lightGrayCandle: ItemType;
    static readonly lightGrayDye: ItemType;
    static readonly lightGrayWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lightning rod within
     * Minecraft.
     *
     */
    static readonly lightningRod: ItemType;
    /**
     * @remarks
     * Represents an item that can place a light weighted pressure
     * plate within Minecraft.
     *
     */
    static readonly lightWeightedPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lime candle within
     * Minecraft.
     *
     */
    static readonly limeCandle: ItemType;
    static readonly limeDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lime-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly limeGlazedTerracotta: ItemType;
    static readonly limeWool: ItemType;
    static readonly lingeringPotion: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lit pumpkin within
     * Minecraft.
     *
     */
    static readonly litPumpkin: ItemType;
    static readonly llamaSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a lodestone within
     * Minecraft.
     *
     */
    static readonly lodestone: ItemType;
    static readonly lodestoneCompass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a log within Minecraft.
     *
     */
    static readonly log: ItemType;
    /**
     * @remarks
     * Represents an item that can place a more updated,
     * customizable log within Minecraft.
     *
     */
    static readonly log2: ItemType;
    /**
     * @remarks
     * Represents an item that can place a loom within Minecraft.
     *
     */
    static readonly loom: ItemType;
    /**
     * @remarks
     * Represents an item that can place a magenta candle within
     * Minecraft.
     *
     */
    static readonly magentaCandle: ItemType;
    static readonly magentaDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of magenta-colored
     * glazed terracotta within Minecraft.
     *
     */
    static readonly magentaGlazedTerracotta: ItemType;
    static readonly magentaWool: ItemType;
    /**
     * @remarks
     * Represents magma within Minecraft.
     *
     */
    static readonly magma: ItemType;
    static readonly magmaCream: ItemType;
    static readonly magmaCubeSpawnEgg: ItemType;
    static readonly mangroveBoat: ItemType;
    static readonly mangroveButton: ItemType;
    static readonly mangroveChestBoat: ItemType;
    static readonly mangroveDoor: ItemType;
    static readonly mangroveFence: ItemType;
    static readonly mangroveFenceGate: ItemType;
    static readonly mangroveLeaves: ItemType;
    static readonly mangroveLog: ItemType;
    static readonly mangrovePlanks: ItemType;
    static readonly mangrovePressurePlate: ItemType;
    static readonly mangrovePropagule: ItemType;
    static readonly mangroveRoots: ItemType;
    static readonly mangroveSign: ItemType;
    static readonly mangroveSlab: ItemType;
    static readonly mangroveStairs: ItemType;
    static readonly mangroveTrapdoor: ItemType;
    static readonly mangroveWood: ItemType;
    /**
     * @remarks
     * Represents an item that can place a medium-sized bud of
     * amethyst within Minecraft.
     *
     */
    static readonly mediumAmethystBud: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of melon within
     * Minecraft.
     *
     */
    static readonly melonBlock: ItemType;
    static readonly melonSeeds: ItemType;
    static readonly melonSlice: ItemType;
    static readonly milkBucket: ItemType;
    static readonly minecart: ItemType;
    /**
     * @remarks
     * Represents an item that can place a mob spawner within
     * Minecraft.
     *
     */
    static readonly mobSpawner: ItemType;
    static readonly mojangBannerPattern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a monster egg within
     * Minecraft.
     *
     */
    static readonly monsterEgg: ItemType;
    static readonly mooshroomSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of moss within
     * Minecraft.
     *
     */
    static readonly mossBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a carpet of moss within
     * Minecraft.
     *
     */
    static readonly mossCarpet: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of cobblestone
     * with moss within Minecraft.
     *
     */
    static readonly mossyCobblestone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of mossy cobblestone
     * stairs within Minecraft.
     *
     */
    static readonly mossyCobblestoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of mossy stone brick
     * stairs within Minecraft.
     *
     */
    static readonly mossyStoneBrickStairs: ItemType;
    static readonly mud: ItemType;
    static readonly mudBricks: ItemType;
    static readonly mudBrickSlab: ItemType;
    static readonly mudBrickStairs: ItemType;
    static readonly mudBrickWall: ItemType;
    static readonly muddyMangroveRoots: ItemType;
    static readonly muleSpawnEgg: ItemType;
    static readonly mushroomStew: ItemType;
    static readonly musicDisc11: ItemType;
    static readonly musicDisc13: ItemType;
    static readonly musicDisc5: ItemType;
    static readonly musicDiscBlocks: ItemType;
    static readonly musicDiscCat: ItemType;
    static readonly musicDiscChirp: ItemType;
    static readonly musicDiscFar: ItemType;
    static readonly musicDiscMall: ItemType;
    static readonly musicDiscMellohi: ItemType;
    static readonly musicDiscOtherside: ItemType;
    static readonly musicDiscPigstep: ItemType;
    static readonly musicDiscStal: ItemType;
    static readonly musicDiscStrad: ItemType;
    static readonly musicDiscWait: ItemType;
    static readonly musicDiscWard: ItemType;
    static readonly mutton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a mycelium plant within
     * Minecraft.
     *
     */
    static readonly mycelium: ItemType;
    static readonly nameTag: ItemType;
    static readonly nautilusShell: ItemType;
    /**
     * @remarks
     * Represents an item that can place a nether brick block
     * within Minecraft.
     *
     */
    static readonly netherbrick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a nether brick block
     * within Minecraft.
     *
     */
    static readonly netherBrick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a nether brick fence
     * within Minecraft.
     *
     */
    static readonly netherBrickFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of nether brick
     * stairs within Minecraft.
     *
     */
    static readonly netherBrickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of nether with
     * embedded gold ore within Minecraft.
     *
     */
    static readonly netherGoldOre: ItemType;
    static readonly netheriteAxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of netherite
     * within Minecraft.
     *
     */
    static readonly netheriteBlock: ItemType;
    static readonly netheriteBoots: ItemType;
    static readonly netheriteChestplate: ItemType;
    static readonly netheriteHelmet: ItemType;
    static readonly netheriteHoe: ItemType;
    static readonly netheriteIngot: ItemType;
    static readonly netheriteLeggings: ItemType;
    static readonly netheritePickaxe: ItemType;
    static readonly netheriteScrap: ItemType;
    static readonly netheriteShovel: ItemType;
    static readonly netheriteSword: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of netherrack
     * within Minecraft.
     *
     */
    static readonly netherrack: ItemType;
    /**
     * @remarks
     * Represents nether sprouts within Minecraft.
     *
     */
    static readonly netherSprouts: ItemType;
    static readonly netherStar: ItemType;
    /**
     * @remarks
     * Represents nether wart within Minecraft.
     *
     */
    static readonly netherWart: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of nether wart
     * within Minecraft.
     *
     */
    static readonly netherWartBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a standard set of stone
     * stairs within Minecraft.
     *
     */
    static readonly normalStoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a note block within
     * Minecraft.
     *
     */
    static readonly noteblock: ItemType;
    static readonly oakBoat: ItemType;
    static readonly oakChestBoat: ItemType;
    static readonly oakFence: ItemType;
    static readonly oakLog: ItemType;
    static readonly oakSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of oak stairs within
     * Minecraft.
     *
     */
    static readonly oakStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place an observer within
     * Minecraft.
     *
     */
    static readonly observer: ItemType;
    /**
     * @remarks
     * Represents an item that can place an obsidian block within
     * Minecraft.
     *
     */
    static readonly obsidian: ItemType;
    static readonly ocelotSpawnEgg: ItemType;
    static readonly ochreFroglight: ItemType;
    /**
     * @remarks
     * Represents an item that can place an orange candle within
     * Minecraft.
     *
     */
    static readonly orangeCandle: ItemType;
    static readonly orangeDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of orange-colored
     * glazed terracotta within Minecraft.
     *
     */
    static readonly orangeGlazedTerracotta: ItemType;
    static readonly orangeWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of oxidized copper
     * within Minecraft.
     *
     */
    static readonly oxidizedCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of oxidized cut
     * copper within Minecraft.
     *
     */
    static readonly oxidizedCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of oxidized cut
     * copper within Minecraft.
     *
     */
    static readonly oxidizedCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of oxidized cut
     * copper stairs within Minecraft.
     *
     */
    static readonly oxidizedCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of packed ice
     * within Minecraft.
     *
     */
    static readonly packedIce: ItemType;
    static readonly packedMud: ItemType;
    static readonly painting: ItemType;
    static readonly pandaSpawnEgg: ItemType;
    static readonly paper: ItemType;
    static readonly parrotSpawnEgg: ItemType;
    static readonly pearlescentFroglight: ItemType;
    static readonly phantomMembrane: ItemType;
    static readonly phantomSpawnEgg: ItemType;
    static readonly piglinBannerPattern: ItemType;
    static readonly piglinBruteSpawnEgg: ItemType;
    static readonly piglinSpawnEgg: ItemType;
    static readonly pigSpawnEgg: ItemType;
    static readonly pillagerSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a pink candle within
     * Minecraft.
     *
     */
    static readonly pinkCandle: ItemType;
    static readonly pinkDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a pink-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly pinkGlazedTerracotta: ItemType;
    static readonly pinkWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a piston within Minecraft.
     *
     */
    static readonly piston: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of planks within
     * Minecraft.
     *
     */
    static readonly planks: ItemType;
    /**
     * @remarks
     * Represents podzol within Minecraft.
     *
     */
    static readonly podzol: ItemType;
    /**
     * @remarks
     * Represents pointed dripstone within Minecraft.
     *
     */
    static readonly pointedDripstone: ItemType;
    static readonly poisonousPotato: ItemType;
    static readonly polarBearSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of polished andesite
     * stairs within Minecraft.
     *
     */
    static readonly polishedAndesiteStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of polished basalt
     * within Minecraft.
     *
     */
    static readonly polishedBasalt: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of polished
     * blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of polished
     * blackstone bricks within Minecraft.
     *
     */
    static readonly polishedBlackstoneBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of polished
     * blackstone brick stairs within Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a polished blackstone
     * brick wall within Minecraft.
     *
     */
    static readonly polishedBlackstoneBrickWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a polished blackstone
     * button within Minecraft.
     *
     */
    static readonly polishedBlackstoneButton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a polished blackstone
     * pressure plate within Minecraft.
     *
     */
    static readonly polishedBlackstonePressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     *
     */
    static readonly polishedBlackstoneSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of polished
     * blackstone stairs within Minecraft.
     *
     */
    static readonly polishedBlackstoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a polished blackstone wall
     * within Minecraft.
     *
     */
    static readonly polishedBlackstoneWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of polished
     * deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of polished
     * deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslateSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of polished
     * deepslate stairs within Minecraft.
     *
     */
    static readonly polishedDeepslateStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wall of polished
     * deepslate within Minecraft.
     *
     */
    static readonly polishedDeepslateWall: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of polished
     * diorite within Minecraft.
     *
     */
    static readonly polishedDioriteStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of polished granite
     * stairs within Minecraft.
     *
     */
    static readonly polishedGraniteStairs: ItemType;
    static readonly poppedChorusFruit: ItemType;
    static readonly porkchop: ItemType;
    static readonly potato: ItemType;
    static readonly potion: ItemType;
    static readonly powderSnowBucket: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of prismarine
     * within Minecraft.
     *
     */
    static readonly prismarine: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of prismarine brick
     * stairs within Minecraft.
     *
     */
    static readonly prismarineBricksStairs: ItemType;
    static readonly prismarineCrystals: ItemType;
    static readonly prismarineShard: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of prismarine stairs
     * within Minecraft.
     *
     */
    static readonly prismarineStairs: ItemType;
    static readonly pufferfish: ItemType;
    static readonly pufferfishBucket: ItemType;
    static readonly pufferfishSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a pumpkin within
     * Minecraft.
     *
     */
    static readonly pumpkin: ItemType;
    static readonly pumpkinPie: ItemType;
    static readonly pumpkinSeeds: ItemType;
    /**
     * @remarks
     * Represents an item that can place a purple candle within
     * Minecraft.
     *
     */
    static readonly purpleCandle: ItemType;
    static readonly purpleDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a purple-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly purpleGlazedTerracotta: ItemType;
    static readonly purpleWool: ItemType;
    /**
     * @remarks
     * Represents an item that can place a purpur block within
     * Minecraft.
     *
     */
    static readonly purpurBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of purpur stairs
     * within Minecraft.
     *
     */
    static readonly purpurStairs: ItemType;
    static readonly quartz: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of solid quartz
     * within Minecraft.
     *
     */
    static readonly quartzBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of solid quartz
     * bricks within Minecraft.
     *
     */
    static readonly quartzBricks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * quartz ore within Minecraft.
     *
     */
    static readonly quartzOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of quartz stairs
     * within Minecraft.
     *
     */
    static readonly quartzStairs: ItemType;
    static readonly rabbit: ItemType;
    static readonly rabbitFoot: ItemType;
    static readonly rabbitHide: ItemType;
    static readonly rabbitSpawnEgg: ItemType;
    static readonly rabbitStew: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of rails within
     * Minecraft.
     *
     */
    static readonly rail: ItemType;
    static readonly ravagerSpawnEgg: ItemType;
    static readonly rawCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of raw copper
     * within Minecraft.
     *
     */
    static readonly rawCopperBlock: ItemType;
    static readonly rawGold: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of raw gold within
     * Minecraft.
     *
     */
    static readonly rawGoldBlock: ItemType;
    static readonly rawIron: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of raw iron within
     * Minecraft.
     *
     */
    static readonly rawIronBlock: ItemType;
    static readonly recoveryCompass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a red candle within
     * Minecraft.
     *
     */
    static readonly redCandle: ItemType;
    static readonly redDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a red flower within
     * Minecraft.
     *
     */
    static readonly redFlower: ItemType;
    /**
     * @remarks
     * Represents an item that can place a red-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly redGlazedTerracotta: ItemType;
    /**
     * @remarks
     * Represents an item that can place a red mushroom within
     * Minecraft.
     *
     */
    static readonly redMushroom: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of red mushroom
     * within Minecraft.
     *
     */
    static readonly redMushroomBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of red nether
     * brick within Minecraft.
     *
     */
    static readonly redNetherBrick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of red nether brick
     * stairs within Minecraft.
     *
     */
    static readonly redNetherBrickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of red sandstone
     * within Minecraft.
     *
     */
    static readonly redSandstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of red sandstone
     * stairs within Minecraft.
     *
     */
    static readonly redSandstoneStairs: ItemType;
    static readonly redstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of redstone within
     * Minecraft.
     *
     */
    static readonly redstoneBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a redstone lamp within
     * Minecraft.
     *
     */
    static readonly redstoneLamp: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block with embedded
     * redstone ore within Minecraft.
     *
     */
    static readonly redstoneOre: ItemType;
    /**
     * @remarks
     * Represents an item that can place a redstone torch within
     * Minecraft.
     *
     */
    static readonly redstoneTorch: ItemType;
    static readonly redWool: ItemType;
    static readonly reinforcedDeepslate: ItemType;
    static readonly repeater: ItemType;
    /**
     * @remarks
     * Represents an item that can place a repeating command block
     * within Minecraft.
     *
     */
    static readonly repeatingCommandBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a respawn anchor within
     * Minecraft.
     *
     */
    static readonly respawnAnchor: ItemType;
    static readonly rottenFlesh: ItemType;
    static readonly saddle: ItemType;
    static readonly salmon: ItemType;
    static readonly salmonBucket: ItemType;
    static readonly salmonSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of sand within
     * Minecraft.
     *
     */
    static readonly sand: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of sandstone
     * within Minecraft.
     *
     */
    static readonly sandstone: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of sandstone stairs
     * within Minecraft.
     *
     */
    static readonly sandstoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a sapling within
     * Minecraft.
     *
     */
    static readonly sapling: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of scaffolding
     * within Minecraft.
     *
     */
    static readonly scaffolding: ItemType;
    static readonly sculk: ItemType;
    static readonly sculkCatalyst: ItemType;
    /**
     * @remarks
     * Represents an item that can place a sculk sensor within
     * Minecraft.
     *
     */
    static readonly sculkSensor: ItemType;
    static readonly sculkShrieker: ItemType;
    static readonly sculkVein: ItemType;
    static readonly scute: ItemType;
    /**
     * @remarks
     * Represents seagrass within Minecraft.
     *
     */
    static readonly seagrass: ItemType;
    static readonly seaLantern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a seapickle within
     * Minecraft.
     *
     */
    static readonly seaPickle: ItemType;
    static readonly shears: ItemType;
    static readonly sheepSpawnEgg: ItemType;
    static readonly shield: ItemType;
    /**
     * @remarks
     * Represents an item that can place a shroom light within
     * Minecraft.
     *
     */
    static readonly shroomlight: ItemType;
    /**
     * @remarks
     * Represents an item that can place a shulker box within
     * Minecraft.
     *
     */
    static readonly shulkerBox: ItemType;
    static readonly shulkerShell: ItemType;
    static readonly shulkerSpawnEgg: ItemType;
    static readonly silverfishSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a silver-colored block of
     * glazed terracotta within Minecraft.
     *
     */
    static readonly silverGlazedTerracotta: ItemType;
    static readonly skeletonHorseSpawnEgg: ItemType;
    static readonly skeletonSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a skull within Minecraft.
     *
     */
    static readonly skull: ItemType;
    static readonly skullBannerPattern: ItemType;
    /**
     * @remarks
     * Represents slime within Minecraft.
     *
     */
    static readonly slime: ItemType;
    static readonly slimeBall: ItemType;
    static readonly slimeSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a small bud of amethyst
     * within Minecraft.
     *
     */
    static readonly smallAmethystBud: ItemType;
    /**
     * @remarks
     * Represents an item that can place a small dripleaf block
     * within Minecraft.
     *
     */
    static readonly smallDripleafBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a smithing table within
     * Minecraft.
     *
     */
    static readonly smithingTable: ItemType;
    /**
     * @remarks
     * Represents an item that can place a smoker within Minecraft.
     *
     */
    static readonly smoker: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of smooth basalt
     * within Minecraft.
     *
     */
    static readonly smoothBasalt: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of smooth quartz
     * stairs within Minecraft.
     *
     */
    static readonly smoothQuartzStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of smooth red
     * sandstone stairs within Minecraft.
     *
     */
    static readonly smoothRedSandstoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of smooth redstone
     * stairs within Minecraft.
     *
     */
    static readonly smoothSandstoneStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a smooth stone block
     * within Minecraft.
     *
     */
    static readonly smoothStone: ItemType;
    /**
     * @remarks
     * Represents snow within Minecraft.
     *
     */
    static readonly snow: ItemType;
    static readonly snowball: ItemType;
    static readonly snowGolemSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a layer of snow within
     * Minecraft.
     *
     */
    static readonly snowLayer: ItemType;
    /**
     * @remarks
     * Represents an item that can place a soul campfire within
     * Minecraft.
     *
     */
    static readonly soulCampfire: ItemType;
    /**
     * @remarks
     * Represents an item that can place a soul lantern within
     * Minecraft.
     *
     */
    static readonly soulLantern: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of soul sand
     * within Minecraft.
     *
     */
    static readonly soulSand: ItemType;
    /**
     * @remarks
     * Represents soul soil within Minecraft.
     *
     */
    static readonly soulSoil: ItemType;
    /**
     * @remarks
     * Represents an item that can place a soul torch within
     * Minecraft.
     *
     */
    static readonly soulTorch: ItemType;
    static readonly spawnEgg: ItemType;
    static readonly spiderEye: ItemType;
    static readonly spiderSpawnEgg: ItemType;
    static readonly splashPotion: ItemType;
    /**
     * @remarks
     * Represents an item that can place a sponge within Minecraft.
     *
     */
    static readonly sponge: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spore blossom within
     * Minecraft.
     *
     */
    static readonly sporeBlossom: ItemType;
    static readonly spruceBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce wood button
     * within Minecraft.
     *
     */
    static readonly spruceButton: ItemType;
    static readonly spruceChestBoat: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce wood door within
     * Minecraft.
     *
     */
    static readonly spruceDoor: ItemType;
    static readonly spruceFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce wood fence gate
     * within Minecraft.
     *
     */
    static readonly spruceFenceGate: ItemType;
    static readonly spruceLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce wood pressure
     * plate within Minecraft.
     *
     */
    static readonly sprucePressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce sign within
     * Minecraft.
     *
     */
    static readonly spruceSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of spruce wood
     * stairs within Minecraft.
     *
     */
    static readonly spruceStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a spruce wood trapdoor
     * within Minecraft.
     *
     */
    static readonly spruceTrapdoor: ItemType;
    static readonly spyglass: ItemType;
    static readonly squidSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents stained glass within Minecraft.
     *
     */
    static readonly stainedGlass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a pane of stained glass
     * within Minecraft.
     *
     */
    static readonly stainedGlassPane: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of stained
     * hardened clay within Minecraft.
     *
     */
    static readonly stainedHardenedClay: ItemType;
    static readonly stick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a piston block with a
     * sticky arm within Minecraft.
     *
     */
    static readonly stickyPiston: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of stone within
     * Minecraft.
     *
     */
    static readonly stone: ItemType;
    static readonly stoneAxe: ItemType;
    static readonly stoneBlockSlab: ItemType;
    static readonly stoneBlockSlab2: ItemType;
    static readonly stoneBlockSlab3: ItemType;
    static readonly stoneBlockSlab4: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of stone brick
     * within Minecraft.
     *
     */
    static readonly stonebrick: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of stone brick
     * stairs within Minecraft.
     *
     */
    static readonly stoneBrickStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stone button within
     * Minecraft.
     *
     */
    static readonly stoneButton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stonecutter block within
     * Minecraft.
     *
     */
    static readonly stonecutterBlock: ItemType;
    static readonly stoneHoe: ItemType;
    static readonly stonePickaxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stone pressure plate
     * within Minecraft.
     *
     */
    static readonly stonePressurePlate: ItemType;
    static readonly stoneShovel: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of stone stairs
     * within Minecraft.
     *
     */
    static readonly stoneStairs: ItemType;
    static readonly stoneSword: ItemType;
    static readonly straySpawnEgg: ItemType;
    static readonly striderSpawnEgg: ItemType;
    static readonly 'string': ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped acacia log
     * within Minecraft.
     *
     */
    static readonly strippedAcaciaLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped birch log
     * within Minecraft.
     *
     */
    static readonly strippedBirchLog: ItemType;
    /**
     * @remarks
     * Represents stripped crimson hyphae within Minecraft.
     *
     */
    static readonly strippedCrimsonHyphae: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped crimson stem
     * within Minecraft.
     *
     */
    static readonly strippedCrimsonStem: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped dark oak log
     * within Minecraft.
     *
     */
    static readonly strippedDarkOakLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped jungle log
     * within Minecraft.
     *
     */
    static readonly strippedJungleLog: ItemType;
    static readonly strippedMangroveLog: ItemType;
    static readonly strippedMangroveWood: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped oak log within
     * Minecraft.
     *
     */
    static readonly strippedOakLog: ItemType;
    /**
     * @remarks
     * Represents an item that can place a stripped spruce log
     * within Minecraft.
     *
     */
    static readonly strippedSpruceLog: ItemType;
    /**
     * @remarks
     * Represents stripped warped hyphae within Minecraft.
     *
     */
    static readonly strippedWarpedHyphae: ItemType;
    /**
     * @remarks
     * Represents stripped warped stem within Minecraft.
     *
     */
    static readonly strippedWarpedStem: ItemType;
    /**
     * @remarks
     * Represents an item that can place a structure block, which
     * provides for the saving and loading of block structures,
     * within Minecraft.
     *
     */
    static readonly structureBlock: ItemType;
    /**
     * @remarks
     * Represents an item that can place a structure void within
     * Minecraft.
     *
     */
    static readonly structureVoid: ItemType;
    static readonly sugar: ItemType;
    static readonly sugarCane: ItemType;
    static readonly suspiciousStew: ItemType;
    static readonly sweetBerries: ItemType;
    static readonly tadpoleBucket: ItemType;
    static readonly tadpoleSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents tall grass within Minecraft.
     *
     */
    static readonly tallgrass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a target within Minecraft.
     *
     */
    static readonly target: ItemType;
    /**
     * @remarks
     * Represents tinted glass within Minecraft.
     *
     */
    static readonly tintedGlass: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of TnT within
     * Minecraft.
     *
     */
    static readonly tnt: ItemType;
    static readonly tntMinecart: ItemType;
    /**
     * @remarks
     * Represents an item that can place a torch within Minecraft.
     *
     */
    static readonly torch: ItemType;
    static readonly totemOfUndying: ItemType;
    static readonly traderLlamaSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a trapdoor within
     * Minecraft.
     *
     */
    static readonly trapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a trapped chest within
     * Minecraft.
     *
     */
    static readonly trappedChest: ItemType;
    static readonly trident: ItemType;
    /**
     * @remarks
     * Represents an item that can place a tripwire hook within
     * Minecraft.
     *
     */
    static readonly tripwireHook: ItemType;
    static readonly tropicalFish: ItemType;
    static readonly tropicalFishBucket: ItemType;
    static readonly tropicalFishSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of tuff within
     * Minecraft.
     *
     */
    static readonly tuff: ItemType;
    /**
     * @remarks
     * Represents an item that can place a turtle egg within
     * Minecraft.
     *
     */
    static readonly turtleEgg: ItemType;
    static readonly turtleHelmet: ItemType;
    static readonly turtleSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of twisting vines
     * within Minecraft.
     *
     */
    static readonly twistingVines: ItemType;
    /**
     * @remarks
     * Represents an item that can place an undyed shulker box
     * within Minecraft.
     *
     */
    static readonly undyedShulkerBox: ItemType;
    static readonly verdantFroglight: ItemType;
    static readonly vexSpawnEgg: ItemType;
    static readonly villagerSpawnEgg: ItemType;
    static readonly vindicatorSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of vines within
     * Minecraft.
     *
     */
    static readonly vine: ItemType;
    static readonly wanderingTraderSpawnEgg: ItemType;
    static readonly wardenSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped button within
     * Minecraft.
     *
     */
    static readonly warpedButton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped door within
     * Minecraft.
     *
     */
    static readonly warpedDoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped fence within
     * Minecraft.
     *
     */
    static readonly warpedFence: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped fence gate within
     * Minecraft.
     *
     */
    static readonly warpedFenceGate: ItemType;
    /**
     * @remarks
     * Represents warped fungus within Minecraft.
     *
     */
    static readonly warpedFungus: ItemType;
    static readonly warpedFungusOnAStick: ItemType;
    /**
     * @remarks
     * Represents warped hyphae within Minecraft.
     *
     */
    static readonly warpedHyphae: ItemType;
    /**
     * @remarks
     * Represents warped nylium within Minecraft.
     *
     */
    static readonly warpedNylium: ItemType;
    /**
     * @remarks
     * Represents warped planks within Minecraft.
     *
     */
    static readonly warpedPlanks: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped pressure plate
     * within Minecraft.
     *
     */
    static readonly warpedPressurePlate: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of warped roots
     * within Minecraft.
     *
     */
    static readonly warpedRoots: ItemType;
    static readonly warpedSign: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of warped material
     * within Minecraft.
     *
     */
    static readonly warpedSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of warped stairs
     * within Minecraft.
     *
     */
    static readonly warpedStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped stem within
     * Minecraft.
     *
     */
    static readonly warpedStem: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped trapdoor within
     * Minecraft.
     *
     */
    static readonly warpedTrapdoor: ItemType;
    /**
     * @remarks
     * Represents an item that can place a warped wart block within
     * Minecraft.
     *
     */
    static readonly warpedWartBlock: ItemType;
    static readonly waterBucket: ItemType;
    /**
     * @remarks
     * Represents an item that can place a water lily within
     * Minecraft.
     *
     */
    static readonly waterlily: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed copper
     * within Minecraft.
     *
     */
    static readonly waxedCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed cut
     * copper within Minecraft.
     *
     */
    static readonly waxedCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of waxed cut copper
     * within Minecraft.
     *
     */
    static readonly waxedCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of waxed cut copper
     * stairs within Minecraft.
     *
     */
    static readonly waxedCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed exposed
     * copper within Minecraft.
     *
     */
    static readonly waxedExposedCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed exposed
     * cut copper within Minecraft.
     *
     */
    static readonly waxedExposedCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of waxed exposed
     * cut copper within Minecraft.
     *
     */
    static readonly waxedExposedCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of waxed exposed cut
     * copper stairs within Minecraft.
     *
     */
    static readonly waxedExposedCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed oxidized
     * copper within Minecraft.
     *
     */
    static readonly waxedOxidizedCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed oxidized
     * cut copper within Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of waxed oxidized
     * cut copper within Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of waxed oxidized
     * cut copper stairs within Minecraft.
     *
     */
    static readonly waxedOxidizedCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed weathered
     * copper within Minecraft.
     *
     */
    static readonly waxedWeatheredCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of waxed weathered
     * cut copper within Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of waxed weathered
     * cut copper within Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of waxed weathered
     * cut copper stairs within Minecraft.
     *
     */
    static readonly waxedWeatheredCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of weathered
     * copper within Minecraft.
     *
     */
    static readonly weatheredCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of weathered cut
     * copper within Minecraft.
     *
     */
    static readonly weatheredCutCopper: ItemType;
    /**
     * @remarks
     * Represents an item that can place a slab of weathered cut
     * copper within Minecraft.
     *
     */
    static readonly weatheredCutCopperSlab: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of weathered cut
     * copper stairs within Minecraft.
     *
     */
    static readonly weatheredCutCopperStairs: ItemType;
    /**
     * @remarks
     * Represents an item that can place a web within Minecraft.
     *
     */
    static readonly web: ItemType;
    /**
     * @remarks
     * Represents an item that can place a set of weeping vines
     * within Minecraft.
     *
     */
    static readonly weepingVines: ItemType;
    /**
     * @remarks
     * Represents wheat within Minecraft.
     *
     */
    static readonly wheat: ItemType;
    static readonly wheatSeeds: ItemType;
    /**
     * @remarks
     * Represents an item that can place a white candle within
     * Minecraft.
     *
     */
    static readonly whiteCandle: ItemType;
    static readonly whiteDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of white glazed
     * terracotta within Minecraft.
     *
     */
    static readonly whiteGlazedTerracotta: ItemType;
    static readonly whiteWool: ItemType;
    static readonly witchSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wither rose within
     * Minecraft.
     *
     */
    static readonly witherRose: ItemType;
    static readonly witherSkeletonSpawnEgg: ItemType;
    static readonly witherSpawnEgg: ItemType;
    static readonly wolfSpawnEgg: ItemType;
    /**
     * @remarks
     * Represents an item that can place a block of wood within
     * Minecraft.
     *
     */
    static readonly wood: ItemType;
    static readonly woodenAxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wooden button within
     * Minecraft.
     *
     */
    static readonly woodenButton: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wooden door within
     * Minecraft.
     *
     */
    static readonly woodenDoor: ItemType;
    static readonly woodenHoe: ItemType;
    static readonly woodenPickaxe: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wooden pressure plate
     * within Minecraft.
     *
     */
    static readonly woodenPressurePlate: ItemType;
    static readonly woodenShovel: ItemType;
    /**
     * @remarks
     * Represents an item that can place a wooden slab within
     * Minecraft.
     *
     */
    static readonly woodenSlab: ItemType;
    static readonly woodenSword: ItemType;
    /**
     * @remarks
     * Represents wool within Minecraft.
     *
     */
    static readonly wool: ItemType;
    static readonly writableBook: ItemType;
    /**
     * @remarks
     * Represents an item that can place a yellow candle within
     * Minecraft.
     *
     */
    static readonly yellowCandle: ItemType;
    static readonly yellowDye: ItemType;
    /**
     * @remarks
     * Represents an item that can place a yellow flower within
     * Minecraft.
     *
     */
    static readonly yellowFlower: ItemType;
    /**
     * @remarks
     * Represents an item that can place a yellow block of glazed
     * terracotta within Minecraft.
     *
     */
    static readonly yellowGlazedTerracotta: ItemType;
    static readonly yellowWool: ItemType;
    static readonly zoglinSpawnEgg: ItemType;
    static readonly zombieHorseSpawnEgg: ItemType;
    static readonly zombiePigmanSpawnEgg: ItemType;
    static readonly zombieSpawnEgg: ItemType;
    static readonly zombieVillagerSpawnEgg: ItemType;
}

/**
 * @beta
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * This function can't be called in read-only mode.
     *
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * This function can't be called in read-only mode.
     *
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
        * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
        * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
        * Vector3} provided
     *
     * This function can't be called in read-only mode.
     *
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * This function can't be called in read-only mode.
     *
     */
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}

/**
 * @beta
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
export class NavigationResult {
    protected constructor();
    /**
     * @remarks
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     *
     */
    readonly isFullPath: boolean;
    /**
     * @remarks
     * A set of block locations that comprise the navigation route.
     *
     * This function can't be called in read-only mode.
     *
     */
    getPath(): Vector3[];
}

/**
 * @beta
 */
export class PistonActivateEvent extends BlockEvent {
    protected constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

/**
 * @beta
 */
export class PistonActivateEventSignal_deprecated extends IPistonActivateEventSignal {
    protected constructor();
}

/**
 * Represents a player within the world.
 */
export class Player extends Entity {
    protected constructor();
    /**
     * @beta
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @beta
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * Manages the selected slot in the player's hotbar.
     *
     * This property can't be edited in read-only mode.
     *
     */
    selectedSlot: number;
    /**
     * @beta
     * @remarks
     * If this player has an individual spawn point set, returns
     * the dimension that their spawn point is within.
     *
     * @throws This property can throw when used.
     */
    readonly spawnDimension?: Dimension;
    /**
     * @beta
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @beta
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @beta
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @beta
     * @remarks
     *  Adds/removes level to/from the Player and returns the
     * current level of the Player.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount to add to the player.
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Clears the spawn point that has been individually set for a
     * player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearSpawn(): void;
    /**
     * @beta
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @beta
     * @remarks
     * Returns an individualized spawn position, if set, for a
     * player.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * The individual spawn position, or undefined if there is no
     * specific spawn position set for a player.
     * @throws This function can throw errors.
     */
    getSpawnPosition(): Vector3 | undefined;
    /**
     * @beta
     * @remarks
     *  Gets the total experience of the Player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @beta
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * This function can't be called in read-only mode.
     *
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Resets the level of the player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * Sends a message to the player.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     *        // Displays "Apple or Coal"
     *        let rawMessage = {
     *          translate: "accessibility.list.or.two",
     *          with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     *        };
     *        player.sendMessage(rawMessage);
     *
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     *        // Displays the player's score for objective "obj". Each player will see their own score.
     *        const rawMessage = { score: { name: "*", objective: "obj" } };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example simpleString.ts
     * ```typescript
     *        // Displays "Hello, world!"
     *        world.sendMessage("Hello, world!");
     *
     * ```
     * @example translation.ts
     * ```typescript
     *        // Displays "First or Second"
     *        const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     *        player.sendMessage(rawMessage);
     *
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /**
     * @beta
     * @remarks
     * Sets the individual spawn point of this player.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnPosition
     * Location of the spawn point.
     * @param spawnDimension
     * Dimension to place the players' individualized spawn point
     * within.
     * @returns
     * Returns undefined/void.
     * @throws This function can throw errors.
     */
    setSpawn(spawnPosition: Vector3, spawnDimension: Dimension): void;
    /**
     * @beta
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
}

/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    protected constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Player>;
}

/**
 * @beta
 */
export class PlayerJoinEvent {
    protected constructor();
    readonly playerId: string;
    readonly playerName: string;
}

/**
 * @beta
 */
export class PlayerJoinEventSignal_deprecated extends IPlayerJoinEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class PlayerLeaveEvent {
    protected constructor();
    readonly playerId: string;
    readonly playerName: string;
}

/**
 * @beta
 */
export class PlayerLeaveEventSignal_deprecated extends IPlayerLeaveEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class PlayerSpawnEvent {
    protected constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    player: Player;
}

/**
 * @beta
 */
export class PlayerSpawnEventSignal_deprecated extends IPlayerSpawnEventSignal {
    protected constructor();
}

/**
 * @beta
 */
export class ProjectileHitEvent {
    protected constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source: Entity;
    /**
     * @remarks
     * Contains additional information about the block that was hit
     * by the projectile, or undefined if the projectile did not
     * hit a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    getBlockHit(): BlockHitInformation | undefined;
    /**
     * @remarks
     * Contains additional information about a block that was hit.
     *
     * This function can't be called in read-only mode.
     *
     */
    getEntityHit(): EntityHitInformation | undefined;
}

/**
 * @beta
 */
export class ProjectileHitEventSignal_deprecated extends IProjectileHitEventSignal {
    protected constructor();
}

/**
 * @beta
 * Provides methods that should be used within the World
 * Initialize event to register dynamic properties that can be
 * used and stored within Minecraft.
 */
export class PropertyRegistry {
    protected constructor();
    /**
     * @remarks
     * Registers a dynamic property for a particular entity type
     * (e.g., a minecraft:skeleton.).
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityType: EntityType,
    ): void;
    /**
     * @remarks
     * Registers a globally available dynamic property for a world.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    protected constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns a specific objective (by id).
     *
     * This function can't be called in read-only mode.
     *
     * @param objectiveId
     * Identifier of the objective.
     * @throws This function can throw errors.
     */
    getObjective(objectiveId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions;
    /**
     * @remarks
     * Returns all defined objectives.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a score given an objective and participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param objective
     * Objective to retrieve the score for.
     * @param participant
     * Participant to retrieve the score for.
     * @returns
     * Score value.
     * @throws This function can throw errors.
     */
    getScore(objective: ScoreboardObjective, participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: string,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
    /**
     * @remarks
     * Sets the score given a participant and objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param objective
     * Objective to use for the scoreboard.
     * @param participant
     * Participant to apply the scoreboard value to.
     * @throws This function can throw errors.
     */
    setScore(objective: ScoreboardObjective, participant: ScoreboardIdentity, score: number): boolean;
}

/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    protected constructor();
    /**
     * @remarks
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEntity(): Entity;
    /**
     * @remarks
     * Gets the current score for this participant based on an
     * objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param objective
     * The objective to retrieve the score for.
     * @returns
     * Score value.
     * @throws This function can throw errors.
     */
    getScore(objective: ScoreboardObjective): number;
    /**
     * @remarks
     * Removes this participant from an objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param objective
     * The objective to remove this participant from.
     * @throws This function can throw errors.
     */
    removeFromObjective(objective: ScoreboardObjective): boolean;
    /**
     * @remarks
     * Sets a score for this participant for a particular
     * objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param objective
     * Objective to apply the score to.
     * @param score
     * Score value.
     * @throws This function can throw errors.
     */
    setScore(objective: ScoreboardObjective, score: number): boolean;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    protected constructor();
    /**
     * @remarks
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard objective.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Returns all objective participant identities.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Identifier of the participant to retrieve a score for.
     * @throws This function can throw errors.
     */
    getScore(participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: ScoreboardIdentity): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     */
    setScore(participant: ScoreboardIdentity, score: number): boolean;
}

/**
 * @beta
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    protected constructor();
    /**
     * @remarks
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}

/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    protected constructor();
    /**
     * @remarks
     * Clears the title and subtitle, if currently displayed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearTitle(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setActionBar(text: string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. You can optionally specify an additional subtitle
     * as well as fade in, stay and fade out times.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setTitle(title: string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: string): void;
}

/**
 * @beta
 */
export class ScriptEventCommandMessageEvent {
    protected constructor();
    readonly id: string;
    readonly initiator: Entity;
    readonly message: string;
    readonly sourceBlock: Block;
    readonly sourceEntity: Entity;
    readonly sourceType: MessageSourceType;
}

/**
 * @beta
 */
export class ScriptEventCommandMessageSignal_deprecated extends IScriptEventCommandMessageSignal {
    protected constructor();
}

/**
 * @beta
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    protected constructor();
    /**
     * @remarks
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * A maximum number of riders that this seat can support.
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * Physical location of this seat, relative to the entity's
     * location.
     *
     */
    readonly position: Vector3;
}

/**
 * @beta
 */
export class ServerMessageSignal_deprecated extends IServerMessageSignal {
    protected constructor();
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
    /**
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable for the
     * lifecycle of items in the Minecraft system.
     *
     */
    readonly events: SystemEvents;
    /**
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     *
     * This function can't be called in read-only mode.
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}

/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the Minecraft add-on system.
 */
export class SystemEvents {
    protected constructor();
    /**
     * @remarks
     * This event fires before a the performance watchdog
     * terminates scripting execution due to exceeding a
     * performance boundary. Depending on the configuration of the
     * runtime environment, this event can be canceled. For
     * example, on certain dedicated server environments the
     * ability to override termination events may be disabled.
     *
     */
    readonly beforeWatchdogTerminate: BeforeWatchdogTerminateEventSignal_deprecated;
    /**
     * @remarks
     * This event fires if a /scriptevent command is invoked by a
     * player, NPC, or block.
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageSignal_deprecated;
}

/**
 * @beta
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    protected constructor();
    /**
     * @remarks
     * Current tick at the time this event was fired.
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * Time since the last tick was fired.
     *
     */
    readonly deltaTime: number;
}

/**
 * @beta
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * @remarks
     * Event name of the trigger.
     *
     * This property can't be edited in read-only mode.
     *
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     *
     * This function can't be called in read-only mode.
     *
     */
    constructor(eventName: string);
}

/**
 * @beta
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * @remarks
     * X component of this vector.
     *
     * This property can't be edited in read-only mode.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     * This property can't be edited in read-only mode.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     * This property can't be edited in read-only mode.
     *
     */
    z: number;
    /**
     * @remarks
     * A constant vector that represents (0, 0, -1).
     *
     */
    static readonly back: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, -1, 0).
     *
     */
    static readonly down: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 1).
     *
     */
    static readonly forward: Vector;
    /**
     * @remarks
     * A constant vector that represents (-1, 0, 0).
     *
     */
    static readonly left: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 1, 1).
     *
     */
    static readonly one: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 0, 0).
     *
     */
    static readonly right: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 1, 0).
     *
     */
    static readonly up: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 0).
     *
     */
    static readonly zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     *
     * This function can't be called in read-only mode.
     *
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     *
     * This function can't be called in read-only mode.
     *
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     *
     * This function can't be called in read-only mode.
     *
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     *
     * This function can't be called in read-only mode.
     *
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     *
     * This function can't be called in read-only mode.
     *
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     *
     * This function can't be called in read-only mode.
     *
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     *
     * This function can't be called in read-only mode.
     *
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     *
     * This function can't be called in read-only mode.
     *
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}

/**
 * @beta
 */
export class WeatherChangeEvent {
    protected constructor();
    readonly dimension: string;
    readonly lightning: boolean;
    readonly raining: boolean;
}

/**
 * @beta
 */
export class WeatherChangeEventSignal_deprecated extends IWeatherChangeEventSignal {
    protected constructor();
}

/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    protected constructor();
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world.
     *
     */
    readonly events: Events;
    /**
     * @beta
     * @remarks
     * Returns the general global scoreboard that applies to the
     * world.
     *
     */
    readonly scoreboard: Scoreboard;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * This function can't be called in read-only mode.
     *
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Returns the absolute time since the start of the world.
     *
     * This function can't be called in read-only mode.
     *
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * Returns an array of all active players within the world.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @beta
     * @remarks
     * Returns the default spawn position within the world where
     * players are spawned if they don't have a specific spawn
     * position set.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the default spawn position.
     */
    getDefaultSpawnPosition(): Vector3;
    /**
     * @remarks
     * Returns a dimension object.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @beta
     * @remarks
     * Returns a property value.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns an entity based on the provided id.
     *
     * This function can't be called in read-only mode.
     *
     * @param id
     * The id of the entity.
     * @returns
     * The requested entity object.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * Sets the current game time of the day.
     *
     * This function can't be called in read-only mode.
     *
     */
    getTime(): number;
    /**
     * @beta
     * @remarks
     * Plays a particular music track for all players.
     *
     * This function can't be called in read-only mode.
     *
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound for all players.
     *
     * This function can't be called in read-only mode.
     *
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * This function can't be called in read-only mode.
     *
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks
     * Sends a message to all players.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     *        // Displays "Apple or Coal"
     *        let rawMessage = {
     *          translate: "accessibility.list.or.two",
     *          with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     *        };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     *        // Displays the player's score for objective "obj". Each player will see their own score.
     *        const rawMessage = { score: { name: "*", objective: "obj" } };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example simpleString.ts
     * ```typescript
     *        // Displays "Hello, world!"
     *        world.sendMessage("Hello, world!");
     *
     * ```
     * @example translation.ts
     * ```typescript
     *        // Displays "First or Second"
     *        const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     *        world.sendMessage(rawMessage);
     *
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets the default spawn location for players within the
     * world. Note that players can override this with their own
     * spawn position. Note also that the default spawn position
     * must be in the overworld dimension.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnPosition
     * Location within the overworld where a player will spawn.
     * @throws This function can throw errors.
     */
    setDefaultSpawn(spawnPosition: Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     *
     * This function can't be called in read-only mode.
     *
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Returns the current game time of the day.
     *
     * This function can't be called in read-only mode.
     *
     */
    setTime(timeOfDay: number): void;
    /**
     * @beta
     * @remarks
     * Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     *
     */
    stopMusic(): void;
}

/**
 * @beta
 */
export class WorldInitializeEvent {
    protected constructor();
    readonly propertyRegistry: PropertyRegistry;
}

/**
 * @beta
 */
export class WorldInitializeEventSignal_deprecated extends IWorldInitializeEventSignal {
    protected constructor();
}

/**
 * @beta
 * Represents a rotation structure with pitch and yaw
 * components.
 */
export class XYRotation {
    protected constructor();
    /**
     * @remarks
     * Yaw component (left-to-right) of this position.
     *
     * This property can't be edited in read-only mode.
     *
     */
    x: number;
    /**
     * @remarks
     * Pitch (up-and-down) element of this rotation.
     *
     * This property can't be edited in read-only mode.
     *
     */
    y: number;
}

/**
 * @beta
 */
export interface BlockFillOptions {
    matchingBlock?: BlockPermutation;
}

/**
 * @beta
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    faceLocationX: number;
    faceLocationY: number;
}

/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * Represents a fully customizable color within Minecraft.
 */
export interface Color {
    /**
     * @remarks
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}

/**
 * @beta
 */
export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}

/**
 * @beta
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     *
     */
    eventTypes?: string[];
}

/**
 * @beta
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * @beta
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     *
     */
    name?: string;
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
    /**
     * @beta
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: BlockAreaSize;
}

/**
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}

/**
 * @beta
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * Additional configuration options for the {@link
    * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}

/**
 * @beta
 * Additional configuration options for {@link
    * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * Relative volume level of the music.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * @remarks
     * Maximum value within a range.
     *
     */
    max: number;
    /**
     * @remarks
     * Minimum value within a range.
     *
     */
    min: number;
}

/**
 * @beta
 */
export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    stopExpression?: string;
}

export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}

export interface RawMessageScore {
    name?: string;
    objective?: string;
}

/**
 * @beta
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples
 */
export interface RawText {
    rawtext?: RawMessage[];
}

/**
 * @beta
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * @beta
 */
export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}

/**
 * @beta
 * Additional configuration options for the {@link
    * Player.playSound}/{@link World.playSound} method.
 */
export interface SoundOptions {
    /**
     * @remarks
     * Specifies a location of where to play a particular sound.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * Pitch adjustment level for the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume level of the sound.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in time for the title and subtitle, in seconds.
     *
     */
    fadeInSeconds: number;
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in seconds.
     *
     */
    fadeOutSeconds: number;
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place.
     *
     */
    staySeconds: number;
    /**
     * @remarks
     * Optional subtitle text.
     *
     */
    subtitle?: string;
}

/**
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
}

/**
 * @beta
 */
export const TicksPerDay = 24000;
/**
 * @beta
 * @remarks
 * How many times the server ticks per second of real time.
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * A class that provides system-level events and functions.
 *
 */
export const system: System;
/**
 * @remarks
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 */
export const world: World;
