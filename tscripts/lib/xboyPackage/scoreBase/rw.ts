import { Dimension, Entity, Scoreboard, ScoreboardIdentity, ScoreboardObjective, world } from "@minecraft/server";

const overworld : Dimension = world.getDimension("overworld");
// let xboy;

// xboy = world.scoreboard.getObjective("testObjectName")
// console.log(xboy)

// xboy = world.scoreboard.getObjectives()
// console.log(xboy)

// xboy = world.scoreboard.getParticipants()
// console.log(xboy[1].displayName)



const GetScoreBoard    : Scoreboard = world.scoreboard;
//@ts-ignore
const GetScoreObject    = ( Objective?:ScoreboardObjective | String) : ScoreboardObjective | ScoreboardObjective[] => Objective ? typeof Objective === "string" ?  GetScoreBoard.getObjective(Objective) : Objective : GetScoreBoard.getObjectives()


const GetScorePartic    = (args: Entity & ScoreboardObjective ) : Entity|ScoreboardIdentity[]=>{return  args ? (args.dimension?Array.from(GetScoreBoard.getParticipants()).find(Participant=>Participant.getEntity()==args):args[0].getParticipants()) : GetScoreBoard.getParticipants()};
// @ts-ignore
const GetScorePoints    = (object : ScoreboardObjective|string,partic: string) : number => {return  Array.from(((typeof object == "string" ) ? GetScoreObject(object) : object).getScores()).find((_)=>_.participant.displayName == partic).score}

// @ts-ignore
const AssScoreObject    = (ObjName: string) : ScoreboardObjective|undefined=>{return  GetScoreObject().find((scoreboard : { id: string; })=>{if(scoreboard .id === ObjName)return true})};
// @ts-ignore
// const AssScorePartic    = (...args: any[])=>{return args.length === 2 ? args[1].getParticipants().find((participant: { displayName: string;id: number; })=>{if(participant.displayName === args[0])return true}) : GetScorePartic().find((participant: { displayName: string; })=>{if(participant.displayName === args[0])return true})};
const AssScorePartic    = (participant: Entity | ScoreboardIdentity | string, ScoreObject:ScoreboardObjective)=> ScoreObject.hasParticipant(participant) ;


///scoreboard objectives remove testObjectName
///scoreboard objectives add testObjectName dummy ss
// const DelScoreObjectAsync    = (ObjName: string | ScoreboardObjective)=>{return overworld.runCommand(`scoreboard objectives remove ${(typeof ObjName === typeof "xBoyMinemc") ? ObjName : ObjName.id}`)};
// const NewScoreObjectAsync    = (...args: string[])=>{return overworld.runCommand(`scoreboard objectives addx'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x ${args[0]} ${args[2]||"dummy"} ${args[1]}`)};

// @ts-ignore
const DelScoreObject    = (ObjName: string | ScoreboardObjective)=>{overworld.runCommand(`scoreboard objectives remove ${(typeof ObjName === typeof "xBoyMinemc") ? ObjName : ObjName.id}`)};
const NewScoreObject    = (...args: string[])=>{overworld.runCommand(`scoreboard objectives add ${args[0]} ${args[2]||"dummy"} ${args[1]}`)};
///scoreboard objectives setdisplay list ScoreName ascending
// @ts-ignore
const DisScoreObject    = (...args: string[])=>{overworld.runCommand(`scoreboard objectives setdisplay ${(typeof args[0] === typeof 520) ? ['list','sidebar','belowname'][args[0]] : args[0]} ${((typeof args[1] === typeof "云梦") ? args[1] : args[1].id)+(args[2]?(" "+(typeof args[2] === "string" ? args[2] : ['ascending','descending'][args[2]])):"")}`)};



///scoreboard players add "Xboy minemc" testObjectName 3
// const AddScorePointsAsync    = (...args: (string & Entity)[])=>{overworld.runCommand(`scoreboard players add ${args[0].name ? ('"'+ args[0].name +'"') : (args[0].includes('"') ? args[0] : ('"'+args[0]+'"'))} ${(typeof args[1] === typeof "Xboy minemc")?args[1]:('"'+args[1].id+'"')} ${args[2]}`)};
// const SetScorePointsAsync    = (...args: string[])=>{overworld.runCommand(`scoreboard players set ${args[0].name ? ('"'+ args[0].name +'"') : (args[0].includes('"') ? args[0] : ('"'+args[0]+'"'))} ${(typeof args[1] === typeof "Xboy minemc")?args[1]:('"'+args[1].id+'"')} ${args[2]}`)};

// @ts-ignore
const AddScorePoints    = (...args: string[])=>{overworld.runCommand(`scoreboard players add ${args[0].name ? ('"'+ args[0].name +'"') : (args[0].includes('"') ? args[0] : ('"'+args[0]+'"'))} ${(typeof args[1] === typeof "Xboy minemc")?args[1]:('"'+args[1].id+'"')} ${args[2]}`)};
// @ts-ignore
const SetScorePoints    = (...args: string[])=>{overworld.runCommand(`scoreboard players set ${args[0].name ? ('"'+ args[0].name +'"') : (args[0].includes('"') ? args[0] : ('"'+args[0]+'"'))} ${(typeof args[1] === typeof "Xboy minemc")?args[1]:('"'+args[1].id+'"')} ${args[2]}`)};



const ScoreBase = {
        GetObject : GetScoreObject,
        GetPartic : GetScorePartic,
        GetPoints : GetScorePoints,
        AssObject : AssScoreObject,
        AssPartic : AssScorePartic,
        DelObjectAsync : DelScoreObject,
        NewObjectAsync : NewScoreObject,
        DelObject : DelScoreObject,
        NewObject : NewScoreObject,
        DisObject : DisScoreObject,
        AddPointsAsync : AddScorePoints,
        SetPointsAsync : SetScorePoints,
        AddPoints : AddScorePoints,
        SetPoints : SetScorePoints
}
export default ScoreBase;

// const ScoreBase = {
//     GetScoreObject : GetScoreObject,
//     GetScorePartic : GetScorePartic,
//     GetScorePoints : GetScorePoints,
//     AssScoreObject : AssScoreObject,
//     AssScorePartic : AssScorePartic,
//     DelScoreObjectAsync : DelScoreObject,
//     NewScoreObjectAsync : NewScoreObject,
//     DelScoreObject : DelScoreObject,
//     NewScoreObject : NewScoreObject,
//     DisScoreObject : DisScoreObject,
//     AddScorePointsAsync : AddScorePoints,
//     SetScorePointsAsync : SetScorePoints,
//     AddScorePoints : AddScorePoints,
//     SetScorePoints : SetScorePoints
// }
