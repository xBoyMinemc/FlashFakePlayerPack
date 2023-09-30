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
