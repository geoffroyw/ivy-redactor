/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('vendor/redactor/redactor-font.eot');
app.import('vendor/redactor/plugins/video.js');
app.import('vendor/redactor/redactor.css');
app.import('vendor/redactor/redactor.js');

var bootstrapTree = pickFiles(app.bowerDirectory + '/bootstrap/dist', {
  destDir: '/assets',
  srcDir: '/'
});

module.exports = app.toTree([bootstrapTree]);
