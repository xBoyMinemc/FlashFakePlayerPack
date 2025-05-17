import { system, world } from "@minecraft/server";
import { commandManager, CommandError } from "@/core/command";
import { Messages } from "@/constants";

world.beforeEvents.chatSend.subscribe(({message, sender}) => {
    system.run(() => {
        try {
            commandManager.execute(message, {
                player: sender,
                location: sender.location,
                dimension: sender.dimension
            });
        } catch (e) {
            if (!(e instanceof CommandError)) {
                console.error(e);
                world.sendMessage(Messages.UNHANDLED_EXCEPTION);
            }
        }
    });
});
