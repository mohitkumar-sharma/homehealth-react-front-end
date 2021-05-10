# Fixing the import issue.

## Background and root cause of the issue. 
The app is create using CRA v4.0.3.
That means app is compiled using react-script (and inturn webpack). External webpack.config.js/babel.config.js do not have any effect on importing the uncompiled node package. And internal webpack.config do not specify loader/transpiler for anything inside node_modules.


## Solution for the issue
`@mohitkumar-sharma/homehealth-common-feature` package is uncompiled and it needs a loader which is `babel-loader`. To specify `babel-loader` for the package without ejecting the CRA app is possible by adding a configuration layer for create-react-app using tools like [CRACO](https://github.com/gsoft-inc/craco).

Please read about craco configuration. 

When you use craco for compile/build, `craco.config.js` includes `node_modules/@mohitkumar-sharma` folder to the loader rules so that whenever a module is imported from the included package, it used `babel-loader` and compiles the app correctly. 
