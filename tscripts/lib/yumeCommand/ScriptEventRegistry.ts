import {
    DimensionLocation,
    Player,
    ScriptEventCommandMessageAfterEvent,
    ScriptEventSource,
    system
} from "@minecraft/server";
import {cannotHandledExceptionWaringText, CommandInfo, commandParse} from "./CommandRegistry";

type ScriptEventHandler = (event:CommandInfo) => void;
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

function scriptEventArgsParse(
    idOrEvent:
        | ScriptEventID
        | ScriptEventCommandMessageAfterEvent,
    message?: string
): string[] {
    let id = idOrEvent instanceof ScriptEventCommandMessageAfterEvent
        ? idOrEvent.id
        : idOrEvent;
    message = message ?? (<ScriptEventCommandMessageAfterEvent>idOrEvent).message;
    
    const res = commandParse(message);
    res.unshift(id);
    return res
}

function getCommandInfo(e: ScriptEventCommandMessageAfterEvent): CommandInfo {
    return {
        args: scriptEventArgsParse(e),
        entity: e.sourceEntity instanceof Player ? e.sourceEntity : null,
        location: getSourceLocation(e),
        isEntity: e.sourceType === ScriptEventSource.Entity,
    };
}

export class ScriptEventRegistry {
    public get scriptEventsIDList() {
        return new Set(this.scriptEventHandlersMap.keys());
    }
    private scriptEventHandlersMap = new Map<ScriptEventID, Set<ScriptEventHandler>>;
    private alias = new Map<ScriptEventID, ScriptEventID>;

    //
    constructor() {
        // 全局/scriptevent监听初始化
        system.afterEvents.scriptEventReceive.subscribe(e => {
            if (this.scriptEventHandlersMap.size === 0 || !this.scriptEventHandlersMap.has(<ScriptEventID>e.id)) {
                return;
            }

            const execute = (handlers: Set<ScriptEventHandler>) => {
                if (handlers.size > 0) {
                    handlers.forEach(handler => {
                        handler(getCommandInfo(e))
                    });
                    (<Player>e.sourceEntity)?.playSound('note.bell');
                }
            }

            // 处理直接注册的handler
            Array.from(this.scriptEventHandlersMap.entries())
                .filter(
                    ([id]) => e.id === id
                )
                .map(v => /*值*/v[1])
                // 把获取到的所有handler执行
                .forEach(execute);

            // 处理别名(alias)
            Array.from(this.alias.entries())
                .filter(
                    ([alias]) => e.id === alias
                )
                .map(v => this.scriptEventHandlersMap.get(v[1]))
                .forEach(execute);
        }, { namespaces: ['ffp'] });
    }

    public registerScriptEventHandler<T extends ScriptEventHandler>(
        id: ScriptEventID,
        callback: T
    ): T {
        id = <ScriptEventID>id.toLowerCase();

        if (!this.scriptEventHandlersMap.has(id))
            this.scriptEventHandlersMap.set(id, new Set());

        this.scriptEventHandlersMap.get(id).add(callback);
        return callback;
    }

    public registerAlias(alias: ScriptEventID, targetID: ScriptEventID) {
        alias = <ScriptEventID>alias.toLowerCase();

        if (!this.scriptEventHandlersMap.has(targetID)) {
            console.warn(cannotHandledExceptionWaringText);
        }
        this.alias.set(alias, targetID);

        // 666演都不演了
        // this.registerAlias('ffp:1', 'ffp:2')('ffp:3', 'ffp:4');
        return this.registerAlias;
    }
}