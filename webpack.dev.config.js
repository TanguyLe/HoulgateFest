let webpack = require("webpack");

module.exports = {
        entry: [
            "react-hot-loader/patch",
            "./src/houlgatefest.js"
        ],
        mode: "development",
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {'react-dom': '@hot-loader/react-dom'}
        },
        devtool: "#inline-source-map",
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    exclude: [/node_modules/, /bin/],
                    use: [
                        "react-hot-loader/webpack",
                        "babel-loader"
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: [/node_modules/, /bin/],
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        output: {
            path: __dirname + "/web",
            filename: "houlgatefest.min.js"
        },
        devServer: {
            contentBase: "./web",
            hot: true,
            historyApiFallback: true
        },
        plugins: [new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "API_URL": "\"http://localhost:3000\"",
                "HAS_STARTED": process.env.HAS_STARTED === '1'
            })]
};