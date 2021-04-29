/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

const path = require('path');

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

    //生成模式
    mode : "development"
};