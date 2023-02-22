#!/bin/bash
cd /home/ec2-user/server/src
pm2 start npm --name "react-portfolio" -- start
pm2 startup
pm2 save
pm2 restart all