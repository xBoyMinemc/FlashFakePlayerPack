export const logPrefix1 = '[FFPPBuilder'
export const endsOfLogPrefix = ']';
export const logPrefix2 = logPrefix1 + endsOfLogPrefix;
export enum ANSI_ESCAPES {
    'red' = '\x1B[31m',
    'yellow' = '\x1B[33m',
    'reset' = '\x1B[0m'
}

class Logger {
    public info(...args: any[]) {
        console.log(logPrefix2, ...args);
    }

    public warn(...args: any[]) {
        args.push(ANSI_ESCAPES.reset);
        console.warn(ANSI_ESCAPES.yellow + ' ' + logPrefix1 + ' WARN' + endsOfLogPrefix, ...args);
    }

    public error(...args: any[]) {
        args.push(ANSI_ESCAPES.reset);
        console.error(ANSI_ESCAPES.red + ' ' + logPrefix1 + ' ERROR' + endsOfLogPrefix, ...args);
    }

    public errorAndExit(...args: any[]): never {
        this.error(...args);
        process.exit(1);
    }
}

export const log = new Logger();