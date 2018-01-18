let webpack = require('webpack');

module.exports = {
    entry: "./src/houlgatefest.js",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader?presets[]=react'
            }
        ]
    },
    output: {
        path: __dirname + "/web",
        filename: 'houlgatefest.min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
};