const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './scripts_yeah/main/preload.js', // 入口文件
    output: {
        filename: 'preload.js', // 输出文件名
        path: __dirname + '/scripts/main', // 输出路径
    },
    target: 'es2020', // 指定目标环境为Node.js
    mode: 'production', 
    experiments : {
        outputModule:true
    },
    externalsType: 'module',
    externals: {
        '@minecraft/server': 'module @minecraft/server',
        '@minecraft/server-ui': 'module @minecraft/server-ui',
        '@minecraft/server-gametest': 'module @minecraft/server-gametest',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
