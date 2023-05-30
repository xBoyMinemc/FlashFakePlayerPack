import EventSignal from "./EventSignal";
const entityDeadByHurt = new EventSignal();
world.events.entityHurt.subscribe(event => event.hurtEntity.getComponent("minecraft:health")["current"] <= 0
    ? entityDeadByHurt.trigger(event)
    : 0);
export default entityDeadByHurt;
