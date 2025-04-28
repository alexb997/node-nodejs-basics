import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

const decompress = async () => {
  // Write your code here
  const archivePath = join("src", "zip", "files", "archive.gz");
  const filePath = join("src", "zip", "files", "fileToCompress.txt");

  const readStream = createReadStream(archivePath);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(filePath);

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
