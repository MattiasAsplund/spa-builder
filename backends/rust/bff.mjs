import * as cp from 'child_process';

const result = cp.spawnSync( 'cargo', ['run'], {
    cwd: `${folderName}/backend/frontend`
});
