import { log } from "./log.js";
import path from "node:path";
import * as fs from "node:fs";
import { confirm } from "@inquirer/prompts";
import { cache } from "./index.js";
// import * as promFs from "node:fs/promises";

export interface CacheJson {
    versionTitle: string;
    // 致敬传奇mojang版本号第一位永远是1
    versionCode: [1, number, number];
    fixVersion: number;
    minEngineVersion: [1, number, number];
    maxEngineVersion: [1, number, number];
    /**
     * 所有代表用户选择的数字应该是`1`，因为致敬传奇mojang版本号第一位永远是`1`🤓
     */
    // settings: {
    //     /**
    //      * - `1` 用户自己选择
    //      * - `2` 保留输入的值
    //      * - `3` 保留`manifest.json`
    //      */
    //     keepInputOrManifestFile: 1 | 2 | 3;
    // }
}
/**
 * 检测对象是否符合{@link CacheJson}格式
 *
 * ~~我去GitHub Copilot好牛逼~~
 */
export function isCacheJson(obj: any): obj is CacheJson {
    return typeof obj === 'object' &&
        obj !== null &&
        typeof obj.versionTitle === 'string' &&
        Array.isArray(obj.versionCode) &&
        obj.versionCode.length === 3 &&
        obj.versionCode[0] === 1 &&
        typeof obj.versionCode[1] === 'number' &&
        typeof obj.versionCode[2] === 'number' &&
        typeof obj.fixVersion === 'number' &&
        Array.isArray(obj.minEngineVersion) &&
        obj.minEngineVersion.length === 3 &&
        obj.minEngineVersion[0] === 1 &&
        typeof obj.minEngineVersion[1] === 'number' &&
        typeof obj.minEngineVersion[2] === 'number' &&
        Array.isArray(obj.maxEngineVersion) &&
        obj.maxEngineVersion.length === 3 &&
        obj.maxEngineVersion[0] === 1 &&
        typeof obj.maxEngineVersion[1] === 'number' &&
        typeof obj.maxEngineVersion[2] === 'number';
        // typeof obj.settings === 'object' &&
        // obj.settings !== null &&
        // typeof obj.settings.keepInputOrManifestFile === 'number' &&
        // (obj.settings.keepInputOrManifestFile === 1 ||
        //  obj.settings.keepInputOrManifestFile === 2 ||
        //  obj.settings.keepInputOrManifestFile === 3);
}
export function writeCacheJsonSync(cache: CacheJson) {
    fs.writeFileSync(cacheJsonPath, JSON.stringify(cache, null, 2));
}
/**
 * @returns 正常情况返回读取到的值 如果格式错误或文件不存在返回false
 */
export function readCacheJsonSync(): CacheJson | false {
    if (!fs.existsSync(cacheJsonPath)) {
        return false;
    }

    const tmp: CacheJson = JSON.parse(fs.readFileSync(cacheJsonPath).toString());
    if (!isCacheJson(tmp)) {
        confirm({
            message: '缓存文件格式错误，是否重置？',
            default: true
        }).then((ans) => {
            if (ans) {
                log.info('已重置');
                fs.writeFileSync(cacheJsonPath, JSON.stringify(cache, null, 2));
            } else {
                log.info('请手动删除/修改缓存文件');
                process.exit(1);
            }
        });
        return false;
    } else {
        return tmp;
    }
}
// export function writeCacheJson(cache: CacheJson) {
//     return promFs.writeFile(cacheJsonPath, JSON.stringify(cache, null, 2));
// }
// export async function readCacheJson(): Promise<CacheJson> {
//     const data = await promFs.readFile(cacheJsonPath);
//     const parsed = JSON.parse(data.toString());
//     if (isCacheJson(parsed)) {
//         return parsed;
//     } else {
//         throw new Error('Invalid cache.json format');
//     }
// }

export function onIsRelease() {
    isReleaseFile.view.setUint8(1, _IS_RELEASE);
    fs.writeFileSync(ISRELEASE_FILE_PATH, isReleaseFile.view);
}
export function onNotRelease() {
    isReleaseFile.view.setUint8(1, _NOT_RELEASE);
    fs.writeFileSync(ISRELEASE_FILE_PATH, isReleaseFile.view);
}

export function validatingVersionLikeString(input: string) {
    // @ts-expect-error
    const parts: CacheJson["versionCode"] = input.split('.').map(part => Number(part));

    if (parts[0] !== 1) {
        return '致敬传奇mojang版本号第一位必须是1';
    }
    if (parts.length !== 3 || parts.some(isNaN)) {
        return '版本号格式错误，必须是 "X.Y.Z" 的形式，且X、Y、Z均为数字';
    } else {
        return true;
    }
}
export function parseVersionLikeString(input: string) {
    return input.split('.').map(part => Number(part));
}

export const _IS_RELEASE = 0x10;
export const _NOT_RELEASE = 0x00;
export const BUILDER_PATH = "./.build/";
export const ISRELEASE_FILE_PATH = path.join(BUILDER_PATH, '.isrelease');
export const cacheJsonPath = path.join(BUILDER_PATH, 'cache.json');

export function onError(err: { message: any }) {
    if (err) {
        log.errorAndExit(err.message);
    }
}

export function replaceLastCharacter(str: { toString(): string }, replacement: string): string {
    const str2 = str.toString();
    if (str2.length === 0) {
        return str2;
    }
    return str2.slice(0, -1) + replacement;
}

// @ts-expect-error
// 需不需要release呢？好难猜啊，加个文件给workflow吧
export const isReleaseFile: {
    buffer: ArrayBufferLike;
    view: DataView;
} = {
    buffer: new ArrayBuffer(3)
};
isReleaseFile.view = new DataView(isReleaseFile.buffer);