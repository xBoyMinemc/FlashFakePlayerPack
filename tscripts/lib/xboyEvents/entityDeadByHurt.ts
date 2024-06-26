import EventSignal from "./EventSignal"
import type { EntityDeadByHurtEvent } from "../../@types/globalThis.d.ts";
import { world } from "@minecraft/server";

const entityDeadByHurt = new EventSignal<EntityDeadByHurtEvent>()



world.afterEvents.entityHurt.subscribe(event=>
  event.hurtEntity.getComponent("minecraft:health").currentValue<=0 && entityDeadByHurt.trigger(event)
)

/*
const test = (event)=>event.hurtEntity.dimension.runCommandAsync("me "+(event.hurtEntity.nameTag === '' ? event.hurtEntity.typeId : event.hurtEntity.nameTag)+"#x=>"+event.hurtEntity.location.x+"#y=>"+event.hurtEntity.location.y+"#z=>"+event.hurtEntity.location.z +"被杀死"+"\u000a触发自事件world.events.entityDeadByHurt" )

entityDeadByHurt.subscribe(event=>test(event))
*/


export default  entityDeadByHurt