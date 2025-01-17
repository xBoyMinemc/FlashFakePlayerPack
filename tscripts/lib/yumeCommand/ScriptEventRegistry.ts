import {Player, ScriptEventSource, system} from "@minecraft/server";
import {CommandInfo, commandParse} from "./CommandRegistry";

type ScriptEventHandler = (event:CommandInfo) => void;
type ScriptEventID = `flash_fake_player:${string}`;

export class ScriptEventRegistry {
    public get scriptEventsIDList() {
        return new Set(this.scriptEventsMap.keys());
    }
    private scriptEventsMap: Map<ScriptEventID, Set<ScriptEventHandler>>;
    constructor() {
        // 全局/scriptevent监听初始化
        system.afterEvents.scriptEventReceive.subscribe(e => {
            // @ts-ignore 我在运行时判断有没有你给我编译时抛错误无敌了
            if (this.scriptEventsMap.size === 0 || !this.scriptEventsMap.has(e.id)) {
                return;
            }

            const filterScriptEventHandlers =
                Array.from(this.scriptEventsMap.entries())
                    .filter(
                        ([id, _handler]) => e.id === id
                    )
                    .map(v => /*值*/v[1]);

            filterScriptEventHandlers.forEach(handlers => {
                handlers.forEach(handler => {
                    handler({
                        args: commandParse(e.message),
                        entity: e.sourceEntity instanceof Player ? e.sourceEntity : null,
                        location: e.sourceEntity.location,
                        isEntity: e.sourceType === ScriptEventSource.Entity,
                    });
                });
            });
        }, { namespaces: ['flash_fake_player'] });
    }

}