import {
    DimensionLocation,
    Player,
    ScriptEventCommandMessageAfterEvent,
    ScriptEventSource,
    system
} from "@minecraft/server";
import {
    commandManager,
    CommandNotFoundError,
    type CommandInfoNoArgs,
    cannotHandledExceptionWarningText
} from "./CommandRegistry";

const namespaces = ['ffp'];

type ScriptEventID = `ffp:${string}`;

class CannotGetLocationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CannotGetLocationError';
    }
}


function getSourceLocation(e: ScriptEventCommandMessageAfterEvent): DimensionLocation {
    return {
        ...e.sourceEntity?.location ?? e.sourceBlock?.location ?? (
            () => {
                throw new CannotGetLocationError('[模拟玩家] 无法获取位置');
            }
        )(),
        dimension: e.sourceEntity?.dimension ?? e.sourceBlock?.dimension ?? (
            () => {
                throw new CannotGetLocationError('[模拟玩家] 无法获取位置');
            }
        )(),
    };
}

function parseScriptEventString(event: ScriptEventCommandMessageAfterEvent): string;
function parseScriptEventString(id: ScriptEventID, message: string): string;
function parseScriptEventString(
    idOrEvent:
        | ScriptEventID
        | ScriptEventCommandMessageAfterEvent,
    message?: string
): string {
    const id = idOrEvent instanceof ScriptEventCommandMessageAfterEvent
        ? idOrEvent.id
        : idOrEvent;

    // 去除 namespace
    const [, prefix] = id.split(':');
    message ??= (<ScriptEventCommandMessageAfterEvent>idOrEvent).message;

    return `${prefix} ${message}`;
}

function getCommandInfoNoArgs(e: ScriptEventCommandMessageAfterEvent): CommandInfoNoArgs {
    return {
        entity: e.sourceEntity instanceof Player ? e.sourceEntity : null,
        location: getSourceLocation(e),
        isEntity: e.sourceType === ScriptEventSource.Entity,
    };
}

// 注册全局/scriptevent监听
system.afterEvents.scriptEventReceive.subscribe(e => {
    const commandInfoNoArgs = getCommandInfoNoArgs(e);
    const commandString = parseScriptEventString(e);

    try {
        commandManager.execute(commandString, commandInfoNoArgs);
    } catch (e) {
        console.error(e);
        if (e instanceof CommandNotFoundError)
            commandInfoNoArgs?.entity?.sendMessage(`[模拟玩家] 命令错误，找不到命令: ${e.commandName}`);
        else
            commandInfoNoArgs?.entity?.sendMessage(cannotHandledExceptionWarningText);
    }
}, { namespaces });