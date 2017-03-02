'use strict';
var assemble = require('assemble');

var nmd = 'node_modules';
var vnd = 'public/assets/vendor';

var app = assemble();

/**
 * run the code
 * assemble copy
 */
app.task('default', ['copy-*']);
app.task('copy', ['copy-*']);

app.task('copy-jquery', function() {
  return app.copy(`${nmd}/jquery/dist/*.*`, `${vnd}/jquery`);
});

// app.task('copy-bootstrap', function() {
//   return app.copy(`${nmd}/bootstrap/dist/**/*.*`, `${vnd}/bootstrap`);
// });
//
// app.task('copy-tether', function() {
//   return app.copy(`${nmd}/tether/dist/**/*.*`, `${vnd}/tether`);
// });
//
// app.task('copy-font-awesome', function() {
//   return app.copy(`${nmd}/font-awesome/{css,fonts}/**/*.*`, `${vnd}/font-awesome`);
// });

app.task('copy-metismenu', function() {
  return app.copy(`${nmd}/metismenu/dist/**/*.*`, `${vnd}/metismenu`);
});

app.task('copy-metiscanvas', function() {
  return app.copy(`${nmd}/metis-canvas/dist/**/*.*`, `${vnd}/metis-canvas`);
});

// app.task('copy-animate', function() {
//   return app.copy(`${nmd}/animate.css/*.css`, `${vnd}/animate`);
// });

module.exports = app;
