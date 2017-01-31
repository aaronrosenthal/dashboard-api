const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build:prod';

const plugins = [];

if (isProd) {
  plugins.push(new UglifyJsPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: isProd ? 'dashboard-api.min.js' : 'dashboard-api.js',
    library: 'dashboard-api',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['ng-annotate-loader', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins
};
