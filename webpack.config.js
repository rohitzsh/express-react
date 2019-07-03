module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map'
}