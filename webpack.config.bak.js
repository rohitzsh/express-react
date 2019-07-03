var webpack = request('webpack')
var path = require('path')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map',
        libraryTarget: 'commonjs2'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: ['@babel/preset-env',"@babel/preset-react",  "@babel/preset-es2015"],
                }
            }
        ]
    }
}