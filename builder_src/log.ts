export const logPrefix = '[FFPPPacker] '
export enum ANSI_ESCAPES {
    'red' = '\x1B[31m',
    'yellow' = '\x1B[33m'
}

class Logger {
    public info(...args: any[]) {
        console.log(logPrefix, ...args);
    }

    public warn(...args: any[]) {
        console.warn(ANSI_ESCAPES.yellow + ' ' + logPrefix, ...args);
    }

    public error(...args: any[]) {
        console.error(ANSI_ESCAPES.red + ' ' + logPrefix, ...args);
    }
}

export const log = new Logger();