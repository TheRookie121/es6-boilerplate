# es6-boilerplate
HOW TO INSTALL NPM
> download en install node.js
> google NPM gulp voor info over gulp & dependencies
> open webstorm/phpstorm en maak een project aan voor de NPM installs
> open terminal (onderin het venster)
> npm -v (voor testen)
> node -v (voor testen)
> npm init
> npm install gulp babelify browserify babel-preset-es2015 --save-dev
> in package.json staan de installs
> gulpfil.js aanmaken (empty file) en invullen (zie gulpfile.js)
> dit kan je copy pasten bij elk project
> npm install vinyl-source-stream vinyl-buffer --save-dev
> pas gulpfile.js verder aan
> maak een map 'src' aan in project (niet in de node_modules)
> maak een file 'script.es6' aan in de 'src' map
> install gulp global met 'npm install gulp-cli --global, voor als er foutmeldingen zijn
> type 'const hoi = "hoi";' in
> in de terminal type 'gulp run' en dan enter
> door te runnen is er een functie in de script.es6 gezet
> npm install gulp-uglify --save-dev
> en pas gulp.js verder aan
> npm install gulp-sourcempas --save-dev
> en pas gulp.js verder aan
> de volgende stappen zorgen ervoor dat de gulp-run wordt gerunned als je de files saved
> naast de run, rechtsboven in, klik op het pijltje en edit config
> druk op plus en npm
> name: run & scripts: run
> pas gulp weer aan (task watch)
> maak nog een task in de gulpfile aan
> in package.json voeg "run": "gulp" toe onder de "script:{"
> nu als je iets aanpast in script.es6 en dan saved (ctrl+s) dan wordt er automatisch gerunned
> maak github account en haal student license
> download en install Git
> ..
