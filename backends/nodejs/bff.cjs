console.log("Installing backend dependencies...")
const { spawn } = require('child_process');

const runBff = (async () => {
    const serverProcess = spawn("node", ["server.js"], { stdio: 'inherit', cwd: '..' });
})

runBff();
