#!/usr/bin/bash
#TODO what about the scripts for windows - may someone using it create it?
rm ../awe2backend.tar
npm install
rm -rf db/
mkdir db
npm test
docker build -t awe2/backend:beta .
docker save awe2/backend:beta > ../awe2backend.tar
