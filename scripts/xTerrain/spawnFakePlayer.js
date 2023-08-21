const 自动重生标识符 = "自动重生标识符";
const xboySign = "#xboySimSign#";
;
;
"假人标签";
;
"苦役证";
;
const 主世界 = world.getDimension("overworld");
const tickWaitTimes = 20 * 60 * 60 * 24 * 365;
;
const 生产任务 = [];
const 生产队的驴 = [];
let pid = 1;
try {
    {
        GameTest.
            register("我是云梦", "假人", (test) => {
            {
                world.events.tick.subscribe(() => {
                    while (生产任务.length !== 0) {
                        主世界.runCommandAsync(`me 生产任务.length==>${生产任务.length}`);
                        const 任务 = 生产任务.pop();
                        生产队的驴.push({
                            驴: test.spawnSimulatedPlayer(new BlockLocation(0, 2, 0), `工具人-${pid++}`),
                            location: 任务.location,
                            dimension: 任务.dimension,
                        });
                        // console.error(生产队的驴[0].location.x,生产队的驴[0].location.y,生产队的驴[0].location.z)
                        "这叫生产队的驴";
                    }
                });
                主世界.runCommandAsync('gamerule domobspawning true');
                ;
                ;
                ;
                "凑活解决刷怪问题";
                ;
                ;
                主世界.runCommandAsync('gamerule dodaylightcycle true');
                ;
                ;
                ;
                "凑活解决时间问题";
                ;
                ;
                主世界.runCommandAsync('gamerule randomtickspeed 1');
                ;
                ;
                ;
                "凑活解决tick问题";
                ;
                ;
            }
        })
            .maxTicks(tickWaitTimes)
            .structureName("xboyMinemcSIM:void");
    }
}
catch (err) {
    主世界.runCommandAsync(`me Core-Dump ${err}`);
}
export { 生产任务, 生产队的驴 };
console.error("export  {生产任务, 生产队的驴};");
