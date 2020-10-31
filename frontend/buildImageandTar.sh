#!/usr/bin/bash
rm ../awe2frontend.tar
npm install
npm run browserify
docker build -t awe2/frontend:beta . -f dockerfile
docker save awe2/frontend:beta > ../awe2frontend.tar
