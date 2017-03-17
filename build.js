var path = require('path');
var webpack = require("webpack");               // https://webpack.js.org/
var webpackMerge = require('webpack-merge');    // https://github.com/survivejs/webpack-merge
var program = require('commander');             // https://github.com/tj/commander.js
var gutil = require('gutil');
var package = require('./package.json');

program
    .version(package.version)
    .option('-P, --production', 'Build production')
    .option('-W, --watch', 'Watch the filesystem for changes')

program.parse(process.argv);

let config = program.production ? require('./config/webpack.prod.js') : require('./config/webpack.dev.js');
config.watch = program.watch ? true : false;

webpack(config, (err, status) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }
    gutil.log('[webpack:build-project]', status.toString({
        chunks: false,
        colors: true,
        timings: true,
    }));
});