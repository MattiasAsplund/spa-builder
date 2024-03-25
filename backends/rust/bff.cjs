const { exec, spawn } = require('child_process');

console.log("Installing backend dependencies...");
exec("cargo", ["run"], { cwd: '..' }, (error, stdout, stderr) => {        
});
