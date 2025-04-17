import entityDeadByHurt from "./entityDeadByHurt"
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import reloadFromCmd from "./reloadFromCmd"
import { playerReady } from "./ready";

const events = {
    playerMove: playerReady,
    entityDeadByHurt: entityDeadByHurt,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
}
// world.events.reloadFromCmd = reloadFromCmd
