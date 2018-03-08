const path = require("path");
const WebpackNodeExternals = require("webpack-node-externals");

class Configuration {
    constructor( options = {} ) {
        this.entry = "./exports.js";
        this.target = "node";
        this.externals = [WebpackNodeExternals()];
        this.output = {
            "path": path.resolve("./dist"),
            "filename": options.filename || "browser.js",
            "libraryTarget": "commonjs2"
        };
        const babelrc = {
            "babelrc": false,
            "presets": [
                ["env", { "modules": false, "targets": { "browsers": [ "> 1%", "last 2 versions", "iOS >= 7", "Android >= 4.1"] } }]
            ],
            "plugins": [ 
                "syntax-dynamic-import", 
                "transform-object-rest-spread", 
                "transform-decorators-legacy", 
                "transform-class-properties", 
                "transform-async-to-generator",
            ]
            .concat(options.runtime || options.runtime === void 0 ? "transform-runtime" : [])
            .concat(options.plugins || [])
        };
        const loader = { "test": /\.(js|es6)(\?.*)?$/i, "exclude": /node_modules/i, "loader": "babel-loader", "options": babelrc };
        this.module = {};
        this.module.loaders = [loader]; 
    }
}

module.exports = [
    new Configuration({ "filename": "browser.js" }),
    new Configuration({ "filename": "wepy.js", "runtime": false })
];