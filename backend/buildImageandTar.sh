#!/usr/bin/bash
rm ../awe2backend.tar
npm install
rm -rf db/
mkdir db
npm test
docker build -t awe2/backend:alpha .
docker save awe2/backend:alpha > ../awe2backend.tar
