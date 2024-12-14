const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Входной файл

  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    clean: true, // Очистка dist перед каждой сборкой
  },

  mode: 'development', // Устанавливаем режим разработки

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Используем style-loader для режима разработки
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, 
        type: 'asset/resource', // Обработка изображений
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Обработка HTML
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, // Автоматически открывает браузер
  },
};
