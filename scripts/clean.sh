#!/bin/bash

# Find and remove node_modules, .turbo directories and lock files
find . \( -name 'node_modules' -o -name '.turbo' -o -name 'pnpm-lock.yaml' -o -name 'yarn.lock' -o -name 'package-lock.json' \) -exec rm -rf '{}' +
