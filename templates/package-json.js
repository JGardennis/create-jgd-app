module.exports = ({ name, scripts }) => `
{
    "name": "${name}",
    "version": "1.0.0",
    "description": "An app built using create-fs-app",
    "main": "index.js",
    "scripts": {
      ${scripts.map((script, i) => {
        return `${JSON.stringify(script).replace(/[{}]/g, "")}`;
      })}
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  `;
