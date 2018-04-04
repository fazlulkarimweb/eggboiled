const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: "./src/js/index.js",
  output: { 
    path: path.join(__dirname, "/src"),
  	filename: "bundle.js"
    },
devtool: "eval source-map",
 devServer: {
  contentBase: path.join(__dirname, "src"),
  hot: true,
  compress: true,
  port: 8080
   }, 
    module: {
    	rules: [
        {
        	test: /\.js$/,
        	use: [
            {
            	loader: "babel-loader",
            query: {
                presets: ['env', 'react']
            }
            }
        	],
          exclude: /node_modules/
        }
    	]
    },
    plugins : [
    new webpack.HotModuleReplacementPlugin()
    ]
 }
