const clc = require("cli-color");

module.exports = class Loader {
  constructor(file, action) {
    this.file = file;
    this.action = action;
    this.interval = null;
  }

  load = () => {
    const chars = ["\\", "|", "/", "-"];
    let x = 0;
    this.interval = setInterval(() => {
      process.stdout.write(
        `\r ${clc.cyan(this.action)} ${this.file} ${chars[x++]}`
      );
      x &= 3;
    }, 250);
  };

  done = () => {
    clearInterval(this.interval);
    process.stdout.moveCursor(-1);
    process.stdout.write(clc.green("done\n"));
  };
};
