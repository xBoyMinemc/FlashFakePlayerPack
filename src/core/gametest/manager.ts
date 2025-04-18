import { system, world, type Vector3 } from "@minecraft/server";
import { register, type Test } from "@minecraft/server-gametest";

const overworld = world.getDimension('overworld');

export class GameTestManager {
    private readonly maxTicks = 20 * 60 * 60 * 24 * 365;
    private _testLocation: Vector3 | undefined;
    private _test: Test | undefined;

    private _resolve: ((value: Test | PromiseLike<Test>) => void) | undefined;
    public readonly ready = new Promise<Test>(resolve => {
        this._resolve = resolve;
    });

    get testLocation(): Vector3 | undefined {
        return this._testLocation;
    }

    get test(): Test | undefined {
        return this._test;
    }

    registerTest(): void {
        const { randomTickSpeed, doDayLightCycle, doMobSpawning } = world.gameRules;

        if (!world.structureManager.get('xboyMinemcSIM:void'))
            world.structureManager.createEmpty('xboyMinemcSIM:void', { x: 1, y: 1, z: 1 }).saveToWorld();

        register('我是云梦', '假人', (test: Test) => {
            this._testLocation = test.worldBlockLocation({ x: 0, y: 0, z: 0 });

            world.gameRules.randomTickSpeed = randomTickSpeed;
            world.gameRules.doDayLightCycle = doDayLightCycle;
            world.gameRules.doMobSpawning = doMobSpawning;

            this._test = test;
            this._resolve!(test);

            console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
        })
            .maxTicks(this.maxTicks)
            .structureName('xboyMinemcSIM:void');
    }

    private generateTestPosition(): Vector3 {
        const z = 11451400 + Math.floor(Math.random() * 114514 * 19);
        return {
            x: 15000000,
            y: 256,
            z
        };
    }

    initialize(): void {
        const { x, y, z } = this.generateTestPosition();

        system.run(() => {
            try {
                overworld.runCommand(`execute positioned ${x} ${y} ${z} run gametest run 我是云梦:假人`);
            } catch (e) {
                world.sendMessage('[模拟玩家] 报错了，我也不知道为什么' + e);
            }
        });
    }
}