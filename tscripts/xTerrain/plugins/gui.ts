import {system, world} from '@minecraft/server'
import SIGN, {SIGN_TAG_LIST, SIGN_ZH} from "../../lib/xboyPackage/YumeSignEnum";
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

    source.isSneaking
        ?
        system.run(()=>{
            const mng = new ActionFormData().title('标签管理（金色为启用）');
            mng.body('#x#').body(SimPlayer.nameTag)//.button('喵？');

            for (const signKey of SIGN_TAG_LIST) {
                mng.button((SimPlayer.hasTag(signKey)?'§l§e':'§l§1') + SIGN_ZH[signKey])
                // world.sendMessage("#tag=>"+signKey);
            }
            mng.show(source).then((response) => {
                const tag = SIGN_TAG_LIST[response.selection]
                SimPlayer.hasTag(tag)?SimPlayer.removeTag(tag):SimPlayer.addTag(tag)
            });

        })
        :
        system.run(()=>{
            const mng = new ActionFormData().title('功能');
            mng.body('#x#').body(SimPlayer.nameTag)//.button('喵？');
            const TagList = []
            for (const signKey of SIGN_TAG_LIST) {
                mng.button((SimPlayer.hasTag(signKey)?'§l§e':'§l§1') + SIGN_ZH[signKey])
                world.sendMessage("#tag=>"+signKey);
            }
            mng.show(source).then((response) => {
                const tag = SIGN_TAG_LIST[response.selection]
                SimPlayer.hasTag(tag)?SimPlayer.removeTag(tag):SimPlayer.addTag(tag)
            });

        })

})