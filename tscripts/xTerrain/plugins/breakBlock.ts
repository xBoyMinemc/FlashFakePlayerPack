import type { SimulatedPlayer } from '@minecraft/server-gametest'
import {Dimension, Player, Vector3} from '@minecraft/server'

import {
    simulatedPlayers,
    testWorldLocation
} from '../main'
import { Command, commandManager } from '../../lib/yumeCommand/CommandRegistry';
import { getSimPlayer } from '../../lib/xboyPackage/Util'
import { world, system } from "@minecraft/server"
import SIGN from "../../lib/xboyPackage/YumeSignEnum";

const breakBlockCommand = new Command();
breakBlockCommand.register(({ args }) => args.length === 0, ({ entity, isEntity }) => {
    if (!isEntity) {
        console.error('error not isEntity');
        return;
    }

    const SimPlayer: SimulatedPlayer = getSimPlayer.fromView(entity)
    if (!SimPlayer) {
        entity.sendMessage('§e§l-面前不存在模拟玩家');
        return;
    } 

    for(const i in simulatedPlayers)
        if(simulatedPlayers[i]===SimPlayer)
            SimPlayer.addTag(SIGN.AUTO_BREAKBLOCK_SIGN)

    // console.error('[假人]内置插件'+'假人挖掘'+'执行成功')

});
commandManager.registerCommand(['假人挖掘', '假人摧毁'], breakBlockCommand);

const Vector_subtract = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x-u,y:y-v,z:z-w})
const Vector_addition = ({x,y,z}:Vector3, {x:u,y:v,z:w}:Vector3)=>({x:x+u,y:y+v,z:z+w})
const Vector_multiplication_dot = ({x,y,z}:Vector3, u:number)=>({x:x*u,y:y*u,z:z*u})

// type awa = 'awa'

// task
const breaks = (/*awa:awa='awa'*/)=>
    world.getPlayers({tags:[SIGN.AUTO_BREAKBLOCK_SIGN]}).forEach( async SimPlayer => {
        // getHeadLocation
        // getViewDirection
        // 这是一会要用到的妙妙工具
        const man = <SimulatedPlayer><unknown>SimPlayer
        const block =  man.getBlockFromViewDirection({maxDistance:6})?.block
        if (!block) return

        if (block.isValid && !block.isLiquid && !block.isAir){
            man.breakBlock(Vector_subtract(block, testWorldLocation))
        }
    })

system.runInterval(breaks,0) // 2 + 0 = 0

// console.error('[假人]内置插件'+commandName+'加载成功')