/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path');
//html插件,自动导入js的路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //入口文件
    entry: './src/js/index.js',

    //出口文件
    output: {
        //文件名,有了路径就自动创建文件夹
        filename: "js/bundle.js",
        //路径，绝对路径
        path: path.resolve(__dirname, './dist')
    },

    //devServer
    devServer: {
        //端口
        port: 3000,
        //最小化,运行时命令较少
        stats: 'minimal',
    },


    plugins: [
        //添加插件打包html文件
        new HtmlWebpackPlugin({
            template: "./src/index.html",    //默认被打包文件
            filename: "index.html"     //打包成文件
        }),

        //css插件
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ],

    //模块打包css
    module: {
        //规则
        rules: [
            {
                //规则获取需要部署的文件后缀
                test: /\.css$/,

                //style-loader 将 css 字符串插入到 javascript
                // 通过浏览器工具样式被动态插入到<style>标签内
                //css-loader 将 css 文件编译成字符串给 style-loader 处理
                //所以，这里数组的执行顺序是从右到左执行，否则失败；
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },

            {
                test: /\.less$/,

                //less-loader 会先将.less 文件转换为.css 文件，然后再向左边处理
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },

            {
                //在JS中插入图片
                test: /\.(png|jpg|gif)$/,
                //使用url-loader而不是上面的file-loader,添加可以将图片转换为base64
                loader: 'url-loader',
                options: {
                    //小于10k的图片转换为base64
                    limit: 10240,
                    name: '[name].[ext]', //[name]代表原来name
                    outputPath : 'img'
                }
            },

            {
                //在html中插入图片
                test: /\.html$/,
                use: ['html-loader']
            }


        ]
    },


    //devTool 一行,就没有source-map文件了
    devtool: 'inline-source-map',

    //生成模式
    mode: "development"
};