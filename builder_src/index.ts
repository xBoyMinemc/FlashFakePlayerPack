import * as fs from 'node:fs';
import * as child_process from 'node:child_process';
import archiver from 'archiver';
import { log } from "./log.js";
import { confirm, input, number } from "@inquirer/prompts";
import {
    _IS_RELEASE,
    // BUILDER_PATH,
    CacheJson,
    cacheJsonPath, ISRELEASE_FILE_PATH,
    onError,
    onIsRelease,
    onNotRelease,
    parseVersionLikeString,
    readCacheJsonSync,
    validatingVersionLikeString
} from "./defines.js";

// const pack_name = '保存背包状态-构建于1.21.100-支持1.21.7x-1.21.10x'
// const pack_version = [1, 21, 71];
// const fix_pack_version = 30
// const min_engine_version = [1, 21, 70]

const cwd = process.cwd();
if (cwd.includes('node_modules') || cwd.includes('build')) {
    log.error('请不要直接执行此文件');
    log.error('请使用项目里的packer.js调用');
    process.exit(1);
}

const isWorkflow = process.argv.includes('--workflow');
const isRelease = process.argv.includes('--release');
export let cache: CacheJson = {
    versionTitle: "",
    versionCode: [1, 999, 999],
    fixVersion: 30,
    minEngineVersion: [1, 21, 70],
    maxEngineVersion: [1, 21, 100],
    settings: {
        keepInputOrManifestFile: 1
    }
};
for (const k in cache) {
    if (Array.isArray(cache[k])) {
        cache[k].toString = function() {
            return cache[k].join('.');
        }
    }
}

// 如果没构建过，就新建缓存文件
// 如果构建过，就读取缓存
try {
    // let stats: fs.Stats;
    // 虽然但是没这个文件夹的话咋运行的？
    /*try {
        stats = fs.statSync(BUILDER_PATH);
        if (!stats.isDirectory()) {
            log.errorAndExit('存在 ".build" 文件，打包失败，请手动删除此文件');
        }
    } catch (e) {
        fs.mkdirSync(BUILDER_PATH);
    }*/

    if (!fs.existsSync(cacheJsonPath)) {
        fs.writeFileSync(cacheJsonPath, JSON.stringify(cache, null, 2));
    } else {
        const tmp = readCacheJsonSync();
        if (tmp) {
            cache = tmp;
        }
    }
} catch (err) {
    onError(err);
}

// 我也不知道为啥这样写，你去问@xBoyMinemc
function getProcessedVersionCode() {
    const tmp = cache.versionCode;
    tmp[2] = tmp[2] * 10 + cache.fixVersion;
    return tmp;
}

let skipSelect = false;
// 是否选择过了的通信(?)变量
let selected: [boolean/*, [boolean, Promise<string | void> | null]*/] = [false/*, [false, null]*/];
let resolvePromises = false;
if (isWorkflow && isRelease) {
    log.error('你是来整活的对吧👆🤓');
    process.exit(1145);
} else if (isRelease) {
    onIsRelease();
} else if (!isRelease && !isWorkflow) {
    onNotRelease();
} else if (isWorkflow) {
    // console.log(outPath);
    // 读取.isrelease文件，告知workflow是否release
    console.log((fs.readFileSync(ISRELEASE_FILE_PATH)[1] === _IS_RELEASE) ||
        // 哥们不是说用workflow吗，我当场复刻
        (() => {
            const tags = child_process.execSync(`git tag --points-at HEAD`).toString().trim();

            if (tags) {
                return tags.startsWith('v');
            } else {
                return false;
            }
        })())
    // process.exit(0);
} if (!isWorkflow) {
    confirm({
        message: '是否跳过所有设置，直接使用上次的设置？',
        default: true
    }).then(ans => {
        if (!ans) {
            // 如果用户选择不跳过设置，则将所有设置项重置为默认值
            for (const k in cache.settings) {
                cache.settings[k] = 1;
            }
            // 致敬传奇promise超长then链
            confirm({
                message: '是否release？',
                default: false
            })
                .then(ans => {
                    if (ans) {
                        onIsRelease();
                    } else {
                        onNotRelease();
                    }
                })
                .then(() =>
                    input({
                        message: '请输入版本大标题 (如"保存背包状态")',
                        default: cache.versionTitle
                    })
                )
                .then(ans => {
                    if (ans) {
                        cache.versionTitle = ans;
                    }
                })
                .then(() =>
                    input({
                        message: '请输入插件版本号 (如"1.21.71")',
                        default: cache.versionCode.join('.'),
                        validate: validatingVersionLikeString
                    })
                )
                .then(ans => {
                    if (ans) {
                        // @ts-expect-error
                        cache.versionCode = parseVersionLikeString(ans);
                    }
                })
                .then(() =>
                    number({
                        message: '请输入修复版本号 (如"30")',
                        default: cache.fixVersion,
                        min: 1
                    })
                )
                .then(ans => {
                    if (ans < cache.fixVersion) {
                        log.warn('输入值小于当前值');
                    }
                    cache.fixVersion = ans;
                })
                .then(() =>
                    input({
                        message: '请输入支持最低游戏版本 (如"1.21.70")',
                        default: cache.minEngineVersion.join('.'),
                        validate: validatingVersionLikeString
                    })
                )
                .then(ans => {
                    // @ts-expect-error
                    cache.minEngineVersion = parseVersionLikeString(ans);
                })
                .then(() =>
                    input({
                        message: '请输入支持最高游戏版本 (如"1.21.100")',
                        default: cache.maxEngineVersion.join('.'),
                        validate: validatingVersionLikeString
                    })
                )
                .then(ans => {
                    // @ts-expect-error
                    cache.maxEngineVersion = parseVersionLikeString(ans);
                    // !isWorkflow && log.info('初始化中...');
                    selected[0] = true;
                });
        } else {
            // !isWorkflow && log.info('初始化中...');
            resolvePromises = true;
            skipSelect = true;
        }
    })
}
const selectedPromise = new Promise<void>((resolve) => {
    setInterval(() => {
        (selected[0] || resolvePromises) && resolve();
    });
});
// let selectedPromise2: Promise<Promise<void>> = new Promise((resolve) => {
//     setInterval(() => {
//         if (resolvePromises) {
//             resolve(Promise.resolve());
//         }
//         const tmp = <Promise<void>>selected[1][1];
//         tmp && resolve(tmp);
//     });
// });

let manifest_json = (() => {
    const _versionCode = getProcessedVersionCode();
    return {
        "format_version": 2,
        "header": {
            "name": `§t${_versionCode} v${cache.fixVersion} §e§lFlash§fFakePlayerPack`,
            "description": `【${cache.versionTitle}】${_versionCode} \u000a开启实验性游戏内容（测试版 API）-游戏内输入“假人帮助”或“假人创建” 对着假人右键（蹲或不蹲是两个不同的菜单） \u000a感谢PuppyOne和kzyqq00-Player做出的长达数月的代码更新`,
            "uuid": "aa101e99-abb4-448d-b58f-71e9da43064e",
            "version": _versionCode,
            "min_engine_version": cache.minEngineVersion
        },
        "modules": [
            {
                "version": _versionCode,
                "type": "script",
                "uuid": "10101e99-abc1-5488-ba76-71e9da441300",
                "description": "§e§lFlash§fFakePlayerPack",
                "entry": "scripts/main/preload.js"
            }
        ],
        "dependencies": [
            {
                "module_name": "@minecraft/server",
                "version": "3.0.0-alpha"
            },
            {
                "module_name": "@minecraft/server-gametest",
                "version": "2.0.0-alpha"
            },
            {
                "module_name": "@minecraft/server-ui",
                "version": "3.0.0-alpha"
            }
        ]
    };
})();
fs.writeFileSync('./manifest.json', JSON.stringify(manifest_json, null, 4));

// const user_selects = {};
// user_selects.

// if (!isWorkflow) {
//     fs.readFile('./manifest.json', (err, data) => {
//         if (err) {
//             log.warn('尝试验证manifest.json失败');
//             log.warn(err);
//         } else {
//             const manifest_source = JSON.parse(data.toString());
//             const handleAnswer = (ans: "source_file" | "input") => {
//                 if (ans === "source_file") {
//                     manifest_json = JSON.parse(manifest_source);
//                     cache.settings.keepInputOrManifestFile = 3;
//                 } else if (ans === "input") {
//                     cache.settings.keepInputOrManifestFile = 2;
//                     return promFs.writeFile('./manifest.json', JSON.stringify(manifest_json, null, 4));
//                 }
//             }
//
//             if (manifest_source !== manifest_json) {
//                 if (cache.settings.keepInputOrManifestFile === 1) {
//
//                     const tmp = selectedPromise.then(() => {
//                         const x = skipSelect ? '上次' : '刚刚';
//                         return select({
//                             message: `manifest.json与${x}输入的参数不一致，你要保留哪一项？(可直接无视)`,
//                             choices: [
//                                 { name: `${x}输入的参数`, value: "input", description: `你${x}输入的参数` },
//                                 {
//                                     name: "manifest.json文件",
//                                     value: "source_file",
//                                     description: "文件系统中的manifest.json",
//                                     short: "manifest.json"
//                                 }
//                             ],
//                             loop: true
//                         })
//                     });
//                     selected[1][1] = tmp;
//                     tmp.then(handleAnswer).catch(onError);
//                 } else if (cache.settings.keepInputOrManifestFile === 2) {
//                     log.info('manifest.json与输入参数不一致，已覆盖manifest.json');
//                     handleAnswer("input").catch(onError);
//                 } else if (cache.settings.keepInputOrManifestFile === 3) {
//                     log.info('manifest.json与输入参数不一致，已保留manifest.json文件');
//                     handleAnswer("source_file").catch(onError);
//                 }
//             }
//         }
//     });
// }

function packaging() {
    if (!isWorkflow) {
        log.info('初始化完成');
        log.info('编译中...');
    }
    try {
        const buffer1 = child_process.execSync('npx tsc');
        // 如果不是workflow而且输出非空就输出出来
        !isWorkflow && buffer1.toString().match(/\s/) && console.log(buffer1.toString());
        const buffer2 = child_process.execSync('npx webpack');
        !isWorkflow && console.log(buffer2.toString());
    } catch (err) {
        log.error('打包失败');
        err?.message ? log.error(err.message) : 0;
        process.exit(1);
    }
    if (!isWorkflow) {

        log.info('编译完成');
        log.info('打包中...');
    }
    const outPath =
        './build/'
        + `§t${getProcessedVersionCode()} v${cache.fixVersion} §e§lFlash§fFakePlayerPack`
            .trim()
            .replace(/,/g, '-')
            .replace(/§./g, '')
            .replace(/(\.+|\s+)/g, '-')
        + '.mcpack';

    // 创建一个Archiver实例，将输出流传递给它
    const archive = archiver('zip', {
        zlib: { level: 9 } // 设置压缩级别，可选
    });

    // 如果你想要在ZIP文件中添加多个文件，可以多次调用append方法
    archive.append(fs.createReadStream('manifest.json'), { name: 'manifest.json' });
    archive.append(fs.createReadStream('pack_icon.png'), { name: 'pack_icon.png' });
    // 使用directory方法添加整个目录到ZIP文件中
    ['structures', 'entities', 'scripts/main'].forEach(a => archive.directory(a, true)); // 第二个参数设置为false表示不包含目录本身

    // 当所有文件都添加完毕后，调用finalize方法来完成ZIP文件的创建
    archive.finalize().then(() => 0);


    // 创建文件夹 ./build
    !fs.existsSync('./build') && fs.mkdirSync('build');

    // 监听archive的'error'事件，以处理任何错误
    archive.on('error', (err) => {
        throw err;
    })
    // 创建一个输出流，将ZIP文件写入到指定的文件中
    const output = fs.createWriteStream(outPath);

    // 监听archive的'drain'事件，以确保数据被写入输出流
    output.on('close', () => {
        if (!isWorkflow) {
            log.info(`${outPath} 文件已成功创建，共包含 ${archive.pointer()} 字节`)
            log.info('打包完成')
        }
        process.exit(0)
    });

    // 将ZIP文件写入到输出流
    archive.pipe(output)
}
if (isWorkflow) packaging();
else selectedPromise.then(packaging);
// archive.pipe(output2);

// 如果存在e:/temp路径就往那里放一份
// ↑迷惑行为
// ↑因为e盘是我的关机自毁的内存盘，存放活跃的临时文件。在这里放一份便于我关机前随时找到构建的包，嘻嘻。
// ↑这项目原来是你交作业用的？怪不得这么多💩山
// ↑
// ↑
// ↑
// ↑

// const tempPath = 'e:/temp'
// if(fs.existsSync(tempPath)){
//     !fs.existsSync(tempPath+'/build') && fs.mkdirSync(tempPath+'/build');
//
//     const tempName = tempPath+'/'+name
//     const output3 = fs.createWriteStream(tempName);
//     output3.on('close', () => console.log(`${tempName} 文件已成功创建，共包含 ${archive.pointer()} 字节`));
//     archive.pipe(output3);
// }
