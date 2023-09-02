/// <reference path="../../@types/globalThis.d.ts" />
import { system } from "@minecraft/server";
import EventSignal from "./EventSignal";
const tick = new EventSignal();
world.events.tick = tick;
system.runInterval(() => world.events.tick.trigger(null), 1);
/*
  world.events.tick.subscribe(()=>{
    world.getDimension("overworld").runCommandAsync("say world.events.tick.subscribe suc")
  })
*/
// export default  tick
