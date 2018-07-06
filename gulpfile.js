// INIT plugins

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var cleanCSS   = require('gulp-clean-css');
var gzip       = require('gulp-gzip');
var rename     = require('gulp-rename');
var header     = require('gulp-header');


// VARs

var styleSourceFile = './teutonic.scss'; // The one file including all imports

// Header banner

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');


// Generate large CSS
// Generate minified CSS
gulp.task('large', function () {
  return gulp.src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./'));
});

// Generate minified CSS
// That's the one to be included with UNKG
gulp.task('minified', function () {
  return gulp.src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});

// Generate minified & gzipped CSS
gulp.task('gzipped', function () {
  return gulp.src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gzip({ append: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});


// Default Task
// to run all builds
gulp.task('default', ['large', 'minified', 'gzipped']);