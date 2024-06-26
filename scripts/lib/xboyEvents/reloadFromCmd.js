﻿import { system } from "@minecraft/server";
import EventSignal from "./EventSignal";
class reloadFromCmdEvents extends EventSignal {
    constructor() {
        super(...arguments);
        this.players = new Set();
        this.restart = () => {
            this.players.clear();
            world.getAllPlayers().forEach((_) => reloadFromCmd.players.add(_.id));
        };
    }
}
const reloadFromCmd = new reloadFromCmdEvents();
world.events.playerJoin.subscribe(event => reloadFromCmd.players.add(event.playerId));
world.events.playerLeave.subscribe(event => reloadFromCmd.players.delete(event.playerId));
system.runInterval(() => {
    const onlinePlayers = world.getAllPlayers();
    if (reloadFromCmd.players.size !== onlinePlayers.length || !onlinePlayers.every((_) => reloadFromCmd.players.has(_.id))) {
        reloadFromCmd.trigger(null);
        reloadFromCmd.restart();
    }
});
export default reloadFromCmd;
