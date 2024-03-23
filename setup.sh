#!/bin/bash

# Check if degit is installed globally
if ! npm list -g degit 2>/dev/null | grep -q degit; then
  echo "degit is not installed globally, installing..."
  npm install -g degit
else
  echo "degit is already installed globally."
fi

echo "Enter a destination folder:"
read destination_folder
mkdir "'$destination_folder'"
cd "'$destination_folder'"

echo "Enter a backend framework from the following list:"
echo "nodejs, golang, rust, dotnet, gleam"
read backend_framework
echo "You have selected the backend framework: $backend_framework"
degit "https://github.com/mattiasasplund/spa-builder/backends/'$backend_framework'" "backend"
cd "backend"

echo "Enter a frontend framework from the following list:"
echo "angular, lit, preact, qwik, react, solid, sveltekit, vue"
read frontend_framework
echo "You have selected the frontend framework: $frontend_framework"
degit "https://github.com/mattiasasplund/spa-builder/frontends/'$frontend_framework" "frontend"
