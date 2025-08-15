import { log } from "./log";

export interface CacheJson {
    lastVersionName: string;
    // 致敬传奇mojang版本号第一位永远是1
    lastVersionCode: [1, number, number];
    lastFixVersion: number;
    minEngineVersion: [1, number, number];
}
export function isCacheJson(obj: any): obj is CacheJson {
    return typeof obj === 'object' &&
        obj !== null &&
        typeof obj.lastVersionName === 'string' &&
        Array.isArray(obj.lastVersionCode) &&
        obj.lastVersionCode.length === 3 &&
        obj.lastVersionCode[0] === 1 &&
        typeof obj.lastVersionCode[1] === 'number' &&
        typeof obj.lastVersionCode[2] === 'number' &&
        typeof obj.lastFixVersion === 'number' &&
        Array.isArray(obj.minEngineVersion) &&
        obj.minEngineVersion.length === 3 &&
        obj.minEngineVersion[0] === 1 &&
        typeof obj.minEngineVersion[1] === 'number' &&
        typeof obj.minEngineVersion[2] === 'number';
}

export const _IS_RELEASE = 0x10;
export const _NOT_RELEASE = 0x00;
export const BUILDER_PATH = "./build/";
export const ISRELEASE_FILE_PATH = './.isrelease'

export function onError(err: NodeJS.ErrnoException) {
    if (err) {
        log.error(err.message);
        process.exit(1);
    }
}
// @ts-expect-error
// 需不需要release呢？好难猜啊，加个文件给workflow吧
export const isReleaseFile: {
    buffer: ArrayBufferLike;
    view: DataView;
} = {
    buffer: new ArrayBuffer()
};
isReleaseFile.view = new DataView(isReleaseFile.buffer);