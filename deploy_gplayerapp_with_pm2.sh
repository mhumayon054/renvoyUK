#!/bin/bash

# Change to the directory where your React app is located
yarn install

# Build the React app
yarn build

# Check if the app is already running in PM2. If it is, stop and delete it.
if pm2 info uatgplayer-user-portal > /dev/null; then
    pm2 delete uatgplayer-user-portal
fi

# Ensure 'serve' is installed globally. If not, install it.
if ! command -v serve > /dev/null; then
    yarn global add serve
fi

# Start serving the built app with PM2 on port 3000
pm2 start ecosystem.config.js

#yarn global add http-server
#yarn global add serve@11
