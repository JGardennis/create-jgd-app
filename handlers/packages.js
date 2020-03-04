module.exports = {
  client: {
    stnd: [
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "react-router-dom",
      "http-proxy-middleware"
    ],
    dev: [
      "@babel/core",
      "@babel/preset-env",
      "@babel/preset-react",
      "babel-loader",
      "css-loader",
      "html-webpack-plugin",
      "mini-css-extract-plugin",
      "node-sass",
      "sass-loader",
      "style-loader",
      "webpack",
      "webpack-cli",
      "webpack-dev-server"
    ]
  },
  server: {
    stnd: ["concurrently", "express", "nodemon"],
    dev: []
  }
};
