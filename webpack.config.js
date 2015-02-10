// Webpack configuration to use with the build task.

var webpack = require('webpack');

module.exports = {

  // Create also a "lib" chunk with common libraries, e.g. react.
  entry: {
    lib: ['react', 'react-router'],
    main: './client.jsx'
  },

  output: {
    path: './build/public/js',
    publicPath: '/js/',
    filename: 'main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production") // This has effect on the react lib size
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee'],
  },

  module: {
    loaders: [
       {
        test: /\.jsx$/,
        loaders: ['react-hot', 'jsx']
      },
      { test: /\.coffee$/, loader: "jsx-loader!coffee-loader" },
      { test: /\.cjsx$/, loader: "coffee-loader!cjsx-loader"}
    ]
  },
  externals: {}
};