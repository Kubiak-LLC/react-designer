var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.css'],
    mainFields: [
      'webpack',
      'browser',
      'web',
      'browserify',
      ['jam', 'main'],
      'main',
      'index'
    ]
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './examples'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      { test: /\.(png|svg)$/, use: 'url-loader?limit=8192' },
      {
        test: /^((?!\.module).)*\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      },
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      }
    ]
  }
};
