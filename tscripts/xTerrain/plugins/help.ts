import qrcode from '../../lib/qrcode-terminal/mod'




// import { spawnSimulatedPlayer, SimulatedPlayerList, spawned as spawnedEvent, GetPID } from '../main'
import { CommandRegistry } from '../../lib/yumeCommand/CommandRegistry'
import { world , Player} from "@minecraft/server";



const commandRegistry: CommandRegistry = new CommandRegistry()

//
const helpNoArgs = ({args,entity,isEntity})=>{
    if(args.length!==1 || !isEntity)return;

        [
            "输入  假人帮助+空格+功能名   获取更详细的帮助", "例如   -假人帮助 重生-",
            "###部分功能需要光标对准假人", "创建", "销毁", "列表", "扭头", "停止", "移动","§e§l自动追击§r",
            "使用 # 开始使用 # 停止使用 => 使用鱼竿，鱼钩销毁后会自动抛竿（自动钓鱼）", "攻击", "自动攻击", "交换背包",
            "一般操作示例 '假人创建' '假人销毁' '假人交换背包'  ’假人github‘  ’假人help‘", "销毁 + 空格 +列表标号",
            "销毁示例", "销毁", "销毁 0", "销毁 1",
            "#赠品：输入'tps开' 或 'tps关'",
            "§r这里是一些技术解释",
            "假人销毁，或游戏重启后，信息完全丢失",
            "假人可以捡起掉落物品",
            "输入‘假人github’了解更多"
        ].forEach((text) => entity.sendMessage(`§e§l-${text}`))
}

const helpWithArgs =({args,entity,isEntity})=>{
    if(args.length === 1 || !isEntity)return;

    const helpMessage =
        ({
            "销毁": ["销毁示例", "假人销毁 + 空格 + 序号", "假人销毁 1", "假人销毁 2"],
            "重生": ["重生示例", "假人重生 + 空格 + 序号", "假人重生 1", "假人重生 2"],
        })
            [args[1]]

          helpMessage
            ?
            entity.sendMessage(helpMessage.join("\u000a"))
            :
            entity.sendMessage("对不起，没有这种事情，做不到" + (Math.random() < 0.233 ? "给钱也做不到" : "真做不到"))
}

const githubMsg = ({entity}:{entity?:Player})=>
    qrcode.
    generate(
        Math.random() > 0.5 ? 'github.com/xBoyMinemc' : 'vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4',
        (str: string) => entity.sendMessage('§rhttps://github.com/xBoyMinemc 能不能扫上随缘\u000a' + str.replaceAll('#', '\u000a').replaceAll('0', '⬛').replaceAll('1', '  '))
    )


commandRegistry.registerCommand('假人帮助')
commandRegistry.registerAlias('假人help','假人帮助')
commandRegistry.registerCommand('假人帮助',helpNoArgs)
commandRegistry.registerCommand('假人帮助',helpWithArgs)

commandRegistry.registerCommand('假人github',githubMsg)



world.afterEvents.chatSend.subscribe(({message, sender})=>{

    const args = CommandRegistry.parse(message)
    if(commandRegistry.commandsList.has(args[0]))
        commandRegistry.executeCommand(args[0], { entity:sender,isEntity:true,args })

    if(message==='showshowway'){
        sender.sendMessage(commandRegistry.showList().toString())
    }
})


// console.error('[假人]内置插件help加载成功')
