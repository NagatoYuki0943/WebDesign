/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //出口文件
    entry: './src/js/index.js',

    //出口文件
    output: {
        //文件名
        filename: "js/bundle.js",
        //路径，绝对路径
        path : path.resolve(__dirname, './dist')
    },

    //模块
    module: {
        //规则
        rules: [
            {
                test: /\.css$/,
                //执行顺序是从右往左边
                use : [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath : '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test : /\.less$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit : 10240,
                    name : '[name].[ext]',
                    outputPath : 'img'
                }
            },
            {
                test : /\.html$/,
                use : ['html-loader']
            }
        ]
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
        }),
        new MiniCssExtractPlugin({
            filename : 'css/[name].css'
        })
    ],

    //devTool
    devtool: 'inline-source-map',

    //生成模式
    mode : "development"
};