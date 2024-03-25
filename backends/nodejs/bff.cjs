const { spawn } = require('child_process');
const util = require('util');

const runBff = (async () => {
    const serverProcess = spawn("node", ["server.js"], { stdio: 'inherit', cwd: '..' });
})

runBff();
