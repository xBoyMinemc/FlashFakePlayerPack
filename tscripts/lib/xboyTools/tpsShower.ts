import { world } from "@minecraft/server"
import { Command, commandManager } from "../yumeCommand/CommandRegistry";

const cmd = [new Command(), new Command()];
function onNotEntity() {
    console.warn('[模拟玩家] 命令只能由实体执行');
}
cmd[0].register(({entity})=>{
    if(!entity) onNotEntity();
    entity.addTag("tps");
});
cmd[1].register(({entity})=>{
    if(!entity) onNotEntity();
    entity.removeTag("tps");
});
commandManager.registerCommand(['tpson', 'tps开'], cmd[0]);
commandManager.registerCommand(['tpsoff', 'tps关'], cmd[1]);

let tps = 0,
    currentTime =  new Date().getSeconds()

const tpsShower = ()=>{
    ++tps

    if(new Date().getSeconds() === currentTime)return
    currentTime =  new Date().getSeconds()
    // overworld.runCommandAsync(`title @a[tag=tps] actionbar §e§lTPS:§3${tps}§0#§4PPT:§e${mspta}-${msptb}§0#§4${msptArray.join(",")}`)

    // overworld.runCommandAsync(`title @a[tag=tps] actionbar §e§lTPS:§3${tps}`)
    // no command,on $player.onScreenDisplay.setActionBar(`§e§lTPS:§3${tps}`)$
    world.getAllPlayers().forEach(player => {
        if (player.hasTag("tps")) {
            player.onScreenDisplay.setActionBar(`§e§lTPS:§3${tps}`)
        }
    })
    tps = 0

}

export default tpsShower


// 🟧🟧🟧🟧🟧🟧🟧🟧
// 🟧🟧🟧🟧🟧🟧🟧🟧
// 🟧🟧🟧🟧🟧🟧🟧🟧
// ⬛️⬛️🟧🟧🟧🟧⬛️⬛️
// 🟧🟧⬜️⬛️⬛️⬜️🟧🟧
// ⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️
