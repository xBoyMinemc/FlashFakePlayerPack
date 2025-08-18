const child_process = require("node:child_process");
const path = require("node:path");

function exe() {
    child_process.fork(path.join(
        // 此文件的实际目录拼接
        process.argv[1], '.build/index.js'
    ), process.argv.slice(2), { stdio: 'inherit', cwd: process.cwd() });
}
// 如果没编译就自动编译
try {
    exe();
} catch (e) {
    if (e?.code === 'MODULE_NOT_FOUND') {
        child_process.execSync('npx tsc -p ./.build', {stdio: 'inherit'});
        exe();
    } else {
        throw e;
    }
}