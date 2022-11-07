export default class EventSignal {
    listeners = new Set()
    subscribe(listener : (arg) => void) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener: (arg) => void) {
        this.listeners.delete(listener)
    }
    trigger(ev: Object) {
        this.listeners.forEach((listener: Function) => listener(ev))
    }
}
