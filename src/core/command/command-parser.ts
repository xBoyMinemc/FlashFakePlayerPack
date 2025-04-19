import { InvalidInputError } from "./errors";

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
