/* eslint-disable  @typescript-eslint/no-unused-vars */
import * as mc from '@minecraft/server';

export function createExplosion(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const overworld = mc.world.getDimension('overworld');

    log('Creating an explosion of radius 10.');
    overworld.createExplosion(targetLocation, 10);
}

export function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const overworld = mc.world.getDimension('overworld');

    const explodeNoBlocksLoc = {
        x: Math.floor(targetLocation.x + 1),
        y: Math.floor(targetLocation.y + 2),
        z: Math.floor(targetLocation.z + 1),
    };

    log('Creating an explosion of radius 15 that does not break blocks.');
    overworld.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}

export function createFireAndWaterExplosions(
    log: (message: string, status?: number) => void,
    targetLocation: mc.Vector3,
) {
    const overworld = mc.world.getDimension('overworld');

    const explosionLoc: mc.Vector3 = {
        x: targetLocation.x + 0.5,
        y: targetLocation.y + 0.5,
        z: targetLocation.z + 0.5,
    };

    log('Creating an explosion of radius 15 that causes fire.');
    overworld.createExplosion(explosionLoc, 15, { causesFire: true });

    const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };

    log('Creating an explosion of radius 10 that can go underwater.');
    overworld.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
}

export function itemStacks(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const overworld = mc.world.getDimension('overworld');

    const oneItemLoc: mc.Vector3 = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
    const fiveItemsLoc: mc.Vector3 = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
    const diamondPickaxeLoc: mc.Vector3 = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

    const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
    const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
    const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);

    log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
    overworld.spawnItem(oneEmerald, oneItemLoc);

    log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
    overworld.spawnItem(fiveEmeralds, fiveItemsLoc);

    log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
    overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
}

export function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const overworld = mc.world.getDimension('overworld');

    const fox = overworld.spawnEntity('minecraft:fox', {
        x: targetLocation.x + 1,
        y: targetLocation.y + 2,
        z: targetLocation.z + 3,
    });
    fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
    log('Created a fox.');

    const wolf = overworld.spawnEntity('minecraft:wolf', {
        x: targetLocation.x + 4,
        y: targetLocation.y + 2,
        z: targetLocation.z + 3,
    });
    wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
    wolf.isSneaking = true;
    log('Created a sneaking wolf.', 1);
}

export function runEntityCreatedEvent(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    // register a new function that is called when a new entity is created.
    mc.world.events.entityCreate.subscribe((entityEvent: mc.EntityCreateEvent) => {
        if (entityEvent && entityEvent.entity) {
            log(`New entity of type '${entityEvent.entity}' created!`, 1);
        } else {
            log(`The entity event didn't work as expected.`, -1);
        }
    });
}

export function createOldHorse(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const overworld = mc.world.getDimension('overworld');

    log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
    overworld.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', targetLocation);
}

export function pistonEvent(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const pistonLoc: mc.Vector3 = {
        x: Math.floor(targetLocation.x) + 1,
        y: Math.floor(targetLocation.y) + 2,
        z: Math.floor(targetLocation.z) + 1,
    };

    mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
        if (pistonEvent.piston.location.equals(pistonLoc)) {
            log('Cancelling piston event');
            pistonEvent.cancel = true;
        }
    });
}

export function spawnItem(log: (message: string, status?: number) => void, targetLocation: mc.Vector3) {
    const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);

    overworld.spawnItem(featherItem, targetLocation);
    log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
}

export function testThatEntityIsFeatherItem(
    log: (message: string, status?: number) => void,
    targetLocation: mc.Vector3,
) {
    const overworld = mc.world.getDimension('overworld');

    const items = overworld.getEntities({
        location: targetLocation,
        maxDistance: 20,
    });

    for (const item of items) {
        const itemComp = item.getComponent('item') as any;

        if (itemComp) {
            if (itemComp.itemStack.id.endsWith('feather')) {
                log('Success! Found a feather', 1);
            }
        }
    }
}

export function trapTick() {
    const overworld = mc.world.getDimension('overworld');

    try {
        // Minecraft runs at 20 ticks per second
        if (ticks % 1200 === 0) {
            overworld.runCommandAsync('say Another minute passes...');
        }

        ticks++;
    } catch (e) {
        console.warn('Error: ' + e);
    }

    mc.system.run(trapTick);
}

export default class SampleManager {
    tickCount = 0;

    _availableFuncs: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Vector3) => void>;
    };

    pendingFuncs: Array<{
        name: string;
        func: (log: (message: string, status?: number) => void, location: mc.Vector3) => void;
        location: mc.Vector3;
    }> = [];

    gameplayLogger(message: string, status?: number) {
        if (status !== undefined && status > 0) {
            message = 'SUCCESS: ' + message;
        } else if (status !== undefined && status < 0) {
            message = 'FAIL: ' + message;
        }

        this.say(message);
    }
    say(message: string) {
        mc.world.getDimension('overworld').runCommand('say ' + message);
    }

    newChatMessage(chatEvent: mc.ChatEvent) {
        const message = chatEvent.message.toLowerCase();

        if (message.startsWith('howto') && chatEvent.sender) {
            const nearbyBlock = chatEvent.sender.getBlockFromViewVector();
            if (!nearbyBlock) {
                this.gameplayLogger('Please look at the block where you want me to run this.');
                return;
            }

            const nearbyBlockLoc = nearbyBlock.location;
            const nearbyLoc: mc.Vector3 = { x: nearbyBlockLoc.x, y: nearbyBlockLoc.y + 1, z: nearbyBlockLoc.z };

            const sampleId = message.substring(5).trim();

            if (sampleId.length < 2) {
                let availableFuncStr = 'Here is my list of available samples:';

                for (const sampleFuncKey in this._availableFuncs) {
                    availableFuncStr += ' ' + sampleFuncKey;
                }

                this.say(availableFuncStr);
            } else {
                for (const sampleFuncKey in this._availableFuncs) {
                    if (sampleFuncKey.toLowerCase() === sampleId) {
                        const sampleFunc = this._availableFuncs[sampleFuncKey];

                        this.runSample(sampleFuncKey + this.tickCount, sampleFunc, nearbyLoc);

                        return;
                    }
                }

                this.say(`I couldn't find the sample '${sampleId}"'`);
            }
        }
    }

    runSample(
        sampleId: string,
        snippetFunctions: Array<(log: (message: string, status?: number) => void, location: mc.Vector3) => void>,
        targetLocation: mc.Vector3,
    ) {
        for (let i = snippetFunctions.length - 1; i >= 0; i--) {
            this.pendingFuncs.push({ name: sampleId, func: snippetFunctions[i], location: targetLocation });
        }
    }

    worldTick() {
        if (this.tickCount % 10 === 0) {
            if (this.pendingFuncs.length > 0) {
                const funcSet = this.pendingFuncs.pop();

                if (funcSet) {
                    funcSet.func(this.gameplayLogger, funcSet.location);
                }
            }
        }

        this.tickCount++;
    }

    constructor() {
        this._availableFuncs = {};

        this.gameplayLogger = this.gameplayLogger.bind(this);

        mc.world.events.tick.subscribe(this.worldTick.bind(this));
        mc.world.events.chat.subscribe(this.newChatMessage.bind(this));
    }

    registerSamples(sampleSet: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Vector3) => void>;
    }) {
        for (const sampleKey in sampleSet) {
            if (sampleKey.length > 1 && sampleSet[sampleKey]) {
                this._availableFuncs[sampleKey] = sampleSet[sampleKey];
            }
        }
    }
}

const mojangMinecraftFuncs: {
    [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Vector3) => void>;
} = {
    runEntityCreatedEvent: [runEntityCreatedEvent, createOldHorse],
    createOldHorse: [createOldHorse],
    spawnItem: [spawnItem, testThatEntityIsFeatherItem],
    createNoBlockExplosion: [createExplosion],
    createFireAndWaterExplosions: [createFireAndWaterExplosions],
    createExplosion: [createExplosion],
    itemStacks: [itemStacks],
    quickFoxLazyDog: [quickFoxLazyDog],
    pistonEvent: [pistonEvent],
    trapTick: [trapTick],
};

export function register(sampleManager: SampleManager) {
    sampleManager.registerSamples(mojangMinecraftFuncs);
}
