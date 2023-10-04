import type {Dimension, Entity, EntityQueryOptions, Vector3} from '@minecraft/server'
import {SimulatedPlayer} from "@minecraft/server-gametest";

const yumeSign = "#yumeSimSign#";                   ;;"the Sign for SimulatedPlayer";;

// getEntitiesFromViewDirection
export const getSimPlayer = {
    // only one
    formView: (e:Entity,maxDistance=16):SimulatedPlayer=>(<SimulatedPlayer><unknown>e.getEntitiesFromViewDirection({maxDistance}).find(({entity}) => entity.hasTag(yumeSign))?.entity),

}


export function getEntitiesNear(location:Vector3,dimension:Dimension,maxDistance:number,Options={}){
    const EntityQueryOption:EntityQueryOptions = {}//new EntityQueryOptions();
    EntityQueryOption.maxDistance = maxDistance;
    EntityQueryOption.location    = location;
    EntityQueryOption.excludeTypes= ["minecraft:player","minecraft:arrow","minecraft:xp_orb","minecraft:item"];                                              ;;"排除掉的实体类型";;
    EntityQueryOption.closest   = 1;
    Object.assign(EntityQueryOption,Options)
    const entities = dimension.getEntities(EntityQueryOption)
    // let tar = [];
    // for(let entity in entities)tar.push(entity)
    return entities
}