import { Player } from "@minecraft/server"
import EventSignal from "./EventSignal"
import type { World,reloadFromCmdEvent } from "../../@types/globalThis";

declare const world: World;

class reloadFromCmdEvents extends EventSignal<reloadFromCmdEvent> {
    players = new Set<Player["id"]>();
    restart = ()=>{
        this.players.clear()
        world.getAllPlayers().forEach((_:Player)=>reloadFromCmd.players.add(_.id))
    }
}

const reloadFromCmd = new reloadFromCmdEvents()

world.events.playerJoin.subscribe(
    event=>reloadFromCmd.players.add(event.playerId)
)


world.events.playerLeave.subscribe(
    event=>reloadFromCmd.players.delete(event.playerId)
)

world.events.tick.subscribe(()=>{
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