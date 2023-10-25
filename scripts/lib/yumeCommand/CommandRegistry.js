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
export class CommandRegistry {
    constructor(commandRegistrySign = 'funny') {
        this.commandsRegistryMap = new Map();
        this.commandsList = new Set();
        this.alias = new Map();
        this.commandRegistrySign = commandRegistrySign;
        this.commandsRegistryMap = new Map();
    }
    registerAlias(alias, commandName) {
        this.alias.set(alias, commandName);
        this.commandsList.add(alias);
    }
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
    executeCommand(commandName, cmdInfo) {
        this.commandsRegistryMap.get(this.alias.get(commandName) ?? commandName)?.forEach((callback) => callback(cmdInfo));
    }
    execute(commandText, cmdInfo) {
        const args = CommandRegistry.parse(commandText);
        this.executeCommand(args[0], { ...cmdInfo, args });
    }
    removeCommand(commandName, callback) {
        if (callback)
            this.commandsRegistryMap.get(commandName)?.delete(callback);
        else
            this.commandsRegistryMap.delete(commandName);
    }
}
CommandRegistry.parse = commandParse;
