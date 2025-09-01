import { ActionFormData, FormCancelationReason, ModalFormData } from "@minecraft/server-ui";
import { Command, commandManager } from "../../lib/yumeCommand/CommandRegistry";
import { Player, type World, world } from "@minecraft/server";
import { currentPID } from "../main";

export const LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY = 'ffpp:simulated_player_limit_config';
export const LIMIT_CONFIG_GLOBAL_CONFIG_KEY = '__global__';

const invalidConfigWarnText = '[模拟玩家] 配置疑似被篡改，已修复。请检查最近有没有安装可疑行为包？如果是第一次使用此功能则可忽略';
const invalidParameterWarnText = '§4[模拟玩家]§r 输入非法参数，设置失败';
export const invalidPlayerNameWarnText = `§4[模拟玩家]§r 有非法玩家名： §6${LIMIT_CONFIG_GLOBAL_CONFIG_KEY}§r 无法`;
export const outOfLimitWarnText = '§6[模拟玩家]§r 您或全局的假人数量已超过限额';

export const playerSpawnedSimulatedPlayerNumbers: Record<string, number> = {};

export function parseConfig(config: ReturnType<World["getDynamicProperty"]>): object | false {
    const warn = function () {
        // Oop! It's fake!
        world.sendMessage(invalidConfigWarnText);
        console.warn(invalidConfigWarnText);
    };

    let result: object | false;
    // 如果读取到的配置不是字符串或无法解析，就警告用户
    try {
        if (typeof config === 'string') {
            result = JSON.parse(config);
            if (typeof result !== 'object') {
                return false;
            } else {
                return result;
            }
            // 在这行注释之前绝对绝对不可以调用warn!
        } else {
            warn();
            return false;
        }
    } catch (e) {
        // 判断是不是JSON.parse的错误
        if (e instanceof SyntaxError) {
            warn();
            return false;
        } else {
            throw e;
        }
    }
}

export function writeConfig(config: any) {
    if (typeof config === 'object') {
        world.setDynamicProperty(LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY, JSON.stringify(config));
    } else {
        throw new TypeError('[模拟玩家] 内部致命错误(func writeConfig in limitSimplayerNum)：config不是对象');
    }
}

export function isOutOfLimit(player?: { name: string }): boolean {
    const config = world.getDynamicProperty(LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY);
    const parsedConfig = parseConfig(config);

    const playerLimit = parsedConfig[player?.name];
    const globalLimit = parsedConfig[LIMIT_CONFIG_GLOBAL_CONFIG_KEY];
    const isOutOfGlobalLimit = globalLimit
        ? currentPID >= globalLimit
        : false;
    const isOutOfPlayerLimit = playerLimit
        ? playerSpawnedSimulatedPlayerNumbers[player.name] >= playerLimit
        : false;

    return isOutOfGlobalLimit || isOutOfPlayerLimit;
}

const cmd = new Command();
cmd.register(/* 验证是否是玩家触发的 */(cmdInfo) => cmdInfo?.isEntity && cmdInfo?.entity instanceof Player, (cmdInfo) => {
    // 如果是普通用户，则无法修改
    if (cmdInfo.entity.commandPermissionLevel < 1) {
        cmdInfo.entity.sendMessage('§6[模拟玩家]§r 你的权限不足，无法修改模拟玩家限额');
        return;
    }

    const parentForm = new ActionFormData()
        .title('模拟玩家限额配置器')
        .body('请选择以下选项进行配置。');

    // 辅助判断选择的是哪位玩家
    const playerSelectionIndexes: Record<number, string> = {};
    const allPlayers = world.getAllPlayers();
    parentForm.button('§9配置总限额');
    parentForm.button('§6配置已离线玩家');
    allPlayers.forEach((player, index) => {
        const playerName = player.name;
        if (playerName !== LIMIT_CONFIG_GLOBAL_CONFIG_KEY) {
            playerSelectionIndexes[index] = playerName;
            parentForm.button(playerName);
        } else {
            console.warn(invalidPlayerNameWarnText + '设置');
        }
    });

    const showParentForm = function () {
        // @ts-expect-error
        parentForm.show(cmdInfo.entity).then((result) => {
            if (!result.canceled) {
                // 读取之前的配置
                const limitConfig = world.getDynamicProperty(LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY);

                const parsedLimitConfig = parseConfig(limitConfig);
                // 判断是否选择了“配置总限额”
                if (result.selection === 0) {
                    const form = new ModalFormData()
                        .title('§4总§6限§4额§r配置')
                        .textField('限额上限', '无限制', {
                            tooltip: '指定总限制可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const limit = result.formValues[0];
                            const number = Number(limit);
                            if (isNaN(number) && limit !== '') {
                                cmdInfo.entity.sendMessage(invalidParameterWarnText);
                                return;
                            }

                            parsedLimitConfig[LIMIT_CONFIG_GLOBAL_CONFIG_KEY] = limit;
                            writeConfig(parsedLimitConfig);
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }

                // 判断是否选择了“配置已离线玩家”
                else if (result.selection === 1) {
                    const form = new ModalFormData()
                        .title('已离线玩家配置')
                        .textField('玩家名', '', {
                            tooltip: '要设置的已离线玩家名'
                        })
                        .textField('限额上限', '无限制', {
                            tooltip: '指定玩家可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const playerName = result.formValues[0];
                            const limit = result.formValues[1];
                            const number = Number(limit);
                            if (typeof playerName !== 'string'
                                || playerName.trim() === LIMIT_CONFIG_GLOBAL_CONFIG_KEY
                                || playerName.trim() === ''
                                || (isNaN(number) && limit !== '')) {
                                cmdInfo.entity.sendMessage(invalidParameterWarnText);
                                return;
                            }

                            parsedLimitConfig[playerName] = limit;
                            writeConfig(parsedLimitConfig);
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }

                // 如果选择的是特定玩家
                else {
                    const playerName = playerSelectionIndexes[/* 鬼知道为啥要这样写 */result.selection - 2];
                    const form = new ModalFormData()
                        .title(`玩家 §6${playerName}§r 的限额配置`)
                        .textField('限额上限', '无限制', {
                            tooltip: '指定玩家可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const limit = result.formValues[0];
                            const number = Number(limit);
                            if (isNaN(number) && limit !== '') {
                                cmdInfo.entity.sendMessage(invalidParameterWarnText);
                                return;
                            }

                            parsedLimitConfig[playerName] = limit;
                            writeConfig(parsedLimitConfig);
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }
            }
        });
    };
    showParentForm();
});
commandManager.registerCommand(['xepg', '配额配置', '配置配额', '限额配置', '配置限额'], cmd);