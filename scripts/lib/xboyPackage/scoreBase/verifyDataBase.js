import { world } from '@minecraft/server';
import ScoreBase from './rw';
let ScoreBaseSnapshot = ScoreBase.GetObject();
const checkScoreObjectExist = (ScoreObjectName) => !!Array.from(ScoreBaseSnapshot).find(ScoreObject => ScoreObjectName === ScoreObject.id);
const verify = function () {
    ScoreBaseSnapshot = ScoreBase.GetObject();
    ['##FlashPlayer##'].forEach(_ => checkScoreObjectExist(_) || ScoreBase.NewObjectAsync(_).displayName);
    world.scoreboard.getObjective('##FlashPlayer##').hasParticipant('##currentPID') || ScoreBase.SetPoints('##FlashPlayer##', '##currentPID', 1);
};
export default verify;
