;;"请注意，这是一份正式版，预估生命周期约为1~2m";;
;;"一切权力归云梦所有";;
;;"https://github.com/xBoyMinemc/FUCKFakePlayerPack";;


import qrcode from "../lib/qrcode-terminal/mod.js";
import  {生产任务, 生产队的驴} from "./spawnFakePlayer.js";

const version = {
    year : '2023',
    mine : '1.0.9',
    craft: '1.19.83'
};

const debug = false;
const mojang  = {};
const ture = true;
const flase = false;

const xboySign = "#xboySimSign#";                   ;;"假人标签";;"苦役证";;
const xboySimCmdHead = "假人";                      ;;" 命令头 ";;
const 挖掘标识符 = "挖掘标识符";
const 攻击标识符 = "攻击标识符";
const 自动攻击标识符 = "自动攻击标识符";
const 跳跃标识符 = "跳跃标识符";
const 自动重生标识符 = "自动重生标识符";
const 寻路标识符 = "寻路标识符";
const 主世界   = world.getDimension("overworld");
const nether  = world.getDimension("nether");
const the_end = world.getDimension("the end");
const xboyMinemcSIMlist = {};

const 工具人们 = [null];;;;;;;;;;;;;//屎山代码啊不是说一定要设计烂，而是你不能动任何一处小细节，存在即有因，就像这个数组里的null一样


function 获取眼前的假人实体(逻辑主体,距离){
    const 最远距离 = {maxDistance:距离} //new EntityRaycastOptions();;;"距离";;

    const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);// ViewDirection

    return 实体们.find(实体=>实体.hasTag(xboySign));;"只返回一个假人";;
};
function 获取眼前的实体(逻辑主体,距离){
    const 最远距离 = {}//new EntityRaycastOptions();
    最远距离.maxDistance = 距离;                                                              ;;"距离";;
    const 实体们 = 逻辑主体.getEntitiesFromViewDirection(最远距离);
    return 实体们[0];;"只返回一个";;
};
function 获取附近的玩家实体(逻辑主体,距离){
    const 吃个桃桃 = {}//new EntityQueryOptions();
    吃个桃桃.maxDistance = 距离;                                                               ;;"距离";;
    吃个桃桃.location    = new Location(逻辑主体.location.x,逻辑主体.location.y,逻辑主体.location.z);                                                  ;;"中心坐标-ri泥god";;
    吃个桃桃.type = "minecraft:player";                                              ;;"排除掉的实体类型";;
    吃个桃桃.closest   = 2;
    const 实体们 = 逻辑主体.dimension.getEntities(吃个桃桃);
    const 实体组 = [];
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
    let 最远距离 = {};
    最远距离.maxDistance = 距离;                                                              ;;"距离";;
    return 逻辑主体.getBlockFromViewVector(最远距离);
};
function 获取假人实体眼前的方块的相对坐标(逻辑主体){
    let 眼前的方块绝对坐标 = 获取眼前的方块(逻辑主体,4).location;
    let 源坐标;;;;;;;;;;;;;;;;;;;;;
    let 标签们 = 逻辑主体.getTags();
    for(let i in 标签们)if(标签们[i].startsWith("#xyz#"))源坐标=标签们[i].replace("#xyz#","").split("#");
    const x = 眼前的方块绝对坐标.x - 源坐标[0];
    const y = 眼前的方块绝对坐标.y - 源坐标[1];
    const z = 眼前的方块绝对坐标.z - 源坐标[2];
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

let dev_ = flase;
let 周期 = 0;
world.events.tick.subscribe(() => {//我()了，这也是一种不（）
    周期++;
    const 有人吗 = 主世界.getPlayers();
    ;;;"又不是不能用";;;
    if(!dev_ && 有人吗.length !== 0){
        dev_ = !dev_
        有人吗[0].runCommandAsync("summon xboycraft:ceyk 30000000 128 0 0 0 事了浮尘去")
        有人吗[0].runCommandAsync("execute as @s positioned 30000000 128 0 run gametest run 我是云梦:假人")
        有人吗[0].runCommandAsync("fill 29999997 0 5 30000002 319 -1 air replace")
    }

    while(生产队的驴.length!==0){
        const {驴,location,dimension} = 生产队的驴.pop();
        驴.teleport(location,dimension,0,0);
        驴.setSpawn(location,dimension);
        驴.addTag(自动重生标识符);
        驴.addTag(xboySign);
        工具人们.push(驴);
    }

    Object.keys(xboyMinemcSIMlist).forEach((what)=>{
        if(what && !(xboyMinemcSIMlist[what].length === 0)){

            let thing = xboyMinemcSIMlist[what].pop();
            let who = thing[0];
            let cmd_String = thing[1];
            try {
                who.runCommandAsync(cmd_String).then((res)=>0).catch(()=>0);
                if(debug)
                    who.runCommandAsync("say "+cmd_String).then((res)=>0).catch(()=>0);
            }catch(err){
                if(debug)主世界.runCommandAsync("me 我管这叫加大款双层老年防夜漏纸尿裤"+err)}
        }
    })
    try {

        if(周期<1)return;
        周期=0;
        if(!工具人们.length)return;
        工具人们.forEach((工具人,index)=>{
            //判假人是否存在
            if(!工具人)return 工具人=null;
            try{
                //判假人是否存活
                if(工具人.getComponent("health").current<=0){
                    if(工具人.hasTag(自动重生标识符))工具人.respawn();
                    return;
                };

                工具人.hasTag(攻击标识符)
                ;;"为什么说屎山代码呢，因为一些莫名其妙的代码增加，它们实现的功能你是完全不知道的，可能修改后会导致另外一个你根本无法察觉的功能报错";;
                ;;"可能是可控的，也可能是致命的";;
                ;;"就像这里增加的两个return一样，表面作用都是跳过遍历中的这一次";;
            }catch(e){return 工具人们[index]=null};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
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
            }catch(e){  主世界.runCommandAsync(`me 挖掘标识符 ${e}`)
            };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            try{
                if(工具人.hasTag(攻击标识符))工具人.attackEntity(获取眼前的实体(工具人,4));
            }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            try{
                if(工具人.hasTag(自动攻击标识符))工具人.lookAtEntity(获取附近的非玩家实体(工具人,4)[0]);
            }catch(e){
            };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            try{
                if(工具人.hasTag(自动攻击标识符) && 获取眼前的实体(工具人,4).name!="")工具人.attackEntity(获取眼前的实体(工具人,4));
            }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            try{
                if(工具人.hasTag(跳跃标识符))工具人.jump();
            }catch(e){};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            // try{
            //   // if(工具人.hasTag(寻路标识符))Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).forEach(_=>工具人.runCommandAsync("me "+JSON.stringify(_.x)));
            //   if(工具人.hasTag(寻路标识符))工具人.runCommandAsync("me "+Array.from(工具人.navigateToEntity(获取附近的玩家实体(工具人,128)[1]).path).length )
            // }catch(e){
            //   工具人.runCommandAsync("me "+e)
            // };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        })


    } catch (毛病) {
        if(debug)
            主世界.runCommandAsync(`me ${毛病}`)
    }
})


world.events.fishingHookDespawned.subscribe(event=>{
    if(debug)console.error("fishingHookDespawned")
    if(debug)world.getDimension("overworld").runCommandAsync("me ##鱼钩销毁\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
    工具人们.forEach(_=> _==undefined?0:_.id===event.Fisher.id?event.fishingHookDespawned_TickArray.push(()=>(_.useItemInSlot(0)?_.stopUsingItem():0)):0)
})
world.events.fishingHookSpawned.subscribe(event=>{
    if(debug)console.error("fishingHookSpawned")
    if(debug)world.getDimension("overworld").runCommandAsync("me ##鱼钩生成\u000a鱼钩id=>"+event.HookId+"\u000a发起者id=>"+event.Fisher.id);
})


//扭头 /
//挖掘 O
//放置 O



world.events.beforeChat.subscribe( event => {
    try{

        const {message,sender} = event;
        const 发起者 = sender;
        let   消息   = message;
        let x = +(发起者.location.x-0.5).toFixed(0);
        let y = + 发起者.location.y.toFixed(0);
        let z = +(发起者.location.z-0.5).toFixed(0); //for blockLocation

        if(消息.startsWith(xboySimCmdHead)===(true===false)) return;
        ;;;"好shit,迟早给你干烂";;;
        const 眼前的工具人 = 获取眼前的假人实体(发起者, 16);

        消息 = 消息.replace(xboySimCmdHead,"");
        if(消息== "创建" || 消息== "生成" || 消息== "召唤"){
            event.cancel=ture;
            生产任务.push({
                location:发起者.location,
                dimension:发起者.dimension,
                count:1,
            });

            return "1.19.83-1.0.0b";

            ;;;"生命会自己找到出路";;;
            ;;;;"云梦-2023-05-31";;;


        };
        if(消息== "列表"){

            for(let i in 工具人们)if(工具人们[i])发起者.sendMessage(`§e§l-序号：${i} ## 生成名称: ${工具人们[i].name}`);return;

        };

        if(消息=="交换背包"){
            const s = 眼前的工具人.getComponent("inventory").container;                                     ;;"眼前的假人实体背包";;
            const p = sender.getComponent("inventory").container;                                          ;;"你这个______的背包";;

            for(let i = sender.getComponent("inventory").container.size;i--;s.getItem(i)?p.getItem(i)?s.swapItems(i,i,p):s.moveItem(i,i,p):p.getItem(i)?p.moveItem(i,i,s):"这行代码，我再维护我是狗");

            "大家好，我是狗 --2023-05-02"
        };
        // mojang.脑子 = {}
        if(消息== "挖掘" && mojang.脑子){
            //正在准备塞入脑子
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
                ?  发起者.sendMessage("§e§l-光标方向，15格内没找到相关实体" )
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
        // xboy("寻路")([寻路标识符])([])
        xboy("停止")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
        xboy("开摆")([])([攻击标识符,自动攻击标识符,跳跃标识符,挖掘标识符])
        xboy("自动重生")([自动重生标识符])([])





        if(消息== "使用"){
            眼前的工具人.useItemInSlot(0)?眼前的工具人.stopUsingItem():0
        };
        if(消息== "开始使用"){
            眼前的工具人.useItemInSlot(0)
        };
        if(消息== "停止使用"){
            眼前的工具人.stopUsingItem()
        };
        if(消息== "开始交互"){
            眼前的工具人.interact()
        };

        ;;"希望你对中文编程没意见，有也给我保留";;

        if(消息== "重生") {
            //;;"对准~";;
            if(!眼前的工具人)sender.sendMessage( "§e§l-你不要怀疑，10000%是你没对准，如果假人真躺了的话" )
            眼前的工具人.respawn()
        };
        if(消息.startsWith("重生 ")) {
            ;;"云梦知道有人对不准，所以给你做了指向性的功能，输入假人序号即可";;
            let temp = 消息.replace("重生 ","");

            if( temp = Number(temp)){
                工具人们[temp].respawn()
            }
            ;;"能用就行";;
        };
        if(消息.startsWith("批量 ")) {
            let temp = 消息.replace("批量 ","");

            if( temp = Number(temp)){
                while (temp-->0)
                    生产任务.push({
                        location:发起者.location,
                        dimension:发起者.dimension,
                        count:1,
                    });
            }
        };

        if(消息== "销毁") {
            sender.sendMessage("§e§l-拜拜了您内")
            眼前的工具人.disconnect()
        };;"抓住未来!!";;
        if(消息.startsWith("销毁 ")) {

            let temp = 消息.replace("销毁 ","");

            if( temp = Number(temp)){
                sender.sendMessage("§e§l-拜拜了您内")
                工具人们[temp].disconnect()
            }
            ;;"能用就行";;
        };



        if(消息== "github"){
            Math.random()>0.5
                ?
                qrcode.generate("github.com/xBoyMinemc", function (str) {发起者.sendMessage("  §rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a"+str.replaceAll("#","\u000a").replaceAll("0","⬛").replaceAll("1","  "))})
                :
                qrcode.generate("https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4", function (str) {发起者.sendMessage("§rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a"+str.replaceAll("#","\u000a").replaceAll("0","⬛").replaceAll("1","  "))})
        };
        if(消息== "帮助"){
            [
                "输入  假人帮助+空格+功能名   获取更详细的帮助","例如   -假人帮助 重生-",
                "###部分功能需要光标对准假人","创建","销毁","列表","扭头","停止","移动",
                "使用 # 开始使用 # 停止使用 => 使用鱼竿，鱼钩销毁后会自动抛竿（自动钓鱼）","攻击","自动攻击","交换背包",
                "一般操作示例 '假人创建' '假人销毁' '假人交换背包'  ’假人github‘  ’假人help‘","销毁 + 空格 +列表标号",
                "销毁示例","销毁","销毁 0" ,"销毁 1","#赠品：输入'tps开' 或 'tps关'","https://github.com/xBoyMinemc","输入'假人help'了解更多","#赞助作者烂活？得了吧。。"
            ].forEach((text)=>发起者.sendMessage(`§e§l-${text}`))
        };
        if(消息.startsWith("帮助 ")){
            const helpMessage =
                ({
                    "销毁":["销毁示例" ,"假人销毁 + 空格 + 序号","假人销毁 1" ,"假人销毁 2"],
                    "重生":["重生示例" ,"假人重生 + 空格 + 序号","假人重生 1" ,"假人重生 2"],
                })
                    [消息.replace("帮助 ","")]
            ;
            helpMessage
                ?
                sender.sendMessage(helpMessage.join("\u000a"))
                :
                sender.sendMessage("对不起，没有这种事情，做不到"+(Math.random()<0.233?"给钱也做不到":"真做不到"))
        };
        if(消息== "help"){
            [
                "§r这里是一些技术解释",
                "假人销毁，或游戏重启后，信息完全丢失",
                "假人可以捡起掉落物品",
                // "如果出现莫名其妙的Refer什么什么错误，可能是1.19.40+的垃圾特性，重启即可，有概率因为/reload或进入游戏而出现",
                // "1.19.40版本的假人销毁，并不是真正意义上的销毁，可以定期/reload而真正释放",
                "积累过多假人可能会增加不可预测的bug被触发的概率",
                "文件充满汉语是整活",
                "现在依旧是汉语是因为整活把源文件整丢了",
                "输入‘假人github’了解更多"
            ].forEach((text)=>发起者.sendMessage(`§e§l-${text}`))
        };

        return event.cancel=ture;;
    } catch (err) {
        if(debug)主世界.runCommandAsync("me "+err)
        主世界.runCommandAsync(`me ${unescape("\u000a")}* §4§l【假人ERROR】§r§l${unescape("\u000a")}* 你触发了一个错误   ${unescape("\u000a")}* 考虑你没对准，歪了+${err}`)
        主世界.runCommandAsync(`me ${unescape("\u000a")}* §4§l附加信息#2   §r§l${unescape("\u000a")}* ${Object.values(event.sender.location).map(_=>_>>0)} count:${工具人们.length}`)
        主世界.runCommandAsync(`me ${unescape("\u000a")}* §4§l版本信息#1   §r§l${unescape("\u000a")}* ${JSON.stringify(version)} bug上报请截图并提交GitHub或入群 ${unescape("\u000a")}* `)
    }

})

