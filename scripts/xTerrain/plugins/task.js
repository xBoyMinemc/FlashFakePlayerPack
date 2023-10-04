import { SimulatedPlayerList as 工具人们 } from "../main";
import SIGN from "../../lib/xboyPackage/YumeSignEnum";
import { system } from "@minecraft/server";
const AUTO_RESPAWN = () => {
    for (const index in 工具人们) {
        const SimPlayer = 工具人们[index];
        //判假人是否存在
        if (!SimPlayer)
            continue;
        //判假人是否存活
        //瞎糊乱改接口名--2023-07-21-02：02
        if (SimPlayer.getComponent("minecraft:health").currentValue <= 0) {
            if (SimPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN))
                SimPlayer.respawn();
            continue;
        }
    }
};
system.runInterval(AUTO_RESPAWN, 0);
