import { PIDManager, type PID } from "../pid";
import { Test, type SimulatedPlayer } from "@minecraft/server-gametest";
import SIGN from "@/constants/YumeSignEnum";
import { SimulatedPlayerNotFoundError, NotReadyError } from "./errors";
import type { Entity } from "@minecraft/server";
import type { AddSimulatedPlayerOptions, SpawnSimulatedPlayerOptions } from "./types";

export class SimulatedPlayerManager {
    private readonly initialSigns = [
        SIGN.YUME_SIM_SIGN,
        SIGN.AUTO_RESPAWN_SIGN
    ] as const;

    private _test: Test | null = null;
    private _initialized = false;

    private _pidToSimulatedPlayer = new Map<PID, SimulatedPlayer>();
    private _idToPid = new Map<string, PID>();

    constructor(private readonly pidManager: PIDManager = new PIDManager()) {}

    set test(test: Test) {
        this._test = test;
    }

    initialize() {
        // 记分板PID初始化
        this.pidManager.initialize();
        this._initialized = true;
    }

    get ready(): boolean {
        return this._initialized && Boolean(this._test);
    }

    get simulatedPlayers(): Map<PID, SimulatedPlayer> {
        return this._pidToSimulatedPlayer;
    }

    get simulatedPlayerIdToPidMap(): Map<string, PID> {
        return this._idToPid;
    }

    private generateName(pid: PID) {
        return `工具人-${pid}`;
    }

    private spawn({ name, location, dimension, nameTag }: SpawnSimulatedPlayerOptions): SimulatedPlayer {
        const simulatedPlayer = this._test!.spawnSimulatedPlayer({ x: 0, y: 8, z: 0 }, name);
        if (nameTag)
            simulatedPlayer.nameTag = nameTag;
        this.initialSigns.forEach(sign => simulatedPlayer.addTag(sign));
        try {
            //@ts-ignore
            simulatedPlayer.setSpawnPoint({ ...location, dimension });
            //@ts-ignore
            simulatedPlayer.teleport(location, { dimension });
        } catch (e) {
            simulatedPlayer.disconnect();
            throw e;
        }

        return simulatedPlayer;
    }

    add(options: AddSimulatedPlayerOptions) {
        if (!this.ready)
            throw new NotReadyError('call initialize() and set test first');

        const pid = this.pidManager.next();

        const simulatedPlayer = this.spawn({ ...options, name: options.name ?? this.generateName(pid) });

        this._pidToSimulatedPlayer.set(pid, simulatedPlayer);
        this._idToPid.set(simulatedPlayer.id, pid);
    }

    get(pid: PID): SimulatedPlayer | undefined;
    get(id: string): SimulatedPlayer | undefined;
    get(idOrPID: PID | string): SimulatedPlayer | undefined {
        if (typeof idOrPID === 'number') {
            return this._pidToSimulatedPlayer.get(idOrPID);
        } else {
            const pid = this.getPID(idOrPID);
            if (pid === undefined) return undefined;
            return this._pidToSimulatedPlayer.get(pid);
        }
    }

    has(pid: PID): boolean;
    has(id: string): boolean;
    has(simulatedPlayer: Entity): boolean;
    has(target: PID | string | Entity): boolean {
        if (typeof target === 'number')
            return this._pidToSimulatedPlayer.has(target);
        else if (typeof target === 'string')
            return this._idToPid.has(target);

        return this._idToPid.has(target.id);
    }

    getPID(id: string): PID | undefined {
        return this._idToPid.get(id);
    }

    remove(pid: PID): void;
    remove(simulatedPlayer: SimulatedPlayer): void;
    remove(pidOrSimulatedPlayer: PID | SimulatedPlayer): void {
        let pid: PID | undefined;
        let simulatedPlayer: SimulatedPlayer | undefined;

        if (typeof pidOrSimulatedPlayer === 'number') {
            pid = pidOrSimulatedPlayer;
            simulatedPlayer = this.get(pidOrSimulatedPlayer);
        } else {
            simulatedPlayer = pidOrSimulatedPlayer;
            pid = this.getPID(simulatedPlayer.id);
        }

        if (!simulatedPlayer || !pid)
            throw new SimulatedPlayerNotFoundError('SimulatedPlayer not found');

        simulatedPlayer.disconnect();

        this._idToPid.delete(simulatedPlayer.id);
        this._pidToSimulatedPlayer.delete(pid);
    }

    resetPID(): PID {
        return this.pidManager.reset();
    }
}
