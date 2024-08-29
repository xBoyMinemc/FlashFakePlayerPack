import { world } from '@minecraft/server';
import ScoreBase from './rw';
let ScoreBaseSnapshot = ScoreBase.GetObject();
const checkScoreObjectExist = (ScoreObjectName) => !!Array.from(ScoreBaseSnapshot).find(ScoreObject => ScoreObjectName === ScoreObject.id);
const verify = function () {
    ScoreBaseSnapshot = ScoreBase.GetObject();
    ['##FlashPlayer##'].forEach(_ => checkScoreObjectExist(_)
        ? console.warn('[模拟玩家] 计分板对象数据存在==>', _)
        : console.warn('[模拟玩家] 计分板对象数据不存在但已创建==>', ScoreBase.NewObjectAsync(_).displayName));
    world.scoreboard.getObjective('##FlashPlayer##').hasParticipant('##currentPID')
        ? console.warn('[模拟玩家] 计分板键值数据存在==>', '##currentPID')
        : (ScoreBase.SetPoints('##FlashPlayer##', '##currentPID', 1), console.warn('[模拟玩家] 数据不存在但已创建==>', '##FlashPlayer## * currentUID'));
};
export default verify;
