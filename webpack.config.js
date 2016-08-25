var path = require('path');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    './app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        include: path.resolve(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
