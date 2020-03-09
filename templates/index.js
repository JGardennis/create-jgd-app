module.exports = {
  packageJson: {
    name: "package.json",
    file: require("./main/package-json")
  },
  indexHtml: {
    name: "index.html",
    file: require("./main/index-html")
  },
  indexJsx: {
    name: "index.jsx",
    file: require("./main/index-jsx")
  },
  babelRc: {
    name: ".babelrc",
    file: require("./main/babel")
  },
  webpack: {
    name: "webpack.config.js",
    file: require("./main/webpack")
  },
  eslintRc: {
    name: ".eslintrc",
    file: require("./main/eslint")
  }
};
