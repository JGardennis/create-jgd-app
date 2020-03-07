#!/usr/bin/env node
require("colors");

// Imports
const shell = require("shelljs");
const fs = require("fs");

const appName = process.argv[2];
const appDir = `${process.cwd()}/${appName}`;

if (!appName) {
  console.log("No app name given".red);
  return;
}

if (fs.existsSync(appDir)) {
  console.log(`Directory ${appDir} already exists`.red);
  return;
}

// Create root app directoryk
fs.mkdirSync(appDir);
shell.cd(appDir);

// Handler templates
require("./handlers/templateHandler")(appName, appDir);

// Handle packages
require("./handlers/packageHandler");
