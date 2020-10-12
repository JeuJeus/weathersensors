#!/usr/bin/bash
npm install
rm -rf db/
mkdir db
npm test
docker build -t awe2/backend:latest .
docker save awe2/backend:latest > ../awe2backend.tar
