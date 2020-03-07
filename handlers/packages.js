module.exports = {
  client: [
    { name: "react" },
    { name: "react-dom" },
    { name: "react-redux" },
    { name: "redux" },
    { name: "react-router-dom" },
    { name: "http-proxy-middleware" },
    { name: "prettier" },
    { name: "@babel/core", dev: true },
    { name: "@babel/preset-env", dev: true },
    { name: "@babel/preset-react", dev: true },
    { name: "babel-loader", dev: true },
    { name: "css-loader", dev: true },
    { name: "html-webpack-plugin", dev: true },
    { name: "mini-css-extract-plugin", dev: true },
    { name: "node-sass", dev: true },
    { name: "sass-loader", dev: true },
    { name: "style-loader", dev: true },
    { name: "webpack", dev: true },
    { name: "webpack-cli", dev: true },
    { name: "webpack-dev-server", dev: true },
    { name: "eslint", dev: true },
    { name: "eslint-loader", dev: true },
    { name: "babel-eslint", dev: true },
    { name: "eslint-config-react", dev: true },
    { name: "eslint-plugin-react", dev: true }
  ],
  server: [
    { name: "concurrently" },
    { name: "express" },
    { name: "nodemon" },
    { name: "prettier" }
  ]
};
