#! /bin/sh

cd server

rm -r public

cp -r public_persisted/ public/

cd ..

cd client

npm run build

cd ..

cp -r client/build/ server/public/
