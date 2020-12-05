#!/usr/bin/env bash
rm ../weathersensors-frontend.tar
npm install
npm run browserify
docker build -t weathersensors/frontend:latest . -f dockerfile
docker save weathersensors/frontend:latest > ../weathersensors-frontend.tar
