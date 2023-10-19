export default class EventSignal {
    constructor() {
        this.listeners = new Set();
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return listener;
    }
    unsubscribe(listener) {
        this.listeners.delete(listener);
    }
    trigger(event) {
        this.listeners.forEach((listener) => listener(event));
    }
}
// 事件：新歌上市
// 订阅 xx事件- 行为 (去买)
// 触发
