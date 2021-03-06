const webpack = require('webpack');

module.exports = {
	entry: `${__dirname}/client/js/index.js`,
	output: {
		path: `${__dirname}/client/dist`,
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
	}
}