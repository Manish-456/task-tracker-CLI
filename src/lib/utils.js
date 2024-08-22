import fs from "fs";

const filename = "tasks.json";
function stringify(task) {
  return JSON.stringify(task);
}

function parseString(tasks) {
  return JSON.parse(tasks);
}

function writeToJSONFile(task) {
  return fs.writeFileSync(filename, task);
}

function readJSONFile() {
  return fs.readFileSync(filename).toString();
}

export { stringify, writeToJSONFile, parseString, readJSONFile };
