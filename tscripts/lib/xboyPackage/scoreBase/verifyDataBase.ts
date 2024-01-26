import type { ScoreboardObjective } from '@minecraft/server'
import   ScoreBase      from './rw'

let ScoreBaseSnapshot = <ScoreboardObjective[]>ScoreBase.GetObject()

const checkScoreObjectExist = (ScoreObjectName : string) : boolean =>  !!Array.from(ScoreBaseSnapshot).find(ScoreObject=>ScoreObjectName === ScoreObject.id)

const verify = function(){
    ScoreBaseSnapshot = <ScoreboardObjective[]>ScoreBase.GetObject();
    ['##FlashPlayer##'].forEach(_=>
        checkScoreObjectExist(_)
        ? console.error('[模拟玩家] 计分板对象数据存在==>',_)
        : console.error('[模拟玩家] 计分板对象数据不存在但已创建==>',_) === ScoreBase.NewObjectAsync('"'+_+'"', '"'+_+'"','dummy')
    )
     try {
        //@ts-ignore // 不会写ts 爱咋咋
        !!ScoreBase.AssPartic('##currentPID',ScoreBase.GetObject('##FlashPlayer##'))
        ? console.error( '[模拟玩家] 计分板键值数据存在==>','##currentPID')
        : (ScoreBase.AddPointsAsync('"'+'##currentPID'+'"','"'+'##FlashPlayer##'+'"','1'),console.error("数据不存在但已创建==>","##xSkyLands##currentUID"))
     } finally {
         // catch什么
     }
}

export default verify