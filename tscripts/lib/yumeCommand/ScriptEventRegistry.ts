import {Player, ScriptEventCommandMessageAfterEvent, ScriptEventSource, system, Vector3} from "@minecraft/server";
import {cannotHandledExceptionWaringText, CommandInfo, commandParse} from "./CommandRegistry";

type ScriptEventHandler = (event:CommandInfo) => void;
type ScriptEventID = `ffp:${string}`;

function getSourceLocation(e: ScriptEventCommandMessageAfterEvent): Vector3 {
    return e.sourceEntity?.location ?? e.sourceBlock?.location ?? (
        () => {
            throw new TypeError('无法获取位置');
        }
    )();
}

function getCommandInfo(e: ScriptEventCommandMessageAfterEvent): CommandInfo {
    return {
        args: commandParse(e.message),
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
        console.log('construct')
        // 全局/scriptevent监听初始化
        system.afterEvents.scriptEventReceive.subscribe(e => {
            // @ts-ignore 我在运行时判断有没有你给我编译时抛错误无敌了
            if (this.scriptEventHandlersMap.size === 0 || !this.scriptEventHandlersMap.has(e.id)) {
                return;
            }

            let { id } = e;
            id = id.trim().toLowerCase();
            console.log('triggered')

            // 处理直接注册的handler
            Array.from(this.scriptEventHandlersMap.entries())
                .filter(
                    ([_id]) => _id === id
                )
                .map(v => /*值*/v[1])
                // 把获取到的所有handler执行
                .forEach(handlers => {
                    handlers?.forEach?.(handler => {
                        console.log(handler, id,  'call')
                        const cmdInfo = getCommandInfo(e)
                        handler(cmdInfo);
                    });
                });

            // 处理别名(alias)
            Array.from(this.alias.entries())
                .filter(
                    ([alias]) => id === alias
                )
                .map(v => this.scriptEventHandlersMap.get(v[1]))
                .forEach(handlers => {
                    handlers?.forEach?.(handler => {
                        console.log(handler, id, 'alias call`')
                        handler(getCommandInfo(e));
                    });
                });
        }, { namespaces: ['ffp'] });
    }

    public registerScriptEventHandler(
        id: ScriptEventID,
        callback: ScriptEventHandler
    ): ScriptEventHandler {
        console.log('register')
        // @ts-ignore
        id = id.toLowerCase();

        if (!this.scriptEventHandlersMap.has(id))
            this.scriptEventHandlersMap.set(id, new Set());

        this.scriptEventHandlersMap.get(id).add(callback);
        return callback;
    }

    public registerAlias(alias: ScriptEventID, targetID: ScriptEventID) {
        console.log('register alias')
        // @ts-ignore
        alias = alias.toLowerCase();

        if (!this.scriptEventHandlersMap.has(targetID)) {
            console.warn(cannotHandledExceptionWaringText);
        }
        this.alias.set(alias, targetID);

        // 666演都不演了
        // this.registerAlias('ffp:1', 'ffp:2')('ffp:3', 'ffp:4');
        return this.registerAlias;
    }
}