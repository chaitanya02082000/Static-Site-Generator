import fs from "fs";
import path from "path";
import matter from "gray-matter";

const readFile = (filepath) => {
  const rawfile = fs.readFileSync(filepath, "utf8");
  const parsed = matter(rawfile);
};
const data = readFile(path.join(path.resolve(), "src/pages/index.md"));

console.log(data);
