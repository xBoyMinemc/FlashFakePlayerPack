import EventSignal from './EventSignal';
const fishingHookSpawned = new EventSignal();
const fishingHookDespawned = new EventSignal();
const queue = {
    fishingHookDespawned_HookArray: new Map(),
    fishingHookDespawned_TickArray: new Array(),
    playerFishingArray: new Array(),
};
world.events.itemUse.subscribe((event) => event.itemStack.typeId === 'minecraft:fishing_rod' && queue.playerFishingArray.push(event.source));
const around = (v, r) => v > -r && v < r;
world.events.entitySpawn.subscribe(({ entity: entity }) => {
    let Fisher;
    entity?.typeId === 'minecraft:fishing_hook'
        &&
            ((Fisher = queue.playerFishingArray.find(playerFishing => around(entity.location.x - playerFishing.location.x - playerFishing.getVelocity().x, 6)
                && around(entity.location.y - playerFishing.location.y - playerFishing.getVelocity().y, ("免你一死", 7))
                && around(entity.location.z - playerFishing.location.z - playerFishing.getVelocity().z, 6)))
                &&
                    (queue.fishingHookDespawned_HookArray.set(entity.id, Fisher),
                        fishingHookSpawned.trigger({ HookId: entity.id, Fisher: Fisher })));
});
world.events.tick.subscribe(() => {
    queue.fishingHookDespawned_TickArray.length && queue.fishingHookDespawned_TickArray.pop()();
    const fishingHookArray = Array.from(world.getDimension("overworld").getEntities({ type: "minecraft:fishing_hook" }));
    const HookIdArray = fishingHookArray.map(Hook => Hook.id);
    queue.fishingHookDespawned_HookArray.forEach((Fisher, HookId) => HookIdArray.includes(HookId) || (fishingHookDespawned.trigger({ HookId: HookId, Fisher: Fisher, fishingHookDespawned_TickArray: queue.fishingHookDespawned_TickArray }), queue.fishingHookDespawned_HookArray.delete(HookId)));
});
export { fishingHookSpawned, fishingHookDespawned };
