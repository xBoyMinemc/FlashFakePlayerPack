// import { createWriteStream, createReadStream } from 'fs';
// import archiver from 'archiver';
const fs = require('fs');
const archiver = require('archiver');
const name = './bin/'+require('./manifest.json').header.name.replace(/§./g,'').replaceAll(/\./g,'-').trim()+'.mcpack'

// make dir ./bin
fs.existsSync('./bin')?0:fs.mkdirSync('bin')


// 创建一个输出流，将ZIP文件写入到指定的文件中
const output1 = fs.createWriteStream(  name ?? 'example.zip');
const output2 = fs.createWriteStream(  name.replace('FlashFakePlayerPack','假人测试版') ?? 'example.zip');

// 创建一个Archiver实例，将输出流传递给它
const archive = archiver('zip', {
  zlib: { level: 9 } // 设置压缩级别，可选
});

// 如果你想要在ZIP文件中添加多个文件，可以多次调用append方法
archive.append(fs.createReadStream('manifest.json'), { name: 'manifest.json' }); 
// 使用directory方法添加整个目录到ZIP文件中
['structures','entities','scripts'].forEach(_=>archive.directory(_, true)); // 第二个参数设置为false表示不包含目录本身

// 当所有文件都添加完毕后，调用finalize方法来完成ZIP文件的创建
archive.finalize();

// 监听archive的'drain'事件，以确保数据被写入输出流
output1.on('close', () => {
    console.log(`ZIP文件已成功创建，共包含 ${archive.pointer()} 字节`);
  });
output2.on('close', () => {
    console.log(`ZIP文件已成功创建，共包含 ${archive.pointer()} 字节`);
  });

// 监听archive的'error'事件，以处理任何错误
archive.on('error', (err) => {
  throw err;
});

// 将ZIP文件写入到输出流
archive.pipe(output1);
archive.pipe(output2);