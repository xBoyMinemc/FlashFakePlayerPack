import EventSignal from "./EventSignal";
const entityDeadByHurt = new EventSignal();
world.events.entityHurt.subscribe(event => event.hurtEntity.getComponent("minecraft:health").currentValue <= 0 && entityDeadByHurt.trigger(event));
export default entityDeadByHurt;
