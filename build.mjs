import fs from "fs/promises";
import process from "process";
import { join } from "path";

function getPath(path) {
  return join(process.cwd(), path);
}

function copy(from, to) {
  console.log(from, "->", to);

  return fs.copyFile(from, to);
}

async function build() {
  await copy(getPath("./index.html"), getPath("./dist/index.html"));
  await copy(getPath("./style.css"), getPath("./dist/style.css"));
}

build();
