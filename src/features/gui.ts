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

const BEHAVIOR_HANDLERS = {
    lookAtEntity: (simulatedPlayer: SimulatedPlayer, player: Player) => simulatedPlayer.lookAtEntity(player, LookDuration.Instant),
    teleport: (simulatedPlayer: SimulatedPlayer, player: Player) => simulatedPlayer.teleport(player.location),
    useAndStopUsingItem: (simulatedPlayer: SimulatedPlayer) => simulatedPlayer.useItemInSlot(simulatedPlayer.selectedSlotIndex) && simulatedPlayer.stopUsingItem(),
    useItemInSlot: (simulatedPlayer: SimulatedPlayer) => simulatedPlayer.useItemInSlot(simulatedPlayer.selectedSlotIndex),
    stopUsingItem: (simulatedPlayer: SimulatedPlayer) => simulatedPlayer.stopUsingItem(),
    interact: (simulatedPlayer: SimulatedPlayer) => simulatedPlayer.interact(),
    swapMainhandItem: (simulatedPlayer: SimulatedPlayer, player: Player) => commandManager.execute('假人主手物品交换', { player, simulatedPlayer }),
    swapInventory: (simulatedPlayer: SimulatedPlayer, player: Player) => commandManager.execute('假人背包交换', { player, simulatedPlayer }),
    swapEquipment: (simulatedPlayer: SimulatedPlayer, player: Player) => commandManager.execute('假人装备交换', { player, simulatedPlayer }),
    rename: async (simulatedPlayer: SimulatedPlayer, player: Player) => {
        const modalForm = new ModalFormData().title("假人改名");

        try {
            modalForm.textField(`由 "${simulatedPlayer.nameTag}" 改为：`, '输入新名称', { defaultValue: simulatedPlayer.nameTag });
        } catch {
            // @ts-expect-error 如果不支持如上传参方式，回退到 1.21.7x 的方式
            modalForm.textField(`由 "${simulatedPlayer.nameTag}" 改为：`, '输入新名称', simulatedPlayer.nameTag);
        }
        
        const { canceled, formValues } = await modalForm.show(player);
        if (canceled) return;

        simulatedPlayer.nameTag = <string>formValues[0];
        // commandManager.executeCommand('假人改名', [name], { entity: player, simulatedPlayer });
    },
    recycle: (simulatedPlayer: SimulatedPlayer, player: Player) => commandManager.execute('假人资源回收', { player, simulatedPlayer }), // item and exp
    disconnect: (simulatedPlayer: SimulatedPlayer) => commandManager.execute('假人销毁', { simulatedPlayer }),
};

export const exeBehavior = (behavior: string) => BEHAVIOR[behavior] && BEHAVIOR_HANDLERS[behavior];


world.beforeEvents.playerInteractWithEntity.subscribe(e=>{
    const {player,target: simulatedPlayer} = e
    if(!player || player.typeId!=='minecraft:player')return
    if(!simulatedPlayer || !simulatedPlayerManager.has(simulatedPlayer))return// world.sendMessage('meow~ target');
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