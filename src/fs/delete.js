import { unlink, access } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    // Write your code here 
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await access(filePath, constants.F_OK);
        await unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();