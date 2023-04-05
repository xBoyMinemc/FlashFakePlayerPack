import { world } from "@minecraft/server"

class EventSignal {
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
  
const entityDeadByHurt = new EventSignal()



world.events.entityHurt.subscribe(event=>
  event.hurtEntity.getComponent("minecraft:health").current<=0
  ?
  entityDeadByHurt.trigger(event)
  :
  0
)


// const test = (event)=>event.hurtEntity.dimension.runCommandAsync("me "+(event.hurtEntity.name??event.hurtEntity.nameTag??event.hurtEntity.typeId)+"#x=>"+event.hurtEntity.location.x+"#y=>"+event.hurtEntity.location.y+"#z=>"+event.hurtEntity.location.z +"被杀死"+"\u000a触发自事件world.events.entityDeadByHurt" )

// entityDeadByHurt.subscribe(test)



export default  entityDeadByHurt