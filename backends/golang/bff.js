import * as cp from 'child_process';

const result = cp.spawnSync( 'go', ['run', '../main.go'], {
    cwd: `${folderName}/backend/frontend`
});
