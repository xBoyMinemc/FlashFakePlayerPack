import { InvalidInputError, CommandAlreadyExistsError, CommandNotFoundError } from "./errors";
import type { Executable, CommandHandler, CommandInfoNoArgs } from "./types";

export function parseCommandString(input: string): { prefix: string; args: string[]; } {
    const regex = /"([^"]*)"|'([^']*)'|(\S+)/g; // 正则匹配所有单词或引号内的文本
    const parts = [];
    let match: RegExpMatchArray | null;

    while (match = regex.exec(input)) {
        // 将捕获组中的内容添加到结果数组中
        parts.push(match[1] ?? match[2] ?? match[3]);
    }

    if (parts.length === 0)
        throw new InvalidInputError(input);

    // 性能略差于 const prefix = parts.shift(); 但可读性更佳
    const [prefix, ...args] = parts;
    return { prefix, args };
}

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
 * commandManager.registerCommand(['hello', 'hi'], command);
 * 
 * // Execute the Command
 * commandManager.execute('hello world');
 * ```
 */
class CommandManager {
    private parseCommandString = parseCommandString;
    private commandMap = new Map<string, CommandHandler>();

    /**
     * 注册命令实例。
     * 
     * @param prefixes - 触发该命令的前缀字符串或字符串数组。
     * @param command - 要注册的命令对象或函数。
     * 
     * @throws {CommandAlreadyExistsError} 当给定的前缀已被注册时会抛出错误。
     * 
     * @example
     * ```typescript
     * registerCommand(['假人生成', '假人创建'], spawn);
     * ```
     */
    registerCommand(prefixes: string | string[], command: Executable | CommandHandler): void {
        const prefixesArray = (Array.isArray(prefixes) ? prefixes : [prefixes])
            .map(prefix => prefix.toLowerCase());

        let commandHandler: CommandHandler;

        if (typeof command === 'function')
            commandHandler = command;
        else if (typeof command.execute === 'function')
            commandHandler = command.execute.bind(command);
        else
            throw new Error('Command must be a function or an object conforming to Executable interface.');

        for (const prefix of prefixesArray) {
            if (this.commandMap.has(prefix))
                throw new CommandAlreadyExistsError(prefix);

            this.commandMap.set(prefix, commandHandler);
        }
    }

    /**
     * 取消注册命令。
     * 
     * @param prefixes - 要取消注册的命令前缀字符串或字符串数组。
     * @throws {CommandNotFoundError} 当给定的前缀未被注册时会抛出错误。
     */
    unregisterCommand(prefixes: string | string[]): void {
        const prefixesArray = (Array.isArray(prefixes) ? prefixes : [prefixes])
            .map(prefix => prefix.toLowerCase());

        for (const prefix of prefixesArray) {
            if (!this.commandMap.has(prefix))
                throw new CommandNotFoundError(prefix);

            this.commandMap.delete(prefix);
        }
    }

    /**
     * 执行指定命令
     * 
     * @param prefix 命令前缀。
     * @param args 命令参数。
     * @param commandInfoNoArgs 命令信息。
     * 
     * @throws {CommandNotFoundError} 如果命令不存在。
     */
    executeCommand(prefix: string, args: string[], commandInfoNoArgs: CommandInfoNoArgs): void {
        prefix = prefix.toLowerCase();
        const command = this.commandMap.get(prefix);
        if (!command)
            throw new CommandNotFoundError(prefix);

        // ding~
        // 都有?.了你还用&&
        commandInfoNoArgs?.entity?.playSound?.('note.bell');

        command({ prefix, args, ...commandInfoNoArgs });
    }

    /**
     * 处理字符串命令并执行。
     * 
     * @param commandString - 要执行的完整命令字符串。
     * @param commandInfoNoArgs - 命令信息。
     * 
     * @throws {CommandNotFoundError} 如果命令不存在。
     * 
     * 该方法首先解析命令字符串，提取命令前缀和参数数组，
     * 然后将这些信息用于执行相应的命令。
     */
    execute(commandString: string, commandInfoNoArgs: CommandInfoNoArgs = {}): void {
        const { prefix, args } = this.parseCommandString(commandString);

        this.executeCommand(prefix, args, commandInfoNoArgs);
    }

    /**
     * 获取已注册的所有命令前缀。
     * 
     * @returns 返回一个字符串数组，包含所有已注册的命令前缀。
     */
    listRegisteredPrefixes(): string[] {
        return Array.from(this.commandMap.keys());
    }
}

// 导出实例（单例模式）
export const commandManager = new CommandManager();
