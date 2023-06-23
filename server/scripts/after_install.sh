#!/bin/bash

cd /var/www/html/server

npm install 

npm install -g pm2 # may require sudo

npm run build