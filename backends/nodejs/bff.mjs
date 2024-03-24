import process from 'process';
import * as cp from 'child_process';

const result1 = cp.spawnSync( 'npm', ['install'], {
    cwd: `${process.env.SOLUTION_DIR}/backend/frontend`
});

const result2 = cp.spawnSync( 'node', ['../server.js'], {
    cwd: `${process.env.SOLUTION_DIR}/backend/frontend`
});
