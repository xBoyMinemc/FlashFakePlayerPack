import SIGN, { exeBehavior } from "../../lib/xboyPackage/YumeSignEnum";
import { getSimPlayer } from "../../lib/xboyPackage/Util";
const overworld = world.getDimension("overworld");
const ture = true;
const flase = false;
const mojang = {};
const debug = flase;
const yumeSimCmdHead = "假人";
;
;
" 命令头 ";
;
world.afterEvents.chatSend.subscribe(event => {
    {
        const { message, sender } = event;
        const 发起者 = sender;
        let 消息 = message;
        let x = +(发起者.location.x - 0.5).toFixed(0);
        let y = +发起者.location.y.toFixed(0);
        let z = +(发起者.location.z - 0.5).toFixed(0);
        if (消息.startsWith(yumeSimCmdHead) === false)
            return "好shit,迟早给你干烂";
        消息 = 消息.replace(yumeSimCmdHead, '');
        const 眼前的工具人 = getSimPlayer.formView(发起者, 16);
        const TagsManager = (xboy) => (minemc) => (need) => (add = []) => (remove = []) => xboy === need ? (add.length ? add.forEach(t => minemc.addTag(t)) : 0, remove.length ? remove.forEach(t => minemc.removeTag(t)) : 0) : 0;
        const xboy = TagsManager(消息)(眼前的工具人);
        xboy("攻击")([SIGN.ATTACK_SIGN])([SIGN.AUTO_ATTACK_SIGN]);
        xboy("自动攻击")([SIGN.AUTO_ATTACK_SIGN])([SIGN.ATTACK_SIGN]);
        xboy("开始跳跃")([SIGN.AUTO_JUMP_SIGN])();
        xboy("结束跳跃")()([SIGN.AUTO_JUMP_SIGN]);
        xboy("自动追击")([SIGN.AUTO_CHASE_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN])();
        xboy("停止")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN, SIGN.AUTO_TRIDENT_SIGN]);
        xboy("开摆")()([SIGN.ATTACK_SIGN, SIGN.AUTO_ATTACK_SIGN, SIGN.AUTO_JUMP_SIGN]);
        xboy("自动重生")([SIGN.AUTO_RESPAWN_SIGN])();
        xboy("自动丢三叉戟")([SIGN.AUTO_TRIDENT_SIGN])();
        const behavior = 消息;
        exeBehavior(behavior)?.(眼前的工具人, sender);
        ;
        "希望你对中文编程没意见，有也给我保留";
        ;
    }
});
