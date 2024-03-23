#!/bin/bash

# Check if degit is installed globally
if ! npm list -g degit 2>/dev/null | grep -q degit; then
  echo "degit is not installed globally, installing..."
  npm install -g degit
else
  echo "degit is already installed globally."
fi

read -p "Enter a destination folder: " destination_folder </dev/tty
mkdir "'$destination_folder'"
cd "'$destination_folder'"

echo "Enter a backend framework from the following list:"
read -p "Backend? nodejs, golang, rust, dotnet, gleam: " backend_framework </dev/tty
degit "https://github.com/mattiasasplund/spa-builder/backends/'$backend_framework'" "backend"
cd "backend"

echo "Frontend? angular, lit, preact, qwik, react, solid, sveltekit, vue: " frontend_framework </dev/tty
degit "https://github.com/mattiasasplund/spa-builder/frontends/'$frontend_framework" "frontend"
