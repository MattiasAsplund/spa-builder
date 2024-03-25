const { exec, spawn } = require('child_process');
const execAsync = util.promisify(exec);

const runBff = (async () => {
    await execAsync("npm install", { cwd: '..' });
    console.log("npm install");
    
    let childProcess = spawn("node", ["server.js"], { cwd: '..' });
    
    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });    
})

runBff();
