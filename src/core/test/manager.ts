import { world, type Vector3 } from "@minecraft/server";
import { register, type Test } from "@minecraft/server-gametest";

export class TestManager {
    private readonly maxTicks = 20 * 60 * 60 * 24 * 365;
    private _testLocation: Vector3;
    private _test: Test | undefined;
    private callback: () => void = () => {};

    get testLocation(): Vector3 {
        return this._testLocation;
    }

    get test(): Test {
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
            this.callback();

            console.log('[模拟玩家] 初始化完成，输入“假人创建”或“ffpp”');
        })
            .maxTicks(this.maxTicks)
            .structureName('xboyMinemcSIM:void');
    }

    onRegistered(callback: () => void): void {
        this.callback = callback;
    }
}