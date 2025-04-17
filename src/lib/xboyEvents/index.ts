import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import reloadFromCmd from "./reloadFromCmd"
import { playerReady } from "./ready";

const events = {
    playerMove: playerReady,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
}
// world.events.reloadFromCmd = reloadFromCmd
