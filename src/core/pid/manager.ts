import { world } from '@minecraft/server';
import type { PID } from './types';

export class PIDManager {
    private readonly scoreboardName = '##FlashPlayer##';
    private readonly scoreName = '##currentPID';

    constructor(private readonly initialValue: PID = 0 as PID) {}

    initialize(): void {
        if (!world.scoreboard.getObjective(this.scoreboardName))
            world.scoreboard.addObjective(this.scoreboardName);

        if (!world.scoreboard.getObjective(this.scoreboardName).hasParticipant(this.scoreName))
            world.scoreboard.getObjective(this.scoreboardName).setScore(this.scoreName, this.initialValue);
    }

    next(): PID {
        const pid = world.scoreboard.getObjective(this.scoreboardName).addScore(this.scoreName, 1) as PID;
        return pid;
    }

    reset(): PID {
        const currentPID = world.scoreboard.getObjective(this.scoreboardName).getScore(this.scoreName) as PID;
        world.scoreboard.getObjective(this.scoreboardName).setScore(this.scoreName, this.initialValue);
        return currentPID;
    }
}
