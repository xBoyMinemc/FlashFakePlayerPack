import { world } from "@minecraft/server";
const GetScoreBoard = world.scoreboard;
const GetScoreObject = (Objective = undefined) => typeof Objective === "undefined" ? GetScoreBoard.getObjectives() : typeof Objective === "string" ? GetScoreBoard.getObjective(Objective) : Objective;
const GetScorePartic = (args) => args ? (args.dimension ? Array.from(GetScoreBoard.getParticipants()).find(Participant => Participant.getEntity() == args) : args[0].getParticipants()) : GetScoreBoard.getParticipants();
const GetScorePoints = (object, partic) => Array.from(((typeof object == "string") ? GetScoreObject(object) : object).getScores()).find(_ => _.participant.displayName === partic).score;
const AssScoreObject = (ObjName) => GetScoreObject().find((scoreboard) => { if (scoreboard.id === ObjName)
    return true; });
const AssScorePartic = (participant, ScoreObject) => ScoreObject.hasParticipant(participant);
const DelScoreObject = (objectiveId) => world.scoreboard.removeObjective(objectiveId);
const NewScoreObject = (objectiveId, displayName = objectiveId) => GetScoreBoard.addObjective(objectiveId, displayName);
const DisScoreObject = (displaySlotId, objective = undefined, sortOrder = ('ascending' && 0)) => objective ? world.scoreboard.setObjectiveAtDisplaySlot(displaySlotId, { objective, sortOrder }) : world.scoreboard.clearObjectiveAtDisplaySlot(displaySlotId);
const AddScorePoints = (ScoreObject, participant, scoreToAdd) => GetScoreObject(ScoreObject).addScore(participant, scoreToAdd);
const SetScorePoints = (ScoreObject, participant, score) => GetScoreObject(ScoreObject).setScore(participant, score);
const ScoreBase = {
    GetObject: GetScoreObject,
    GetPartic: GetScorePartic,
    GetPoints: GetScorePoints,
    AssObject: AssScoreObject,
    AssPartic: AssScorePartic,
    DelObjectAsync: DelScoreObject,
    NewObjectAsync: NewScoreObject,
    DelObject: DelScoreObject,
    NewObject: NewScoreObject,
    DisObject: DisScoreObject,
    AddPointsAsync: AddScorePoints,
    SetPointsAsync: SetScorePoints,
    AddPoints: AddScorePoints,
    SetPoints: SetScorePoints
};
export default ScoreBase;
