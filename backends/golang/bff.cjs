const { exec, spawn } = require('child_process');

console.log("Installing backend dependencies...")
exec("go", ["run", "main.go"], { cwd: '..' }, (error, stdout, stderr) => {        
});
