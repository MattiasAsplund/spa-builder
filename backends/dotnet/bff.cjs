const { exec, spawn } = require('child_process');

console.log("Installing backend dependencies...")
exec("npm install", { cwd: '..' }, (error, stdout, stderr) => {

    let childProcess = spawn("dotnet", ['run'], { cwd: '..' });

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
        
});
