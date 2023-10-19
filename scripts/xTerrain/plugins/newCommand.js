import EventSignal from "../../lib/xboyEvents/EventSignal";
world.events.chatSend.subscribe(({ sender, message }) => {
});
export const initialized = new EventSignal();
// Array.prototype["at"] = function (i: number) {
//         return this[this.length + i];
// };
