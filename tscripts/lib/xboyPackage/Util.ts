import type { Entity } from '@minecraft/server'

const yumeSign = "#yumeSimSign#";                   ;;"the Sign for SimulatedPlayer";;

// getEntitiesFromViewDirection
export const getSimPlayer = {
    // only one
    formView: (e:Entity,maxDistance=16):Entity=>e.getEntitiesFromViewDirection({maxDistance}).find(({entity})=>entity.hasTag(yumeSign))?.entity,

}
