const { exec, spawn } = require('child_process');

console.log("Installing backend dependencies...");
exec("cargo run", { stdio: 'inherit', cwd: '..' });
