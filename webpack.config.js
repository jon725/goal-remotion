const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/PlayerWrapper.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'remotion-player.js',
    library: {
      name: 'RemotionPlayerModule',
      type: 'window',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // This skips type checking
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    // Bundle React, don't treat it as external
  },
};