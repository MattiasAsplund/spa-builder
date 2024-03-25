console.log("Installing backend dependencies...")
const { spawn } = require('child_process');

const runBff = (async () => {
    const serverProcess = spawn("dotnet", ["run"], { stdio: 'inherit', cwd: '..' });
})

runBff();
