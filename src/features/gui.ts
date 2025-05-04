import { system, world } from '@minecraft/server'
import { SIGN,
    BEHAVIOR,
    BEHAVIOR_LIST,
    BEHAVIOR_ZH,
    exeBehavior,
    SIGN_TAG_LIST,
    SIGN_ZH
} from '@/constants'
import { ActionFormData } from '@minecraft/server-ui'
import { simulatedPlayerManager } from '@/core/simulated-player';

// world.afterEvents.entityHitEntity.subscribe(({damagingEntity,hitEntity})=>{
//     if(!damagingEntity || !hitEntity)return;
//     if(!hitEntity.hasTag(SIGN.YUME_SIM_SIGN))return;
//     world.sendMessage(''+damagingEntity.typeId+' '+(hitEntity.typeId))
//     new ActionFormData().body('#x#').button('喵？')
//         .show(damagingEntity)
// })


world.beforeEvents.playerInteractWithEntity.subscribe(e=>{
    const {player,target} = e
    if(!player || player.typeId!=='minecraft:player')return
    if(!target || !simulatedPlayerManager.has(target))return// world.sendMessage('meow~ target');
    const simulatedPlayer = target // what's unknow?
    if(!simulatedPlayer)return
    e.cancel=true

    const tagManager = ()=>{
        const mng = new ActionFormData().title('标签管理（金色为启用）')
        mng.body('#x#').body(simulatedPlayer.nameTag)//.button('喵？');

        for (const signKey of SIGN_TAG_LIST) {
            mng.button((simulatedPlayer.hasTag(signKey)?'§l§e':'§l§1') + SIGN_ZH[SIGN[signKey]])
            // world.sendMessage('#tag=>'+signKey);
        }
        mng.show(player).then((response) => {
            const tag = SIGN_TAG_LIST[response.selection]
            simulatedPlayer.hasTag(tag)?simulatedPlayer.removeTag(tag):simulatedPlayer.addTag(tag)
        },()=>0).catch(()=>0)
    }

    const behavior = ()=>{
        const mng = new ActionFormData()
            .title('功能')
            .body('#x#').body(simulatedPlayer.nameTag)

        for (const behavior of BEHAVIOR_LIST)
            mng.button((simulatedPlayer.hasTag(behavior)?'§l§e':'§l§1') + BEHAVIOR_ZH[BEHAVIOR[behavior]])

        mng.show(player).then((response) => {
            const behavior = BEHAVIOR_LIST[response.selection]
            exeBehavior(behavior)(simulatedPlayer,player)
        },()=>0).catch(()=>0)
    }

    system.run(player.isSneaking?tagManager:behavior)

})