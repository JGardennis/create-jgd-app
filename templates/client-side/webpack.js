module.exports = `
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "bundle.js"
    },
    devServer: {
        contentBase: "./build"
        historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.module\.s(a|c)ss$/,
            loader: [
              isDev ? "style-loader" : MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  sourceMap: isDev
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: isDev
                }
              }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
              isDev ? "style-loader" : MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  sourceMap: isDev
                }
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: [".js", ".jsx", ".scss"]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve("./index.html")
        }),
        new MiniCssExtractPlugin({
          filename: isDev ? "[name].css" : "[name].[hash].css",
          chunkFilename: isDev ? "[id].css" : "[id].[hash].css"
        })
      ]
}
`;
