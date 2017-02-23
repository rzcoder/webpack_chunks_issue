const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            minChunks: function(module) {
                return module.resource && (/node_modules/).test(module.resource);
            }
        })
    ]
};
