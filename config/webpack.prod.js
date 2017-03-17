var webpack = require("webpack");
var webpackMerge = require('webpack-merge');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production'

module.exports = webpackMerge(require('./webpack.common.js'), {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].bundle.js'
    },
    resolve: {
        alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
            output: { comments: false },
        })
    ]
});