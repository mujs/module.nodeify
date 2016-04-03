'use strict';

var fs = require('fs');
var path = require('path');
var wrapper = require('gulp-wrapper');

var template = fs.readFileSync(path.resolve(__dirname, 'umd.js'), 'utf8');
var tokens = template.split('{{ module }}');
var header = tokens[0];
var footer = tokens[1];

module.exports = function () {
  return wrapper({
    header: header
    footer: footer
  });
};
