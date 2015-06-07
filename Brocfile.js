/* global require, module */

var vulcanize = require('broccoli-vulcanize');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({});

var polymerVulcanize = vulcanize('app', {
    input: 'elements.html',
    output: 'assets/vulcanized.html',
    excludes: [/^data:/, /^http[s]?:/, /^\//],
    abspath: '',
    stripExcludes: false,
    stripComments: false,
    inlineScripts: true,
    inlineCss: true,
    implicitStrip: false
});

var polymer = funnel('bower_components', {
    srcDir: '',
    files: [
        'webcomponentsjs/webcomponents.js',
        'webcomponentsjs/webcomponents-lite.js',
        'polymer/polymer.html'
    ],
    destDir: '/assets'
});

app.import('app/styles/typo.css');
app.import('app/styles/ng-grid.css');
// app.import('bower_components/flexboxgrid/src/css/flexboxgrid.css');
// app.import('vendor/font-awesome-4.3.0/css/font-awesome.min.css');

// app.import('bower_components/moment/min/moment.min.js');
// app.import('bower_components/moment/locale/pt-br.js');

// app.import('vendor/RobinHerbots/jquery.inputmask.bundle.min.js');
// app.import('bower_components/web-animations-js/web-animations-next-lite.min.js.map', {
//     destDir: 'assets'
// });

module.exports = mergeTrees([polymerVulcanize, polymer, app.toTree()]);

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