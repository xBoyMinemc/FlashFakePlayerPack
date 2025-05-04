// SIGN for AUTO_BEHAVIOR
export enum SIGN {
    AUTO_BREAKBLOCK_SIGN = 'AUTO_BREAKBLOCK_SIGN',
    ATTACK_SIGN = 'ATTACK_SIGN',
    AUTO_ATTACK_SIGN = 'AUTO_ATTACK_SIGN',
    AUTO_CHASE_SIGN = 'AUTO_CHASE_SIGN',
    AUTO_JUMP_SIGN = 'AUTO_JUMP_SIGN',
    AUTO_TRIDENT_SIGN = 'AUTO_TRIDENT_SIGN',
    AUTO_RESPAWN_SIGN = 'AUTO_RESPAWN_SIGN',
    YUME_SIM_SIGN = 'YUME_SIM_SIGN',    //'#yumeSimSign#',
}

export const SIGN_TAG_LIST: string[] = Object.keys(SIGN);

export enum SIGN_ZH {
    AUTO_BREAKBLOCK_SIGN = '自动挖掘标签',
    ATTACK_SIGN = '攻击标签',
    AUTO_ATTACK_SIGN = '自动攻击标签',
    AUTO_CHASE_SIGN = '自动追及标签',
    AUTO_JUMP_SIGN = '自动跳跃标签',
    AUTO_TRIDENT_SIGN = '自动丢三叉戟标签',
    AUTO_RESPAWN_SIGN = '自动重生标签',
    YUME_SIM_SIGN = '云梦假人标签',
}

export const DEFAULT_SIGNS = [
    SIGN.AUTO_RESPAWN_SIGN,
    SIGN.YUME_SIM_SIGN,
] as const satisfies readonly SIGN[];

// SIGN for normal BEHAVIOR
export enum BEHAVIOR {
    lookAtEntity = 'lookAtEntity',
    teleport = 'teleport',
    useAndStopUsingItem = 'useAndStopUsingItem',
    useItemInSlot = 'useItemInSlot',
    stopUsingItem = 'stopUsingItem',
    interact = 'interact',
    swapMainhandItem = 'swapMainhandItem',
    swapInventory = 'swapInventory',
    swapEquipment = 'swapEquipment',
    rename = 'rename',
    recycle = 'recycle', // item and exp
    disconnect = 'disconnect',
}

export const BEHAVIOR_LIST: string[] = Object.keys(BEHAVIOR);

export enum BEHAVIOR_ZH {
    lookAtEntity = '扭头',
    teleport = '移动',
    useAndStopUsingItem = '使用',
    useItemInSlot = '开始使用',
    stopUsingItem = '停止使用',
    interact = '开始交互',
    swapMainhandItem = '互换主手物品',
    swapInventory = '互换背包',
    swapEquipment = '互换装备',
    rename = '改名',
    recycle = '回收', // item and exp
    disconnect = '销毁',
}
