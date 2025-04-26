import { writeFile, access } from "fs/promises";
import { constants } from "fs";
import { join } from "path";

const create = async () => {
  // Write your code here
  const filePath = join("src", "fs", "files", "fresh.txt");

  try {
    await access(filePath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    await writeFile(filePath, "I am fresh and young");
  }
};

await create();
