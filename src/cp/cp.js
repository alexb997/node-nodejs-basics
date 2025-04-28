import { spawn } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here
    const scriptPath = join('src', 'cp', 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */["I am bored","Just test"]);
