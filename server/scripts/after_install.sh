#!/bin/bash

cd /var/www/html

npm install 

npm install -g pm2 # may require sudo

npm run build