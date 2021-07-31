var path = require('path')
var os = require('os')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  entry: {
    // app: './src/main.js'
    app: ["babel-polyfill", "./src/main.js"]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@static': resolve('static'),
      '@common': path.join(resolve('src'), 'common'),
      '@components': path.join(resolve('src'), 'components'),
      '@pages': path.join(resolve('src'), 'pages'),
      '@assets': path.join(resolve('src'), 'assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=happy-babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      async: 'shared-module',
      minChunks: (module, count) => (
        count >= 2    // 当一个模块被重复引用2次或以上的时候单独打包起来。
      )
    }),
    // https://github.com/amireh/happypack
    new HappyPack({
      id: 'happy-babel-loader',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool,
      cache: true,
      verbose: true
    }),
    new webpack.DllReferencePlugin({
        context: path.resolve(__dirname, '..'),
        manifest: require('./vendor-manifest.json')
        // manifest: path.resolve(__dirname,'./vendor-manifest.json')
    })
  ]
}
