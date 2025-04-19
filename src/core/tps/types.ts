import type { TPSMonitor } from "./monitor";

export interface TPSUpdateEvent {
    tps: number;
    tpsMonitor: TPSMonitor;
}