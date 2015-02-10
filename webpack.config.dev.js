var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './client.jsx'
  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname,

    // Filename to use in HTML
    filename: 'main.js',

    // Path to use in HTML
    publicPath: 'http://localhost:3001/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js')
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
  devtool: "#inline-source-map",
  externals: { }
};