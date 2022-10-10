#!/usr/bin/env bash 
shopt -s globstar

# convert all the js files to ts files.
for f in ./**/*.ts; do
  mv "$f" "${f%.ts}.tsx"
done
