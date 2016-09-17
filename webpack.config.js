var path = require('path');
var webpack = require('webpack')
module.exports = {
    entry: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.js'),

    ],
    output: {
        path: path.resolve(__dirname, 'build'),    //使用package.json的dev命令则隐藏build文件夹
        filename: 'bundle.js',
        publicPath:'./build/'                   //webpack 打包用 publicPath:'./build/',webpack 开服务器测试用 publicPath:'/build/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {


    stats: { colors: true },
    port: 3000,
   inline:true,
    hot:true,
    historyApiFallback:true           //react-router 刷新页面时使浏览器自动寻找根目录下的index.html，而不是当前路径下的index.html
                                        //使用 <Router history={hashHistory}>则不用设置 historyApiFallback:true,
  },                                   //路径会变成 http://localhost:3000/#/?_k=006tcj , /#是必须的 /?后面是hash值
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
  extensions: ["", ".js", ".jsx"],
},
module: {
  loaders: [
    { test: /\.js$/,
      exclude: /node_modules/,
       loader: "babel-loader"
     },
     { test: /\.css$/,
      loader: "style!css!autoprefixer"               //有先后顺序,从右到左
    },
    { test: /\.(jpe?g|png)$/,
      loader: 'file-loader'           //有先后顺序
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=1000"
    }

  ]

},
};
