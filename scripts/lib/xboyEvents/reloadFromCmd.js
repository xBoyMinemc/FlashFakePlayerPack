// import { world } from "@minecraft/server"

class EventSignal {
    players = new Set()
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
  
const reloadFromCmd = new EventSignal()



world.events.playerJoin.subscribe(
    event=>reloadFromCmd.players.add(event.playerId)
)


world.events.playerLeave.subscribe(
    event=>reloadFromCmd.players.delete(event.playerId)
)

world.events.tick.subscribe(()=>{
    world.getAllPlayers().every(_=>reloadFromCmd.players.has(_.id))?1:reloadFromCmd.trigger()
    
})

// world.events.reloadFromCmd.subscribe(()=>{
//        console.error("你没事reload干嘛呢？")
// })



export default  reloadFromCmd