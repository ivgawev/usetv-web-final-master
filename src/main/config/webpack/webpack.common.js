const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: {
    app: './src/presentation/components/App/App.tsx'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: process.env.NODE_ENV === 'production' ? './src/main/config/webpack/public/index.prod.html' : './src/main/config/webpack/public/index.dev.html',
      meta: {
        title: 'Title',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
      },
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],

  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    filename: '[app].[fullhash].js',
    path: path.resolve('./dist'),
    clean: true
  }
}
