var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var dependencies = ['vendor','lib', 'antdresource', 'antd', 'jquery','main']

module.exports = {
    entry: {
        vendor: ['pace-progress', './src/common/paceInit.js'],
        main: ['./src/main.jsx'],
        lib: ['react', 'react-dom','react-router'],
        antd: ['antd'],
        antdresource: ['antd/dist/antd.css','pace-progress/themes/blue/pace-theme-flash.css'],
        jquery: ['jquery']

    },
    output: {path: './dist',
        publicPath: '/',
        filename: 'static/[name]/[name].app.[chunkhash].js'},

    plugins: [
         // 公共模块提取
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'antd', 'lib','vendor'],
            //children: true,
            //  minChunks: Infinity
            //  minChunks: 2
        }),
        // css文件提取
        new ExtractTextPlugin('static/[name]/[name].[chunkhash].css'),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/index.html'),
                to: path.resolve(__dirname, './dist/index.html'),
                toType: 'file',
                force: true
            }]),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/resources'),
                to: path.resolve(__dirname, './dist/resources'),
                toType: 'dir',
                force: true
            }]),

        new HtmlWebpackPlugin({
            cache: false,
            title: "index.html",
            filename: path.resolve(__dirname, './dist/index.html'),
            template: path.resolve(__dirname, './src/index.html'),
            chunks: dependencies,
            chunksSortMode: function (a, b) {
                var aIndex =dependencies.indexOf(a.names[0]);
                var bIndex = dependencies.indexOf(b.names[0]);
                return aIndex - bIndex;
            }
        })
    ],

    module: {
        loaders: [

            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, './src')

                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: [
                        'es2015',
                        'stage-0',
                        'stage-1',
                        'stage-2',
                        'stage-3',
                        'react'
                    ]
                }
            },
            {
                test: require.resolve('pace-progress'),
                loader: 'imports?define=>false'
            },
             {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }]
    },


}


console.log("__dirname:"+__dirname);
