import { simulatedPlayers } from '../main'
import {fishingHookDespawned} from "../../lib/xboyEvents/fishingHookSpawned";

// const debug = false
fishingHookDespawned.subscribe(event=>{
    // if(debug)console.error('fishingHook Despawned')
    // if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id)
    simulatedPlayers.list.forEach(({ player }) => {
        // if (!player) return;
        if (player.id === event.Fisher.id) {
            event.fishingHookDespawned_TickArray.push(() => {
                if (player.useItemInSlot(0)) {
                    player.stopUsingItem();
                }
                return 0;
            });
        }
    })
})
// fishingHookSpawned.subscribe(event=>{
//     if(debug)console.error('fishingHook Spawned')
//     if(debug)world.sendMessage('me ##鱼钩生成\u000a鱼钩id=>'+event.HookId+'\u000a发起者id=>'+event.Fisher.id)
// })
