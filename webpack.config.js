const glob = require('glob');
const path = require('path');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    entry: {
        //app: ['./src/js/ui/alert-utils.js', './src/js/ui/form-utils.js', './src/js/index.js'],
        app: glob.sync('./src/js/**/*.js'),
        libs: glob.sync('./src/libs/**/*.js'),
    },
    output: {
        //iife: true,
        //module: false,
        path: path.resolve(__dirname, 'src', 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        noParse: [
            path.resolve(__dirname, 'src', 'libs', 'jquery-3.6.0.js')
        ]
    }
    // experiments: {
    //     outputModule: true
    // }
}