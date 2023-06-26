#!/bin/bash

cd /var/www/html/server


pm2 stop node build/index.js 

pm2 start node build/index.js

pm2 save