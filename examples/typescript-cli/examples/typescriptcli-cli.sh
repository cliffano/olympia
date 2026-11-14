#!/usr/bin/env bash
set -o errexit
set -o nounset

cd ../
npm link .
cd examples/

printf "\n\n========================================\n"
printf "Show help guide:\n"
typescriptcli --help

printf "\n\n========================================\n"
printf "Show version info: typescriptcli --version\n"
typescriptcli --version

printf "\n\n========================================\n"
printf "Run command with default config file:\n"
typescriptcli display

printf "\n\n========================================\n"
printf "Run command with specified config file:\n"
typescriptcli --config-file typescriptcli.yaml display

printf "\n\n========================================\n"
printf "Run command with specified config file and custom flags:\n"
typescriptcli --config-file typescriptcli.yaml display --reverse --transform upper
