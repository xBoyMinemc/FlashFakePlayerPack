type EventListener<T> = (event: T) => void;

export default class EventSignal<T = void> {
    listeners = new Set<EventListener<T>>();
    subscribe(listener: EventListener<T>): EventListener<T> {
        this.listeners.add(listener);
        return listener;
    }
    unsubscribe(listener: EventListener<T>): void {
        this.listeners.delete(listener);
    }
    trigger(event: T): void {
        this.listeners.forEach((listener) => listener(event));
    }
}

// 事件：新歌上市

// 订阅 xx事件- 行为 (去买)

// 触发
