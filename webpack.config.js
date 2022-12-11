const path = require('path');
const swcConfig = require('./.swcrc');
module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: swcConfig,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    publicPath: '/build/',
    open: true,
    overlay: true,
  },
};
