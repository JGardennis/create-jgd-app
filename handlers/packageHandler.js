const shell = require("shelljs");
const clc = require("cli-color");
const packages = require("./packages");
const run = require("../utilities/run");

installPackages = async () => {
  for (let dir in packages) {
    shell.cd(dir);
    for (pkg in packages[dir]) {
      const package = packages[dir][pkg];
      await run(
        `npm install --save${package.dev && "-dev"} ${package.name}`,
        `${clc.cyan("Installing")} ${package.name}`
      );
    }
    shell.cd("..");
  }
  console.log(clc.green("All packages installed"));
  shell.cd("client");
  await run(`npm run lint`, "Linting...");
};

installPackages();
