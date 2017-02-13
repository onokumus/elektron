'use strict';

var path = require('path');
var assemble = require('assemble');
var extname = require('gulp-extname');
var prettify = require('gulp-prettify');
var pkg = require('./package.json');
var app = assemble();

app.task('init', function(cb) {
  app.option('layout', 'default');
  app.data('pkg', pkg);
  app.layouts(path.join(__dirname, './templates/layouts/**/*.hbs'));
  app.partials(path.join(__dirname, './templates/includes/**/*.hbs'));
  app.pages(path.join(__dirname, './content/**/*.hbs'));
  // app.home(path.join(__dirname, './home.hbs'));
  cb();
});

app.task('default', ['init'], function() {
  app.pages('templates/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(prettify({
      indent_inner_html: false,
      preserve_newlines: true,
      end_with_newline: true,
      extra_liners: ['head', 'body']
    }))
    .pipe(extname())
    .pipe(app.dest('public'));
});

module.exports = app;
