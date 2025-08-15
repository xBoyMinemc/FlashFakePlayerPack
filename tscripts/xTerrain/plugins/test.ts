// import { ItemStack, ItemTypes, world } from "@minecraft/server";
// import { testWorldLocation } from "../main";

// world.afterEvents.chatSend.subscribe(({sender})=>{
//     sender.teleport(testWorldLocation, {dimension:sender.dimension})
//     sender.sendMessage(`${testWorldLocation.x} ${testWorldLocation.y} ${testWorldLocation.z}`)

//     const inv = sender.getComponent("minecraft:inventory")
//     const con = inv.container
//     con.setItem(0,new ItemStack("minecraft:stone"))
// })