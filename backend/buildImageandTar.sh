#!/usr/bin/env bash
rm ../weathersensors-backend.tar
npm install --production
npm run browserify
docker build -t weathersensors/backend:latest . -f dockerfile
docker save weathersensors/backend:latest > ../weathersensors-backend.tar
