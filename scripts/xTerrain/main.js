;;"请注意，这是一份正式版，预估生命周期约为1~2m";;
;;"一切权力归云梦所有";;
;;"https://github.com/xboyMinemc/FightFakePlayerPack";;
import * as GameTest from "@minecraft/server-gametest";
import { 
	world,
  Location,
  BlockLocation,
  BlockRaycastOptions
  } from "@minecraft/server";
import { xBoyBlocklist } from "../lib/xboyLists/xboyBlocks.js";   //获取特殊方块列表
// import { SimulatedPlayer, Test } from "mojang-gametest";;"不懂";;
import qrcode from "../qrcode-terminal/mod.js";
import world_better_because_of_xboy from "../lib/xboyEvents/index";
       world_better_because_of_xboy(world);

const xboySign = "#xboySimSign#";                   ;;"假人标签";;"苦役证";;
const xboySimCmdHead = "假人";                      ;;" 命令头 ";;
const 挖掘标识符 = "挖掘标识符";
const 攻击标识符 = "攻击标识符";
const 自动攻击标识符 = "自动攻击标识符";
const 跳跃标识符 = "跳跃标识符";
const 寻路标识符 = "寻路标识符";
const ture = true;
const 主世界 = world.getDimension("overworld");
const nether = world.getDimension("nether");
const the_end = world.getDimension("the end");
const mojang = {};

let xboyMinemcSIMlist = {};
let cmd = function(who,what,cmd_String){

  try {
  if(!xboyMinemcSIMlist[what])xboyMinemcSIMlist[what] = [];
      xboyMinemcSIMlist[what].push([who,cmd_String])
    } catch (err) {
      // 主世界.runCommandAsync(`me ${err}`)
    }
};
let xboyMinemcSIMlist_ = {};
let cmd_ = function(where,what,cmd_String){

  try {
  if(!xboyMinemcSIMlist_[what])xboyMinemcSIMlist_[what] = [];
      xboyMinemcSIMlist_[what].push([where,cmd_String])
    } catch (err) {
      // 主世界.runCommandAsync(`me ${err}`)
    }
};

let 工具人们 = [undefined];;;;;;;;;;;;
let tickWaitTimes = 20*60*60*24*365;;
let xboyTestsList = {};;;;;;;;;;;;;;;
let xboyTooleesList = {};;;;;;;;;;;;;
try {

  {
    GameTest.
      register("假人行为", "销毁", (test) => { {
    
          
      let thing  = xboyMinemcSIMlist_["销毁"].pop();
          thing[0].runCommandAsync(thing[1]);
          thing  = xboyMinemcSIMlist_["销毁"].pop();
          thing[0].runCommandAsync(thing[1]);
          thing  = xboyMinemcSIMlist_["销毁"].pop();
          cmd(thing[0],"销毁",thing[1])


          const 工具人 = test.spawnSimulatedPlayer(new BlockLocation(0,2,0), `工具人-`);            ;;"xboy";;
              工具人.addTag(xboySign);;
              // 工具人.breakBlock(new BlockLocation(0,1,1))
          const x = (工具人.location.x-0.5)>>0;
          const y =  工具人.location.y>>0;
          const z = (工具人.location.z-0.5)>>0; //for blockLocation
              工具人.addTag("#xyz#"+x+"#"+(y-2)+"#"+z);;
              xboyTestsList[工具人.name] = test;
              xboyTooleesList[工具人.name] = 工具人
              工具人.breakBlock(new BlockLocation(+x,y-1,z))
              工具人们.push(工具人);;;;;
              工具人.runCommandAsync('gamerule domobspawning true');    ;;;"凑活解决刷怪问题";;;
              工具人.runCommandAsync('gamerule dodaylightcycle true');  ;;;"凑活解决时间问题";;;
              工具人.runCommandAsync('gamerule randomtickspeed 1');     ;;;"凑活解决tick问题";;;

    } })
      .maxTicks(tickWaitTimes)
      // .maxTicks(2)
      // .maxAttempts(tickWaitTimes)
      // .requiredSuccessfulAttempts(tickWaitTimes)
      // .padding(0)
      .structureName("xboyMinemcSIM:void")
  }

} catch (err) {
  主世界.runCommandAsync(`me Core-Dump ${err}`)
}

      function 获取眼前的假人实体(逻辑主体,距离){
        let 最远距离 = {}//new EntityRaycastOptions();
            最远距离.maxDistance = 距离;                                                              ;;"距离";;
        let 实体们 = 逻辑主体.getEntitiesFromViewVector(最远距离);
        let 假人;
        for(let i in 实体们)if(实体们[i].hasTag(xboySign))假人=实体们[i];                              ;;"云梦科技，拯救每一位低血压";;
        return 假人;;"只返回一个";;
      };
      function 获取眼前的实体(逻辑主体,距离){
        let 最远距离 = {}//new EntityRaycastOptions();
            最远距离.maxDistance = 距离;                                                              ;;"距离";;
        let 实体们 = 逻辑主体.getEntitiesFromViewVector(最远距离);
        return 实体们[0];;"只返回一个";;
      };
      function 获取附近的玩家实体(逻辑主体,距离){
        let 吃个桃桃 = {}//new EntityQueryOptions();
            吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
            吃个桃桃.location    = new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
            吃个桃桃.type = "minecraft:player";                                              ;;"排除掉的实体类型";;
            吃个桃桃.closest   = 2;
        let 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
        let 实体组 = [];
          for(let 实体 of 实体们)实体组.push(实体);;;;;;;;;;;;
        return 实体组;;
      };
      function 获取附近的非玩家实体(逻辑主体,距离){
        let 吃个桃桃 = {}//new EntityQueryOptions();
            吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
            吃个桃桃.location    = new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
            吃个桃桃.excludeTypes= ["minecraft:player","minecraft:arrow","minecraft:xp_orb","minecraft:item"];                                              ;;"排除掉的实体类型";;
            吃个桃桃.closest   = 1;
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
        // 主世界.runCommandAsync(`me ${源坐标.join("#")} x:${眼前的方块绝对坐标.x} y:${眼前的方块绝对坐标.y} z:${眼前的方块绝对坐标.z} ### ${x+'#'+y+'#'+z+'#'}`)
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


  Object.keys(xboyMinemcSIMlist).forEach((what)=>{
    if(what && !(xboyMinemcSIMlist[what].length == 0)){
      
      let thing = xboyMinemcSIMlist[what].pop();
      let who = thing[0];
      let cmd_String = thing[1];
  try {
           who.runCommandAsync(cmd_String).then((res)=>{}).catch((reson)=>{});
  }catch(err){主世界.runCommandAsync("me 我管这叫加大款双层老年防夜漏纸尿裤"+err)}
    }
  })
  try {

if(周期<1)return;
   周期=0;
if(!工具人们.length)return;
    工具人们.forEach((工具人,index)=>{
      if(!工具人)return;
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

                  // if(((x0-x1)**2+(y0-y1)**2+(z0-z1)**2)>56**2)工具人.teleport(new Location(x1,y1,z1),工具人.dimension,0,0);                                    ;;"回家";;

      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(挖掘标识符))工具人.breakBlock(获取假人实体眼前的方块的相对坐标(工具人));
      }catch(e){  主世界.runCommandAsync(`me ${e}`)
      };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(攻击标识符))工具人.attackEntity(获取眼前的实体(工具人,4));
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(自动攻击标识符))工具人.lookAtEntity(获取附近的非玩家实体(工具人,4)[0]);
      }catch(e){
        //工具人.runCommandAsync("me "+e)
      };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(自动攻击标识符) && 获取眼前的实体(工具人,4).name!="")工具人.attackEntity(获取眼前的实体(工具人,4));
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
                  if(工具人.hasTag(跳跃标识符))工具人.jump();
      }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      try{
        // if(工具人.hasTag(寻路标识符))Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).forEach(_=>工具人.runCommandAsync("me "+JSON.stringify(_.x)));
        if(工具人.hasTag(寻路标识符))工具人.runCommandAsync("me "+Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).length )
      }catch(e){
        工具人.runCommandAsync("me "+e)
      };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    })


  } catch (毛病) {
    // 主世界.runCommandAsync(`me ${毛病}`)
  }
})



//扭头
//挖掘
//放置



function HightTest128(who){  
  let status = "光荣退役";
  // try{
  //   status = who.runCommandAsync(`fill ${who.location.x} 128 ${who.location.z} ${who.location.x} 128 ${who.location.z} air 0 replace air 0`).statusMessage;
  // }catch(err){
  //   if("fillCount" in JSON.parse(err))status=false;
  // }
         if(status!=="xboyMinemc-云梦")status=false;
                              return  !status;
        //true  = y-> 320-1
        //false = y-> 128-1
}



world.events.beforeChat.subscribe( M_event => {

  try{
    
    const {message,sender} = M_event;
    const 发起者 = sender;
    let   消息   = message;
    let x = +(发起者.location.x-0.5).toFixed(0);
    let y = + 发起者.location.y.toFixed(0);
    let z = +(发起者.location.z-0.5).toFixed(0); //for blockLocation
      // let {runCommandAsync} = 发起者;//愚蠢的尝试行为
      // 发起者.dimension.spawnEntity("minecraft:player",new BlockLocation(x,y,z));//另一个愚蠢的想法

      // let sim = new Entity()
      
      
    
      // if(消息=="end"){发起者.teleport(发起者.location,the_end,0,0)}
      // if(消息=="nether"){发起者.teleport(发起者.location,nether,0,0)} 
            if(消息.startsWith(xboySimCmdHead)==(true==false)) return;
            const 眼前的工具人 = 获取眼前的假人实体(发起者, 16);
               消息 = 消息.replace(xboySimCmdHead,"");
            if(消息== "创建"){
              M_event.cancel=ture;
              if(发起者.dimension!=主世界){发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-此假人模组为主世界限定版"}]}`);return;};
              let _y,__y;
              if(HightTest128(发起者)){_y = 319;__y=-64}else{_y = 127;__y=0};              ;;"可用高度判断";;
              new BlockLocation(x,_y,z).blocksBetween(new BlockLocation(x,__y,z)).forEach(




                (Loc)                                       =>                               //看我  看我，我宣布个 事 哈 ！                                                                        我是个！傻逼！！谢谢，没毛病嗷！（拱手过头）




                {if(Loc.y > __y && !xBoyBlocklist.includes(发起者.dimension.getBlock(Loc).typeId))__y=Loc.y})




                let name = "销毁";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                // 发起者.runCommandAsync(`me loc - ${(__y+1)==y && __y<_y-1} ${x+" "+__y+" "+z} ${发起者.dimension.getBlock(new BlockLocation(x,__y,z)).id}`);
                
                // console.error((__y<(_y==319 ? -61 : 2)),(_y==319 ? -61 : 2),__y)
                                         if(!((__y+1)==y) || __y<-61){
                                            ;;(__y> _y - 3)             ? 发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，太高辣"}]}`) : 0;;
                                            // console.error((__y<(_y==319 ? -61 : 2)),(_y==319 ? -61 : 2),__y)
                                            ;;(__y<(_y==319 ? -61 : 2)) ? 发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，太低辣"}]}`) : 0;;
                                            ;;(__y> _y - 3) || (__y<(_y==319 ? -62 : 2)) ? 0: 发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-所站立位置非安全点，此坐标安全点位于Y：${__y}"}]}`);;
                                            ;;return;;;
                                            ;;
                                            ;;
                                           };;
                
                发起者.runCommandAsync( `structure save ${name}_1 ${x-1} ${__y+1} ${z-1} ${x+1} ${__y+1} ${z-2} false memory true`);  ;;"保存原地形";;
                发起者.runCommandAsync( `structure save ${name}_0 ${x-3} ${__y-2} ${z-3} ${x} ${__y} ${z} false memory true`);
                
                cmd_(发起者.dimension, name, `fill ${x-1} ${__y-3} ${z-1} ${x+1} ${__y+1} ${z+1} air 0 replace structure_block`);
                // cmd_(发起者.dimension, name, `setblock ${x} ${__y+1} ${z} air 0`);
                cmd_(发起者.dimension, name, `structure load ${name}_1 ${x-1} ${__y+1} ${z-2}`);
                cmd_(发起者.dimension, name, `structure load ${name}_0 ${x-3} ${__y-2} ${z-3}`);
                  
                cmd( 发起者, name, `execute @s ${x} ${__y+1} ${z-3} gametest run 假人行为:${name}`);;;;;;;;;;;;;;;;;;;;;;;"这里缺个令牌桶，限制创建速度，降低高频率下单一临时变量导致的冲突问题可能性";;;;;;;;;;;;;;;;;;;;;;;
                ;;;;"什么？execute更新了？什么？跟实验玩法开关有关？什么？要适配？你要相信生命会自己找到出路";;;
                cmd( 发起者, name, `execute as @s positioned ${x} ${__y+1} ${z-3} run gametest run 假人行为:${name}`);;;;;;;;;;;;;;;;;;;;;;;"这里缺个令牌桶，限制创建速度，降低高频率下单一临时变量导致的冲突问题可能性";;;;;;;;;;;;;;;;;;;;;;;
                
                
                  
                  
                  
                

                

            };
            if(消息== "列表"){

              for(let i in 工具人们)if(工具人们[i])发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-序号：${i} ## 生成名称: ${工具人们[i].name}"}]}`);return;
                
            };
            if(消息.startsWith("销毁")){
              
              let 眼前的工具人;
              if(消息== "销毁")眼前的工具人 = 获取眼前的假人实体(发起者, 16);
              if(消息.startsWith("销毁 "))眼前的工具人 = 工具人们[+消息.replace("销毁 ","")]
              let 源坐标;
              let 标签们;
              if(眼前的工具人)眼前的工具人.runCommandAsync(`tellraw @p {"rawtext":[{"text":"§e§l-拜拜了您内"}]}`)
              if(眼前的工具人)眼前的工具人.teleport(new Location(0,2**32,0),眼前的工具人.dimension,0,0)
                else  发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体,请使用“假人销毁+空格+数字序号”的方式完成销毁"}]}`)
              return "没办法啊，ta出信标我也没辙";
              if(眼前的工具人)标签们 = 眼前的工具人.getTags()
                else  发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体,请使用“假人销毁+空格+数字序号”的方式完成销毁"}]}`)
                
              // for(let i in 标签们)眼前的工具人.runCommandAsync(`me ${i} ${标签们[i]}`);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
              for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");

              let x = +源坐标[0];
              let y = +源坐标[1];
              let z = +源坐标[2];

                  眼前的工具人.teleport(new Location(x,y,z),眼前的工具人.dimension,0,0);                                    ;;"回家";;

              let name = 'xboy' + 眼前的工具人.name.replaceAll(" ","#") + '';
                  眼前的工具人.runCommandAsync( `structure save ${name}_1 ${x-1} ${y+1} ${z-1} ${x+1} ${y+1} ${z-2} false memory true`);  ;;"保存原地形";;
                  眼前的工具人.runCommandAsync( `structure save ${name}_0 ${x-3} ${y-2} ${z-3} ${x} ${y} ${z} false memory true`);
                  
              let 眼前的工具人dimension;
                  if(眼前的工具人.dimension == 主世界)眼前的工具人dimension=主世界;
                  if(眼前的工具人.dimension == the_end)眼前的工具人dimension=the_end;
                  if(眼前的工具人.dimension == nether)眼前的工具人dimension=nether;

                  xboyTestsList[眼前的工具人.name].succeed();                                                         ;;"抬走";;
                  cmd(眼前的工具人dimension, name, `structure load ${name}_1 ${x-1} ${y+1} ${z-2}`);
                  cmd(眼前的工具人dimension, name, `structure load ${name}_0 ${x-3} ${y-2} ${z-3}`);
                    

            };
            if(消息=="交换背包"){
                  const s = 眼前的工具人.getComponent("inventory").container;                                     ;;"眼前的假人实体背包";;
                  const p = sender.getComponent("inventory").container;                                          ;;"你这个______的背包";;
                  for(let i = sender.getComponent("inventory").container.size;i--;
                  s.getItem(i)
                  ?
                   p.getItem(i)
                   ?
                   s.swapItems(i,i,p)
                   :
                   s.transferItem(i,i,p)
                  :
                   p.getItem(i)
                   ?
                   p.transferItem(i,i,s)
                   :
                   "这行代码，我再维护我是狗"
                   );
                  // for(let i = sender.getComponent("inventory").container.size;i--;s.getItem(i)?p.getItem(i)?s.swapItems(i,i,p):s.transferItem(i,i,p):p.getItem(i)?p.transferItem(i,i,s):"这行代码，我再维护我是狗");
            };
            if(消息== "挖掘" && mojang.脑子){
              
                  // 眼前的工具人.breakBlock(new BlockLocation(x,y-1,z))
                  眼前的工具人. addTag  (挖掘标识符);
                  眼前的工具人.removeTag(攻击标识符);
                  眼前的工具人.removeTag(自动攻击标识符);
            };
            if(消息== "扭头"|| 消息== "转向"){
                  眼前的工具人.lookAtEntity(发起者);
            };
            if(消息== "移动"){
             ! (眼前的工具人)
             ?  发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
             :  眼前的工具人.teleport(发起者.location,眼前的工具人.dimension,0,0);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
             ;  
             ;  
             ;
            };
            const TagsManager =(xboy)=>(minemc)=>(need)=>(add)=>(remove)=>xboy===need?(add.length?add.forEach(t=>minemc.addTag(t)):0,remove.length?remove.forEach(t=>minemc.removeTag(t)):0):0;
            const xboy = TagsManager(消息)(眼前的工具人)
                  xboy("攻击")([攻击标识符])([自动攻击标识符,挖掘标识符])
                  xboy("自动攻击")([自动攻击标识符])([攻击标识符,挖掘标识符])
                  xboy("开始跳跃")([跳跃标识符])([])
                  xboy("结束跳跃")([])([跳跃标识符])
                  xboy("寻路")([寻路标识符])([])
                  xboy("停止")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
                  xboy("开摆")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
            




            if(消息== "使用"){
                  眼前的工具人.useItemInSlot(0)?眼前的工具人.stopUsingItem():0
            };
            if(消息== "开始使用"){
                  眼前的工具人.useItemInSlot(0)
            };
            if(消息== "停止使用"){
                  眼前的工具人.stopUsingItem()
            };
            // if(消息== "开始交互"){
            //       眼前的工具人.interact()
            // };
            


            if(消息== "github"){
              Math.random()>0.5
              ?
              qrcode.generate("github.com/xBoyMinemc", function (str) {发起者.runCommandAsync("tell @s  §rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a"+str.replaceAll("#","\u000a").replaceAll("0","⬛").replaceAll("1","  "))})
              :
              qrcode.generate("https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4", function (str) {发起者.runCommandAsync("tell @s  §rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a"+str.replaceAll("#","\u000a").replaceAll("0","⬛").replaceAll("1","  "))})
            };
            if(消息== "帮助"){
              ["###部分功能需要光标对准假人","创建","列表","扭头","停止","移动","使用 # 开始使用 # 停止使用 => 使用鱼竿，鱼钩销毁后会自动抛竿（自动钓鱼）","攻击","自动攻击","交换背包","一般操作示例 '假人创建' '假人销毁' '假人交换背包'  ’假人github‘  ’假人help‘","销毁 + 空格 +列表标号","销毁示例","销毁","销毁 0" ,"销毁 1","#赠品：输入'tps开' 或 'tps关'","https://github.com/xBoyMinemc","输入'假人help'了解更多","#赞助作者烂活？得了吧。。"].forEach((text)=>发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-${text}"}]}`))
            };
            if(消息== "help"){
              ["§r这里是一些技术解释","假人销毁，或游戏重启后，信息完全丢失","假人可以捡起掉落物品","如果出现莫名其妙的Refer什么什么错误，可能是1.19.40+的垃圾特性，重启即可，有概率因为/reload或进入游戏而出现","1.19.40版本的假人销毁，并不是真正意义上的销毁，可以定期/reload而真正释放","积累过多假人可能会增加不可预测的bug被触发的概率","文件充满汉语是整活","现在依旧是汉语是因为整活把源文件整丢了","输入‘假人github’了解更多"].forEach((text)=>发起者.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§e§l-${text}"}]}`))
            };
      
       return M_event.cancel=ture;;
    } catch (err) {
      主世界.runCommandAsync(`me 【假人ERROR】${unescape("\u000a")}* 你触发了一个错误   ${unescape("\u000a")}* 考虑你没对准，歪了+${err}`)
    }
   
})



//xero=> 花了5分钟给你写好了
// const EventSignal = function() {
//   this.listeners = new Set();
//   this.subscribe = function(listener) {
//       this.listeners.add(listener);
//       return listener;
//   };
//   this.unsubscribe = function(listener) {
//       this.listeners.delete(listener);
//   }
//   this.trigger = function(ev) {
//       this.listeners.forEach((listener) => listener(ev));
//   } 
// }


class EventSignal {
  listeners = new Set()
  subscribe(listener) {
      this.listeners.add(listener)
      return listener
  }
  unsubscribe(listener) {
      this.listeners.delete(listener)
  }
  trigger(ev) {
      this.listeners.forEach((listener) => listener(ev))
  }
}



const queue = {};

let ooo = 1;
world.events.entityCreate.subscribe(event=>{
  let Fisher;
  // if(event.entity.typeId==="minecraft:xp_orb")ooo = 0;
  event.entity.runCommandAsync("me "+event.entity.typeId+"#"+event.entity.rotation.x + "#"+event.entity.rotation.y+"#x=>"+event.entity.location.x +"#y=>"+event.entity.location.y +"#z=>"+event.entity.location.z )
  
})

world.events.blockBreak.subscribe(_=>world.broadcastClientMessage(_.player.id,"ssssssssss"))
world.events.messageReceive.subscribe(_=>world.getDimension("overworld").runCommandAsync("me "+_.id+" $ "+_.message+" $ "+_.sourceType+" $ " ))

// world.events.entityHit.subscribe(event=>{event.entity.runCommandAsync("me "+event.hitBlock.getComponent('minecraft:inventory').container.size)})

// world.events.entityDeadByHurt.subscribe(test)


//-0.07840000092983246
//加速度测试
// world.events.tick.subscribe(()=>{

  // if(ooo)world.getDimension("overworld").runCommandAsync("me "+ooo++)
  // Array.from(world.getPlayers()).forEach(_=>
  //   !((_.velocity.y+0.07840000092983246)==0)
  //   ?_.runCommandAsync("me "+(_.velocity.y+0.07840000092983246)+"\u000a"+_.id)
  //   :0)
// })
// "use strict"

//然后触发直接

const xby可爱捏yes = true;





