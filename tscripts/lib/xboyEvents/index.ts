import entityDeadByHurt from "./entityDeadByHurt"
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import reloadFromCmd from "./reloadFromCmd"
// import  "./projectileFired"; // TEST
import { playerMove } from "./move";

const events = {
    playerMove: playerMove,
    entityDeadByHurt: entityDeadByHurt,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
}
// world.events.reloadFromCmd = reloadFromCmd
// world.events.projectileFired = projectileFired
