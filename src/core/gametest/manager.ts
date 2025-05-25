import { system, world, type Vector3 } from "@minecraft/server";
import { register, type Test } from "@minecraft/server-gametest";

const overworld = world.getDimension('overworld');

class GameTestManager {
    private readonly maxTicks = 20 * 60 * 60 * 24 * 365;
    private _testLocation: Vector3 | undefined;
    private _test: Test | undefined;

    initialize(): Promise<Test> {
        // 1. 存储结构
        this.saveStructure();

        return new Promise<Test>((resolve, reject) => {
            // 2. 暂存 gamerules
            const { randomTickSpeed, doDayLightCycle, doMobSpawning } = world.gameRules;

            // 3. 注册测试
            register('我是云梦', '假人', (test: Test) => {
                this._testLocation = test.worldBlockLocation({ x: 0, y: 0, z: 0 });

                // 5. 恢复 gamerules
                world.gameRules.randomTickSpeed = randomTickSpeed;
                world.gameRules.doDayLightCycle = doDayLightCycle;
                world.gameRules.doMobSpawning = doMobSpawning;

                this._test = test;
                resolve(test);
            })
                .maxTicks(this.maxTicks)
                .structureName('xboyMinemcSIM:void');


            // 4. 运行测试
            const { x, y, z } = this.generateTestPosition();

            system.run(() => {
                try {
                    overworld.runCommand(`execute positioned ${x} ${y} ${z} run gametest run 我是云梦:假人`);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    get testLocation(): Vector3 | undefined {
        return this._testLocation;
    }

    get test(): Test | undefined {
        return this._test;
    }

    private saveStructure(): void {
        if (!world.structureManager.get('xboyMinemcSIM:void'))
            world.structureManager.createEmpty('xboyMinemcSIM:void', { x: 1, y: 1, z: 1 }).saveToWorld();
    }

    private generateTestPosition(): Vector3 {
        const z = 11451400 + Math.floor(Math.random() * 114514 * 19);
        return {
            x: 15000000,
            y: 256,
            z
        };
    }
}

export const gameTestManager = new GameTestManager();
