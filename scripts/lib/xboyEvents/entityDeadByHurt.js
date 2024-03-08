import EventSignal from "./EventSignal";
import { world } from "@minecraft/server";
const entityDeadByHurt = new EventSignal();
world.afterEvents.entityHurt.subscribe(event => event.hurtEntity.getComponent("minecraft:health").currentValue <= 0 && entityDeadByHurt.trigger(event));
export default entityDeadByHurt;
