import entityDeadByHurt from "./entityDeadByHurt"
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import reloadFromCmd from "./reloadFromCmd"
// import  "./projectileFired"; // TEST
import { playerMove } from "./move";
import { world } from "@minecraft/server";

// import type { World } from "../../@types/globalThis.d.ts";

// declare const world: World;
const events = {
    playerMove: playerMove,
    entityDeadByHurt: entityDeadByHurt,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
}
// world.events.reloadFromCmd = reloadFromCmd
// world.events.projectileFired = projectileFired
