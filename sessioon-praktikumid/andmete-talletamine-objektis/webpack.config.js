const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/build`,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin()
	]
}