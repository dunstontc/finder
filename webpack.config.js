const path              = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractHTML = new htmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
});

const extractSass = new ExtractTextPlugin({
  filename: 'app.bundle.css',
  disable:  process.env.NODE_ENV === 'development',
});

module.exports = {
  entry:  path.join(__dirname, 'src', 'js', 'index.js'),
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {  // Scripts
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'},
      },
      {  // Styles
        test: /\.s?css$/,
        use: extractSass.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
          ],
          fallback: 'style-loader',  // use style-loader in development
        }),
      },
    ],
  },
  plugins: [
    extractHTML,
    extractSass,
  ],
};
