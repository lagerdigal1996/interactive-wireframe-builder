const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of the application
  output: {
    filename: 'bundle.js', // Output filename for the bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for JavaScript and React
          },
        },
      },
    ],
  },
  devServer: {
    static: './dist', // Serve static files from the dist directory
    port: 3000, // Port for the development server
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
  context: path.resolve(__dirname, 'src'), // Add context for module resolution and entry point
};