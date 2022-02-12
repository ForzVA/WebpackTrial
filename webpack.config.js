const { LoaderOptionsPlugin } = require("webpack");
const MiniCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'main3.js'
    },
    plugins:[ new MiniCssPlugin(),
                new HtmlWebpackPlugin(
                    {template:'./src/index.pug',
                    filename:'pugggg.html',
                    title:'Development'},
                    ),
                new StylelintPlugin({filepath:'./src/style.css' })
            ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[{
                    loader: MiniCssPlugin.loader,
                    options: {
                        esModule: true,
                    },
                }, 'css-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,

            }
        ]
    }
};