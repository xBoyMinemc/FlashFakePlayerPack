import type {
    Dimension,
    DimensionLocation,
    Vector3
} from "@minecraft/server";
import type { Executable, CommandInfo, CommandCondition, CommandHandler } from "./types";

export function getLocationFromEntityLike(entity: {
    location: Vector3; dimension: Dimension;
}): DimensionLocation {
    return {
        ...entity.location, dimension: entity.dimension
    };
}

export class Command implements Executable {
    private conditionsHandlers = new Map<CommandCondition, CommandHandler[]>();

    /**
     * 注册命令处理回调。
     * 
     * @param handler 注册的命令 handler，接受命令信息对象。
     */
    register(handler: CommandHandler): void;

    /**
     * 注册有条件约束的命令处理回调。
     * 用于实现命令的分支或重载。
     * 
     * @param condition 条件回调，接受命令信息对象，返回一个布尔值，仅当返回布尔值为 true 时才会执行对应的 handler。
     * @param handler 命令处理回调，接受命令信息对象。
     */
    register(condition: CommandCondition, handler: CommandHandler): void;
    register(conditionOrHandler: CommandCondition | CommandHandler, handler?: CommandHandler): void {
        let condition: CommandCondition;
        if (handler)
            condition = conditionOrHandler as CommandCondition;
        else {
            handler = conditionOrHandler;

            // 如果未提供 condition, 使用永真条件
            condition = () => true;
        }

        if (!this.conditionsHandlers.has(condition))
            this.conditionsHandlers.set(condition, []);

        this.conditionsHandlers.get(condition)!.push(handler);
    }

    /**
     * 执行命令。
     * 
     * @param commandInfo 命令信息对象。
     * 
     * @description
     * 按命令注册先后顺序，
     * 只有第一个满足条件的 handler 会被执行。
     */
    execute(commandInfo: CommandInfo): void {
        for (const [condition, handlers] of this.conditionsHandlers)
            if (condition(commandInfo)) {
                handlers.forEach(handler => handler(commandInfo));

                // 只执行首个条件满足的 handler
                break;
            }
    }
}
