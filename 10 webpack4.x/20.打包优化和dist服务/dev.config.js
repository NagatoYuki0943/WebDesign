//合并js插件
const { merge } = require('webpack-merge')
//公共基础配置
const base = require('./base.config')

//开发环境配置
module.exports = merge(base, {


    //devServer
    devServer: {
        port : 3000,
        stats : 'minimal',
        //代理
        proxy : {
            '/api' : {
                target : 'https://cdn.ycku.com',
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            }
        }
    },

    //devTool
    devtool: 'eval-source-map',

    //开发模式
    mode : "development"
})