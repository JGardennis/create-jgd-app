const shell = require("shelljs");
const packages = require("./packages");

const install = (pkgs, dev) => {
  return new Promise(resolve => {
    shell.exec(`npm install --save${dev && "-dev"} ${pkgs.join(" ")}`, () => {
      resolve();
    });
  });
};

const installPackages = async (dir, name, pkgs) => {
  shell.cd(dir);
  console.log(`[${name} pkgs] INSTALLING`.cyan);
  await Promise.all([install(pkgs.stnd, false), install(pkgs.dev, true)]);
  console.log(`[${name} pkgs] DONE`.green);
  shell.cd("..");
};

const start = async () => {
  await installPackages("client", "client-side", packages.client);
  await installPackages("server", "server-side", packages.server);
};

start();
