import fs from "fs/promises";

async function build() {
  await fs.copyFile("./index.html", "./dist/index.html");
  await fs.copyFile("./style.css", "./dist/style.css");
}

build();
