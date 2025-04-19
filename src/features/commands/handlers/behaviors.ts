import SIGN from '../../../constants/YumeSignEnum';
import { getSimPlayer } from '../../../core/queries/Util';
import { commandManager } from '../../../core/command';

interface BehaviorCommandConfig {
    behavior: string;
    adds: string[];
    removes: string[];
}

const behaviorCommandConfigs: BehaviorCommandConfig[] = [
    {
        behavior: "攻击",
        adds: [SIGN.ATTACK_SIGN],
        removes: [SIGN.AUTO_ATTACK_SIGN]
    },
    {
        behavior: "自动攻击",
        adds: [SIGN.AUTO_ATTACK_SIGN],
        removes: [SIGN.ATTACK_SIGN]
    },
    {
        behavior: "开始跳跃",
        adds: [SIGN.AUTO_JUMP_SIGN],
        removes: []
    },
    {
        behavior: "结束跳跃",
        adds: [],
        removes: [SIGN.AUTO_JUMP_SIGN]
    },
    {
        behavior: "自动追击",
        adds: [
            SIGN.AUTO_CHASE_SIGN,
            SIGN.AUTO_ATTACK_SIGN,
            SIGN.AUTO_JUMP_SIGN
        ],
        removes: []
    },
    {
        behavior: "停止",
        adds: [],
        removes: [
            SIGN.ATTACK_SIGN,
            SIGN.AUTO_ATTACK_SIGN,
            SIGN.AUTO_JUMP_SIGN,
            SIGN.AUTO_TRIDENT_SIGN
        ]
    },
    {
        behavior: "开摆",
        adds: [],
        removes: [
            SIGN.ATTACK_SIGN,
            SIGN.AUTO_ATTACK_SIGN,
            SIGN.AUTO_JUMP_SIGN
        ]
    },
    {
        behavior: "自动重生",
        adds: [SIGN.AUTO_RESPAWN_SIGN],
        removes: []
    },
    {
        behavior: "自动丢三叉戟",
        adds: [SIGN.AUTO_TRIDENT_SIGN],
        removes: []
    }
];

const behaviorPrefix = '假人';

const registerBehaviorCommands = () => {
    behaviorCommandConfigs.forEach(behaviorCommand => {
        commandManager.registerCommand(`${behaviorPrefix}${behaviorCommand.behavior}`, ({ entity }) => {
            if (!entity) return;
            const simulatedPlayer = getSimPlayer.fromView(entity);
            if (!simulatedPlayer) return;

            const { adds, removes } = behaviorCommand;

            adds.forEach(tag => {
                simulatedPlayer.addTag(tag);
            });
            removes.forEach(tag => {
                simulatedPlayer.removeTag(tag);
            });
        });
    });
};

registerBehaviorCommands();