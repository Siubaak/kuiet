const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/kuiet.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
}