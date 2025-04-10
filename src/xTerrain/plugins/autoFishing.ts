import {simulatedPlayers} from '../main'
import {world} from "@minecraft/server";
import {fishingHookDespawned, fishingHookSpawned} from "../../lib/xboyEvents/fishingHookSpawned";

const debug = false
fishingHookDespawned.subscribe(event=>{

    if(debug)console.error('fishingHook Despawned')
    if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id)
    for (const index in simulatedPlayers) {
        const _ = simulatedPlayers[index]
        !_ || _.id===event.Fisher.id?event.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0
    }
})
fishingHookSpawned.subscribe(event=>{
    if(debug)console.error('fishingHook Spawned')
    if(debug)world.sendMessage('me ##鱼钩生成\u000a鱼钩id=>'+event.HookId+'\u000a发起者id=>'+event.Fisher.id)
})
