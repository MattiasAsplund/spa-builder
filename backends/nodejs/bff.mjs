import * as cp from 'child_process';

const result1 = cp.spawnSync( 'npm', ['install'], {
    cwd: `${folderName}/backend/frontend`
});

const result2 = cp.spawnSync( 'node', ['../server.js'], {
    cwd: `${folderName}/backend/frontend`
});
