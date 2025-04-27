import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  // Write your code here
  const filePath = join(__dirname, "files", "fileToRead.txt");
  const readableStream = createReadStream(filePath);

  readableStream.pipe(process.stdout);
};

await read();
