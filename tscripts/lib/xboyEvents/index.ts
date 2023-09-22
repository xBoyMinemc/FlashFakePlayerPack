import entityDeadByHurt from "./entityDeadByHurt"
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import reloadFromCmd from "./reloadFromCmd"
import  "./projectileFired";
import type { World } from "../../@types/globalThis.d.ts";

declare const world: World;

world.events.reloadFromCmd = reloadFromCmd
world.events.entityDeadByHurt = entityDeadByHurt
world.events.fishingHookSpawned = fishingHookSpawned
world.events.fishingHookDespawned = fishingHookDespawned
// world.events.projectileFired = projectileFired

