import { parseCommandString } from "./command-parser";
import { CommandAlreadyExistsError, CommandNotFoundError } from "./errors";
import type { Executable, Handler, BaseContext } from "./types";

/**
 * @example
 * ```typescript
 * // Instantiate the Command
 * const command = new Command();
 * 
 * // Handle no arguments
 * command.register(({ args }) => args.length === 0, ({ args }) => {
 *     console.log('Hello, world');
 * });
 * 
 * // Handle one argument
 * command.register(({ args }) => args.length === 1, ({ args }) => {
 *     console.log(`Hello, ${args[0]}`);
 * });
 * 
 * // Handle any other case
 * command.register(({ args }) => {
 *     console.log(`Hello, ${args.join(' ')}`);
 * });
 * 
 * // Register the Command to the Command Manager
 * commandManager.add(['hello', 'hi'], command);
 * 
 * // Execute the Command
 * commandManager.execute('hello world');
 * ```
 */
class CommandManager {
    private prefixToHandlerMap = new Map<string, Handler>();

    /**
     * 注册命令实例。
     * 
     * @param prefixes - 触发该命令的前缀字符串或字符串数组。
     * @param rawHandler - 要注册的 handler，可以是函数或实现了 `Executable` 接口的对象。
     * 
     * @throws {CommandAlreadyExistsError} 如果给定前缀已被注册。
     * 
     * @example
     * ```typescript
     * add(['假人生成', '假人创建'], spawn);
     * ```
     */
    register(prefixes: string | string[], rawHandler: Executable | Handler): void {
        const prefixesArray = (Array.isArray(prefixes) ? prefixes : [prefixes])
            .map(prefix => prefix.toLowerCase());

        const normalizedHandler = this.normalizeHandler(rawHandler);;

        for (const prefix of prefixesArray) {
            if (this.prefixToHandlerMap.has(prefix))
                throw new CommandAlreadyExistsError(prefix);

            this.prefixToHandlerMap.set(prefix, normalizedHandler);
        }
    }

    /**
     * 将 handler 标准化，确保始终以函数形式返回。
     * 如果提供的 handler 是一个带有 `execute` 方法的对象，
     * 则将 `execute` 方法绑定到该对象并以函数形式返回。
     * 
     * @param rawHandler - 要标准化的 handler ，可以是函数或实现了 `Executable` 接口的对象。
     * @returns 一个可以作为 handler 执行的函数。
     */
    private normalizeHandler(rawHandler: Executable | Handler): Handler {
        return typeof rawHandler === 'function'
            ? rawHandler
            : rawHandler.execute.bind(rawHandler);
    }

    /**
     * 取消注册命令。
     * 
     * @param prefixes - 要取消注册的命令前缀字符串或字符串数组。
     * @throws {CommandNotFoundError} 如果给定前缀未注册。
     */
    unregister(prefixes: string | string[]): void {
        const prefixesArray = (Array.isArray(prefixes) ? prefixes : [prefixes])
            .map(prefix => prefix.toLowerCase());

        for (const prefix of prefixesArray) {
            if (!this.prefixToHandlerMap.has(prefix))
                throw new CommandNotFoundError(prefix);

            this.prefixToHandlerMap.delete(prefix);
        }
    }

    /**
     * 处理字符串命令并执行。
     * 
     * @param commandString - 要执行的完整命令字符串。
     * @param baseContext - 初始命令上下文。
     * 
     * @throws {CommandNotFoundError} 如果命令不存在。
     * 
     * 该方法首先解析命令字符串，提取命令前缀和参数数组，
     * 然后将这些信息用于执行相应的命令。
     */
    execute(commandString: string, baseContext?: BaseContext): void;

    /**
     * 执行指定命令
     * 
     * @param prefix 命令前缀。
     * @param args 命令参数。
     * @param baseContext 初始命令上下文。
     * 
     * @throws {CommandNotFoundError} 如果命令不存在。
     */
    execute(prefix: string, args: string[], baseContext: BaseContext): void;

    execute(commandStringOrPrefix: string, argsOrBaseContext: BaseContext | string[] = {}, baseContext?: BaseContext): void {
        if (Array.isArray(argsOrBaseContext))
            this.executeCommand(commandStringOrPrefix, argsOrBaseContext, baseContext!);
        else
            this.executeString(commandStringOrPrefix, argsOrBaseContext);
    }

    private executeCommand(prefix: string, args: string[], baseContext: BaseContext): void {
        prefix = prefix.toLowerCase();
        const command = this.prefixToHandlerMap.get(prefix);
        if (!command)
            throw new CommandNotFoundError(prefix);

        // ding~
        // 都有?.了你还用&&
        baseContext?.player?.playSound?.('note.bell');

        command({ prefix, args, ...baseContext });
    }

    private executeString(commandString: string, baseContext: BaseContext = {}): void {
        const { prefix, args } = parseCommandString(commandString);

        this.executeCommand(prefix, args, baseContext);
    }

    /**
     * 已注册的所有命令前缀。
     * 
     * @example
     * ```typescript
     * console.log(commandManager.prefixes); // ['假人生成', '假人创建']
     * ```
     */
    get prefixes(): string[] {
        return Array.from(this.prefixToHandlerMap.keys());
    }
}

// 导出实例（单例模式）
export const commandManager = new CommandManager();
