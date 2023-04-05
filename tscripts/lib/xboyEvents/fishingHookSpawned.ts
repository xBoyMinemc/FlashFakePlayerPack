import {Entity, EntitySpawnEvent, ItemUseEvent, Player} from "@minecraft/server"
import EventSignal from "./EventSignal";
import {FishingHookDespawnedEvent, FishingHookDespawnedEventSignal, FishingHookSpawnedEvent, FishingHookSpawnedEventSignal} from "./global";




const fishingHookSpawned = new EventSignal<FishingHookSpawnedEvent>();
const fishingHookDespawned = new EventSignal<FishingHookDespawnedEvent>();

const queue = {
    fishingHookDespawned_HookArray : new Map<Entity["id"],Entity>(),
    fishingHookDespawned_TickArray : new Array<Function>(),
    playerFishingArray : new Array<Entity>
};

world.events.itemUse.subscribe((event:ItemUseEvent)=>{
event.item.typeId === "minecraft:fishing_rod"
?
(
    queue.playerFishingArray.push(event.source)
)
:
0
})

const around =(v,r)=> v>-r && v<r;
world.events.entitySpawn.subscribe((event:EntitySpawnEvent)=>{
let Fisher : Entity
    event.entity.typeId === "minecraft:fishing_hook"
?
( 
  (
    Fisher = queue.playerFishingArray.find(
      playerFishing=>
              around(event.entity.location.x-playerFishing.location.x-playerFishing.getVelocity().x,0.3)// @ts-ignore
          &&  around(event.entity.location.y-playerFishing.location.y-playerFishing.getVelocity().y-1.32,("你问我0.08哪里来的我就杀了你","你问我为什么在这里code shit我还是会杀了你",0.08))
          &&  around(event.entity.location.z-playerFishing.location.z-playerFishing.getVelocity().z,0.3)
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
queue.playerFishingArray = [];
queue.fishingHookDespawned_TickArray.length?queue.fishingHookDespawned_TickArray.pop()():0;
const fishingHookArray = Array.from(world.getDimension("overworld").getEntities({type:"minecraft:fishing_hook"}))
const HookIdArray = fishingHookArray.map(Hook=>Hook.id)
queue.fishingHookDespawned_HookArray.forEach((Fisher,HookId)=>HookIdArray.includes(HookId)?0:(fishingHookDespawned.trigger({HookId:HookId,Fisher:Fisher,fishingHookDespawned_TickArray:queue.fishingHookDespawned_TickArray}),queue.fishingHookDespawned_HookArray.delete(HookId)))

//写完感觉效率逆天，但想了想，能够有几个钩子，这又不是海鲜市场，满池子钩子里没有一 滴水
})

/*
world.events.fishingHookDespawned.subscribe(event=>{
  console.error("fishingHookDespawned")
  world.getDimension("overworld").runCommandAsync("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
  // 工具人们.forEach(_=> _==undefined?0:_.id===event.Fisher.id?event.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0)
})
world.events.fishingHookSpawned.subscribe(event=>{
  console.error("fishingHookSpawned")
  world.getDimension("overworld").runCommandAsync("me ##鱼钩生成\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
})
*/

export { fishingHookSpawned, fishingHookDespawned }