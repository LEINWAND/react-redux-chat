var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var path = require('path')

var isProduction = process.env.NODE_ENV === 'production'


function entry() {
  return isProduction ? './src/main.js' : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ]
}


module.exports = {
  entry: entry(),

  output: {
    path: __dirname + '/lib',
    filename: 'bundle.js',
    publicPath: '/lib/',
  },

  module: {
    loaders: [{
      // babel/babel-loader (https://github.com/babel/babel-loader)
      // Troubleshooting: https://github.com/babel/babel-loader#troubleshooting
      test: /\.js(x)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      // jtangelder/sass-loader (https://github.com/jtangelder/sass-loader)
      // Usage: https://github.com/jtangelder/sass-loader#usage
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      // loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    }]
  },

  // resolve: {
  //   extensions: ['', '.js', '.jsx'],
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['lib'], {
      // root: __dirname,
      // verbose: true,
      // dry: false,
      exclude: ['bundle.js']
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: isProduction,
    //   // sourceMap: ! isProduction,
    // })
  ],

  devServer: {
    hot: true,
    contentBase: './',
  },


  /// Todos
  // TODO: Use The Production Build
  // https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build

}
