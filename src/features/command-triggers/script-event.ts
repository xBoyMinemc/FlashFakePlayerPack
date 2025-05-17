import {
    Player,
    ScriptEventCommandMessageAfterEvent,
    system,
    type Dimension,
    type Vector3
} from "@minecraft/server";
import {
    commandManager,
    CommandNotFoundError,
    type BaseContext
} from "@/core/command";
import { Messages } from "@/constants";

const namespaces = ['ffp'];

type ScriptEventID = `ffp:${string}`;

class CannotGetLocationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CannotGetLocationError';
    }
}


function getSourceLocation(e: ScriptEventCommandMessageAfterEvent): { location: Vector3; dimension: Dimension; } {
    const getRequiredProp = <T>(getter: () => T | undefined) => {
        const value = getter();
        if (!value) throw new CannotGetLocationError('[模拟玩家] 无法获取位置');
        return value;
    };

    return {
        location: getRequiredProp(() => e.sourceEntity?.location ?? e.sourceBlock?.location),
        dimension: getRequiredProp(() => e.sourceEntity?.dimension ?? e.sourceBlock?.dimension)
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

function getBaseContext(e: ScriptEventCommandMessageAfterEvent): BaseContext {
    const { location, dimension } = getSourceLocation(e);
    return {
        player: e.sourceEntity instanceof Player ? e.sourceEntity : undefined,
        location: location,
        dimension: dimension,
    };
}

// 注册全局/scriptevent监听
system.afterEvents.scriptEventReceive.subscribe(e => {
    const baseContext = getBaseContext(e);
    const commandString = parseScriptEventString(e);

    try {
        commandManager.execute(commandString, baseContext);
    } catch (e) {
        console.error(e);
        if (e instanceof CommandNotFoundError)
            baseContext?.player?.sendMessage(`[模拟玩家] 命令错误，找不到命令: ${e.commandName}`);
        else
            baseContext?.player?.sendMessage(Messages.UNHANDLED_EXCEPTION);
    }
}, { namespaces });