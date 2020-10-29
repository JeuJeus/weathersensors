#!/usr/bin/bash
#TODO what about the scripts for windows - may someone using it create it?
rm ../awe2frontend.tar
npm install
npm run browserify
docker build -t awe2/frontend:beta .
docker save awe2/frontend:beta > ../awe2frontend.tar
