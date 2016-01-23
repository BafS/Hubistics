var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  node: {
    child_process: 'empty',
    fs: 'empty'
  }
}
