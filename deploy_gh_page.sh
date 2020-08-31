#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd ~/dojo/js/hexjs
rm -rf 20200724
mkdir 20200724
cp -r ~/dojo/js/hexjs-week6-router/dist/. ./20200724/

git add .
git commit -m "Deploy 20200724"
git push
