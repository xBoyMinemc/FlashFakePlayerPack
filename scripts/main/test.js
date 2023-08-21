import { system, world } from "@minecraft/server";

const 宇宙 = world.getDimension("overworld");

class point {
    entity;
    next;
    constructor(entity,next=null){
        this.entity=entity;
        this.next=next;
    }
}

let 蔡 = [];
let 坤坤 = [null];
const r = 1.2
const r2 = 1.2**2
const f = 0.1
const add = ({x,y,z},{x:a,y:b,z:c})=>({x:x+a,y:y+b,z:z+c})
const div = ({x,y,z},{x:a,y:b,z:c})=>({x:x-a,y:y-b,z:z-c})
const yu = ({x,y,z},{x:a,y:b,z:c})=>((x-a)**2+(y-b)**2+(z-c)**2)
const me = ({x,y,z},{x:a,y:b,z:c},m)=>({x:x-a*m,y:y-b*m,z:z-c*m})
// const me = ({x,y,z},{x:a,y:b,z:c},m)=>({x:x+a*m,y:y+b*m,z:z+c*m})
const yume = ({x,y,z},{x:a,y:b,z:c})=>Math.sqrt((x-a)**2+(y-b)**2+(z-c)**2)

// world.events.tick.subscribe
system.runInterval(() => {//我()了，这也是一种不（）
    坤坤[0]=world.getAllPlayers()[0];
    //云梦人认为，宇宙万法的那个源头，叫做坤坤
    const 无 = 宇宙.getEntities({excludeTypes:["minecraft:player"],excludeTags:["坤"]});
    // const 无 = 宇宙.getEntities({type:"minecraft:slime",excludeTags:["坤"]});
    for(let 有 in 无)(坤坤.push(有=无[有]),蔡.push(有.location),有.addTag("坤"),console.error("有"))
    // for(const 有 of 无)if(坤坤.includes(有))0;else (坤坤.push(有),蔡.push(坤坤[坤].location))
    // for(let 坤 in 坤坤)if(yu(坤坤[坤].location,蔡[坤])>r2);
    // for(let 坤 in 坤坤)if(yu(坤坤[坤].location,蔡[坤])>r2)(yume(坤.location,蔡[坤])-r+f);
    for(let 坤 in 坤坤){
        try{
            蔡[坤]=坤坤[坤].location;
            if(坤==0)continue;
            let 坤坤坤 = yu(坤坤[坤].location,蔡[坤-1])
            if(坤坤坤>r2)坤坤[坤].teleport(me(坤坤[坤].location,div(坤坤[坤].location,蔡[坤-1]),((坤坤坤=Math.sqrt(坤坤坤))-r+f)/坤坤坤))
        }catch{
            console.error(坤,坤坤[坤].type)
            const 坤坤坤 = 坤坤.splice(0,Number(坤))
            坤坤坤.push(...坤坤.splice(1+Number(坤)))
            坤坤 = 坤坤坤
        }
        // console.error(坤坤坤)
    };
    // for(const 坤 in 坤坤)蔡[坤]=坤坤[坤].location;
},1)



// // 计算ba向量的长度
// var distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

// // 计算移动比例
// var moveRatio = m / distance;

// // 计算新的点b的坐标
// var newX = x2 + dx * moveRatio;
// var newY = y2 + dy * moveRatio;
// var newZ = z2 + dz * moveRatio;