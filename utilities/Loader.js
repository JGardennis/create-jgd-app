const clc = require("cli-color");

module.exports = class Loader {
  constructor(msg, file) {
    this.message = msg;
    this.file = file || "";
    this.interval = null;
  }

  load = () => {
    const chars = ["\\", "|", "/", "-"];
    let x = 0;
    this.interval = setInterval(() => {
      process.stdout.write(
        `\r ${clc.cyan(this.message)} ${this.file} ${chars[x++]}`
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
