const shell = require("shelljs");
const packages = require("./packages");
const install = require("../utilities/install");

installPackages = async () => {
  for (let dir in packages) {
    shell.cd(dir);
    for (pkg in packages[dir]) {
      const package = packages[dir][pkg];
      await install(package.name, package.dev);
    }
    shell.cd("..");
  }
};

installPackages();
