const webpack = require("webpack");
const path = require("path");
const process = require("process");

module.exports = {
    mode: "production",
    entry: [
        "./client/src/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "static/dist"),
        filename: "app.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules\/(?!(minilazyload)\/).*/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                    presets: [
                        ["@babel/preset-env"]
                    ],
                },
            }
        ]}
};