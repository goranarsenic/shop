const common = require('./webpack.common')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { root } = require("../path.config");


module.exports = merge(common, {
    mode: "production",
    plugins: [new CleanWebpackPlugin(['dist'], {root: root})]
})