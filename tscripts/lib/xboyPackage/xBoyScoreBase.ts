// import { world } from "mojang-minecraft";

// const overworld = world.getDimension("overworld");
// const nether = world.getDimension("nether");
// const the_end = world.getDimension("the end");

// const getScorePlayerStr = function (playerName,obj){return overworld.runCommand(`scoreboard players test "${playerName}" ${obj} * *`).statusMessage.split("在")[0].replaceAll("分数","").replaceAll(" ","");};
// const setScorePlayerStr = function (name,obj,num){overworld.runCommand(`scoreboard players set ${name} ${obj} ${num}`)};
// const addScorePlayerStr = function (name,obj,num){overworld.runCommand(`scoreboard players add ${name} ${obj} ${num}`)};//仨旧时代的产物



// const addScoreObject = function(objectiveName,displayName){
//     let xboy = 0;
//     let statusMessage;
//     try{
//         statusMessage = overworld.runCommand(`scoreboard objectives add ${objectiveName} dummy ${displayName}`).statusMessage;
//         xboy++;
//     }catch(err){    }

//     if(!xboy)return `error with Score`;

//     return `${objectiveName}###${displayName} is added`;
// }



















// const getScoreAll = function(){
    
//     let xboy = 0;
//     let statusMessage;
//     try {
//         statusMessage = overworld.runCommand(`scoreboard objectives list`).statusMessage;
//         xboy++;
//     } catch (err) { }

//     if(!xboy)return `error with getScore`;

//     return statusMessage;
// }

// export { addScoreObject, getScoreAll};
// //