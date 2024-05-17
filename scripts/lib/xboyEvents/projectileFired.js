import EventSignal from "./EventSignal";
import { MolangVariableMap, system } from "@minecraft/server";
const projectileFired = new EventSignal();
const fishingHookDespawned = new EventSignal();
const queue = {
    fishingHookDespawned_HookArray: new Map(),
    fishingHookDespawned_TickArray: new Array(),
    playerFishingArray: new Array(),
};
const pos = {};
world.events.itemUse.subscribe((event) => {
    event.itemStack.typeId === "minecraft:bow"
        ? (queue.playerFishingArray.push(event.source)) : 0;
});
const around = (v, r) => v > -r && v < r;
const soso = ({ x, y, z }) => ({ x: +x.toFixed(2), y: +y.toFixed(2), z: +z.toFixed(2) });
const div = ({ x, y, z }, { x: a, y: b, z: c }) => ({ x: x - a, y: y - b, z: z - c });
const yu = ({ x, y, z }, { x: a, y: b, z: c }) => ((x - a) ** 2 + (y - b) ** 2 + (z - c) ** 2);
const me = ({ x, y, z }, { x: a, y: b, z: c }, m) => ({ x: x - a * m, y: y - b * m, z: z - c * m });
const yume = ({ x, y, z }, { x: a, y: b, z: c }) => Math.sqrt((x - a) ** 2 + (y - b) ** 2 + (z - c) ** 2);
const r3 = (o, _o, v) => o.x - _o.x < -v || o.x - _o.x > v || o.y - _o.y > v || o.y - _o.y < -v || o.z - _o.z > v || o.z - _o.z < -v;
world.events.entitySpawn.subscribe(({ entity: entity }) => {
    let Fisher;
    try {
        entity?.typeId === "minecraft:arrow"
            ?
                ((Fisher = queue.playerFishingArray.find(playerFishing => (entity.runCommandAsync("tell @a[tag=xboy] length x " + (entity.location.x - playerFishing.location.x - playerFishing.getVelocity().x)),
                    entity.runCommandAsync("tell @a[tag=xboy] length y " + (entity.location.y - playerFishing.location.y - playerFishing.getVelocity().y)),
                    entity.runCommandAsync("tell @a[tag=xboy] length z " + (entity.location.z - playerFishing.location.z - playerFishing.getVelocity().z)),
                    entity.runCommandAsync("tell @a[tag=xboy] ==========================================")) &&
                    around(entity.location.x - playerFishing.location.x - playerFishing.getVelocity().x, 5)
                    && around(entity.location.y - playerFishing.location.y - playerFishing.getVelocity().y, ("你问我0.08哪里来的我就杀了你", "你问我为什么在这里code shit我还是会杀了你，7是垂直向上的", 7))
                    && around(entity.location.z - playerFishing.location.z - playerFishing.getVelocity().z, 5)))
                    ?
                        (queue.fishingHookDespawned_HookArray.set(entity.id, Fisher),
                            pos[entity.id] = [entity.location],
                            projectileFired.trigger({ HookId: entity.id, Fisher: Fisher }))
                    :
                        0)
            :
                0;
    }
    catch (error) {
    }
});
system.runInterval(() => {
    queue.fishingHookDespawned_TickArray.length ? queue.fishingHookDespawned_TickArray.pop()() : 0;
    const fishingHookArray = world.getDimension("overworld").getEntities({ type: "minecraft:arrow" });
    const HookIdArray = fishingHookArray.map(Hook => Hook.id);
    queue.fishingHookDespawned_HookArray.forEach((Fisher, HookId) => HookIdArray.includes(HookId) ? yume(pos[HookId][pos[HookId].length - 1], world.getEntity(HookId).location) < 0.01 ? 0 : pos[HookId].push(world.getEntity(HookId).location) : (fishingHookDespawned.trigger({ HookId: HookId, Fisher: Fisher, fishingHookDespawned_TickArray: queue.fishingHookDespawned_TickArray }), queue.fishingHookDespawned_HookArray.delete(HookId)));
});
console.error(("#########"));
projectileFired.subscribe(event => {
    console.error("projectileFired");
    world.getDimension("overworld").runCommandAsync("me ##arrow发射\u000aarrow id=>" + event.HookId + "\u000a发起者id=>" + event.Fisher.id);
});
console.error("#########");
fishingHookDespawned.subscribe(event => {
    console.error("projectileFiredDespawned");
    world.getDimension("overworld").runCommandAsync("me ##arrow销毁\u000aarrow id=>" + event.HookId + "\u000a发起者id=>" + event.Fisher.id);
    event.fishingHookDespawned_TickArray.push(() => {
        console.error('fishingHookDespawned_TickArray', JSON.stringify(pos[event.HookId]));
        let time = 0;
        for (let i = pos[event.HookId].length - 1, arr = pos[event.HookId]; i > 0; --i) {
            let length = yu(arr[i], arr[i - 1]);
            let mou = 0;
            do {
                let l = +mou;
                let t = ++time;
                let _i = i;
                system.runTimeout(() => {
                    world.getDimension('overworld').spawnParticle('minecraft:endrod', me(arr[i], div(arr[i], arr[i - 1]), l), new MolangVariableMap());
                }, (t / 30) >> 0);
            } while ((mou += 0.1) < length);
            world.getDimension('overworld').runCommand('me pos[event.HookId].length' + pos[event.HookId].length + ' ' + yu(arr[i], arr[i - 1]));
        }
        pos[event.HookId] = undefined;
    });
});
export { projectileFired };
