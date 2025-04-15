import {world} from "@minecraft/server";
import {fishingHookDespawned, fishingHookSpawned} from "../lib/xboyEvents/fishingHookSpawned";
import { simulatedPlayerManager } from "./main";

const debug = false
fishingHookDespawned.subscribe(event=>{

    if(debug)console.error('fishingHook Despawned')
    if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id)

    const simulatedPlayer = simulatedPlayerManager.get(event.Fisher.id);
    if (!simulatedPlayer) return;
    event.fishingHookDespawned_TickArray.push(() => (simulatedPlayer.useItemInSlot(0) ? simulatedPlayer.stopUsingItem() : 0));
})
fishingHookSpawned.subscribe(event=>{
    if(debug)console.error('fishingHook Spawned')
    if(debug)world.sendMessage('me ##鱼钩生成\u000a鱼钩id=>'+event.HookId+'\u000a发起者id=>'+event.Fisher.id)
})
