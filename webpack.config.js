const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 阻止 webpack 自动生成箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // 指定预定义环境
            presets: [
              [
                // 指定插件
                '@babel/preset-env',
                {
                  // 兼容的版本
                  targets: {
                    'ie': '11'
                  },
                  'corejs': '3',
                  // 使用corejs方式"usage",按需加载
                  'useBuiltIns': 'usage'
                }
              ]
            ]
          }
        },
        'ts-loader'],
      exclude: /node_modules/
    },
    // 设置less文件的处理
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env", {
                    browsers: 'last 2 versions'
                  }
                ]
              ]
            }
          }
        },
        'less-loader'
      ],

    }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}