const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function isProduction(env) {
  if (env === undefined) return false;

  if (Object.prototype.hasOwnProperty.call(env, 'production')) {
    return env.production === true;
  }
  return false;
}

module.exports = (env) => {
  let context;

  if (isProduction(env)) {
    context = {
      mode: 'production',
      devtool: 'source-map',
    };
  } else {
    context = {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist',
      },
    };
  }

  const base = {
    entry: './src/core/js/index.js',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Hello Title',
        favicon: './src/samples/images/square.png',
      }),
    ],
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
        {
          test: /\.(csv|tsv)$/,
          exclude: /node_modules/,
          loader: 'csv-loader',
        },
        {
          test: /\.xml$/,
          exclude: /node_modules/,
          loader: 'xml-loader',
        },
        {
          test: /\.json5$/i,
          exclude: /node_modules/,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
        {
          test: /\.txt$/i,
          exclude: /node_modules/,
          loader: 'raw-loader',
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitError: true,
          },
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },

      ],
    },
  };

  return { ...context, ...base };
};
