import { world as _world } from "@minecraft/server";
import { register } from "@minecraft/server-gametest";
import { Location, BlockLocation } from "../lib/xboyPackage/The law of the ancestors is immutable";
globalThis.world = _world;
globalThis.GameTest = { "register": register };
globalThis.Location = Location;
globalThis.BlockLocation = BlockLocation;
import("../lib/xboyEvents/preload.js")
    .then(() => {
    console.error("full ", typeof world);
    import("./main.js");
}, (rej) => {
    console.error("rej ", typeof world, rej);
})
    .finally(() => {
    console.error("finally", typeof world);
})
    .catch(_ => {
    console.error("catch", "error" + _);
});
