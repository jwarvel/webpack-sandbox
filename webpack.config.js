var path = require("path");

module.exports = {
	context: path.resolve('js'),
	entry: "./app.js",
	output: {
		path: path.resolve("build/js"),         // output bundle file will be created here
		publicPath: "/public/assets/js/",       // requests to publicPath: are directed to path:
		filename: "bundle.js"                   // output bundle file name
	},
	devServer: {
		contentBase: 'public'                   // root folder for requests with
	},
	module: {
		rules: 	[{
			test: /\.less$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'less-loader'}
			]
		}]
	},
	watch: true
};