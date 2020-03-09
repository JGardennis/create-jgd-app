module.exports = {
  ts: () => {
    const extras = global.extraPkgs;
    const toAdd = {
      dir: "client",
      pkgs: [
        { name: "typescript", dev: true },
        { name: "ts-loader", dev: true }
      ]
    };
    global.ft = { comp: "tsx", scr: "ts" };

    global.extraPkgs = extras ? extras.concat(toAdd) : toAdd;
    console.log(global.extraPkgs);
    // tsconfig.json
    // src index.ts
  }
};
