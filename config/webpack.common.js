var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        application: './application/src/main',
        vendor: ['react', 'react-dom', '@tpro/core/polyfill']
    },
    output: {
        path: helpers.root('_build', 'assets'),
        publicPath: '/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['application', 'vendor'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: helpers.root('_build', 'index.html'),
            template: helpers.root('application', 'src', 'index.ejs')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            '@tpro/core': helpers.root('packages', 'core', 'src'),
            '@tpro/components': helpers.root('packages', 'components', 'src')
        },
        modules: [
            'node_modules'
        ]
    }
}