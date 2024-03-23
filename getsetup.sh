#!/bin/bash

# Generate a unique filename using current date-time and a random number
unique_filename="$(date +%Y%m%d%H%M%S)_$RANDOM.sh"

# Specify the URL of the script to download
script_url="https://raw.githubusercontent.com/MattiasAsplund/spa-builder/main/setup.sh"

# Use curl to download the script and rename it to the unique filename
curl -o "$unique_filename" "$script_url"

# Make the downloaded script executable
chmod +x "$unique_filename"

# Execute the downloaded script
"$unique_filename"

rm "$unique_filename"

# Optional: Notify the user that the file has been removed.
echo "The script $unique_filename has been executed and removed."
