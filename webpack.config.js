const webpack = require('webpack');
const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});

module.exports = {
  entry: ['./src/sticky-kit.js'],
  output: {
    filename: 'sticky-kit.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [ definePlugin ],
  mode: 'production',
};
