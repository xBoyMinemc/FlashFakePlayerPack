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
        this.commands = new Map();
        this.alias = new Map();
        this.commandRegistrySign = commandRegistrySign;
        this.commands = new Map();
    }
    // registerAlias
    registerAlias(alias, commandName) {
        return this.alias.set(alias, commandName);
    }
    // registerCommand
    registerCommand(commandName, callback) {
        if (!callback)
            return this.commands.set(commandName, new Set());
        if (this.alias.has(commandName))
            this.alias.delete(commandName);
        if (!this.commands.has(commandName))
            return this.commands.set(commandName, new Set());
        return this.commands.get(commandName).add(callback);
    }
    // executeCommand
    executeCommand(commandName, commandInfo) {
        this.commands.get(this.alias.get(commandName) ?? commandName)?.forEach((callback) => callback(commandInfo));
        // if (this.commands.has(commandName)){
        //     const callbacks = this.commands.get(commandName);
        //     callbacks.forEach((callback:Function) => callback(...args) );
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }
    // removeCommand
    removeCommand(commandName, callback) {
        this.commands.get(commandName)?.delete(callback);
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
