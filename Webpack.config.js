const path = require("path");
const externals = require("webpack-node-externals");

module.exports = {
    "entry": "./exports.js",
    "target": "node",
    "externals": [externals()],
    "output": {
        "path": path.resolve("./dist"),
        "filename": "browser.js",
        "libraryTarget": "commonjs2"
    },
    "module": {
        "rules": [
            { "test": /\.(js|es6)(\?.*)?$/i, "exclude": /node_modules/i, "loader": "babel-loader", "options": {
                "babelrc": false,
                "presets": [["env", { "modules": false, "targets": { "browsers": [ "> 1%", "last 2 versions", "iOS >= 7", "Android >= 4.1"] } }]],
                "plugins": [ "syntax-dynamic-import", "transform-object-rest-spread", "transform-decorators-legacy", "transform-class-properties", "transform-async-to-generator" ]
            } },
        ]
    }
}