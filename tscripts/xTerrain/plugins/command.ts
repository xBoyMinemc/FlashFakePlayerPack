// No longer maintained
import { world } from '@minecraft/server'
import type { Entity } from '@minecraft/server' 
import SIGN, { exeBehavior } from "../../lib/xboyPackage/YumeSignEnum";
import {getSimPlayer} from "../../lib/xboyPackage/Util";

const ture = true;
const flase = false;
const debug = flase;
const yumeSimCmdHead = "假人";                      ;;" 命令头 ";;

world.afterEvents.chatSend.subscribe( event => {
            const {message, sender} = event;
            const 发起者 = sender;
            let 消息 = message;

            let x = +(发起者.location.x - 0.5).toFixed(0);
            let y = + 发起者.location.y.toFixed(0);
            let z = +(发起者.location.z - 0.5).toFixed(0); //for blockLocation

            if (消息.startsWith(yumeSimCmdHead) === false) return "好shit,迟早给你干烂";
            消息 = 消息.replace(yumeSimCmdHead, '');

            const 眼前的工具人 = <Entity><unknown>getSimPlayer.fromView(发起者, 16);
            //懒改--2023-07-21--评
            const TagsManager = (xboy: string) => (minemc: Entity) => (need: string) => (add:string[]=[]) => (remove: string[]=[]) => xboy === need ? (add.length ? add.forEach(t => minemc.addTag(t)) : 0, remove.length ? remove.forEach(t => minemc.removeTag(t)) : 0) : 0;
            const xboy = TagsManager(消息)(眼前的工具人)
            xboy("攻击")([SIGN.ATTACK_SIGN])([SIGN.AUTO_ATTACK_SIGN])
            xboy("自动攻击")([SIGN.AUTO_ATTACK_SIGN])([SIGN.ATTACK_SIGN])
            xboy("开始跳跃")([SIGN.AUTO_JUMP_SIGN])()
            xboy("结束跳跃")()([SIGN.AUTO_JUMP_SIGN])
            // xboy("寻路")([寻路标识符])([])
            xboy("自动追击")([SIGN.AUTO_CHASE_SIGN, SIGN.AUTO_ATTACK_SIGN,SIGN.AUTO_JUMP_SIGN])()
            xboy("停止")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN,SIGN.AUTO_TRIDENT_SIGN,SIGN.AUTO_CONSUME_SIGN])
            xboy("开摆")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN])
            xboy("自动重生")([SIGN.AUTO_RESPAWN_SIGN])()
            xboy("自动丢三叉戟")([SIGN.AUTO_TRIDENT_SIGN])()
            xboy("自动食用")([SIGN.AUTO_CONSUME_SIGN])()
            // 并不认为参数默认值在这里是什么好主意--2023-12-14

            const behavior = 消息 // 坏了，重新审阅代码发现命令行为真是这里控制的，怎么这么重要的东西和shit放在一起--2023-12-14
            exeBehavior(behavior)?.(眼前的工具人,sender)
            ;
            ;"希望你对中文编程没意见，有也给我保留";
            ;
})
