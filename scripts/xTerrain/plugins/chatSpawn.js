import { spawnSimulatedPlayer, SimulatedPlayerList, spawned as spawnedEvent, GetPID } from '../main';
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry';
const commandRegistry = new CommandRegistry();
commandRegistry.registerCommand('假人创建');
//
const noArgs = ({ args, entity, location, isEntity }) => {
    if (args.length !== 1)
        return;
    // TEST without pid input
    if (isEntity) {
        const PID = GetPID();
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##');
        const SimulatedPlayer = spawnSimulatedPlayer(entity.location, entity.dimension, PID);
        SimulatedPlayerList[PID] = SimulatedPlayer;
        spawnedEvent.trigger({ spawnedSimulatedPlayer: SimulatedPlayer, PID });
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id, PID);
        // ScoreBase.AddPoints(<ScoreboardObjective>ScoreBase.GetObject('##FlashPlayer##'),1)
        // const pidParticipant = __FlashPlayer__.getParticipants().find(P=>P.displayName==='##currentPID')
        // TEST END
    }
    else {
        const PID = GetPID();
        const __FlashPlayer__ = world.scoreboard.getObjective('##FlashPlayer##');
        const SimulatedPlayer = spawnSimulatedPlayer(location, entity, PID);
        SimulatedPlayerList[PID] = SimulatedPlayer;
        spawnedEvent.trigger({ spawnedSimulatedPlayer: SimulatedPlayer, PID });
        // __FlashPlayer__.setScore(SimulatedPlayer,pid) //Score方案 因为无法为模拟玩家设置分数而放弃
        __FlashPlayer__.setScore(SimulatedPlayer.id, PID);
    }
};
commandRegistry.registerCommand('假人创建', noArgs);
world.afterEvents.chatSend.subscribe(({ message, sender }) => {
    if (message !== '假人创建')
        return;
    commandRegistry.executeCommand('假人创建', { commandName: '假人创建', entity: sender, isEntity: true, args: CommandRegistry.parse(message) });
});
console.error('[假人]内置插件chatSpawn加载成功');
