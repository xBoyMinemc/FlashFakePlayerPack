import { system, CommandError, world } from "@minecraft/server";
import { commandManager, getLocationFromEntityLike, cannotHandledExceptionWarningText } from "../command";

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
                world.sendMessage(cannotHandledExceptionWarningText);
            }
        }
    });
});