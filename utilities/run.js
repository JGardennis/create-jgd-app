const shell = require("shelljs");
const Loader = require("../utilities/Loader");

module.exports = (script, loadMsg, callback) => {
  return new Promise(resolve => {
    let loader = new Loader(loadMsg);
    loader.start();

    shell.exec(script, { silent: true }, () => {
      callback && callback();
      loader.stop();
      resolve();
    });
  });
};
