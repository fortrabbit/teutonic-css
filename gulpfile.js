// INIT plugins

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var cleanCSS   = require('gulp-clean-css');
var gzip       = require('gulp-gzip');
//var prefix     = require('gulp-autoprefixer');
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

// Generate
// minified & gzipped CSS
// for production
gulp.task('default', function () {
  return gulp.src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gzip({ append: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});