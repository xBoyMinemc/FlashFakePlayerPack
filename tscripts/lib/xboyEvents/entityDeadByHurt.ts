import EventSignal from "./EventSignal"
import type { World,EntityDeadByHurtEvent } from "../../@types/globalThis.d.ts";
import {EntityHealthComponent} from "@minecraft/server";

declare const world: World;
const entityDeadByHurt = new EventSignal<EntityDeadByHurtEvent>()



world.events.entityHurt.subscribe(event=>
  (<EntityHealthComponent>event.hurtEntity.getComponent("minecraft:health")).currentValue<=0 && entityDeadByHurt.trigger(event)
)

/*
const test = (event)=>event.hurtEntity.dimension.runCommandAsync("me "+(event.hurtEntity.nameTag === '' ? event.hurtEntity.typeId : event.hurtEntity.nameTag)+"#x=>"+event.hurtEntity.location.x+"#y=>"+event.hurtEntity.location.y+"#z=>"+event.hurtEntity.location.z +"被杀死"+"\u000a触发自事件world.events.entityDeadByHurt" )

entityDeadByHurt.subscribe(event=>test(event))
*/


export default  entityDeadByHurt