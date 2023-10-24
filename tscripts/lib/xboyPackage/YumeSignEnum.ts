// SIGN for AUTO_BEHAVIOR
import {SimulatedPlayer} from "@minecraft/server-gametest";
import {Player} from "@minecraft/server";

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

export const SIGN_TAG_LIST:string[]  = Object.values(SIGN)
export enum  SIGN_ZH {
    AUTO_RESPAWN_SIGN = '自动重生标签',
    YUME_SIM_SIGN = '云梦假人标签',
    ATTACK_SIGN = '攻击标签',
    AUTO_ATTACK_SIGN = '自动攻击标签',
    AUTO_CHASE_SIGN = '自动追及标签',
    AUTO_JUMP_SIGN = '自动跳跃标签',
    AUTO_TRIDENT_SIGN = '自动丢三叉戟标签'
}


// SIGN for normal BEHAVIOR
export enum  BEHAVIOR {
    lookAtEntity = 'lookAtEntity',
    teleport = 'teleport',
    useAndStopUsingItem = 'useAndStopUsingItem',
    useItemInSlot = 'useItemInSlot',
    stopUsingItem = 'stopUsingItem',
    interact = 'interact',
}

export const BEHAVIOR_LIST:string[] = Object.values(BEHAVIOR)
export enum  BEHAVIOR_ZH {
    lookAtEntity = '扭头',
    teleport = '移动',
    useAndStopUsingItem = '使用',
    useItemInSlot = '开始使用',
    stopUsingItem = '停止使用',
    interact = '开始交互',
}

export const BEHAVIOR_FUNCTION = {
    lookAtEntity : (sim:SimulatedPlayer,player:Player)=>sim.lookAtEntity(player),
    teleport : (sim:SimulatedPlayer,player:Player)=>sim.teleport(player.location),
    useAndStopUsingItem : (sim:SimulatedPlayer)=>sim.useItemInSlot(sim.selectedSlot) && sim.stopUsingItem(),
    useItemInSlot : (sim:SimulatedPlayer)=>sim.useItemInSlot(sim.selectedSlot),
    stopUsingItem : (sim:SimulatedPlayer)=>sim.stopUsingItem(),
    interact : (sim:SimulatedPlayer)=>sim.interact(),
}
export const exeBehavior = (behavior: string) => BEHAVIOR[behavior] && BEHAVIOR_FUNCTION[behavior]

