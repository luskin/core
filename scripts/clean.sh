#!/bin/bash

# Find and remove node_modules, .turbo directories and lock files
find . \( -name 'node_modules' -o -name 'dist' -o -name '.turbo' -o -name 'pnpm-lock.yaml' \) -exec rm -rf '{}' +
