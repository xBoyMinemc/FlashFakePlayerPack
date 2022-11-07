import entityDeadByHurt from "./entityDeadByHurt"
import { fishingHookSpawned, fishingHookDespawned } from "./fishingHookSpawned"
import {World} from "@xBoyMinemc/server-plus"





export default (world:World)=>{
    world.events.entityDeadByHurt = entityDeadByHurt
    world.events.fishingHookSpawned = fishingHookSpawned
    world.events.fishingHookDespawned = fishingHookDespawned
}