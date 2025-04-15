import type { PID } from "./types";

export function isPID(value: unknown): value is PID {
    return typeof value === 'number' &&
        Number.isInteger(value) &&
        value >= 0;
}
