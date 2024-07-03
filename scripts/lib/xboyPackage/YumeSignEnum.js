import { LookDuration } from '@minecraft/server-gametest';
import { commandRegistry as urm } from '../../xTerrain/plugins/youAreMine';
export var SIGN;
(function (SIGN) {
    SIGN["AUTO_RESPAWN_SIGN"] = "AUTO_RESPAWN_SIGN";
    SIGN["YUME_SIM_SIGN"] = "YUME_SIM_SIGN";
    SIGN["ATTACK_SIGN"] = "ATTACK_SIGN";
    SIGN["AUTO_ATTACK_SIGN"] = "AUTO_ATTACK_SIGN";
    SIGN["AUTO_CHASE_SIGN"] = "AUTO_CHASE_SIGN";
    SIGN["AUTO_JUMP_SIGN"] = "AUTO_JUMP_SIGN";
    SIGN["AUTO_TRIDENT_SIGN"] = "AUTO_TRIDENT_SIGN";
    SIGN["AUTO_BREAKBLOCK_SIGN"] = "AUTO_BREAKBLOCK_SIGN";
})(SIGN || (SIGN = {}));
export default SIGN;
export const SIGN_TAG_LIST = Object.keys(SIGN);
export var SIGN_ZH;
(function (SIGN_ZH) {
    SIGN_ZH["AUTO_RESPAWN_SIGN"] = "\u81EA\u52A8\u91CD\u751F\u6807\u7B7E";
    SIGN_ZH["YUME_SIM_SIGN"] = "\u4E91\u68A6\u5047\u4EBA\u6807\u7B7E";
    SIGN_ZH["ATTACK_SIGN"] = "\u653B\u51FB\u6807\u7B7E";
    SIGN_ZH["AUTO_ATTACK_SIGN"] = "\u81EA\u52A8\u653B\u51FB\u6807\u7B7E";
    SIGN_ZH["AUTO_CHASE_SIGN"] = "\u81EA\u52A8\u8FFD\u53CA\u6807\u7B7E";
    SIGN_ZH["AUTO_JUMP_SIGN"] = "\u81EA\u52A8\u8DF3\u8DC3\u6807\u7B7E";
    SIGN_ZH["AUTO_TRIDENT_SIGN"] = "\u81EA\u52A8\u4E22\u4E09\u53C9\u621F\u6807\u7B7E";
    SIGN_ZH["AUTO_BREAKBLOCK_SIGN"] = "\u81EA\u52A8\u6316\u6398\u6807\u7B7E";
})(SIGN_ZH || (SIGN_ZH = {}));
export var BEHAVIOR;
(function (BEHAVIOR) {
    BEHAVIOR["lookAtEntity"] = "lookAtEntity";
    BEHAVIOR["teleport"] = "teleport";
    BEHAVIOR["useAndStopUsingItem"] = "useAndStopUsingItem";
    BEHAVIOR["useItemInSlot"] = "useItemInSlot";
    BEHAVIOR["stopUsingItem"] = "stopUsingItem";
    BEHAVIOR["interact"] = "interact";
    BEHAVIOR["swapMainhandItem"] = "swapMainhandItem";
    BEHAVIOR["swapInventory"] = "swapInventory";
    BEHAVIOR["swapEquipment"] = "swapEquipment";
    BEHAVIOR["recycle"] = "recycle";
    BEHAVIOR["disconnect"] = "disconnect";
})(BEHAVIOR || (BEHAVIOR = {}));
export const BEHAVIOR_LIST = Object.keys(BEHAVIOR);
export var BEHAVIOR_ZH;
(function (BEHAVIOR_ZH) {
    BEHAVIOR_ZH["lookAtEntity"] = "\u626D\u5934";
    BEHAVIOR_ZH["teleport"] = "\u79FB\u52A8";
    BEHAVIOR_ZH["useAndStopUsingItem"] = "\u4F7F\u7528";
    BEHAVIOR_ZH["useItemInSlot"] = "\u5F00\u59CB\u4F7F\u7528";
    BEHAVIOR_ZH["stopUsingItem"] = "\u505C\u6B62\u4F7F\u7528";
    BEHAVIOR_ZH["interact"] = "\u5F00\u59CB\u4EA4\u4E92";
    BEHAVIOR_ZH["swapMainhandItem"] = "\u4E92\u6362\u4E3B\u624B\u7269\u54C1";
    BEHAVIOR_ZH["swapInventory"] = "\u4E92\u6362\u80CC\u5305";
    BEHAVIOR_ZH["swapEquipment"] = "\u4E92\u6362\u88C5\u5907";
    BEHAVIOR_ZH["recycle"] = "\u56DE\u6536";
    BEHAVIOR_ZH["disconnect"] = "\u9500\u6BC1";
})(BEHAVIOR_ZH || (BEHAVIOR_ZH = {}));
export const BEHAVIOR_FUNCTION = {
    lookAtEntity: (sim, player) => sim.lookAtEntity(player, LookDuration.Instant),
    teleport: (sim, player) => sim.teleport(player.location),
    useAndStopUsingItem: (sim) => sim.useItemInSlot(sim.selectedSlotIndex) && sim.stopUsingItem(),
    useItemInSlot: (sim) => sim.useItemInSlot(sim.selectedSlotIndex),
    stopUsingItem: (sim) => sim.stopUsingItem(),
    interact: (sim) => sim.interact(),
    swapMainhandItem: (sim, player) => urm.execute('假人主手物品交换', { entity: player, sim }),
    swapInventory: (sim, player) => urm.execute('假人背包交换', { entity: player, sim }),
    swapEquipment: (sim, player) => urm.execute('假人装备交换', { entity: player, sim }),
    recycle: (sim, player) => urm.execute('假人资源回收', { entity: player, sim }),
    disconnect: (sim) => urm.execute('假人销毁', { sim }),
};
export const exeBehavior = (behavior) => BEHAVIOR[behavior] && BEHAVIOR_FUNCTION[behavior];
