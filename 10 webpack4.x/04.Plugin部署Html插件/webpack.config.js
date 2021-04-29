/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //出口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        filename: "bundle.js",
        //路径，绝对路径
        path : path.resolve(__dirname, './dist')
    },

    //devServer
    devServer: {
        port : 3000,
        stats : 'minimal',
    },

    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",        //默认
            filename: "index.html"
        })
    ],

    //devTool
    devtool: 'inline-source-map',

    //生成模式
    mode : "development"
};