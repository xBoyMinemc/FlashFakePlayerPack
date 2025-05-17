export class NotReadyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotReadyError";
    }
}

export class SimulatedPlayerNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SimulatedPlayerNotFoundError";
    }
}

export class ExistingSimulatedPlayersError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExistingSimulatedPlayersError";
    }
}
