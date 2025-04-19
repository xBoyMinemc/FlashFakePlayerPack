import type { Player, DimensionLocation } from "@minecraft/server";
import type { SimulatedPlayer } from "@minecraft/server-gametest";

export interface Executable {
    execute: (commandInfo: CommandInfo) => void;
}

export interface CommandInfo {
    prefix: string;
    args: string[];
    entity?: Player;
    location?: DimensionLocation;
    isEntity?: boolean;
    sim?: SimulatedPlayer;
} // | Player | Dimension | Entity

export type CommandInfoNoArgs = Omit<CommandInfo, "args" | "prefix">;

export type CommandHandler = (commandInfo: CommandInfo) => void;

export type CommandCondition = (commandInfo: CommandInfo) => boolean
