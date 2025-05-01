import { system } from "@minecraft/server";
import { EventSignal } from "../event";
import type { TPSUpdateEvent } from "./types";

export class TPSMonitor {
    private calculatedTPS: number = 0;
    private tpsCount: number = 0;
    private currentSeconds: number | undefined;
    private runId: number | undefined;

    readonly tpsUpdate = new EventSignal<TPSUpdateEvent>();

    start(): boolean {
        if (this.isRunning) return false;

        this.runId = system.runInterval(() => this.update());
        return true;
    }

    stop(): boolean {
        if (!this.isRunning) return false;

        system.clearRun(this.runId);
        this.runId = undefined;
        return true;
    }

    get tps(): number {
        return this.calculatedTPS;
    }

    get isRunning(): boolean {
        return this.runId !== undefined;
    }

    private update(): void {
        this.tpsCount++;

        if (new Date().getSeconds() === this.currentSeconds) return;

        this.currentSeconds = new Date().getSeconds();
        this.calculatedTPS = this.tpsCount;
        this.tpsCount = 0;

        this.tpsUpdate.trigger({
            tps: this.tps,
            tpsMonitor: this
        });
    }
}