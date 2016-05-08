'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = ['*.js', 'lib/*.js', 'test/*.js'];

gulp.task('eslint', function() {
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(paths)
    .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(['lib/*', 'test/*'], ['test', 'eslint']);
});

gulp.task('default', ['eslint', 'test']);

