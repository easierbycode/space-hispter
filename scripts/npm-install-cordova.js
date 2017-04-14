'use strict';

const shell = require('shelljs');

shell.rm('-rf', './cordova');
shell.exec('cordova create cordova com.jernung.phasertemplate "Phaser Template"');
shell.cd('./cordova');

//add platforms
shell.exec('cordova platform add android --save');

//add plugins
shell.exec('cordova plugin add cordova-plugin-crosswalk-webview');
shell.exec('cordova plugin add cordova-plugin-device');
shell.exec('cordova plugin add cordova-plugin-splashscreen');
shell.exec('cordova plugin add ../plugins/audio');
