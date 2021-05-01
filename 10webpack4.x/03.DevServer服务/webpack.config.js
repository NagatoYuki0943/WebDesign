/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');

module.exports = {
    //入口文件
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
        //打包路径
        publicPath : '/dist',
        //端口
        port : 3000,
        //最小化,运行时命令较少
        stats : 'minimal',
        //设置连接级别,火狐不显示错误
        //clientLogLevel : 'none'
    },

    //devTool
    devtool: 'source-map',

    //生成模式
    mode : "development"
};