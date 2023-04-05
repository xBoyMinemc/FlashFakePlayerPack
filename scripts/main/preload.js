import { world } from "@minecraft/server";

import * as GameTest from "@minecraft/server-gametest";

import { Location,BlockLocation } from "../lib/xboyPackage/The law of the ancestors is immutable.js";


globalThis.world = world;
globalThis.GameTest = GameTest;
globalThis.Location = Location;
globalThis.BlockLocation = BlockLocation;

import("../lib/xboyEvents/preload.js")

.then(
    () => {
    console.error("full ",typeof world)
    import("./main.js");
    },
    (rej) => {
    console.error("rej ",typeof world,rej)
    // import("./main.js");
    }
)

.finally(() => {
    console.error("finally",typeof world)
    // import("./main.js");
})

.catch(_=>{
    console.error("catch","error"+_)
})
;


// ################preload################

//别问有多烂，就说能不能跑