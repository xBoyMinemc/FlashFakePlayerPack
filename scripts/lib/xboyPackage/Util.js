import SIGN from './YumeSignEnum';
export const getSimPlayer = {
    formView: (e, maxDistance = 16) => e.getEntitiesFromViewDirection({ maxDistance }).find(({ entity }) => entity.hasTag(SIGN.YUME_SIM_SIGN))?.entity,
};
export function getEntitiesNear(location, dimension, maxDistance, Options = {}) {
    const EntityQueryOption = {};
    EntityQueryOption.maxDistance = maxDistance;
    EntityQueryOption.location = location;
    EntityQueryOption.excludeTypes = ["minecraft:player", "minecraft:arrow", "minecraft:xp_orb", "minecraft:item"];
    EntityQueryOption.closest = 1;
    Object.assign(EntityQueryOption, Options);
    return dimension.getEntities(EntityQueryOption);
}
export function getPlayerNear(who, maxDistance, defEntityQueryOptions) {
    const EQO = {};
    EQO.maxDistance = maxDistance;
    EQO.location = who.location;
    EQO.closest = 1;
    EQO.excludeTags = [SIGN.YUME_SIM_SIGN];
    Object.assign(EQO, defEntityQueryOptions);
    const entities = who.dimension.getPlayers(EQO);
    const targets = [];
    for (const entity of entities)
        targets.push(entity);
    return targets;
}
