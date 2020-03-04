const fs = require("fs");
const templates = require("../templates");

module.exports = (appName, clientDir, serverDir) => {
  // Build client-side folders
  fs.mkdirSync(`${clientDir}`);
  fs.mkdirSync(`${clientDir}/src`);
  fs.mkdirSync(`${clientDir}/src/components`);
  fs.mkdirSync(`${clientDir}/src/reducers`);

  // Build client-side files
  fs.writeFileSync(
    `${clientDir}/package.json`,
    templates.packageJson({
      name: appName,
      scripts: [
        { start: "webpack-dev-server --mode development" },
        { build: "webpack --mode production" }
      ]
    })
  );

  fs.writeFileSync(`${clientDir}/index.html`, templates.indexHtml(appName));
  fs.writeFileSync(`${clientDir}/src/index.jsx`, templates.indexJsx);
  fs.writeFileSync(`${clientDir}/.babelrc`, templates.babelRc);

  // Build server-side folders
  fs.mkdirSync(`${serverDir}`);
  fs.mkdirSync(`${serverDir}/routes`);

  // Build server-side files
  fs.writeFileSync(
    `${serverDir}/package.json`,
    templates.packageJson({
      name: appName,
      scripts: [
        { start: "nodemon index.js" },
        { dev: 'concurrently "npm run start" "npm run start --prefix client"' }
      ]
    })
  );
};
