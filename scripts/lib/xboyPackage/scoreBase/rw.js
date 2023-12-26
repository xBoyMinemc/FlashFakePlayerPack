import { world } from "@minecraft/server";
const overworld = world.getDimension("overworld");
const GetScoreBoard = world.scoreboard;
const GetScoreObject = (Objective) => Objective ? typeof Objective === "string" ? GetScoreBoard.getObjective(Objective) : Objective : GetScoreBoard.getObjectives();
const GetScorePartic = (args) => { return args ? (args.dimension ? Array.from(GetScoreBoard.getParticipants()).find(Participant => Participant.getEntity() == args) : args[0].getParticipants()) : GetScoreBoard.getParticipants(); };
const GetScorePoints = (object, partic) => { return Array.from(((typeof object == "string") ? GetScoreObject(object) : object).getScores()).find((_) => _.participant.displayName == partic).score; };
const AssScoreObject = (ObjName) => { return GetScoreObject().find((scoreboard) => { if (scoreboard.id === ObjName)
    return true; }); };
const AssScorePartic = (participant, ScoreObject) => ScoreObject.hasParticipant(participant);
const DelScoreObject = (ObjName) => { overworld.runCommand(`scoreboard objectives remove ${(typeof ObjName === typeof "xBoyMinemc") ? ObjName : ObjName.id}`); };
const NewScoreObject = (...args) => { overworld.runCommand(`scoreboard objectives add ${args[0]} ${args[2] || "dummy"} ${args[1]}`); };
const DisScoreObject = (...args) => { overworld.runCommand(`scoreboard objectives setdisplay ${(typeof args[0] === typeof 520) ? ['list', 'sidebar', 'belowname'][args[0]] : args[0]} ${((typeof args[1] === typeof "云梦") ? args[1] : args[1].id) + (args[2] ? (" " + (typeof args[2] === "string" ? args[2] : ['ascending', 'descending'][args[2]])) : "")}`); };
const AddScorePoints = (...args) => { overworld.runCommand(`scoreboard players add ${args[0].name ? ('"' + args[0].name + '"') : (args[0].includes('"') ? args[0] : ('"' + args[0] + '"'))} ${(typeof args[1] === typeof "Xboy minemc") ? args[1] : ('"' + args[1].id + '"')} ${args[2]}`); };
const SetScorePoints = (...args) => { overworld.runCommand(`scoreboard players set ${args[0].name ? ('"' + args[0].name + '"') : (args[0].includes('"') ? args[0] : ('"' + args[0] + '"'))} ${(typeof args[1] === typeof "Xboy minemc") ? args[1] : ('"' + args[1].id + '"')} ${args[2]}`); };
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
