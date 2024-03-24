import * as cp from 'child_process';

const result = cp.spawnSync( 'dotnet', ['run', '--project', '..'], {
    cwd: `${folderName}/backend/frontend`
});
