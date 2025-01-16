import { system, Player, Vector3, ScriptEventCommandMessageAfterEvent } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

export interface commandInfo {
    args: string[],
    entity?: Player,
    location?: Vector3,
    isEntity?: boolean,
    sim?: SimulatedPlayer
} // | Player | Dimension | Entity
export interface commandInfoNoArgs {
    entity?: Player,
    location?: Vector3,
    isEntity?: boolean,
    sim?: SimulatedPlayer
}

// Parse command
export function commandParse(command:string):string[] {
    const tokens = [];
    let currentToken = '';
    let insideQuotes = false;

    //  又不是不能用
    for (let i = 0; i < command.length; i++) {
        const char = command[i];

        if (char === ' ' && !insideQuotes) {
            if (currentToken !== '') {
                tokens.push(currentToken);
                currentToken = '';
            }
        } else if (char === '"') {
            if (insideQuotes) {
                tokens.push(currentToken);
                currentToken = '';
                insideQuotes = false;
            } else {
                insideQuotes = true;
            }
        } else {
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

export const internalExceptionWaringText = '[模拟玩家] 出现内部异常，已尝试处理，请在GitHub进行反馈以免再次出现问题';
type ScriptEventHandler = (event:ScriptEventCommandMessageAfterEvent) => void;
type ScriptEventID = `flash_fake_player:${string}`;

export class CommandRegistry {
    private commandsRegistryMap :Map<string,Set<Function>> = new Map();
    public commandsList = new Set<string>()
    public commandRegistrySign :string;
    static parse = commandParse;
    private  alias = new Map<string,string>();
    public scriptEventsIDList = new Set<string>();
    private scriptEventsHandlers: ({
        id: ScriptEventID;
        handler: ScriptEventHandler;
    })[] = [];


    constructor(commandRegistrySign='funny') {
        this.commandRegistrySign  = commandRegistrySign;
        this.commandsRegistryMap  = new Map();

        // 全局/scriptevent监听初始化
        system.afterEvents.scriptEventReceive.subscribe(e => {
            if (this.scriptEventsIDList.size === 0 && !this.scriptEventsIDList.has(e.id)) {
                return;
            }

            const handlers = this.scriptEventsHandlers.filter(
                v => {
                    if (!this.scriptEventsIDList.has(v.id)) {
                        // 感觉这样的提示有点太高估用户了，所以就改成了下面这种
                        // console.warn('[模拟玩家] 正在遍历的scriptEventsHandlers项的id属性在scriptEventsIDList中不存在');
                        console.warn(internalExceptionWaringText);

                        return false;
                    }

                    return e.id === v.id;
                }
            ).map(v => v.handler);

            handlers.forEach(handler => handler(e));
        }, { namespaces: ['flash_fake_player'] });
    }

    // registerAlias
    registerAlias( alias:string ,commandName:string) {
        this.alias.set(alias,commandName)
        this.commandsList.add(alias)
    }

    // registerCommand
    registerCommand(commandName:string, callback?:(commandInfoObject:commandInfo)=>void) {
        if(!callback)
            return this.commandsRegistryMap.set(commandName,new Set());
        if(this.alias.has(commandName))
            this.alias.delete(commandName)
        if (!this.commandsRegistryMap.has(commandName))
            this.commandsRegistryMap.set(commandName,new Set());

        this.commandsList.add(commandName)
        return this.commandsRegistryMap.get(commandName).add(callback);
    }

    registerScriptEventCommand(id:ScriptEventID, callback?:ScriptEventHandler) {
        this.scriptEventsIDList.add(id);
        // 别误解了，这样做是可以实现一个id多个handler
        this.scriptEventsHandlers.push({id, handler: callback});
    }

    // executeCommand
    executeCommand(commandName:string, cmdInfo:commandInfo) {
        // ding~
        cmdInfo.entity && cmdInfo.entity.playSound && cmdInfo.entity.playSound('random.levelup',{pitch:8+Math.floor(Math.random()*12)})

        this.commandsRegistryMap.get(
            this.alias.get(commandName)??commandName
        )?.forEach?.((callback:Function) => callback(cmdInfo) )
        // 感谢 .?  我不需要为判空做try-catch
        // ↑e你确定这里不需要俩?.

        // if (this.commands.has(commandName)){
        //     const callbacks = this.commands.get(commandName);
        //     callbacks.forEach((callback:Function) => callback(...args) );
        // }
        // else
        //     console.error(`Command "${commandName}" not found.`);
    }

    execute(commandText:string,cmdInfo:commandInfoNoArgs){
        const args = CommandRegistry.parse(commandText)
        this.executeCommand(args[0],{...cmdInfo,args})
    }

    // removeCommand
    removeCommand(commandName:string, callback:Function) {
        if(callback)
            this.commandsRegistryMap.get(commandName)?.delete(callback)
        else
            this.commandsRegistryMap.delete(commandName)
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

    showList() {
        return Array.from(this.commandsList.keys())
            .concat(Array.from(this.alias.keys())).join('\u000a')
    }

}
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
