import { ActionFormData, FormCancelationReason, ModalFormData } from "@minecraft/server-ui";
import { Command, commandManager } from "../../lib/yumeCommand/CommandRegistry";
import { Player, world } from "@minecraft/server";

export const SIMULATED_PLAYER_LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY = 'ffpp:simulated_player_limit_config';
export const SIMULATED_PLAYER_LIMIT_CONFIG_GLOBAL_CONFIG_KEY = '__global__';

const warnText = '[模拟玩家] 配置疑似被篡改，已修复。请检查最近有没有安装可疑行为包🤔';
const invalidKeyWarnText = '§4[模拟玩家]§r 输入非法参数，设置失败';

const cmd = new Command();
cmd.register(/* 验证是否是玩家触发的 */(cmdInfo) => cmdInfo?.isEntity && cmdInfo?.entity instanceof Player, (cmdInfo) => {
    // 如果是普通用户，则无法修改
    if (cmdInfo.entity.commandPermissionLevel < 1) {
        cmdInfo.entity.sendMessage('[模拟玩家]§6 你的权限不足，无法修改模拟玩家限额限制');
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
        playerSelectionIndexes[index] = player.name;
        parentForm.button('§f' + player.name);
    });

    function showParentForm() {
        // @ts-expect-error
        parentForm.show(cmdInfo.entity).then((result) => {
            if (!result.canceled) {
                // 读取之前的配置
                const limitConfig = world.getDynamicProperty(SIMULATED_PLAYER_LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY);

                const warn = function () {
                    // Oop! It's fake!
                    world.sendMessage(warnText);
                    console.warn(warnText);
                };

                // 如果读取到的配置不是字符串或无法解析，就警告用户
                let parsedLimitConfig = {};
                try {
                    if (typeof limitConfig === 'string') {
                        parsedLimitConfig = JSON.parse(limitConfig);
                        // 在这行注释之前绝对绝对不可以调用warn!
                    } else {
                        warn();
                    }
                } catch (e) {
                    // 判断是不是JSON.parse的错误
                    if (e instanceof SyntaxError) {
                        warn();
                    } else {
                        throw e;
                    }
                }

                // 判断是否选择了“配置总限额”
                if (result.selection === 0) {
                    const form = new ModalFormData()
                        .title('§6总§4限§6额§r配置')
                        .textField('限额上限', '无限制', {
                            tooltip: '指定总限制可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const limit = result.formValues[0];
                            if (typeof limit !== 'number' && limit !== '') {
                                cmdInfo.entity.sendMessage(invalidKeyWarnText);
                                return;
                            }

                            parsedLimitConfig[SIMULATED_PLAYER_LIMIT_CONFIG_GLOBAL_CONFIG_KEY] = limit;
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }

                // 判断是否选择了“配置已离线玩家”
                else if (result.selection === 1) {
                    const form = new ModalFormData()
                        .title('已离线玩家配置')
                        .textField('玩家名', '要设置的已离线玩家的名称')
                        .textField('限额上限', '无限制', {
                            tooltip: '指定玩家可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const playerName = result.formValues[0];
                            const limit = result.formValues[1];
                            if (typeof playerName !== 'string'
                                || playerName === SIMULATED_PLAYER_LIMIT_CONFIG_GLOBAL_CONFIG_KEY
                                || (typeof limit !== 'number' && limit !== '')) {
                                cmdInfo.entity.sendMessage(invalidKeyWarnText);
                                return;
                            }

                            parsedLimitConfig[playerName] = limit;
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }

                // 如果选择的是特定玩家
                else {
                    const playerName = playerSelectionIndexes[/* 鬼知道为啥要这样写 */result.selection];
                    const form = new ModalFormData()
                        .title(`玩家 §6${playerName}§r 的限额配置`)
                        .textField('限额上限', '无限制', {
                            tooltip: '指定玩家可创建的假人数量，留空表示无限制'
                        });
                    // @ts-ignore
                    form.show(cmdInfo.entity).then((result) => {
                        if (!result.canceled) {
                            const limit = result.formValues[0];
                            if (typeof limit !== 'number' && limit !== '') {
                                cmdInfo.entity.sendMessage(invalidKeyWarnText);
                                return;
                            }
                            console.log(playerName, playerSelectionIndexes[0], playerSelectionIndexes[1], playerSelectionIndexes[2]);

                            parsedLimitConfig[playerName] = limit;
                        } else if (result.cancelationReason === FormCancelationReason.UserClosed) {
                            showParentForm();
                        }
                    });
                }

                // 写上配置
                world.setDynamicProperty(SIMULATED_PLAYER_LIMIT_CONFIG_DYNAMIC_PROPERTY_KEY, JSON.stringify(parsedLimitConfig));
            }
        });
    }
    showParentForm();
});
commandManager.registerCommand('限额配置', cmd);