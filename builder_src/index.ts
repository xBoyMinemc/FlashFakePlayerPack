import * as fs from 'node:fs';
import * as child_process from 'node:child_process';
import * as path from "node:path";
import archiver from 'archiver';
import { log } from "./log";
import { confirm, input, select } from "@inquirer/prompts";
import {
    _IS_RELEASE,
    _NOT_RELEASE,
    BUILDER_PATH,
    CacheJson, isCacheJson,
    ISRELEASE_FILE_PATH,
    isReleaseFile,
    onError
} from "./defines";

const pack_name = '保存背包状态-构建于1.21.100-支持1.21.7x-1.21.10x'
const pack_version = [1, 21, 71];
const fix_pack_version = 30
const min_engine_version = [1, 21, 70]
let manifest_json = {
    "format_version": 2,
    "header": {
        "name": `§t${pack_version} v${fix_pack_version} §e§lFlash§fFakePlayerPack`,
        "description": `【${pack_name}】${pack_version} \u000a开启实验性游戏内容（测试版 API）-游戏内输入“假人帮助”或“假人创建” 对着假人右键（蹲或不蹲是两个不同的菜单） \u000a感谢PuppyOne和kzyqq00-Player做出的长达数月的代码更新`,
        "uuid": "aa101e99-abb4-448d-b58f-71e9da43064e",
        "version": pack_version,
        "min_engine_version": min_engine_version
    },
    "modules": [
        {
            "version": pack_version,
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
}

const cwd = process.cwd();
if (cwd.includes('node_modules') || cwd.includes('builder')) {
    log.error('请不要直接执行此文件');
    log.error('请使用项目里的packer.js调用');
    process.exit(1);
}

const isWorkflow = process.argv.includes('--workflow');
const isRelease = process.argv.includes('--release');
let cache: CacheJson = {
    // 版本大标题，不是版本号
    lastVersionName: "",
    lastVersionCode: [1, 999, 999],
    lastFixVersion: 30,
    minEngineVersion: [1, 21, 70],
};

// 如果没构建过，就新建缓存文件
// 如果构建过，就读取缓存
try {
    let stats: fs.Stats;
    try {
        stats = fs.statSync(BUILDER_PATH);
        if (!stats.isDirectory()) {
            log.error('存在 ".build" 文件，打包失败，请手动删除此文件');
            process.exit(1);
        }
    } catch (err) {
        fs.mkdirSync(BUILDER_PATH);
    }

    const cacheJsonPath = path.join(BUILDER_PATH, 'cache.json');
    if (!fs.existsSync(cacheJsonPath)) {
        fs.writeFileSync(cacheJsonPath, JSON.stringify(cache, null, 2));
    } else {
        const tmp = JSON.parse(fs.readFileSync(path.join(cacheJsonPath, 'cache.json')).toString());
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
        }
    }
} catch (err) {
    onError(err);
}

if (isWorkflow && isRelease) {
    log.error('你是来整活的对吧👆🤓');
    process.exit(1145);
} else if (isRelease) {
    isReleaseFile.view.setUint8(0, _IS_RELEASE);
    fs.writeFile(ISRELEASE_FILE_PATH, isReleaseFile.view, onError);
} else if (isWorkflow) {
    isReleaseFile.view.setUint8(0, _NOT_RELEASE);
    fs.writeFile(ISRELEASE_FILE_PATH, isReleaseFile.view, onError);
} else {
    // @ts-expect-error
    const verName = await input({
        message: '请输入版本大标题 (如1.21.71的保存背包状态)',
        default: cache.lastVersionName
    })
}

// const user_selects = {};
// user_selects.

pack_version.toString = () => pack_version.join('.');
pack_version[2] = pack_version[2] * 10 + fix_pack_version;


fs.readFile('./manifest.json', async (err, data) => {
    if (err) {
        log.warn('尝试验证manifest.json失败\n' + err);
    } else {
        const manifest_source = JSON.parse(data.toString());

        if (manifest_source !== manifest_json) {
            const ans = await select({
                message: 'manifest.json与输入参数不一致，你要保留哪一项？(可直接无视)',
                choices: [
                    { name: "输入参数", value: "input", description: "你刚刚输入的参数" },
                    { name: "manifest.json文件", value: "source_file", description: "文件系统中的manifest.json" }
                ],
                loop: true
            });

            if (ans === "source_file") {
                manifest_json = JSON.parse(manifest_source);
            } else {
                fs.writeFileSync('./manifest.json', JSON.stringify(manifest_json, null, 4));
            }
        }
    }
});

try {
    child_process.execSync('tsc');
    child_process.execSync('webpack');
} catch (err) {
    console.error(err?.message);
    log.error('打包失败');
}

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
const name = './build/'
    + manifest_json.header.name
        .trim()
        .replace(/§./g, '')
        .replace(/(\.+|\s+)/g, '-')
    + '.mcpack';

if (isWorkflow) {
    console.log(name);
}

// 监听archive的'error'事件，以处理任何错误
archive.on('error', (err) => {
    throw err;
});

// 创建一个输出流，将ZIP文件写入到指定的文件中
const name1 = name ?? 'example1.zip'
const output1 = fs.createWriteStream(name1);

// 监听archive的'drain'事件，以确保数据被写入输出流
if (!isWorkflow) output1.on('close', () => console.log(`${name1} 文件已成功创建，共包含 ${archive.pointer()} 字节`));

// 将ZIP文件写入到输出流
archive.pipe(output1);
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
