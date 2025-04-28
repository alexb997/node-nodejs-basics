import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

const compress = async () => {
  // Write your code here
  const filePath = join("src", "zip", "files", "fileToCompress.txt");
  const archivePath = join("src", "zip", "files", "archive.gz");

  const readStream = createReadStream(filePath);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(archivePath);

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
