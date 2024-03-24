console.log("Installing backend dependencies, will run after that...")
exec("go run main.go", (error, stdout, stderr) => {

    console.log("Installing dependencies, will run after that")
    let childProcess = spawn("dotnet", ['run']);

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    
    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
        
});
