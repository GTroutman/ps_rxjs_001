NOTES
-----
ps course - getting started with reactive programming using rxjs.

Note. just do an npm install to restore packages if checking out from this from git then npm start.

--------------------------------------------
From scratch ...

create the .gitignore file first before doing git init.

npm init
npm install rxjs --save
npm install webpack webpack-dev-server typescript typings ts-loader --save-dev
node_modules\.bin\typings install dt~es6-shim --global --save

m03_05 changed to use es6
changed compiler options target to es6
node_modules\.bin\typings uninstall es6-shim --save --global

----------------------------------

npm start
server initially runs on localhost:8080 - port number will change if multiple versions running.
