/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

//路径
const path = require('path')
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//css压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
//清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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

    //模块解析
    resolve: {
        //导入语句省略后缀
        extensions: ['.ts', '.js', '.json', '.css', '.less', '.scss'],
        //导入路径的别名
        alias: {
            css : path.resolve(__dirname, './src/css')
        },
        //解析模块目录
        modules: [path.resolve(__dirname, '../node_modules'), 'node_modules']
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
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders : 1
                        }
                    },
                    'postcss-loader'
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
                test : /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
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
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                options: {
                    presets : [
                        '@babel/preset-env'
                    ],
                    plugins : [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },
            {
                test : /\.ts$/,
                use : ['ts-loader']
            },
            // {
            //     test : /\.js$/,
            //     loader : 'eslint-loader',
            //     //编译前执行
            //     enforce: 'pre',
            //     //不检查指定目录
            //     exclude: /node_modules/
            // }
        ]
    },

    //监听
    watch: false,

    //监听选项，当true时才有效
    watchOptions: {
        //不监听解析模块目录
        ignored: /node_modules/,
        //更新频率
        aggregateTimeout: 500,
        //轮询
        poll: 1000
    },


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

    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",        //默认
            filename: "index.html",
            minify: {
                collapseWhitespace : false,          //去掉空格
                removeComments : false,              //去掉注释
            }
        }),
        new MiniCssExtractPlugin({
            filename : 'css/[name].css'
        }),

        //清理打包
        new CleanWebpackPlugin()

        //压缩css
        //new OptimizeCssAssetsWebpackPlugin()
    ],

    //devTool
    devtool: 'eval-source-map',

    //生成模式
    mode : "development"
};