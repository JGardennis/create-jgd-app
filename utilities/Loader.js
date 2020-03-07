const clc = require("cli-color");

module.exports = class Loader {
  constructor(msg) {
    this.message = msg;
    this.interval = null;
  }

  start = () => {
    const chars = ["\\", "|", "/", "-"];
    let x = 0;
    this.interval = setInterval(() => {
      process.stdout.write(`\r${this.message} ${chars[x++]}`);
      x &= 3;
    }, 250);
  };

  stop = () => {
    clearInterval(this.interval);
    process.stdout.moveCursor(-1);
    process.stdout.write(clc.green("done\n"));
  };
};
