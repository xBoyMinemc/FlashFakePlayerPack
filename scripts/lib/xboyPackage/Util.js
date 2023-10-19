const yumeSign = "#yumeSimSign#";
;
;
"the Sign for SimulatedPlayer";
;
// getEntitiesFromViewDirection
export const getSimPlayer = {
    // only one
    formView: (e, maxDistance = 16) => e.getEntitiesFromViewDirection({ maxDistance }).find(({ entity }) => entity.hasTag(yumeSign))?.entity,
};
export function getEntitiesNear(location, dimension, maxDistance, Options = {}) {
    const EntityQueryOption = {}; //new EntityQueryOptions();
    EntityQueryOption.maxDistance = maxDistance;
    EntityQueryOption.location = location;
    EntityQueryOption.excludeTypes = ["minecraft:player", "minecraft:arrow", "minecraft:xp_orb", "minecraft:item"];
    ;
    ;
    "排除掉的实体类型";
    ;
    EntityQueryOption.closest = 1;
    Object.assign(EntityQueryOption, Options);
    const entities = dimension.getEntities(EntityQueryOption);
    // let tar = [];
    // for(let entity in entities)tar.push(entity)
    return entities;
}
