#!/bin/bash

LOGPATH='/home/logs/deploy.log'

if [[ "$(ls -A /home/protected/new_recipes)" || "$1" == "-f" ]]; then
        echo "$(date +%FT%TZ): New recipes detected. Adding and redeploying.-------------------------------" >> $LOGPATH

        rm -rf /home/public/* >> $LOGPATH
        cp /home/protected/deployment/currently_redeploying.html /home/public/index.html >> $LOGPATH

        mv /home/protected/new_recipes/* /home/protected/deployment/stage/content/recipe/ >> $LOGPATH
        /home/protected/deployment/current_hugo -s /home/protected/deployment/stage -d /home/public --buildDrafts --theme=mimaus_best >> $LOGPATH
else
        echo "$(date +%FT%TZ): No new recipes detected. Skipping redeployment." >> $LOGPATH
fi
