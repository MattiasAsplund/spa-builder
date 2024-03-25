import { exec } from 'child_process';
import util from 'util';

// Promisify the exec function to use it with async/await
const execAsync = util.promisify(exec);

async function runCommands() {
  try {
    // 1) Run 'node ../bff.cjs'
    console.log('Running: node ../bff.cjs');
    await execAsync('node ../bff.cjs');
    console.log('Completed: node ../bff.cjs');

    // 2) Run 'npm install'
    console.log('Running: npm install');
    await execAsync('npm install');
    console.log('Completed: npm install');

    // 3) Run 'npm run dev'
    console.log('Running: npm run dev');
    await execAsync('npm run dev');
    console.log('Completed: npm run dev');
  } catch (error) {
    // Error handling
    console.error(`Error executing command: ${error}`);
  }
}

runCommands();
