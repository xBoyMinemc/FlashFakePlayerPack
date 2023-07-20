import EventSignal from "./EventSignal";
const fishingHookSpawned = new EventSignal();
const fishingHookDespawned = new EventSignal();
const queue = {
    fishingHookDespawned_HookArray: new Map(),
    fishingHookDespawned_TickArray: new Array(),
    playerFishingArray: new Array(),
};
world.events.itemUse.subscribe((event) => {
    event.itemStack.typeId === "minecraft:fishing_rod"
        ? (queue.playerFishingArray.push(event.source)) : 0;
});
const around = (v, r) => v > -r && v < r;
world.events.entitySpawn.subscribe(({ entity: entity }) => {
    let Fisher;
    try {
        entity?.typeId === "minecraft:fishing_hook"
            ?
                ((Fisher = queue.playerFishingArray.find(playerFishing => around(entity.location.x - playerFishing.location.x - playerFishing.getVelocity().x, 3)
                    && around(entity.location.y - playerFishing.location.y - playerFishing.getVelocity().y, ("你问我0.08哪里来的我就杀了你", "你问我为什么在这里code shit我还是会杀了你", 3))
                    && around(entity.location.z - playerFishing.location.z - playerFishing.getVelocity().z, 3)))
                    ?
                        (queue.fishingHookDespawned_HookArray.set(entity.id, Fisher),
                            fishingHookSpawned.trigger({ HookId: entity.id, Fisher: Fisher }))
                    :
                        0)
            :
                0;
    }
    catch (error) {
    }
});
world.events.tick.subscribe((t) => {
    queue.fishingHookDespawned_TickArray.length ? queue.fishingHookDespawned_TickArray.pop()() : 0;
    const fishingHookArray = Array.from(world.getDimension("overworld").getEntities({ type: "minecraft:fishing_hook" }));
    const HookIdArray = fishingHookArray.map(Hook => Hook.id);
    queue.fishingHookDespawned_HookArray.forEach((Fisher, HookId) => HookIdArray.includes(HookId) ? 0 : (fishingHookDespawned.trigger({ HookId: HookId, Fisher: Fisher, fishingHookDespawned_TickArray: queue.fishingHookDespawned_TickArray }), queue.fishingHookDespawned_HookArray.delete(HookId)));
});
console.error(("#########"));
export { fishingHookSpawned, fishingHookDespawned };
