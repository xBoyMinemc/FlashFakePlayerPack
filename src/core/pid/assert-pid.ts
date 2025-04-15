import { isPID } from "./is-pid";
import type { PID } from "./types";

export function assertPID(value: number): asserts value is PID {
    if (!isPID(value)) {
        throw new Error(`Invalid PID value: ${value}`);
    }
}