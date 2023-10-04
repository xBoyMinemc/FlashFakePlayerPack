import {SimulatedPlayer} from "@minecraft/server-gametest";
import { SimulatedPlayerList } from "../main";
import SIGN from "../../lib/xboyPackage/YumeSignEnum";
import {EntityHealthComponent, system} from "@minecraft/server";
import {getEntitiesNear} from "../../lib/xboyPackage/Util";

const AUTO_BEHAV = ()=>{

    for (const index in SimulatedPlayerList) {

        const SimPlayer:SimulatedPlayer = SimulatedPlayerList[index]

        //判假人是否存在
        if(!SimPlayer)continue;
        //判假人是否存活
        //瞎糊乱改接口名--2023-07-21-02：02
        if((<EntityHealthComponent>SimPlayer.getComponent("minecraft:health")).currentValue<=0){
            if(SimPlayer.hasTag(SIGN.AUTO_RESPAWN_SIGN))SimPlayer.respawn();
            continue;
        }

        const EntitiesFromView = SimPlayer.getEntitiesFromViewDirection({maxDistance:4})[0]?.entity
        if(SimPlayer.hasTag(SIGN.ATTACK_SIGN) && EntitiesFromView)SimPlayer.attackEntity(EntitiesFromView);

        const EntitiesNear = getEntitiesNear(SimPlayer.location,SimPlayer.dimension,4,{})[0]
        if(SimPlayer.hasTag(SIGN.AUTO_ATTACK_SIGN) && EntitiesNear)SimPlayer.lookAtEntity(EntitiesNear);
    }

}
system.runInterval(AUTO_BEHAV,0)


