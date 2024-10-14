module.exports = {
    entry: './scripts/main/preload.js', // 入口文件
    output: {
        filename: 'preload.js', // 输出文件名
        path: __dirname + '/dist/scripts/main', // 输出路径
    },
 
    mode: 'production', 
    experiments : {
        outputModule:true
    },
  externalsType: 'module',
    externals: {
        '@minecraft/server': 'module @minecraft/server',
        '@minecraft/server-ui': 'module @minecraft/server-ui',
        '@minecraft/server-gametest': 'module @minecraft/server-gametest',
    }
};
