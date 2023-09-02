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
