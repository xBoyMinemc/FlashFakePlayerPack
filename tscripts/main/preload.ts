import { world } from "@minecraft/server";
import "../lib/xboyEvents/preload.js"

let gametestAready = false
async function gametestWhere() {
    try {
        const { registerAsync } = await import('@minecraft/server-gametest')
        gametestAready = true
    } catch (error) {
        gametestAready = false
    }
}


world.afterEvents.worldLoad.subscribe(async () => {
    await gametestWhere()
    if(!gametestAready)
        world.sendMessage("【ERROR】@minecraft/server-gametest 未加载，你可能在Realm或aternos，aternos为了避免资源滥用，禁用了gametest。因为它可以伪造玩家在线数据。")
    import("./main.js")
})
// 2025-5-8  1.21.80 又出问题 通过延迟到 worldLoad 事件解决
//这里是为了解决一个莫名其妙的1.21.50触发的bug，当包加载的时候，加载world的部分方法会崩。而异步可以解决



// ################preload################

//别问有多烂，就说能不能跑

// ############### 2023-05-29 ###############
// 是真烂（捏鼻子
// ############### 2023-05-29 ###############
// 是真烂（捏鼻子
// ############### 2024-03-08 ###############
// 是真烂（捏鼻子
// ############### 2024-11-04 ###############