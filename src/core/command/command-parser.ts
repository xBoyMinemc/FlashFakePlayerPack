import { InvalidInputError } from "./errors";

const regex = /"([^"]*)"|'([^']*)'|(\S+)/g; // 正则匹配所有单词或引号内的文本

/**
 * 解析命令字符串。
 *
 * @param input - 需要解析的命令输入字符串。
 * @returns 返回一个包含命令前缀和参数数组的对象。
 * @throws {InvalidInputError} 当输入无效时抛出异常。
 *
 * @example
 * ```typescript
 * console.log(parseCommandString("say player 'Hello World'"));
 * // { prefix: 'say', args: [ 'player', 'Hello World' ] }
 * ```
 */
export function parseCommandString(input: string): { prefix: string; args: string[]; } {
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
