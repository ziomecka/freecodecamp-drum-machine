const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const base = require('./webpack.base');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const directory = process.env.directory || 'bundle';

if (process && process.env.ANALYZER) {
    base.plugins.push(
        new BundleAnalyzerPlugin()
    );
}

module.exports = merge(base, {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server'
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, directory),
        port: 3000,
        host: 'localhost',
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader?transpileOnly'
                ],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        namedModules: true
    }
});
