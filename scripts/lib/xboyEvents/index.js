﻿import entityDeadByHurt from "./entityDeadByHurt";
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned";
import reloadFromCmd from "./reloadFromCmd";
import { playerMove } from "./move";
world.events.reloadFromCmd = reloadFromCmd;
world.events.entityDeadByHurt = entityDeadByHurt;
world.events.fishingHookSpawned = fishingHookSpawned;
world.events.fishingHookDespawned = fishingHookDespawned;
world.events.playerMove = playerMove;
