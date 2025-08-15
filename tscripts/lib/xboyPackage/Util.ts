import type { Block, Dimension, Entity, EntityQueryOptions, Player, Vector3 } from '@minecraft/server'
import { SimulatedPlayer } from '@minecraft/server-gametest'
import SIGN from './YumeSignEnum'
import { simulatedPlayers } from '../../xTerrain/main'


export const getSimPlayer = {
    // only one
    fromView: (e: Entity, maxDistance = 16): SimulatedPlayer => (<SimulatedPlayer><unknown>e.getEntitiesFromViewDirection({ maxDistance }).find(({ entity }) => entity.hasTag(SIGN.YUME_SIM_SIGN))?.entity),
    getAllSimulatedPlayers: () => Object.values(simulatedPlayers).filter(v => typeof v === "number").map(v => <SimulatedPlayer>simulatedPlayers[v]) as SimulatedPlayer[],
    getAllSimulatedPlayerPID: () => Object.values(simulatedPlayers).filter(v => typeof v === "number") as number[],
}


export function getEntitiesNear(location: Vector3, dimension: Dimension, maxDistance: number, Options = {}) {
    const EntityQueryOption: EntityQueryOptions = {}
    EntityQueryOption.maxDistance = maxDistance
    EntityQueryOption.location = location
    EntityQueryOption.excludeTypes = ["minecraft:player", "minecraft:arrow", "minecraft:xp_orb", "minecraft:item"]
    EntityQueryOption.closest = 1
    Object.assign(EntityQueryOption, Options)
    return dimension.getEntities(EntityQueryOption)
}
export function getPlayerNear(who: Entity | Block, maxDistance: number, defEntityQueryOptions: EntityQueryOptions): Player[] {
    const EQO: EntityQueryOptions = {}
    EQO.maxDistance = maxDistance
    EQO.location = who.location
    // EQO.excludeTypes= ["minecraft:arrow","minecraft:xp_orb","minecraft:item"]
    EQO.closest = 1
    EQO.excludeTags = [SIGN.YUME_SIM_SIGN]
    Object.assign(EQO, defEntityQueryOptions)
    const entities = who.dimension.getPlayers(EQO)
    const targets: Player[] = []
    for (const entity of entities) targets.push(entity)
    return targets
}