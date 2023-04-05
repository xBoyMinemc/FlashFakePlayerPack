import { Player } from "@minecraft/server"
import EventSignal from "./EventSignal"
import {reloadFromCmdEvent } from "./global"


class reloadFromCmdEvents extends EventSignal<reloadFromCmdEvent> {
    players: Set<Player["id"]>;
}

const reloadFromCmd = new reloadFromCmdEvents()

world.events.playerJoin.subscribe(
    event=>reloadFromCmd.players.add(event.playerId)
)


world.events.playerLeave.subscribe(
    event=>reloadFromCmd.players.delete(event.playerId)
)

world.events.tick.subscribe(()=>{
   let _noError =  world.getAllPlayers().every((_:Player)=>reloadFromCmd.players.has(_.id))?1:reloadFromCmd.trigger(null)

})

/*

world.events.reloadFromCmd.subscribe(()=>{
       console.error("你没事reload干嘛呢？")
})
*/


export default  reloadFromCmd