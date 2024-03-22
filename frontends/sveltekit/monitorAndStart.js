const { spawn } = require('child_process');

// Start command1
const command1 = spawn('sh ../bff.sh', [], { shell: true });

command1.stdout.on('data', (data) => {
  console.log(`command1: ${data}`);
  // Check if the output contains the specific message
  if (data.toString().includes('Server starting on port 8099...')) {
    // Start command2
    spawn('npm run dev', [], { shell: true, stdio: 'inherit' });
  }
});

command1.stderr.on('data', (data) => {
  console.error(`command1: ${data}`);
});

command1.on('close', (code) => {
  console.log(`command1 exited with code ${code}`);
});
