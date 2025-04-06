#!/bin/sh

if [[ `git status --porcelain` ]]; then
  echo "Codex Changes..."
  git add .
  git commit -m "generated"
  git push
else
  echo "No codex change..."
fi
