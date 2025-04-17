import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import { playerReady } from "./ready";

const events = {
    playerMove: playerReady,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
}
