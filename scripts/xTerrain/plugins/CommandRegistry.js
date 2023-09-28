export function commandParse(command) {
    const tokens = [];
    let currentToken = '';
    let insideQuotes = false;
    for (let i = 0; i < command.length; i++) {
        const char = command[i];
        if (char === ' ' && !insideQuotes) {
            if (currentToken !== '') {
                tokens.push(currentToken);
                currentToken = '';
            }
        }
        else if (char === '"') {
            if (insideQuotes) {
                tokens.push(currentToken);
                currentToken = '';
                insideQuotes = false;
            }
            else {
                insideQuotes = true;
            }
        }
        else {
            currentToken += char;
        }
    }
    if (currentToken !== '') {
        tokens.push(currentToken);
    }
    return tokens;
}
// const command = 'cmdHead arg1  "arg2" "arg3" \"_arg4\" 7 8 ~-5 ';
// const tokens = commandParse(command);
// console.log(tokens);
// tokens => [ 'cmdHead', 'arg1', 'arg2', 'arg3', '_arg4', '7', '8', '~-5' ]
export class CommandRegistry {
    constructor(CommandRegistrySign = 'funny') {
        this.commands = new Map();
        this.CommandRegistrySign = CommandRegistrySign;
        this.commands = new Map();
    }
    // 注册命令
    registerCommand(commandName, callback) {
        if (!Boolean(callback))
            return this.commands.set(commandName, new Set());
        if (!this.commands.has(commandName))
            return this.commands.set(commandName, new Set());
        return this.commands.get(commandName).add(callback);
    }
    // 执行命令
    executeCommand(commandName, commandInfo) {
        this.commands.get(commandName)?.forEach((callback) => callback(commandInfo));
        // if (this.commands.has(commandName)){
        //     const callbacks = this.commands.get(commandName);
        //     callbacks.forEach((callback:Function) => callback(...args) );
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }
    // 移除命令
    removeCommand(commandName, callback) {
        this.commands.get(commandName)?.delete(callback);
        // if (this.commands.has(commandName)){
        //     if(this.commands.get(commandName).delete(callback)){
        //         return true
        //     }
        //         console.error(`Command "${commandName}" not has this callback.`);
        //         return false
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }
}
CommandRegistry.parse = commandParse;
// const {executeCommand, registerCommand, removeCommand} = new CommandRegistry();
// 创建一个命令注册器实例
const commandRegistry = new CommandRegistry();
// 注册一些命令
// function sayHello(name) {
//         console.log(`Hello, ${name}!`);
// }
//
// function sayGoodbye(name) {
//         console.log(`Goodbye, ${name}!`);
// }
//
// commandRegistry.registerCommand('hello', sayHello);
// commandRegistry.registerCommand('goodbye', sayGoodbye);
//
// // 执行命令
// commandRegistry.executeCommand('hello', 'Alice'); // 输出：Hello, Alice!
// commandRegistry.executeCommand('goodbye', 'Bob');   // 输出：Goodbye, Bob!
//
// // 移除命令
// commandRegistry.removeCommand('hello', sayHello);
//
// // 再次执行命令
// commandRegistry.executeCommand('hello', 'Eve');     // 不会有任何输出，因为已经移除了 sayHello 回调
