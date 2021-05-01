/**
 * webpack配置文件,每次执行都会自动读取这里的配置
 */

//查看目录
console.log(__dirname + '\\dist');  //D:\WebDesign\10webpack4.x\02.模块打包和配置\dist

const path = require('path');
console.log(path.resolve(__dirname,'.\\dist')); //D:\WebDesign\10webpack4.x\02.模块打包和配置\dist


module.exports = {
    //入口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        filename: "bundle.js",
        //路径,绝对路径
        path: path.resolve(__dirname,'.\\dist'),
    },

    //生成模式
    mode: "development"

}