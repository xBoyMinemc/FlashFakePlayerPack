import { system } from "@minecraft/server"
class EventSignal {
    listeners = new Set()  
    subscribe(listener) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener) {
        this.listeners.delete(listener)
        // system.clearRun(listener)
    }
    trigger(ev) {
        this.listeners.forEach((listener) => listener(ev))
    }
  }
  
  const tick = new EventSignal()
  world.events.tick = tick;
  system.runInterval((ev)=> world.events.tick.trigger(ev) ,1)
  
  // world.events.tick.subscribe(()=>{
  //   world.getDimension("overworld").runCommandAsync("say world.events.tick.subscribe succcccccc")
  // })

  
// export default  tick