import type { World } from '../../@types/globalThis'

import {SimulatedPlayerEnum} from '../main'

declare const world: World
const debug = false
world.events.fishingHookDespawned.subscribe(event=>{

    if(debug)console.error('fishingHook Despawned')
    if(debug)world.sendMessage("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id)
    for (const index in SimulatedPlayerEnum) {
        const _ = SimulatedPlayerEnum[index]
        !_ || _.id===event.Fisher.id?event.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0
    }
})
world.events.fishingHookSpawned.subscribe(event=>{
    if(debug)console.error('fishingHook Spawned')
    if(debug)world.sendMessage('me ##鱼钩生成\u000a鱼钩id=>'+event.HookId+'\u000a发起者id=>'+event.Fisher.id)
})
