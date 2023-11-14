
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production', // o development
  entry: {
    inicioSesión: './JS/iniciar_sesion.js',
    registrar: './JS/Registrar.js',
    carousel: './JS/Carusel.js',
    catalogo: './JS/catalogo.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/inicioSesión.html',
      filename: 'inicioSesión.html',
      chunks: ['inicioSesión'],
    }),
    new HtmlWebpackPlugin({
      template: './html/registrar.html',
      filename: 'registrar.html',
      chunks: ['registrar'],
    }),
    new HtmlWebpackPlugin({
        template: './HTML/01_landing.html',
        filename: '01_landing.html',
        chunks: ['01_landing'],
    }),
    new HtmlWebpackPlugin({
        template: './HTML/Carro.html',
        filename: 'Carro.html',
        chunks: ['Carro'],
    }),
    new HtmlWebpackPlugin({
        template: './HTML/catalogo.html',
        filename: 'catalogo.html',
        chunks: ['catalogo'],
    }),
    new MiniCssExtractPlugin(),
  ],
};
