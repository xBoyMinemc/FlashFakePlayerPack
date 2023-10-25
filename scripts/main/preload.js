import { world as _world } from "@minecraft/server";
import { register } from "@minecraft/server-gametest";
import { Location, BlockLocation, Events } from "../lib/xboyPackage/The law of the ancestors is immutable";
globalThis.world = Object.assign(_world, { events: Events });
globalThis.GameTest = { "register": register };
globalThis.Location = Location;
globalThis.BlockLocation = BlockLocation;
import("../lib/xboyEvents/preload.js")
    .then(() => {
    console.error("[模拟玩家] full 加载成功");
    import("./main.js");
}, (rej) => {
    console.error("[模拟玩家] rejected 报错了", rej);
})
    .finally(() => {
    console.error("[模拟玩家] finally 加载完毕");
})
    .catch(_ => {
    console.error("catch", "error" + _);
});
