module.exports = dir => {
  const scripts = {
    client: [
      { start: "webpack-dev-server --mode development" },
      { build: "webpack --mode production" },
      { lint: 'eslint --fix "src/**/*.[js|jsx]"' }
    ],
    server: [
      { start: "nodemon index.js" },
      { dev: 'concurrently "npm run start" "npm run start --prefix client"' }
    ]
  };

  return `
  {
    "name": "${name}",
    "version": "1.0.0",
    "description": "An app built using create-fs-app",
    "main": "index.js",
    "scripts": {
      ${scripts[dir].map((script, i) => {
        return `${JSON.stringify(script).replace(/[{}]/g, "")}`;
      })}
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  `;
};
