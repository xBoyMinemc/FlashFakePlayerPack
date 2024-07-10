import { type Player, system,type Vector3, world} from "@minecraft/server"
import EventSignal from "./EventSignal";
import type { playerMoveAfterEvent, playerMoveAfterEventSignal } from "../../@types/globalThis";



// EventSignal
export const playerMove:playerMoveAfterEventSignal = new EventSignal<playerMoveAfterEvent>()
// console.error(JSON.stringify(world.getAllPlayers()[0].getViewDirection()))

const playerInfo = new Map<Player,{location:Vector3,viewDirection: Vector3,flash:string}>()

const getFlash = ({x,y,z}:Vector3)=>    String(x)+String(y)+String(z)


const update = ()=>{
    const playerList = world.getAllPlayers()
          playerList.forEach(player=>{
              const location = player.location
              const viewDirection = player.getViewDirection()
              const flash = getFlash(location)+getFlash(viewDirection)
              const lastInfo = playerInfo.get(player)


              if(lastInfo===undefined)
                  // set to Map
                  return playerInfo.set(player,{location,viewDirection,flash})

              if(lastInfo.flash==flash)
                  // nothing
                  return void flash

              // update to Map && Event-trigger
              playerInfo.set(player,{location,viewDirection,flash})
              const {location:locationBefore,viewDirection:viewDirectionBefore} = playerInfo.get(player)
              playerMove.trigger({location, viewDirection,locationBefore,viewDirectionBefore})
          })
}

// export default  playerMove

system.runInterval(update,0)

