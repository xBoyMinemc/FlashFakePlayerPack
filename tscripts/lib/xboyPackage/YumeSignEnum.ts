export  enum  SIGN {
    AUTO_RESPAWN_SIGN = 'AUTO_RESPAWN_SIGN',
    YUME_SIM_SIGN = '#yumeSimSign#',
    ATTACK_SIGN = 'ATTACK_SIGN',
    AUTO_ATTACK_SIGN = 'AUTO_ATTACK_SIGN',
    AUTO_CHASE_SIGN = 'AUTO_CHASE_SIGN',
    AUTO_JUMP_SIGN = 'AUTO_JUMP_SIGN',
    AUTO_TRIDENT_SIGN = 'AUTO_TRIDENT_SIGN'
}
export  default SIGN

export const SIGN_TAG_LIST = []
for (const signKey in SIGN) {
    SIGN_TAG_LIST.push(signKey)
}
export enum  SIGN_ZH {
    AUTO_RESPAWN_SIGN = '自动重生标签',
    YUME_SIM_SIGN = '云梦假人标签',
    ATTACK_SIGN = '攻击标签',
    AUTO_ATTACK_SIGN = '自动攻击标签',
    AUTO_CHASE_SIGN = '自动追及标签',
    AUTO_JUMP_SIGN = '自动跳跃标签',
    AUTO_TRIDENT_SIGN = '自动丢三叉戟标签'
}

// export const AUTO_RESPAWN_SIGN = 'AUTO_RESPAWN_SIGN';
//
// const YUME_SIM_SIGN = '#yumeSimSign#';                  // ;;'假人标签';;
// // const 挖掘标识符 = '挖掘标识符';
// // 攻击标识符
// const ATTACK_SIGN = 'ATTACK_SIGN';
// // 自动攻击标识符
// const AUTO_ATTACK_SIGN = 'AUTO_ATTACK_SIGN';
// // 自动追击标识符
// const AUTO_CHASE_SIGN = 'AUTO_CHASE_SIGN';
// const AUTO_JUMP_SIGN = 'AUTO_JUMP_SIGN';








