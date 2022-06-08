;;"请注意，这是一份内测版，仅供公测版提供完善意见所用，生命周期约为7~14d";;
;;"一切权力归云梦所有";;
;;"https://github.com/xboyMinemc/FUCKFakePlayerPack";;
import * as GameTest from "mojang-gametest";
import { 
	world,
  Location,
  Entity,
  BlockLocation,
  EntityQueryOptions,
  EntityRaycastOptions,
  BlockRaycastOptions
  } from "mojang-minecraft";
  
import { xBoyBlocklist } from "../lib/xboyLists/xboyBlocks.js";   //获取特殊方块列表
// import { SimulatedPlayer, Test } from "mojang-gametest";;"不懂";;

const xboySign = "#xboySimSign#";                   ;;"假人标签";;"苦役证";;
const xboySimCmdHead = "假人";                      ;;" 命令头 ";;
const 挖掘标识符 = "挖掘标识符";
const 攻击标识符 = "攻击标识符";
const 自动攻击标识符 = "自动攻击标识符";
const ture = true;
const 主世界 = world.getDimension("overworld");
const nether = world.getDimension("nether");
const the_end = world.getDimension("the end");

let xboyMinemcSIMlist = {};
let cmd = function(who,what,cmd_String){

  try {
  if(!xboyMinemcSIMlist[what])xboyMinemcSIMlist[what] = [];
      xboyMinemcSIMlist[what].push([who,cmd_String])
    } catch (err) {
      // 主世界.runCommand(`me ${err}`)
    }
};
let xboyMinemcSIMlist_ = {};
let cmd_ = function(where,what,cmd_String){

  try {
  if(!xboyMinemcSIMlist_[what])xboyMinemcSIMlist_[what] = [];
      xboyMinemcSIMlist_[what].push([where,cmd_String])
    } catch (err) {
      // 主世界.runCommand(`me ${err}`)
    }
};

let 工具人们 = [];
let tickWaitTimes = 20*60*60*24*365
let xboyTestsList = {};;;;;;;;;;;;;;;
let xboyTooleesList = {};;;;;;;;;;;;;
try {

  {
    GameTest.
      register("假人行为", "销毁", (test) => { {
    
          
      let thing  = xboyMinemcSIMlist_["销毁"].pop();
          thing[0].runCommand(thing[1]);
          thing  = xboyMinemcSIMlist_["销毁"].pop();
          thing[0].runCommand(thing[1]);
          thing  = xboyMinemcSIMlist_["销毁"].pop();
          cmd(thing[0],"销毁",thing[1])


          let 工具人 = test.spawnSimulatedPlayer(new BlockLocation(0,2,0), `工具人-`);            ;;"xboy";;
              工具人.addTag(xboySign);;
              // 工具人.breakBlock(new BlockLocation(0,1,1))
          let x = (工具人.location.x-0.5).toFixed(0);
          let y =  工具人.location.y.toFixed(0);
          let z = (工具人.location.z-0.5).toFixed(0); //for blockLocation
              工具人.addTag("#xyz#"+x+"#"+(y-2)+"#"+z);;
              xboyTestsList[工具人.name] = test;
              xboyTooleesList[工具人.name] = 工具人
              工具人们.push(工具人);;;;;

    } })
      .maxTicks(tickWaitTimes)
      .structureName("xboyMinemcSIM:void")
  }

} catch (err) {
  // 主世界.runCommand(`me ${err}`)
}

      function 获取眼前的假人实体(逻辑主体,距离){
        let 最远距离 = new EntityRaycastOptions();
            最远距离.maxDistance = 距离;                                                              ;;"距离";;
        let 实体们 = 逻辑主体.getEntitiesFromViewVector(最远距离);
        let 假人;
        for(let i in 实体们)if(实体们[i].hasTag(xboySign))假人=实体们[i];                              ;;"云梦科技，拯救每一位低血压";;
        return 假人;;"只返回一个";;
      };
      function 获取眼前的实体(逻辑主体,距离){
        let 最远距离 = new EntityRaycastOptions();
            最远距离.maxDistance = 距离;                                                              ;;"距离";;
        let 实体们 = 逻辑主体.getEntitiesFromViewVector(最远距离);
        return 实体们[0];;"只返回一个";;
      };
      function 获取附近的非玩家实体(逻辑主体,距离){
        let 吃个桃桃 = new EntityQueryOptions();
            吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
            吃个桃桃.location    = 逻辑主体.location;                                                  ;;"中心坐标";;
            吃个桃桃.excludeTypes= ["minecraft:player","minecraft:arrow","minecraft:xp_orb","minecraft:item"];                                              ;;"中心坐标";;
            吃个桃桃.dimension   = 逻辑主体.dimension;
        let 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
        let 实体组 = [];
          for(let 实体 of 实体们)实体组.push(实体);;;;;;;;;;;;
        return 实体组;;
      };
      function 获取眼前的方块(逻辑主体,距离){
        let 最远距离 = new BlockRaycastOptions();
            最远距离.maxDistance = 距离;                                                              ;;"距离";;
        return 逻辑主体.getBlockFromViewVector(最远距离);
      };
      function 获取假人实体眼前的方块的相对坐标(逻辑主体){
        let 眼前的方块绝对坐标 = 获取眼前的方块(逻辑主体,4).location;
        let 源坐标;;;;;;;;;;;;;;;;;;;;;
        let 标签们 = 逻辑主体.getTags();
        for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");
        let x = 眼前的方块绝对坐标.x - 源坐标[0];
        let y = 眼前的方块绝对坐标.y - 源坐标[1];
        let z = 眼前的方块绝对坐标.z - 源坐标[2];
        主世界.runCommand(`me ${源坐标.join("#")} x:${眼前的方块绝对坐标.x} y:${眼前的方块绝对坐标.y} z:${眼前的方块绝对坐标.z} ### ${x+'#'+y+'#'+z+'#'}`)
        return new BlockLocation(x,y,z);;"不绝对咯";;
      };

{
  /// tickWaitTimes = TPS*秒*分*时*年

//课堂笔记
//旧时代军阀兵源成分与现在并无多少不同，但最终命运无法并论
//信仰是改变军队命运的关键，是必需品
//是为了领军饷，还是为了人民，这不是问题，也从来不应该是一个问题

//中国人民解放军是中国武装力量的主体和骨干，是抵抗侵略，保卫祖国，维护国家主权和安全的主体力量
//由现役部队，预备役部队组成
//
//陆军，空军，海军，火箭军，战略支援部队，联勤保障部队


//十年陆军
//百年海军


//武装力量的组成
//民兵分为 基干民兵 和 普通民兵28岁以下退出现役的士兵，经过军事训练的人员 以及 选定参加军事训练的人员，编入基干民兵组织
//其余18-35岁符合服兵役条件的男性公民，编入普通民兵组织。
//女民兵只编基干民兵，人数控制在适宜比例内。

}


let 周期 = 0;
world.events.tick.subscribe(() => {//我()了，这也是一种不（）
    周期++;

  try {

  Object.keys(xboyMinemcSIMlist).forEach((what)=>{
    
    if(what && !(xboyMinemcSIMlist[what].length == 0)){
      
      let thing = xboyMinemcSIMlist[what].pop();
      let who = thing[0];
      let cmd_String = thing[1];
           who.runCommand(cmd_String);
    }
  })

if(周期<1)return;
   周期=0;
if(!工具人们.length)return;
    工具人们.forEach((工具人,index)=>{
      try{
                  工具人.hasTag(攻击标识符)
      }catch(e){工具人们[index]=undefined};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      if(!工具人)return;
      try{
                  let 源坐标;;;;;;;;;;;;;;;;;;;
                  let 标签们 = 工具人.getTags();
                  for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");
                  let x0 = 工具人.location.x;
                  let y0 = 工具人.location.y;
                  let z0 = 工具人.location.z;
                  let x1 = +源坐标[0];;;;;;;;
                  let y1 = +源坐标[1];;;;;;;;
                  let z1 = +源坐标[2];;;;;;;;

                  if(((x0-x1)**2+(y0-y1)**2+(z0-z1)**2)>56**2)工具人.teleport(new Location(x1,y1,z1),工具人.dimension,0,0);                                    ;;"回家";;

      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(挖掘标识符))工具人.breakBlock(获取假人实体眼前的方块的相对坐标(工具人));
      }catch(e){//  主世界.runCommand(`me ${e}`)
      };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(攻击标识符))工具人.attackEntity(获取眼前的实体(工具人,4));
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(自动攻击标识符))工具人.lookAtEntity(获取附近的非玩家实体(工具人,4)[0])
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(自动攻击标识符) && 获取眼前的实体(工具人,4).name!="")工具人.attackEntity(获取眼前的实体(工具人,4));
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    })


  } catch (毛病) {
    // 主世界.runCommand(`me ${毛病}`)
  }
})



//扭头
//挖掘
//放置



function HightTest128(who){  
  let status = "xboyMinemc-云梦";
  try{
    status = who.runCommand(`fill ${who.location.x} 128 ${who.location.z} ${who.location.x} 128 ${who.location.z} air 0 replace air 0`).statusMessage;
  }catch(err){
    if("fillCount" in JSON.parse(err))status=false;
  }
         if(status!=="xboyMinemc-云梦")status=false;
                              return  !status;
        //true  = y-> 320-1
        //false = y-> 128-1
}



world.events.beforeChat.subscribe( M_event => {

  try{
    
    const {message,sender} = M_event;
    const 逼话人 = sender;
    var   消息   = message;
    let x = +(逼话人.location.x-0.5).toFixed(0);
    let y = + 逼话人.location.y.toFixed(0);
    let z = +(逼话人.location.z-0.5).toFixed(0); //for blockLocation
      // let {runCommand} = 逼话人;//愚蠢的尝试行为
      // 逼话人.dimension.spawnEntity("minecraft:player",new BlockLocation(x,y,z));//另一个愚蠢的想法

      // let sim = new Entity()

    
    
      // if(消息=="end"){逼话人.teleport(逼话人.location,the_end,0,0)}
      // if(消息=="nether"){逼话人.teleport(逼话人.location,nether,0,0)} 
            if(消息.startsWith(xboySimCmdHead)==(true==false)) return;
               消息 = 消息.replace(xboySimCmdHead,"");
            if(消息== "创建"){
              M_event.cancel=ture;
              if(逼话人.dimension!=主世界){逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-此假人模组为主世界限定版"}]}`);return;};
              let _y,__y;
              if(HightTest128(逼话人)){_y = 319;__y=-64}else{_y = 127;__y=0};              ;;"可用高度判断";;
              new BlockLocation(x,_y,z).blocksBetween(new BlockLocation(x,__y,z)).forEach(




                (Loc)                                       =>                               //看我  看我，我宣布个 事 哈 ！                                                                        我是个！傻逼！！谢谢，没毛病嗷！（拱手过头）




                {if(Loc.y > __y && !xBoyBlocklist.includes(逼话人.dimension.getBlock(Loc).id))__y=Loc.y})






                let name = "销毁";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                // 逼话人.runCommand(`me loc - ${(__y+1)==y && __y<_y-1} ${x+" "+__y+" "+z} ${逼话人.dimension.getBlock(new BlockLocation(x,__y,z)).id}`);
                                         if(!((__y+1)==y)){
                                            ;;(__y> _y - 3)             ? 逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，太高辣"}]}`) : 0;;
                                            ;;(__y<(_y==319 ? -62 : 2)) ? 逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，太低辣"}]}`) : 0;;
                                            ;;(__y> _y - 3) || (__y<(_y==319 ? -62 : 2)) ? 0: 逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，此坐标安全点位于Y：${__y}"}]}`);;
                                            ;;return;;;
                                            ;;
                                            ;;
                                           };;
                
                逼话人.runCommand( `structure save ${name}_1 ${x-1} ${__y+1} ${z-1} ${x+1} ${__y+1} ${z-2} disk`);  ;;"保存原地形";;
                逼话人.runCommand( `structure save ${name}_0 ${x-3} ${__y-2} ${z-3} ${x} ${__y} ${z} disk`);
                
                cmd_(逼话人.dimension, name, `fill ${x-1} ${__y-3} ${z-1} ${x+1} ${__y+1} ${z+1} air 0 replace structure_block`);
                // cmd_(逼话人.dimension, name, `setblock ${x} ${__y+1} ${z} air 0`);
                cmd_(逼话人.dimension, name, `structure load ${name}_1 ${x-1} ${__y+1} ${z-2}`);
                cmd_(逼话人.dimension, name, `structure load ${name}_0 ${x-3} ${__y-2} ${z-3}`);
                  
                cmd( 逼话人, name, `execute @s ${x} ${__y+1} ${z-3} gametest run 假人行为:${name}`);;;;;;;;;;;;;;;;;;;;;;;"这里缺个令牌桶，限制创建速度，降低高频率下单一临时变量导致的冲突问题可能性";;;;;;;;;;;;;;;;;;;;;;;
                
                
                  
                  
                  
                

                

            };
            if(消息== "列表"){

              for(let i in 工具人们)if(工具人们[i])逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-序号：${i} ## 生成名称: ${工具人们[i].name}"}]}`);return;
                
            };
            if(消息== "攻击"){

              let 眼前的工具人 = 获取眼前的假人实体(逼话人, 16);
                  眼前的工具人. addTag ( 攻击标识符);
                  眼前的工具人.removeTag(挖掘标识符);
                  眼前的工具人.removeTag(自动攻击标识符);
                
            };
            if(消息== "自动攻击"){
              
              
              let 眼前的工具人 = 获取眼前的假人实体(逼话人, 16);
                  眼前的工具人. addTag ( 自动攻击标识符);
                  眼前的工具人.removeTag(挖掘标识符);
                  眼前的工具人.removeTag(攻击标识符);

            };
            if(消息.startsWith("销毁")){
              
              let 眼前的工具人;
              if(消息== "销毁")眼前的工具人 = 获取眼前的假人实体(逼话人, 16);
              if(消息.startsWith("销毁 "))眼前的工具人 = 工具人们[+消息.replace("销毁 ","")]
              let 源坐标;
              let 标签们 = 眼前的工具人.getTags();
              // for(let i in 标签们)眼前的工具人.runCommand(`me ${i} ${标签们[i]}`);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
              for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");

              let x = +源坐标[0];
              let y = +源坐标[1];
              let z = +源坐标[2];

                  眼前的工具人.teleport(new Location(x,y,z),眼前的工具人.dimension,0,0);                                    ;;"回家";;

              let name = 'xboy' + 眼前的工具人.name.replaceAll(" ","#") + '';
                  眼前的工具人.runCommand( `structure save ${name}_1 ${x-1} ${y+1} ${z-1} ${x+1} ${y+1} ${z-2} disk`);  ;;"保存原地形";;
                  眼前的工具人.runCommand( `structure save ${name}_0 ${x-3} ${y-2} ${z-3} ${x} ${y} ${z} disk`);
                  
              let 眼前的工具人dimension;
                  if(眼前的工具人.dimension == 主世界)眼前的工具人dimension=主世界;
                  if(眼前的工具人.dimension == the_end)眼前的工具人dimension=the_end;
                  if(眼前的工具人.dimension == nether)眼前的工具人dimension=nether;

                  xboyTestsList[眼前的工具人.name].succeed();                                                         ;;"抬走";;
                  cmd(眼前的工具人dimension, name, `structure load ${name}_1 ${x-1} ${y+1} ${z-2}`);
                  cmd(眼前的工具人dimension, name, `structure load ${name}_0 ${x-3} ${y-2} ${z-3}`);
                    

            };
            if(消息== "挖掘" && 0){
              
              
              let 眼前的工具人 = 获取眼前的假人实体(逼话人, 16);
                  眼前的工具人.breakBlock(new BlockLocation(x,y-1,z))
                  眼前的工具人. addTag ( 挖掘标识符);
                  眼前的工具人.removeTag(攻击标识符);
                  眼前的工具人.removeTag(自动攻击标识符);

            };
            if(消息== "扭头"){

              let 眼前的工具人 = 获取眼前的假人实体(逼话人, 16);
                  眼前的工具人.lookAtEntity(逼话人);

            };
            if(消息== "停止"){

              let 眼前的工具人 = 获取眼前的假人实体(逼话人, 16);

              眼前的工具人.removeTag(攻击标识符);
              眼前的工具人.removeTag(自动攻击标识符);
              眼前的工具人.removeTag(挖掘标识符);
            };
            if(消息== "移动"){


            let 假人 = 获取眼前的假人实体(逼话人,15);
             ! (假人)
             ?  逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
             :  假人.teleport(逼话人.location,主世界,0,0);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
             ;  
             ;  
             ;
            };
            if(消息== "帮助"){
              ["###部分功能需要光标对准假人","创建","列表","攻击","自动攻击","销毁","销毁 0" ,"销毁 1","销毁 + 列表标号","扭头","停止","移动","#赠品：输入tps开/tps关","#赞助作者烂活？得了吧。。"].forEach((text)=>逼话人.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-${text}"}]}`))
            

            };
      M_event.cancel=ture;
       return;
    } catch (err) {
      主世界.runCommand(`me ]假人ERROR[ -  ${err}`)
    }
   
})
