import type { Executable, Context, Condition, Handler } from "./types";

export class Command implements Executable {
    private conditionToHandlersMap = new Map<Condition, Handler[]>();

    /**
     * 注册命令处理回调。
     * 
     * @param handler 注册的命令 handler，接受命令上下文对象。
     */
    register(handler: Handler): void;

    /**
     * 注册有条件约束的命令处理回调。
     * 用于实现命令的分支或重载。
     * 
     * @param condition 条件回调，接受命令上下文对象，返回一个布尔值，仅当返回布尔值为 true 时才会执行对应的 handler。
     * @param handler 命令处理回调，接受命令上下文对象。
     */
    register(condition: Condition, handler: Handler): void;
    register(conditionOrHandler: Condition | Handler, handler?: Handler): void {
        let condition: Condition;
        if (handler)
            condition = conditionOrHandler as Condition;
        else {
            handler = conditionOrHandler;

            // 如果未提供 condition, 使用永真条件
            condition = () => true;
        }

        if (!this.conditionToHandlersMap.has(condition))
            this.conditionToHandlersMap.set(condition, []);

        this.conditionToHandlersMap.get(condition)!.push(handler);
    }

    /**
     * 执行命令。
     * 
     * @param ctx 命令上下文。
     * 
     * @description
     * 按命令注册先后顺序，
     * 只有第一个满足条件的 handler 会被执行。
     */
    execute(ctx: Context): void {
        for (const [condition, handlers] of this.conditionToHandlersMap)
            if (condition(ctx)) {
                handlers.forEach(handler => handler(ctx));

                // 只执行首个条件满足的 handler
                break;
            }
    }
}
