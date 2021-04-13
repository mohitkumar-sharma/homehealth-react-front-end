module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-es2015'],
  "plugins": [
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-proposal-class-properties"
  ],
  rules: [
    {
      test: /(@?mohitkumar-sharma)).*\.(ts|js)x?$/,
      include: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015']
      }
  }
  ]
};
