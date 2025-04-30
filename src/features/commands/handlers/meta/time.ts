import { commandManager } from "@/core/command";
import { TicksPerSecond } from "@minecraft/server";

commandManager.add(['假人时区', '假人时间'], ({player}) => {
    // entity.sendMessage(''+Intl.DateTimeFormat().resolvedOptions().timeZone)

    const now = new Date()
    const offsetMinutes = now.getTimezoneOffset()
    const offsetHours = offsetMinutes / 60

    player.sendMessage(`本地时间：${now}`)
    player.sendMessage(`UTC偏移量：${offsetMinutes} 分钟`)
    player.sendMessage(`UTC偏移量：${offsetHours} 小时`)
    player.sendMessage(`TicksPerSecond：${TicksPerSecond}`)
});
