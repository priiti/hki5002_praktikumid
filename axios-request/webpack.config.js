const webpack = require('webpack');
const path = require('path');

const javascript = {
    test: /\.(js)$/,
    use: [{
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        }
    }]
};

const config = {
    entry: {
        App: './source/index.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [javascript]
    }
};

process.noDeprecation = true;
module.exports = config;