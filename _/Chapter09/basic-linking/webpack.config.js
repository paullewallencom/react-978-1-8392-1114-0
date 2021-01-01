module.exports = {
  entry: [
    './main.js',
  ],
  output: {
    path: __dirname,
    filename: 'main-bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
