const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of the application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Add context for module resolution and entry point
  context: path.resolve(__dirname, 'src'),
};