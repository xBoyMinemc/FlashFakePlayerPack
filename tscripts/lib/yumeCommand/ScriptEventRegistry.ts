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
    cannotHandledExceptionWaringText
} from "./CommandRegistry";

type ScriptEventID = `ffp:${string}`;

function getSourceLocation(e: ScriptEventCommandMessageAfterEvent): DimensionLocation {
    return {
        ...e.sourceEntity?.location ?? e.sourceBlock?.location ?? (
            () => {
                throw new TypeError('[模拟玩家] 无法获取位置');
            }
        )(),
        dimension: e.sourceEntity?.dimension ?? e.sourceBlock?.dimension ?? (
            () => {
                throw new TypeError('[模拟玩家] 无法获取位置');
            }
        )(),
    };
}

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
    const [_, prefix] = id.split(':');
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
        if (e instanceof CommandNotFoundError) {
            commandInfoNoArgs?.entity?.sendMessage(e.message);
        } else
            commandInfoNoArgs?.entity?.sendMessage(cannotHandledExceptionWaringText);
    }
}, { namespaces: ['ffp'] });