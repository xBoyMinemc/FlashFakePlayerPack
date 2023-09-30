import type { Entity } from '@minecraft/server'
import {SimulatedPlayer} from "@minecraft/server-gametest";

const yumeSign = "#yumeSimSign#";                   ;;"the Sign for SimulatedPlayer";;

// getEntitiesFromViewDirection
export const getSimPlayer = {
    // only one
    formView: (e:Entity,maxDistance=16):SimulatedPlayer=>(<SimulatedPlayer><unknown>e.getEntitiesFromViewDirection({maxDistance}).find(({entity}) => entity.hasTag(yumeSign))?.entity),

}

// temp
// Dao => verifyDataBase.ts
import type { ScoreboardObjective } from '@minecraft/server'
import   ScoreBase      from './scoreBase/rw'

let ScoreBaseSnapshot = <ScoreboardObjective[]>ScoreBase.GetObject()

const checkScoreObjectExist = (ScoreObjectName : string) : boolean =>  !!Array.from(ScoreBaseSnapshot).find((ScoreObject)=>{if(ScoreObjectName === ScoreObject.id)return true})

export const verify = function(){
    ScoreBaseSnapshot = <ScoreboardObjective[]>ScoreBase.GetObject();
    ['##FlashPlayer##'].forEach((_)=>{
        checkScoreObjectExist(_)
            ? console.error(_,'存在')
            : (ScoreBase.NewObjectAsync('"'+_+'"', '"'+_+'"','dummy'),console.error(_,'不存在但已创建'))
    })
    try {
        !!ScoreBase.AssPartic('##currentPID',ScoreBase.GetObject('##FlashPlayer##'))
            ? console.error( '数据存在==>','##currentPID')
            : (ScoreBase.AddPointsAsync('"'+'##currentPID'+'"','"'+'##FlashPlayer##'+'"','1'),console.error("数据不存在但已创建==>","##xSkyLands##currentUID"))
    } catch (error) {

    }
}
