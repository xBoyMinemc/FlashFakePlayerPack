import { Player, system, world } from "@minecraft/server"
import EventSignal from "./EventSignal"
import type { reloadFromCmdEvent } from "../../@types/globalThis";


class reloadFromCmdEvents extends EventSignal<reloadFromCmdEvent> {
    players = new Set<Player["id"]>();
    restart = ()=>{
        this.players.clear()
        world.getAllPlayers().forEach((_:Player)=>reloadFromCmd.players.add(_.id))
    }
}

const reloadFromCmd = new reloadFromCmdEvents()

world.afterEvents.playerJoin.subscribe(
    event=>reloadFromCmd.players.add(event.playerId)
)


world.afterEvents.playerLeave.subscribe(
    event=>reloadFromCmd.players.delete(event.playerId)
)

system.runInterval(()=>{
    const onlinePlayers = world.getAllPlayers()
    //
    if(reloadFromCmd.players.size !== onlinePlayers.length || !onlinePlayers.every((_:Player)=>reloadFromCmd.players.has(_.id))){
        reloadFromCmd.trigger(null)
        reloadFromCmd.restart()
    }

})

/*

world.events.reloadFromCmd.subscribe(()=>{
       console.error("你没事reload干嘛呢？")
})
*/


export default  reloadFromCmd