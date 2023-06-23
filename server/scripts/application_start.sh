#!/bin/bash

echo 'run application_start.sh: ' >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log

echo 'pm2 restart node build/index.js' >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log
pm2 restart node build/index.js >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log