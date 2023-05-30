import tpsMspt from '../lib/xboyTools/tpsMspt.js';
import "../xTerrain/main.js";
const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const the_end = world.getDimension("the end");
const nowTimeTemp = new Date().getDate() + "日" + new Date().getHours() + "时" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒";
world.events.tick.subscribe(() => {
    tpsMspt();
});
