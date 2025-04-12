export class CommandError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CommandError";
    }
}

export class InvalidInputError extends CommandError {
    constructor(public input: string) {
        super(`Invalid input: ${input}`);
        this.name = "InvalidInputError";
    }
}

export class CommandAlreadyExistsError extends CommandError {
    constructor(public commandName: string) {
        super(`Command ${commandName} already exists`);
        this.name = "CommandAlreadyExistsError";
    }
}

export class CommandNotFoundError extends CommandError {
    constructor(public commandName: string) {
        super(`Command ${commandName} not found`);
        this.name = "CommandNotFoundError";
    }
}
