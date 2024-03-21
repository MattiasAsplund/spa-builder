#!/bin/bash

# Initialize solutionName variable
systemCode=""
solutionName=""
package=""

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --solutionname) solutionName="$2"; shift ;; # Set the next argument as the solutionName
        --systemcode) systemCode="$2"; shift ;; # Set the next argument as the systemCode
        --package) package="$2"; shift ;; # Set the next argument as the package
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift # Move to next argument
done

# Check if systemCode is not empty
if [ -z "$systemCode" ]; then
    echo "Usage: $0 --systemcode <systemCode> --solutionname <solutionName> --package react-ts"
    exit 1
fi

# Check if solutionName is not empty
if [ -z "$solutionName" ]; then
    echo "Usage: $0 --systemcode <systemCode> --solutionname <solutionName> --package react-ts"
    exit 1
fi

# Output received parameters (optional, for verification)
echo "System Code: $systemCode"
echo "Solution Name: $solutionName"
echo "Package: $package"

# Check if the directory exists
if [ -d "$solutionName" ]; then
    echo "Directory '$solutionName' exists. Doing nothing."
else
    echo "Directory '$solutionName' does not exist."        
    mkdir Backend
    cd Backend
    curl -o _react-ts.zip http://localhost:64356/react-ts.zip
    unzip _react-ts.zip
    rm _react-ts.zip
    # mkdir $solutionName
    # cd $solutionName
    # dotnet new sln
    # mkdir src
    # cd src
    # dotnet new react -n Backend -o ./Backend
    # cd ..
    # dotnet sln add src/Backend
fi
