import * as fs from "node:fs/promises";

export const readName = async () => {
  const content = await fs.readFile("package.json", "utf8");
  return JSON.parse(content).name;
};
