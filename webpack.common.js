const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		bobblehead: './src/BobbleHead.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist', 'js')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
						  "@babel/plugin-transform-runtime",
						  "@babel/plugin-transform-async-to-generator"
						]
					}
				}
			}
		]
	}
};