import { world } from "@minecraft/server";
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    if (message === "tps开")
        sender.addTag("tps");
    if (message === "tps关")
        sender.removeTag("tps");
});
let tps = 0, currentTime = new Date().getSeconds();
const tpsShower = () => {
    ++tps;
    if (new Date().getSeconds() === currentTime)
        return 0;
    currentTime = new Date().getSeconds();
    world.getAllPlayers().forEach(player => player.hasTag("tps") ? player.onScreenDisplay.setActionBar(`§e§lTPS:§3${tps}`) : 0);
    tps = 0;
};
export default tpsShower;
