#!/usr/bin/bash
rm ../awe2backend.tar
npm install
rm db/data.db
docker build -t awe2/backend:abgabe . -f dockerfile
docker save awe2/backend:abgabe > ../awe2backend.tar
