import {
    EntityEventOptions,
    Entity,
    Vector3,
    type EntityDieAfterEvent,
} from "@minecraft/server";


//逆码的，乱起来了
import { SimulatedPlayer,
} from "@minecraft/server-gametest";

export class initializedEvent {}
export  class initializedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when this initialized.
     * @param callback
     * @param options?: initializedEvent
     */
    subscribe(callback: (arg: initializedEvent) => void): (arg: initializedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when this initialized.
     * @param callback
     */
    unsubscribe(callback: (arg: initializedEvent) => void): void;
    trigger(initializedEvent: initializedEvent): void;
    // protected constructor();
}
export class spawnedEvent {
    // a spawned SimulatedPlayer Entity
    spawnedSimulatedPlayer : SimulatedPlayer;
    // PID
    PID : number;
}
export  class spawnedEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a spawned SimulatedPlayer Entity.
     * @param callback
     * @param options?: spawnedEvent
     */
    subscribe(callback: (arg: spawnedEvent) => void): (arg: spawnedEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a spawned SimulatedPlayer Entity.
     * @param callback
     */
    unsubscribe(callback: (arg: spawnedEvent) => void): void;
    trigger(initializedEvent: spawnedEvent): void;
    // protected constructor();
}
