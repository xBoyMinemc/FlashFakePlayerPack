import type { SimulatedPlayer } from "@minecraft/server-gametest";

export interface SimulatedPlayerListElement {
    player: SimulatedPlayer,
    pid: number
}
/**
 * {@link simulatedPlayers}
 */
export class SimulatedPlayerList {
    public readonly list = new WhatCanIWriteOnThereSet();

    append(simulatedPlayer: SimulatedPlayer, pid: number) {
        this.list.add({
            player: simulatedPlayer,
            pid
        });
    }

    removeByPID(pid: number) {
        for (const item of this.list) {
            if (item.pid === pid) {
                this.list.delete(item);
                return;
            }
        }
    }

    /**
     * @returns {@link SimulatedPlayer}
     */
    getByPID(pid: number): ReturnType<WhatCanIWriteOnThereSet["getByPID"]> {
        return this.list.getByPID(pid);
    }

    /**
     * @returns number[]
     */
    getPIDList(): ReturnType<WhatCanIWriteOnThereSet["getPIDList"]> {
        return this.list.getPIDList();
    }

    /*removeByUUID(uuid: string) {
        for (const item of this.list) {
            if (item.uuid === uuid) {
                this.list.delete(item);
                return;
            }
        }
    }*/
}
class WhatCanIWriteOnThereSet extends Set<SimulatedPlayerListElement> {
    getByPID(pid: number): SimulatedPlayerListElement["player"] | undefined {
        for (const item of this) {
            if (item.pid === pid) {
                return item.player;
            }
        }
        return undefined;
    }

    /*getByUUID(uuid: string): SimulatedPlayerListElement["player"] | undefined {
        for (const item of this) {
            if (item.uuid === uuid) {
                return item.player;
            }
        }
        return undefined;
    }*/

    getPIDList(): number[] {
        const pidList: number[] = [];
        for (const item of this) {
            pidList.push(item.pid);
        }
        return pidList;
    }

    /*getUUIDList(): string[] {
        const uuidList: string[] = [];
        for (const item of this) {
            uuidList.push(item.uuid);
        }
        return uuidList;
    }*/
}