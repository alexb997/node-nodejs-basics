import { createHash } from "crypto";
import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  // Write your code here
  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");
  const stream = createReadStream(filePath);

  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
  stream.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await calculateHash();
