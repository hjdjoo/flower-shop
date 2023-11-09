const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// console.log('webpack.config.js - process.env.NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name].[ext]'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/'
    },
    proxy: {
      '/place_order': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000'
      }
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'client/index.html'
  })]
};