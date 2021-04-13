const path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx|js|tsx|ts?$/,
                // include: /(node_modules)/,
                // include: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
  };