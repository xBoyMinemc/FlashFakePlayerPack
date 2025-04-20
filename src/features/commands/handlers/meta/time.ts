import { commandManager } from "@/core/command";
import { TicksPerSecond } from "@minecraft/server";

commandManager.registerCommand(['假人时区', '假人时间'], ({entity}) => {
    // entity.sendMessage(''+Intl.DateTimeFormat().resolvedOptions().timeZone)

    const now = new Date()
    const offsetMinutes = now.getTimezoneOffset()
    const offsetHours = offsetMinutes / 60

    entity.sendMessage(`本地时间：${now}`)
    entity.sendMessage(`UTC偏移量：${offsetMinutes} 分钟`)
    entity.sendMessage(`UTC偏移量：${offsetHours} 小时`)
    entity.sendMessage(`TicksPerSecond：${TicksPerSecond}`)
});
