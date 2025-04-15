import { world } from '@minecraft/server';
import type { PID } from './types';

export class PIDManager {
    constructor(private readonly initialValue: PID = 0 as PID) {}

    initialize(): void {
        if (!world.scoreboard.getObjective('##FlashPlayer##'))
            world.scoreboard.addObjective('##FlashPlayer##');

        if (!world.scoreboard.getObjective('##FlashPlayer##').hasParticipant('##currentPID'))
            world.scoreboard.getObjective('##FlashPlayer##').setScore('##currentPID', this.initialValue);
    }

    next(): PID {
        const pid = world.scoreboard.getObjective('##FlashPlayer##').addScore('##currentPID', 1) as PID;
        return pid;
    }

    reset(): PID {
        const currentPID = world.scoreboard.getObjective('##FlashPlayer##').getScore('##currentPID') as PID;
        world.scoreboard.getObjective('##FlashPlayer##').setScore('##currentPID', this.initialValue);
        return currentPID;
    }
}
