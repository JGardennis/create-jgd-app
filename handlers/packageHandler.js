const shell = require("shelljs");
const packages = require("./packages");

const Loader = require("../utilities/Loader");

installPackages = async () => {
  for (let dir in packages) {
    shell.cd(dir);
    for (pkg in packages[dir]) {
      let package = packages[dir][pkg];
      let loader = new Loader(package.name, "Installing");
      loader.load();
      await new Promise(resolve => {
        shell.exec(
          `npm install --save${package.dev && "-dev"} ${package.name}`,
          { silent: true },
          () => {
            loader.done();
            resolve();
          }
        );
      });
    }
    shell.cd("..");
  }
};

installPackages();
