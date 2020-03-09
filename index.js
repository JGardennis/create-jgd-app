#!/usr/bin/env node

// Globals
global.appName = process.argv[2];
global.appDirectory = `${process.cwd()}/${appName}`;

// Imports
const shell = require("shelljs");
const fs = require("fs");
const clc = require("cli-color");
const templates = require("./templates");

// Helpers
function stopIf(bool, msg) {
  if (bool) {
    console.log(clc.red(msg));
    process.exit();
  }
}

function getJson(filename) {
  const data = fs.readFileSync("../data/fileStructure.json");
  stopIf(!data, `${filename}.json not found`);
  return JSON.parse(data);
}

// Checks
stopIf(!global.appName, "No app name given");
stopIf(
  fs.existsSync(global.appDirectory),
  `Directory /${global.appName} already exists`
);

// Root app directory
fs.mkdirSync(global.appDirectory);
shell.cd(global.appDirectory);

// JSON Data
const files = getJson("fileStructure");
const packages = getJson("corePackages");

// Build files & folders
for (let directory in files) {
  let path = `${global.appDirectory}/${directory}`;
  fs.mkdirSync(path);

  for (let root in files[directory]) {
    if (root !== "/") {
      fs.mkdirSync(`${path}/${root}`);
    }

    files[directory][root].forEach(file => {
      const template = templates[file];
      const fileContent =
        file === "packageJson" ? template.file(directory) : template.file;

      stopIf(!template, `No template named ${file}`);
      fs.writeFileSync(`${path}${root}/${template.name}`, fileContent);
    });
  }
}

// Install core packages
