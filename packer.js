const fs = require('fs');
const archiver = require('archiver');


const pkNew = '开摆，等着天上来的天才重构整个项目吧'
const mcVersion = [1,21,20];
const pkVersion = 1








mcVersion.toString =  ()=>mcVersion.join('.')
const pksVersion = [...mcVersion]
      pksVersion[2] = pksVersion[2]*10 + pkVersion
// mcVersion.toString =  ()=>'['+mcVersion.join(',')+']'


const manifest_json = {
    "format_version": 2,
    "header": {
        "name": `§t${mcVersion} v${pkVersion} §e§lFlash§fFakePlayerPack`,
        "description": `【${pkNew}】${mcVersion} \u000a开启实验性游戏内容（测试版 API）-游戏内输入“假人帮助”或“假人创建” 对着假人右键（蹲或不蹲是两个不同的菜单） 无关QQ群：122957051:`,
        "uuid": "aa101e99-abb4-448d-b58f-71e9da43064e",
        "version": pksVersion,
        "min_engine_version": mcVersion
    },
    "modules": [
        {
            "version": pksVersion,
            "type": "script",
            "uuid": "10101e99-abc1-5488-ba76-71e9da441300",
            "description": "§e§lFlash§fFakePlayerPack",
            "entry": "scripts/main/preload.js"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.12.0-beta"
        },
        {
            "module_name": "@minecraft/server-gametest",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "1.2.0-beta"
        }
    ]
}

fs.writeFile('./manifest.json',JSON.stringify(manifest_json,null,'\t'),()=>{})



const name = './build/'+manifest_json.header.name
    .replace(/§./g,'')
    .replaceAll(/\./g,'-')
    .replaceAll(' ','-')
    .trim()+'.mcpack';

// make dir ./build
fs.existsSync('./build') && fs.mkdirSync('build');


// 创建一个输出流，将ZIP文件写入到指定的文件中
 const name1 = name ?? 'example1.zip'
 const name2 =  name.replace('FlashFakePlayerPack','假人测试版') ?? 'example2.zip'
const output1 = fs.createWriteStream(name1);
const output2 = fs.createWriteStream(name2);

// 创建一个Archiver实例，将输出流传递给它
const archive = archiver('zip', {
  zlib: { level: 9 } // 设置压缩级别，可选
});

// 如果你想要在ZIP文件中添加多个文件，可以多次调用append方法
archive.append(fs.createReadStream('manifest.json'), { name: 'manifest.json' });
archive.append(fs.createReadStream('pack_icon.png'), { name: 'pack_icon.png' });
// 使用directory方法添加整个目录到ZIP文件中
['structures','entities','scripts'].forEach(_=>archive.directory(_, true)); // 第二个参数设置为false表示不包含目录本身

// 当所有文件都添加完毕后，调用finalize方法来完成ZIP文件的创建
archive.finalize().then(() => 0);

// 监听archive的'drain'事件，以确保数据被写入输出流
output1.on('close', () => {
    console.log(`${name1} 文件已成功创建，共包含 ${archive.pointer()} 字节`);
  });
output2.on('close', () => {
    console.log(`${name2} 文件已成功创建，共包含 ${archive.pointer()} 字节`);
  });

// 监听archive的'error'事件，以处理任何错误
archive.on('error', (err) => {
  throw err;
});

// 将ZIP文件写入到输出流
archive.pipe(output1);
archive.pipe(output2);