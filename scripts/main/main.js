import tpsShower from '../lib/xboyTools/tpsShower';
import "../xTerrain/main.js";
import { world, system } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const the_end = world.getDimension("the end");
const nowTimeTemp = new Date().getDate() + "日" + new Date().getHours() + "时" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒";
system.runInterval(() => {
    tpsShower();
});
