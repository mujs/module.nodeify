'use strict';

var fs = require('fs'),
    path = require('path'),
    header = require('gulp-header');

var cache = fs.readFileSync(path.resolve(__dirname, 'umd.template.js'), 'utf8');

module.exports = header(cache);
