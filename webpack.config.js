var webpack = require('webpack');//引入Webpack模块，注意这里只能使用ES5语法引入


module.exports = {
    entry: __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的bundle.js文件存放的地方
        filename: "bundle.js"      //打包后的文件名
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            }
        ]
    },
     plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

};