import {system, world} from '@minecraft/server'
import SIGN from "../../lib/xboyPackage/YumeSignEnum";
import {ActionFormData} from "@minecraft/server-ui";
import {SimulatedPlayer} from "@minecraft/server-gametest";
import {getSimPlayer} from "../../lib/xboyPackage/Util";

// world.afterEvents.entityHitEntity.subscribe(({damagingEntity,hitEntity})=>{
//     if(!damagingEntity || !hitEntity)return;
//     if(!hitEntity.hasTag(SIGN.YUME_SIM_SIGN))return;
//     world.sendMessage(''+damagingEntity.typeId+' '+(hitEntity.typeId))
//     new ActionFormData().body('#x#').button('喵？')
//         .show(damagingEntity)
// })


world.beforeEvents.itemUse.subscribe(e=>{
    const {source} = e;
    if(!source || source.typeId!=="minecraft:player")return;
    const SimPlayer:SimulatedPlayer = getSimPlayer.formView(e.source)
    if(!SimPlayer)return;
    e.cancel=true;


    system.run(()=>{
        const mng = new ActionFormData().title('标签管理');
        mng.body('#x#').body(SimPlayer.nameTag).button('喵？');
        for (const signKey in SIGN) {
            mng.button(signKey)
        }
        mng.show(source);

    })

})