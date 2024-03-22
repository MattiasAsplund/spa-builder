const { spawn } = require('child_process');

// Start command1
const command1 = spawn('sh', ['../bff.sh'], { shell: true, stdio: ['inherit', 'pipe', 'pipe'] });

const onDataHandler = (data) => {
  const dataStr = data.toString();
  console.log(dataStr); // Log the message (remove the xcommand1 prefix if not needed)
  if (dataStr.includes('Server starting on port 8099...')) {
    // Start command2
    console.log("Starting command");
    spawn('npm', ['run', 'dev'], { shell: true, stdio: 'inherit' });
  }
};

// Listen to both stdout and stderr
command1.stdout.on('data', onDataHandler);
command1.stderr.on('data', onDataHandler);

command1.on('close', (code) => {
  console.log(`command1 exited with code ${code}`);
});
