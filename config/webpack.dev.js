var webpack = require("webpack");
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(require('./webpack.common.js'), {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    }
});