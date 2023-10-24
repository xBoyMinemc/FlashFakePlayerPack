// Deprecated
/// <reference path="../../@types/globalThis.d.ts" />
import { system } from "@minecraft/server"
import EventSignal from "./EventSignal"
import type { World,TickEvent } from "../../@types/globalThis.d.ts";

declare const world: World;

  const tick = new EventSignal<TickEvent>()
  world.events.tick = tick;
  system.runInterval(()=> world.events.tick.trigger(null) ,1)

/*
  world.events.tick.subscribe(()=>{
    world.getDimension("overworld").runCommandAsync("say world.events.tick.subscribe suc")
  })
*/

// export default  tick