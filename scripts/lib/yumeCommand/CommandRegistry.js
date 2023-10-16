// Parse command
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
    constructor(commandRegistrySign = 'funny') {
        this.commandsRegistryMap = new Map();
        this.commandsList = new Set();
        this.alias = new Map();
        this.commandRegistrySign = commandRegistrySign;
        this.commandsRegistryMap = new Map();
    }
    // registerAlias
    registerAlias(alias, commandName) {
        this.alias.set(alias, commandName);
        this.commandsList.add(alias);
    }
    // registerCommand
    registerCommand(commandName, callback) {
        if (!callback)
            return this.commandsRegistryMap.set(commandName, new Set());
        if (this.alias.has(commandName))
            this.alias.delete(commandName);
        if (!this.commandsRegistryMap.has(commandName))
            this.commandsRegistryMap.set(commandName, new Set());
        this.commandsList.add(commandName);
        return this.commandsRegistryMap.get(commandName).add(callback);
    }
    // executeCommand
    executeCommand(commandName, cmdInfo) {
        this.commandsRegistryMap.get(this.alias.get(commandName) ?? commandName)?.forEach((callback) => callback(cmdInfo));
        // 感谢 .?  我不需要为判空做try-catch
        // if (this.commands.has(commandName)){
        //     const callbacks = this.commands.get(commandName);
        //     callbacks.forEach((callback:Function) => callback(...args) );
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }
    execute(commandText, cmdInfo) {
        const args = CommandRegistry.parse(commandText);
        this.executeCommand(args[0], { ...cmdInfo, args });
    }
    // removeCommand
    removeCommand(commandName, callback) {
        if (callback)
            this.commandsRegistryMap.get(commandName)?.delete(callback);
        else
            this.commandsRegistryMap.delete(commandName);
        // if (this.commands.has(commandName)){
        //     if(this.commands.get(commandName).delete(callback)){
        //         return true
        //     }
        //         console.error('Command '+commandName+' not has this callback.')
        //         return false
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }
}
CommandRegistry.parse = commandParse;
// const {executeCommand, registerCommand, removeCommand} = new CommandRegistry();
// create a CommandRegistry object
// const commandRegistry: CommandRegistry = new CommandRegistry();
// Registry command
// function sayHello({args:string[],entity:Entity|Player|Dimension,location?:Vector3,isEntity:boolean,commandName:string}) {
//         entity.sendMessage(`Hello, ${args}!`);
// }
//
// function sayGoodbye(name) {
//         console.log(`Goodbye, ${name}!`);
// }
//
// commandRegistry.registerCommand('hello', sayHello);
// commandRegistry.registerAlias('hi', 'hello');
// commandRegistry.registerCommand('goodbye', sayGoodbye);
//
// Execute command
// commandRegistry.executeCommand('hello', {args:string[],entity:Entity|Player|Dimension,location?:Vector3,isEntity:boolean,commandName:string}); // 输出：Hello, Alice!
// commandRegistry.executeCommand('goodbye', {args:string[],entity:Entity|Player|Dimension,location?:Vector3,isEntity:boolean,commandName:string});   // 输出：Goodbye, Bob!
//
// Removed command
// commandRegistry.removeCommand('hello', sayHello);
//
// try ti execute the command again
// commandRegistry.executeCommand('hello', {args:string[],entity:Entity|Player|Dimension,location?:Vector3,isEntity:boolean,commandName:string});     // 不会有任何输出，因为已经移除了 sayHello 回调
