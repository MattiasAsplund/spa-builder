# Combine any supported backend with any supported frontend to get a solution with "testable security" out-of-the-box

First, we need a tool for extracting cherry picked folders from a git repo:

You can use your preferred package manager for Node, like pnmp, yarn, bun or npm...

```sh
{packageManager} install -g degit
```

Suppose you would like to have a solution that combines the powers of the frontend framework Sveltekit and the backend framework .NET Core.

Since backend and frontend templates are stored separate from each other, it is feasible to combine any two of them.

Then we setup the .NET Core template:

```sh
degit https://github.com/MattiasAsplund/spa-builder/backends/dotnet backend
```

Lastly, we inject the Sveltekit frontend into the backend folder.

```sh
cd backend
degit https://github.com/MattiasAsplund/spa-builder/frontends/sveltekit frontend
```

Install the frontend dependencies:

```sh
cd frontend
{packageManager} install
```

Run the fronent dev script. Both the client and the server process will start, enabling Hot Reload.

```sh
{packageManager} run dev
```
