const path = require("path");
const include = [
  path.resolve(__dirname, "node_modules/@mohitkumar-sharma")
];

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      webpackConfig.module.rules.forEach(({ oneOf }) => {
        if (oneOf) {
          oneOf.forEach(rule => {
            const pattern = /\.(js|mjs|jsx|ts|tsx)$/.toString();
            if (rule.include && rule.test.toString() === pattern) {
              rule.include = [
                ...include,
                rule.include
              ];
            }
          });
        }
      });
      return webpackConfig;
    },
  },
};
