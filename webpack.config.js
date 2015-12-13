var path = require('path');
module.exports = {
  entry: "./app/js/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    progress: true,
    contentBase: './dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      //Images
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        loader: "file" }
    ]
  }
};
