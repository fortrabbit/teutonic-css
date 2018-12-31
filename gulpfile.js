"use strict";

// INIT plugins

const gulp      = require('gulp');
const sass      = require('gulp-sass');
const cleanCSS  = require('gulp-clean-css');
const gzip      = require('gulp-gzip');
const rename    = require('gulp-rename');
const header    = require('gulp-header');
const del       = require('del');

// VARs

const styleSourceFile = './teutonic.scss'; // The one file including all imports

const buildFiles = [
  'teutonic.css',
  'teutonic.min.css',
  'teutonic.css.min.gz'
]

// Header banner

const pkg = require('./package.json');
const banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');


// Generate large CSS
// Generate minified CSS
function large() {
  return gulp
    .src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('./'));
}

// Generate minified CSS
// That's the one to be included with UNKG

function minified() {
  return gulp
    .src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
}

// Generate minified & gzipped CSS
function gzipped() {
  return gulp
    .src(styleSourceFile)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gzip({ append: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
}

// Delete the build files
function clean() {
  return del(buildFiles);
}

// Tasks
gulp.task("large", large);
gulp.task("minified", minified);
gulp.task("gzipped", gzipped);
gulp.task("clean", clean);


// Default Task
// to run all builds
gulp.task('default', gulp.series('clean', gulp.parallel('large', 'minified', 'gzipped')));