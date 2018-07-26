'use strict';

var path = require('path');
var assemble = require('assemble');
var helpers = require('handlebars-helpers');
var extname = require('gulp-extname');
var prettify = require('gulp-prettify');
var pkg = require('./package.json');

var app = assemble();

app.task('init', function(cb) {
  app.option('layout', 'default');
  app.data('pkg', pkg);
  app.helper('compare', helpers.comparison());
  app.helper('markdown', require('helper-markdown')({
    highlight: false
  }));
  app.helper('md', require('helper-md').sync);
  app.layouts(path.join(__dirname, './templates/layouts/**/*.hbs'));
  app.partials(path.join(__dirname, './templates/includes/**/*.hbs'));
  app.pages(path.join(__dirname, './templates/content/**/*.hbs'));
  cb();
});

app.task('html', ['init'], function() {
  app.pages('templates/content/**/*.hbs');
  return app.toStream('pages')
  .pipe(app.renderFile())
  .pipe(prettify({
    indent_inner_html: false,
    preserve_newlines: true,
    end_with_newline: true,
    extra_liners: ['head', 'body']
  }))
  .pipe(extname())
  .pipe(app.dest('docs'));
});

app.task('default', ['html'], function() {});

module.exports = app;
