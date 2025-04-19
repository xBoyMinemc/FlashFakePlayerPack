import { system, world } from "@minecraft/server";
import { commandManager, getLocationFromEntityLike, CommandError } from "../../../core/command";
import { Messages } from "../../../constants/messages";

world.beforeEvents.chatSend.subscribe(({message, sender}) => {
    system.run(() => {
        try {
            commandManager.execute(message, {
                entity: sender,
                isEntity: true,
                location: getLocationFromEntityLike(sender)
            });
        } catch (e) {
            if (!(e instanceof CommandError)) {
                console.error(e);
                world.sendMessage(Messages.UNHANDLED_EXCEPTION);
            }
        }
    });
});
