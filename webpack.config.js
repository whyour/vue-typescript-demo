const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader',
        exclude: /index.html/,
        options: {
          transformToRequire: {
            img: 'src'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  mode: 'development',
  devtool: '#source-map',
  plugins: [
    new VueLoaderPlugin()
  ]
}
