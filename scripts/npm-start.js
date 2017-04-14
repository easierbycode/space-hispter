'use strict';

const shell = require('shelljs');

shell.rm('-rf', './public');
shell.exec('brunch watch --server');
