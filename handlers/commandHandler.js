const commands = require("./commands");

if (process.argv.length > 3) {
  const args = process.argv.slice(3, process.argv.length);

  args.forEach(arg => {
    if (commands[arg]) {
      commands[arg]();
    }
  });
}
