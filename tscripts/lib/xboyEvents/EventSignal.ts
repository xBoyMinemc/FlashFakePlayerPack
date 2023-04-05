type EventListener<T> = (event: T) => void;

export default class EventSignal<T> {
    listeners = new Set<EventListener<T>>()
    subscribe(listener: EventListener<T>) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener: EventListener<T>) {
        this.listeners.delete(listener)
    }
    trigger(event: T) {
        this.listeners.forEach((listener) => listener(event))
    }
}