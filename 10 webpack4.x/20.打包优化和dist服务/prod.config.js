//合并js插件
const { merge } = require('webpack-merge')
//公共基础配置
const base = require('./base.config')
//css压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
//清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//打包插件
const TerserWebpackPlugin = require('terser-webpack-plugin')

//生成环境配置
module.exports = merge(base, {

    //监听
    watch: true,

    //监听选项，当true时才有效
    watchOptions: {
        //不监听解析模块目录
        ignored: /node_modules/,
        //更新频率
        aggregateTimeout: 500,
        //轮询
        poll: 1000
    },

    //插件
    plugins: [
        //清理打包
        new CleanWebpackPlugin(),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],

    //优化
    optimization : {
        minimizer : [new TerserWebpackPlugin({
            cache : false,
            terserOptions : {
                compress : {
                    unused : true,
                    drop_console : true,
                    drop_debugger : true,
                    dead_code : true
                }
            }
        })]
    },

    //devTool
    devtool: 'source-map',

    //生产模式
    mode : "production"

})