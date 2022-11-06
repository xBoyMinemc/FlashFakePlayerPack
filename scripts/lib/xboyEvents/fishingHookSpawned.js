import { world } from "@minecraft/server"

class EventSignal {
    listeners = new Set()
    subscribe(listener) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener) {
        this.listeners.delete(listener)
    }
    trigger(ev) {
        this.listeners.forEach((listener) => listener(ev))
    }
  }
  
let playerFishingArray = [];

const queue = {};

queue.fishingHookDespawned_HookArray = new Map();
queue.fishingHookDespawned_TickArray = [];

const fishingHookSpawned = new EventSignal();
const fishingHookDespawned = new EventSignal();



world.events.itemUse.subscribe(event=>{
  event.item.typeId === "minecraft:fishing_rod"
  ?
  (
    playerFishingArray.push(event.source)
  )
  :
  0
})

const around =(v,r)=> v>-r && v<r;
world.events.entityCreate.subscribe(event=>{
  let Fisher
  event.entity.typeId === "minecraft:fishing_hook"
  ?
  ( 
    (
      Fisher = playerFishingArray.find(playerFishingArray=>
                around(event.entity.location.x-playerFishingArray.location.x-playerFishingArray.velocity.x,0.3) 
            &&  around(event.entity.location.y-playerFishingArray.location.y-playerFishingArray.velocity.y-1.32,0.001) 
            &&  around(event.entity.location.z-playerFishingArray.location.z-playerFishingArray.velocity.z,0.3)
      )
    )
    ?
    (
        queue.fishingHookDespawned_HookArray.set(event.entity.id,Fisher),
        fishingHookSpawned.trigger({HookId:event.entity.id,Fisher:Fisher})
    )
    :
    0
  )
  :
  0
})


world.events.tick.subscribe((t)=>{
  playerFishingArray = [];
  queue.fishingHookDespawned_TickArray.length?queue.fishingHookDespawned_TickArray.pop()():0;
  const fishingHookArray = Array.from(world.getDimension("overworld").getEntities({type:"minecraft:fishing_hook"}))
  const HookIdArray = fishingHookArray.map(Hook=>Hook.id)
  queue.fishingHookDespawned_HookArray.forEach((Fisher,HookId)=>HookIdArray.includes(HookId)?0:(fishingHookDespawned.trigger({HookId:HookId,Fisher:Fisher}),queue.fishingHookDespawned_HookArray.delete(HookId)))
  
  //写完感觉效率逆天，但想了想，能够有几个钩子，这又不是海鲜市场，满池子钩子里没有一滴水
})


// fishingHookDespawned.subscribe(event=>{
//   world.getDimension("overworld").runCommandAsync("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
//   工具人们.forEach(_=> _==undefined?0:_.id===event.Fisher.id?queue.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0)
// })
// fishingHookSpawned.subscribe(event=>{
//   world.getDimension("overworld").runCommandAsync("me ##鱼钩生成\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
// })


export { fishingHookSpawned, fishingHookDespawned }