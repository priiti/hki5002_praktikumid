module.exports = {
	entry: `${__dirname}/src/App.js`,
	output: {
		path: `${__dirname}/dist`,
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