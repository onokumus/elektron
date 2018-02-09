const app = require('./assemblefile');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rtlcss = require('rtlcss');
const flexbugs = require('postcss-flexbugs-fixes');
const brs = require('browser-sync');
const pkg = require('./package.json');

const browserSync = brs.create();
const reload = browserSync.reload;

const nmd = 'node_modules';
const vnd = 'docs/assets/vendor';

const banner = [
  '/**',
  ' * Elektron - <%= pkg.description %>',
  ' * @version <%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * @link <%= pkg.homepage %>',
  ' */',
  '',
].join('\n');

const browsers = [
  'Chrome >= 35',
  'Firefox >= 38',
  'Edge >= 12',
  'Explorer >= 10',
  'iOS >= 8',
  'Safari >= 8',
  'Android 2.3',
  'Android >= 4',
  'Opera >= 12',
];

gulp.task('js', () => gulp.src('js/elektron.js')
  .pipe(babel())
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/js'))
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/js'))
  .pipe(gulp.dest('dist')));

gulp.task('css:ltr', () => gulp.src('scss/elektron.scss')
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(postcss([
    autoprefixer({ browsers }),
    flexbugs(),
  ]))
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(gulp.dest('dist'))
  .pipe(postcss([cssnano({ zindex: false })]))
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(gulp.dest('dist')));

gulp.task('css:rtl', () => gulp.src('scss/elektron.scss')
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(postcss([
    flexbugs(),
    autoprefixer({ browsers }),
    rtlcss(),
  ]))
  .pipe(rename({ suffix: '-rtl' }))
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(gulp.dest('dist'))
  .pipe(postcss([cssnano({ zindex: false })]))
  .pipe(rename({ suffix: '.min' }))
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('docs/assets/css'))
  .pipe(gulp.dest('dist')));

gulp.task('css', ['css:ltr', 'css:rtl']);

gulp.task('assets', () => {
  gulp.src(`${nmd}/jquery/dist/**/*.*`).pipe(gulp.dest(`${vnd}/jquery`));
  gulp.src(`${nmd}/metismenu/dist/*.*`).pipe(gulp.dest(`${vnd}/metismenu`));
  gulp.src(`${nmd}/onoffcanvas/dist/*.*`).pipe(gulp.dest(`${vnd}/onoffcanvas`));
  gulp.src(`${nmd}/font-awesome/{css,fonts}/*.*`).pipe(gulp.dest(`${vnd}/font-awesome`));
});

gulp.task('pages', () => {
  app.build('html', (err) => {
    if (err) {
      console.error('ERROR', err);
    }
  });
});

/**
 * Serves the landing page from "docs" directory.
 */
gulp.task('serve', () => {
  browserSync.init({
    notify: true,
    server: {
      baseDir: ['docs'],
    },
  });
  watch();
});

/**
 * Defines the list of resources to watch for changes.
 */
function watch() {
  gulp.watch(['templates/**/*.hbs'], ['pages', reload]);
  gulp.watch(['js/**/*.js'], ['js', reload]);
  gulp.watch(['scss/**/*.scss'], ['css', reload]);
}

gulp.task('default', [
  'pages', 'assets', 'js', 'css',
], () => {});
