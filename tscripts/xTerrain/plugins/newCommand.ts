import type { Entity } from "@minecraft/server";
import type { World } from "../../@types/globalThis";
import type { SimulatedPlayer } from "@minecraft/server-gametest";
import { EquipmentSlot } from "@minecraft/server";
import {spawnSimulatedPlayer, SimulatedPlayerList, GetPID, spawned as spawnedEvent} from "../main";
import type {initializedEvent, initializedEventSignal} from "../../@types/globalThis";
import EventSignal from "../../lib/xboyEvents/EventSignal";


declare const world: World

world.events.chatSend.subscribe(({sender,message})=>{

})




export const initialized : initializedEventSignal = new EventSignal<initializedEvent>()


// Array.prototype["at"] = function (i: number) {
//         return this[this.length + i];
// };
