/*
    webpack构建时，会自动读取此文件
 */

//获取当前路径
const path = require('path')
//获取html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//获取css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//获取css压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
//获取dist清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //入口文件
    entry: [
        './src/js/index.js',
        './src/index.html'
    ],


    //出口文件
    output: {
        //文件名
        filename : 'js/bundle.js',
        //路径，要绝对路径
        path : path.resolve(__dirname, './dist'),
    },


    //模块解析
    resolve: {
        //导入文件查找的限定后缀
        extensions: ['.ts', '.js', '.css', '.json', '.less', '.scss'],
        //路径别名(绝对路径)
        alias: {
            css : path.resolve(__dirname, './src/css')
        },
        //设置模块解析目录
        //modules: ['node_modules']
        modules: [path.resolve(__dirname, '../node_modules'), 'node_modules']
    },

    //devServer
    devServer: {
        port : 3000,
        stats : "minimal",
        hot : true
    },

    //模块
    module: {
        //规则
        rules: [
            {
                test: /\.css$/,
                //从右向左执行
                use : [
                    // {
                    //     loader : MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath : '../'
                    //     }
                    // },
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         importLoaders : 1
                    //     }
                    // },
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                //从右向左执行
                use : [
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                //从右向左执行
                use : [
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.(png|gif|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit : 10240,
                    name : '[name].[ext]',
                    outputPath : './img'
                }
            },
            {
                test : /\.html$/,
                use : ['html-loader']
            },
            {
                test : /.js$/,
                loader: 'babel-loader',
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
            //     test : /.js$/,
            //     loader: 'eslint-loader',
            //     //编译前执行
            //     enforce: 'pre',
            //     //不执行目录
            //     exclude: /node_modules/
            // }
        ]
    },

    //文件监听
    watch: false,

    //监听配置
    watchOptions: {
        //不监听解析模块目录
        ignored: /node_modules/,
        //延迟编译，300，2000毫秒
        aggregateTimeout: 500,
        //轮询毫秒
        poll: 1000
    },


    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",       //默认值
            filename: "index.html",             //默认值
            minify: {
                collapseWhitespace : false,      //压缩空格，变成一行
                removeComments : false,          //去掉注释
            }
        }),
        new MiniCssExtractPlugin({
            filename : 'css/[name].css'
        }),

        //清理dist目录
        new CleanWebpackPlugin()
        //压缩css
        //new OptimizeCssAssetsWebpackPlugin()
    ],

    //devTool
    devtool: 'eval-source-map',

    //生成模式
    mode : "development"
    
};