// webpack is similar to gulp BUT specialized to only bundle

const path = require('path')
//const CopyPlugin = require('copy-webpack-plugin'); // fail = will need to use unix cp or gulp

module.exports = {    
    entry: "./index.web.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        //publicPath: 'web/',
        filename: "js/bundle.js",
        sourceMapFilename: "js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        rules: [
         {
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                /* query: {
                    //presets: ['stage-0'],
                    //plugins: ["transform-class-properties"]
                      plugins: ["@babel/plugin-proposal-class-properties"]
                }
                */
            }
        
         }
        ],
    }
};
