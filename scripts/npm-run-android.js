'use strict';

const shell = require('shelljs');

shell.exec('brunch build');

shell.cd('./cordova');
shell.rm('-rf', './www/*');
shell.cp('-r', '../public/*', './www');
shell.cp('../cordova.xml', './config.xml');
shell.exec('cordova run android');
