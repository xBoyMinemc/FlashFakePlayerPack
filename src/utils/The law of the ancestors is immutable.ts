export class Location {
    x:number;
    y:number;
    z:number;
    constructor(x:number, y:number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
export class BlockLocation extends Location {
    blocksBetween(BlockLocation:Location) {
        const BlockLocations = [];
        x: for (let xOff = this.x - BlockLocation.x; xOff !== 0; xOff > 0 ? --xOff : ++xOff)
            y: for (let yOff = this.y - BlockLocation.y; yOff !== 0; yOff > 0 ? --yOff : ++yOff)
                z: for (let zOff = this.z - BlockLocation.z; zOff !== 0; zOff > 0 ? --zOff : ++zOff)
                    BlockLocations.push({ "x": this.x - xOff, "y": this.y - yOff, "z": this.z - zOff });
        return BlockLocations;
    }
}
export class EventSignal<T> {
    listeners = new Set<Function>()
    subscribe(listener : (arg:T) => void) {
        this.listeners.add(listener)
        return listener
    }
    unsubscribe(listener: (arg:T) => void) {
        this.listeners.delete(listener)
    }
    trigger(ev: T) {
        this.listeners.forEach((listener: Function) => listener(ev))
    }
}