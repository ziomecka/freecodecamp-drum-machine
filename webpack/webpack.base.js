const PROD_ENV = process.env.NODE_ENV === "production";
const ENV_FILE = process.env.ENV_FILE;

const envFilePath = ENV_FILE ? `./.env.${ENV_FILE}` : "./.env";

require("dotenv").config({
  path: envFilePath
});

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const directory = process.env.directory || "bundle";

const APP_DIR = path.resolve(__dirname, "..", "src");
const BUILD_DIR = path.resolve(__dirname, "..", directory);

/** CSS */
const postcssFlexbugs = require("postcss-flexbugs-fixes");
const postcssLost = require("lost");
const postcssImport = require("postcss-import");
const postcssNext = require("postcss-cssnext");
const cssDeclarationSorter = require("css-declaration-sorter");
const cssMqpacker = require("css-mqpacker");

module.exports = {
  entry: ["@babel/polyfill", `${APP_DIR}/index.tsx`],
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(mp3)$/i,
        use: ["file-loader?hash=sha512&digest=hex&name=[hash].[ext]"]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          knownHelpersOnly: false,
          inlineRequires: "/images/"
        }
      },
      {
        test: /.sass$/,
        exclude: /node_modules/,
        use: [
          "style-loader?sourceMap&insertAt=top",
          {
            loader: "css-loader",
            options: {
              localIdentName: "[folder]__[local]--[hash:base64:5]",
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                postcssFlexbugs(),
                postcssLost(),
                postcssImport(),
                postcssNext({
                  browsers: ["last 2 version", "Safari 7", "ie 10"]
                }),
                cssDeclarationSorter({
                  order: "concentric-css"
                }),
                cssMqpacker()
              ],
              sourceMap: true
            }
          },
          // 'postcss-loader?sourceMap',
          "resolve-url-loader?sourceMap",
          "sass-loader?sourceMap"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".sass"],
    alias: {
      images: path.resolve("./src/images"),
      styles: path.resolve("./src/styles"),
      fonts: path.resolve("./src/fonts"),
      components: path.resolve("./src/components"),
      views: path.resolve("./src/views"),
      utils: path.resolve("./src/utils"),
      root: path.resolve("./src")
    }
  },
  plugins: [
    new Dotenv({
      systemvars: true,
      path: envFilePath
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${APP_DIR}/index.hbs`,
      production: PROD_ENV
    })
  ],
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all"
    }
  }
};
