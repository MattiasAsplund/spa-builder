console.log("Installing backend dependencies...")
const { spawn } = require('child_process');

const runBff = (async () => {
    const serverProcess = spawn("go", ["run", "main.go"], { stdio: 'inherit', cwd: '..' });
})

runBff();
