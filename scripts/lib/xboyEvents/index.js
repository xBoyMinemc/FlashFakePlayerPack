import entityDeadByHurt from "./entityDeadByHurt";
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned";
import { playerMove } from "./move";
const events = {
    playerMove: playerMove,
    entityDeadByHurt: entityDeadByHurt,
    fishingHookSpawned: fishingHookSpawned,
    fishingHookDespawned: fishingHookDespawned
};
