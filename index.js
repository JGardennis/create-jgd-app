#!/usr/bin/env node
const clc = require("cli-color");

// Imports
const shell = require("shelljs");
const fs = require("fs");

const appName = process.argv[2];
const appDir = `${process.cwd()}/${appName}`;

if (!appName) {
  console.log(clc.red("No app name given"));
  return;
}

if (fs.existsSync(appDir)) {
  console.log(clc.red(`Directory ${appDir} already exists`));
  return;
}

// Create root app directory
fs.mkdirSync(appDir);
shell.cd(appDir);

// Handle templates
require("./handlers/templateHandler")(appDir);

// Handle packages
require("./handlers/packageHandler");
