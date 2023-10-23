export var SIGN;
(function (SIGN) {
    SIGN["AUTO_RESPAWN_SIGN"] = "AUTO_RESPAWN_SIGN";
    SIGN["YUME_SIM_SIGN"] = "#yumeSimSign#";
    SIGN["ATTACK_SIGN"] = "ATTACK_SIGN";
    SIGN["AUTO_ATTACK_SIGN"] = "AUTO_ATTACK_SIGN";
    SIGN["AUTO_CHASE_SIGN"] = "AUTO_CHASE_SIGN";
    SIGN["AUTO_JUMP_SIGN"] = "AUTO_JUMP_SIGN";
    SIGN["AUTO_TRIDENT_SIGN"] = "AUTO_TRIDENT_SIGN";
})(SIGN || (SIGN = {}));
export default SIGN;
export const SIGN_TAG_LIST = [];
for (const signKey in SIGN) {
    SIGN_TAG_LIST.push(signKey);
}
export var SIGN_ZH;
(function (SIGN_ZH) {
    SIGN_ZH["AUTO_RESPAWN_SIGN"] = "\u81EA\u52A8\u91CD\u751F\u6807\u7B7E";
    SIGN_ZH["YUME_SIM_SIGN"] = "\u4E91\u68A6\u5047\u4EBA\u6807\u7B7E";
    SIGN_ZH["ATTACK_SIGN"] = "\u653B\u51FB\u6807\u7B7E";
    SIGN_ZH["AUTO_ATTACK_SIGN"] = "\u81EA\u52A8\u653B\u51FB\u6807\u7B7E";
    SIGN_ZH["AUTO_CHASE_SIGN"] = "\u81EA\u52A8\u8FFD\u53CA\u6807\u7B7E";
    SIGN_ZH["AUTO_JUMP_SIGN"] = "\u81EA\u52A8\u8DF3\u8DC3\u6807\u7B7E";
    SIGN_ZH["AUTO_TRIDENT_SIGN"] = "\u81EA\u52A8\u4E22\u4E09\u53C9\u621F\u6807\u7B7E";
})(SIGN_ZH || (SIGN_ZH = {}));
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
