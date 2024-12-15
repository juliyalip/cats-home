const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', 

  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
    clean: true, 
    publicPath: './',
  },

  mode: 'development', 

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, 
        type: 'asset/resource', 
        generator: {
          filename: 'img/[name][ext][query]', 
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader', 
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', 
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, 
  },
};
