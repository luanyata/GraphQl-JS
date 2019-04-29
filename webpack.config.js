const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    entry: './src/app.js',
    mode: "development",

    resolve: {
        extensions: ['.js']
    },
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new WebpackShellPlugin({onBuildEnd: ['npm run nodemon']})
    ],
    externals: [nodeExternals()]
};