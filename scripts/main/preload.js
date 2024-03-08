import { register } from "@minecraft/server-gametest";
import { Location, BlockLocation } from "../lib/xboyPackage/The law of the ancestors is immutable";
globalThis.GameTest = { "register": register };
globalThis.Location = Location;
globalThis.BlockLocation = BlockLocation;
import "../lib/xboyEvents/preload.js";
import "./main.js";
console.log("我尽力了");
