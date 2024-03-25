#!/usr/bin/env node

import inquirer from 'inquirer';
import input from '@inquirer/input';
import degit from 'degit';
import process from 'process';
import { exec, execSync } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

var npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

async function mainMenu() {
    console.log('Welcome to SPA Builder Wizard (alpha)\n');

    const backendAnswers = await inquirer.prompt([
        {
            type: 'list',
            name: 'mainChoice',
            message: 'Which backend?',
            choices: [
                'dotnet',
                'golang',
                'nodejs',
                'rust'
            ]
        }
    ]);

    const frontendAnswers = await inquirer.prompt([
            {
                type: 'list',
                name: 'mainChoice',
                message: 'Which frontend?',
                choices: [
                    'angular',
                    'lit',
                    'preact',
                    'qwik',
                    'react',
                    'solid',
                    'sveltekit',
                    'vue',
                ]
            }
        ]);

    const backendEmitter = degit(`https://github.com/mattiasasplund/spa-builder/backends/${backendAnswers.mainChoice}#main`, {
        cache: false,
        force: true,
        verbose: true,
    });

    await backendEmitter.clone('backend');
    console.log("Backend cloning done.");

    const frontendEmitter = degit(`https://github.com/mattiasasplund/spa-builder/frontends/${frontendAnswers.mainChoice}#main`, {
        cache: false,
        force: true,
        verbose: true,
    });

    await frontendEmitter.clone(`backend/frontend`);
    console.log('Frontend cloning done.');    

    execSync("npm start", { stdio: 'inherit', cwd: 'backend/frontend' });

}

(async () => {
    await mainMenu();
})();
