### Set up
-------------------------------------
npm install -g browserify
npm install grunt-contrib-copy grunt-contrib-clean grunt-contrib-connect grunt-contrib-jshint grunt-contrib-watch grunt-browserify matchdep globule --save-dev
npm install debowerify --save
bower init
bower install jquery
`mkdir dist && echo "dist" >> .gitignore
Set up Grunfile
npm install debowerify
browserify -t debowerify app.js > bundle.js
grunt
For commit 1 open console to view results
