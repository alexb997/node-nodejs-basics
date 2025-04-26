import { access, cp } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    // Write your code here 
    const source = join(__dirname, 'files');
    const destination = join(__dirname, 'files_copy');

    try{
        access(source,constants.F_OK);
    }catch(err){
        throw new Error("FS operation failed");
    }

    try{
        await access(destination, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
        }
    }

    await cp(source, destination, { recursive: true });
};

await copy();
