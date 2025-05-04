import { system, world, type Player } from '@minecraft/server'
import { SIGN,
    BEHAVIOR,
    BEHAVIOR_LIST,
    BEHAVIOR_ZH,
    SIGN_TAG_LIST,
    SIGN_ZH
} from '@/constants'
import { ActionFormData, ModalFormData } from '@minecraft/server-ui'
import { simulatedPlayerManager } from '@/core/simulated-player';
import { commandManager } from '@/core/command';
import { type SimulatedPlayer, LookDuration } from '@minecraft/server-gametest';

// world.afterEvents.entityHitEntity.subscribe(({damagingEntity,hitEntity})=>{
//     if(!damagingEntity || !hitEntity)return;
//     if(!hitEntity.hasTag(SIGN.YUME_SIM_SIGN))return;
//     world.sendMessage(''+damagingEntity.typeId+' '+(hitEntity.typeId))
//     new ActionFormData().body('#x#').button('喵？')
//         .show(damagingEntity)
// })

const BEHAVIOR_HANDLERS = {
    lookAtEntity: (sim: SimulatedPlayer, player: Player) => sim.lookAtEntity(player, LookDuration.Instant),
    teleport: (sim: SimulatedPlayer, player: Player) => sim.teleport(player.location),
    useAndStopUsingItem: (sim: SimulatedPlayer & Player) => sim.useItemInSlot(sim.selectedSlotIndex) && sim.stopUsingItem(),
    useItemInSlot: (sim: SimulatedPlayer & Player) => sim.useItemInSlot(sim.selectedSlotIndex),
    stopUsingItem: (sim: SimulatedPlayer) => sim.stopUsingItem(),
    interact: (sim: SimulatedPlayer) => sim.interact(),
    swapMainhandItem: (sim: SimulatedPlayer, player: Player) => commandManager.run('假人主手物品交换', { player, simulatedPlayer: sim }),
    swapInventory: (sim: SimulatedPlayer, player: Player) => commandManager.run('假人背包交换', { player, simulatedPlayer: sim }),
    swapEquipment: (sim: SimulatedPlayer, player: Player) => commandManager.run('假人装备交换', { player, simulatedPlayer: sim }),
    rename: async (sim: SimulatedPlayer, player: Player) => {
        const modalForm = new ModalFormData().title("假人改名");
        modalForm.textField(`由 "${sim.nameTag}" 改为：`, '输入新名称', sim.nameTag);
        const { canceled, formValues } = await modalForm.show(player);
        if (canceled) return;

        sim.nameTag = <string>formValues[0];
        // commandManager.executeCommand('假人改名', [name], { entity: player, sim });
    },
    recycle: (sim: SimulatedPlayer, player: Player) => commandManager.run('假人资源回收', { player, simulatedPlayer: sim }), // item and exp
    disconnect: (sim: SimulatedPlayer) => commandManager.run('假人销毁', { simulatedPlayer: sim }),
};

export const exeBehavior = (behavior: string) => BEHAVIOR[behavior] && BEHAVIOR_HANDLERS[behavior];


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