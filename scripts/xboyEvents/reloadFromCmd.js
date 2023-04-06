import EventSignal from "./EventSignal";
class reloadFromCmdEvents extends EventSignal {
    players;
}
const reloadFromCmd = new reloadFromCmdEvents();
world.events.playerJoin.subscribe(event => reloadFromCmd.players.add(event.playerId));
world.events.playerLeave.subscribe(event => reloadFromCmd.players.delete(event.playerId));
world.events.tick.subscribe(() => {
    let _noError = world.getAllPlayers().every((_) => reloadFromCmd.players.has(_.id)) ? 1 : reloadFromCmd.trigger(null);
});
export default reloadFromCmd;
