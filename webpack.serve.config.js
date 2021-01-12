const {
  webpackMerge,
  htmlOverlay,
  webpackServeConfig,
} = require("just-scripts");

module.exports = webpackMerge(webpackServeConfig, htmlOverlay);

var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    ReactGreetingWebComponent: "./src/ReactGreetingWebComponent.tsx",
    BasicWebComponent: "./src/BasicWebComponent.ts",
  },
  mode: isDevelopment ? "development" : "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules\//],
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          sourceMap: false,
          esModule: false,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    isDevelopment ? new webpack.HotModuleReplacementPlugin() : undefined,
    isDevelopment ? new ReactRefreshWebpackPlugin() : undefined,
  ].filter(Boolean),
};
