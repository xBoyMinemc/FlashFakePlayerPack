import { system } from "@minecraft/server";
import EventSignal from "./EventSignal";
const tick = new EventSignal();
world.events.tick = tick;
system.runInterval(() => world.events.tick.trigger(null), 1);
