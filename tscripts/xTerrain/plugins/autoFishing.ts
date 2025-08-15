import {simulatedPlayers} from '../main'
import {fishingHookDespawned} from "../../lib/xboyEvents/fishingHookSpawned";

// const debug = false
fishingHookDespawned.subscribe(event=>{
    // if(debug)console.error('fishingHook Despawned')
    // if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id)
    simulatedPlayers.forEach(val => {
        const simulatedPlayer = simulatedPlayers.getByPID(val.pid);
        if (!simulatedPlayer) return;
        if (simulatedPlayer.id === event.Fisher.id) {
            event.fishingHookDespawned_TickArray.push(() => {
                if (simulatedPlayer.useItemInSlot(0)) {
                    simulatedPlayer.stopUsingItem();
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
