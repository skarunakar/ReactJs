var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
module.exports = {
    devtool: "source-map",
    entry: [
        APP_DIR + '/app/app.jsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    eslint: {
        configFile: __dirname + '/.eslintrc',
        quiet: true
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test : /\.jsx?/,
                include: [
                    APP_DIR
                ],
                loader : 'babel'
            },
            {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass"
            },
            {
                test   : /\.(ttf|jpe?g|png|gif|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                include: [__dirname],
                loader : 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "app.env": JSON.stringify("DEV")
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Admin: Contactus',
            template: APP_DIR+'/index.ejs',
            inject: 'body'
        })
    ]

};
