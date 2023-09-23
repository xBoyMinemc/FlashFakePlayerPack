/// <reference path="../@types/globalThis.d.ts" />
//  本文件将world,GameTest.register挂到全局
//  再把过往版本存在的Location实现
import { world as _world } from "@minecraft/server";
import { register } from "@minecraft/server-gametest";
import { Location, BlockLocation, Events } from "../lib/xboyPackage/The law of the ancestors is immutable";
//不会写
// @ts-ignore
globalThis.world = Object.assign(_world, { events: Events });
globalThis.GameTest = { "register": register };
globalThis.Location = Location;
globalThis.BlockLocation = BlockLocation;
// world.events.
import("../lib/xboyEvents/preload.js")
    .then(() => {
    console.error("[模拟玩家] full 加载成功");
    import("./main.js");
}, (rej) => {
    console.error("[模拟玩家] rejected 报错了", rej);
    // import("./main.ts");
})
    .finally(() => {
    console.error("[模拟玩家] finally 加载完毕");
    // import("./main.ts");
})
    .catch(_ => {
    console.error("catch", "error" + _);
});
// ################preload################
//别问有多烂，就说能不能跑
// ############### 2023-05-29 ###############
// 是真烂（捏鼻子
// ############### 2023-05-29 ###############
