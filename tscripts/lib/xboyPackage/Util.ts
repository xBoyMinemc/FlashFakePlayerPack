import type { Entity } from '@minecraft/server'
import {SimulatedPlayer} from "@minecraft/server-gametest";

const yumeSign = "#yumeSimSign#";                   ;;"the Sign for SimulatedPlayer";;

// getEntitiesFromViewDirection
export const getSimPlayer = {
    // only one
    formView: (e:Entity,maxDistance=16):SimulatedPlayer=>(<SimulatedPlayer><unknown>e.getEntitiesFromViewDirection({maxDistance}).find(({entity}) => entity.hasTag(yumeSign))?.entity),

}


