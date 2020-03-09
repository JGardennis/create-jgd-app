const fs = require("fs");
const shell = require("shelljs");
const run = require("../utilities/run");
const clc = require("cli-color");
const pkgData = fs.readFileSync("../data/corePackages.json");

if (!pkgData) {
  console.log(clc.red("package data not found"));
  return;
}

const packages = JSON.parse(pkgData);

const install = async (pkgs, dev) => {
  for (let i = 0; i < pkgs.length; i++) {
    await run(
      `npm install --save${dev && "-dev"} ${pkgs[i]}`,
      `${clc.cyan("Installing")} ${pkgs[i]}`
    );
  }
};

const handlePackages = async () => {
  for (let dir in packages) {
    shell.cd(dir);
    await install(packages[dir].standard, false);
    await install(packages[dir].dev, true);
    shell.cd("..");
  }
};

handlePackages();
