const fs = require("fs");
const templates = require("../templates");

function createFile(f, dir, args) {
  const template = templates[f];

  fs.writeFileSync(
    `${dir}/${template.name}`,
    args ? template.file(args) : template.file
  );
}

module.exports = appDir => {
  const fileData = fs.readFileSync("../data/fileStructure.json");

  if (!fileData) {
    console.log(clc.red("file data not found"));
    return;
  }

  const files = JSON.parse(fileData);

  for (let dir in files) {
    fs.mkdirSync(`${appDir}/${dir}`);
    for (let folder in files[dir]) {
      if (folder !== "/") {
        fs.mkdirSync(`${appDir}/${dir}/${folder}`);
      }
      files[dir][folder].forEach(file => {
        createFile(
          file,
          `${appDir}/${dir}${folder}`,
          file === "packageJson" ? dir : null
        );
      });
    }
  }
};
