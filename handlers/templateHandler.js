const fs = require("fs");
const templates = require("../templates");

module.exports = (appName, appDir) => {
  function buildPackageJson(dir, scripts) {
    fs.writeFileSync(
      `${dir}/package.json`,
      templates.packageJson({ name: appName, scripts: scripts })
    );
  }

  const clientDir = `${appDir}/client`;
  const serverDir = `${appDir}/server`;

  // Build client-side folders
  fs.mkdirSync(`${clientDir}`);
  fs.mkdirSync(`${clientDir}/src`);
  fs.mkdirSync(`${clientDir}/src/components`);
  fs.mkdirSync(`${clientDir}/src/reducers`);

  // Build client-side files
  buildPackageJson(clientDir, [
    { start: "webpack-dev-server --mode development" },
    { build: "webpack --mode production" },
    { lint: 'eslint --fix "src/**/*.[js|jsx]"' }
  ]);

  fs.writeFileSync(`${clientDir}/index.html`, templates.indexHtml(appName));
  fs.writeFileSync(`${clientDir}/src/index.jsx`, templates.indexJsx);
  fs.writeFileSync(`${clientDir}/.babelrc`, templates.babelRc);
  fs.writeFileSync(`${clientDir}/.eslintrc`, templates.eslint);
  fs.writeFileSync(`${clientDir}/webpack.config.js`, templates.webpack);

  // Build server-side folders
  fs.mkdirSync(`${serverDir}`);
  fs.mkdirSync(`${serverDir}/routes`);

  // Build server-side files
  buildPackageJson(serverDir, [
    { start: "nodemon index.js" },
    { dev: 'concurrently "npm run start" "npm run start --prefix client"' }
  ]);
};
