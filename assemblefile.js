'use strict';

var path = require('path');
var assemble = require('assemble');
var helpers = require('handlebars-helpers');
var extname = require('gulp-extname');
var prettify = require('gulp-prettify');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var basewatch = require('base-watch');
var pkg = require('./package.json');

var app = assemble();
app.use(basewatch());

app.task('init', function(cb) {
  app.option('layout', 'default');
  app.data('pkg', pkg);
  app.helper('compare', helpers.comparison());
  app.layouts(path.join(__dirname, './templates/layouts/**/*.hbs'));
  app.partials(path.join(__dirname, './templates/includes/**/*.hbs'));
  app.pages(path.join(__dirname, './content/**/*.hbs'));
  // app.home(path.join(__dirname, './home.hbs'));
  cb();
});

app.task('scss', function() {
  return app.src(path.join(__dirname, 'scss/**/*.scss'))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(app.dest('./public/assets/css'))
    .pipe(app.dest('./dist'));
});

app.task('js', function() {
  return app.src(path.join(__dirname, 'js/**/*.js'))
    .pipe(babel())
    .pipe(app.dest('./public/assets/js'))
    .pipe(app.dest('./dist'));
});

app.task('serve', ['init'], function() {
  browserSync.init({
    server: {
      baseDir: path.join(__dirname, './public')
    }
  });

  browserSync.watch('./public/assets/css/*.css', function(event, file) {
    if (event === 'change') {
      browserSync.reload('*.css');
    }
  });

  browserSync.watch('./public/assets/js/*.js', function(event, file) {
    if (event === 'change') {
      browserSync.reload('*.js');
    }
  });
  watch();
});

app.task('watch', ['init'], function() {
  watch();
});

app.task('default', ['init'], function() {
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
    .pipe(app.dest('public'));
});

function watch() {
  app.watch(path.join(__dirname, './templates/content/*.hbs'), ['default']);
  app.watch(path.join(__dirname, './scss/**/*.scss'), ['scss']);
  app.watch(path.join(__dirname, './js/*.js'), ['js']);
}

module.exports = app;
