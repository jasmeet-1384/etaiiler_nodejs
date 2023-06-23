#!/bin/bash
echo 'run after_install.sh: ' >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log

echo 'cd /var/www/html/nodeserver/etaiiler_nodejs/server/' >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log
cd /var/www/html/nodeserver/etaiiler_nodejs/server/ >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log

echo 'npm install' >> /var/www/html/nodeserver/etaiiler_nodejs/server/deploy.log 
npm install >> /var/www/html/nodeserver/etaiiler_nodejs/deployserver/.log