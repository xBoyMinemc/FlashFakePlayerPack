const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/main.ts', // 入口文件
    output: {
        filename: 'main.js', // 输出文件名
        path: __dirname + '/scripts', // 输出路径
    },
    target: 'es2020', // 指定目标环境为Node.js
    mode: 'production',
    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    externals: {
        '@minecraft/server': 'module @minecraft/server',
        '@minecraft/server-ui': 'module @minecraft/server-ui',
        '@minecraft/server-gametest': 'module @minecraft/server-gametest',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
