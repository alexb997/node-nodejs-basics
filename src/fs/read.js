import { readFile, access } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here 
    const filePath = join(__dirname, 'files', 'fileToRead.txt');

    try {
        await access(filePath, constants.F_OK);
        const content = await readFile(filePath, { encoding: 'utf-8' });
        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();