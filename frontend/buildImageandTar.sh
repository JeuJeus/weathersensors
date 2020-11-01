#!/usr/bin/env bash
rm ../awe2frontend.tar
npm install
npm run browserify
docker build -t awe2/frontend:abgabe . -f dockerfile
docker save awe2/frontend:abgabe > ../awe2frontend.tar
