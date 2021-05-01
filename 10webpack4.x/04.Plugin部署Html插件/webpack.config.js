/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');
//html插件,自动导入js的路径
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名,有了路径就自动创建文件夹
        filename: "bundle.js",
        //路径，绝对路径
        path : path.resolve(__dirname, './dist')
    },

    //devServer
    devServer: {
        //端口
        port : 3000,
        //最小化,运行时命令较少
        stats : 'minimal',
    },


    plugins: [
        //添加插件打包html文件
        new HtmlWebpackPlugin({
            template: "./src/index.html",    //默认被打包文件
            filename: "index.html"     //打包成文件
        })
    ],

    //devTool 一行,就没有source-map文件了
    devtool: 'inline-source-map',

    //生成模式
    mode : "development"
};