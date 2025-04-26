import { rename  as fsRename , access } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    // Write your code here 
    const wrongPath = join(__dirname, 'files', 'wrongFilename.txt');
    const properPath = join(__dirname, 'files', 'properFilename.md');

    try {
        await access(wrongPath, constants.F_OK);
        try {
            await access(properPath, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw new Error('FS operation failed');
        }

        await fsRename(wrongPath, properPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();