const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {examplePath, rootPath} = require('./paths')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    main: examplePath('src/index.tsx')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          configFile: rootPath('tsconfig.json')
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {loader: 'sass-loader', options: {implementation: require('sass')}}
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: examplePath('src/index.html')
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: rootPath('tsconfig.json')
      }
    })
  ],

  devServer: {
    port: 4000
  }
}
