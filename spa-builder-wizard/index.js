#!/usr/bin/env node

import inquirer from 'inquirer';
import input from '@inquirer/input';
import degit from 'degit';
import * as cp from 'child_process';

var npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

async function mainMenu() {
    console.log('Welcome to SPA Builder Wizard (alpha)\n');

    const folderName = await input({ message: 'Destination folder: ' });

    inquirer.prompt([
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
    ]).then((backendAnswers) => {
        inquirer.prompt([
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
        ]).then((frontendAnswers) => {
            console.log(`---> ${folderName} ${backendAnswers.mainChoice} ${frontendAnswers.mainChoice} <---`);

            const backendEmitter = degit(`https://github.com/mattiasasplund/spa-builder/backends/${backendAnswers.mainChoice}#main`, {
                cache: false,
                force: true,
                verbose: true,
            });
            
            backendEmitter.on('info', info => {
                console.log(info.message);
            });
            
            backendEmitter.clone(`${folderName}/backend`).then(() => {
                console.log('done');
            });

            const frontendEmitter = degit(`https://github.com/mattiasasplund/spa-builder/frontends/${frontendAnswers.mainChoice}#main`, {
                cache: false,
                force: true,
                verbose: true,
            });
            
            frontendEmitter.on('info', info => {
                console.log(info.message);
                console.log("Dependencies have been installed.");
                console.log("To run the solution:");
                console.log(`  cd ${folderName}/backend/frontend`);
                console.log("  npm run monitorAndStart");
            });
            
            frontendEmitter.clone(`${folderName}/backend/frontend`).then(() => {
                const result = cp.spawnSync( npm, ['install'], {
                    cwd: `${folderName}/backend/frontend`
                });
            });
        });
    });
}

(async () => {
    await mainMenu();
})();
