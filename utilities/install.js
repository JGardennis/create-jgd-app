const shell = require("shelljs");
const Loader = require("../utilities/Loader");

module.exports = (str, isDev, callback) => {
  return new Promise(resolve => {
    let loader = new Loader("Installing", str);
    loader.load();

    shell.exec(
      `npm install --save${isDev && "-dev"} ${str}`,
      { silent: true },
      () => {
        callback && callback();
        loader.done();
        resolve();
      }
    );
  });
};
