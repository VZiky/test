/*
* @Author: V-Ziky
* @Date:   2017-07-19 11:33:58
* @Last Modified by:   V-Ziky
* @Last Modified time: 2017-07-19 15:22:25
*/

'use strict';

var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var htmlnano = require('gulp-htmlnano');
var options = {
    removeComments: false
};

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src('css_source/*.html')
  	.pipe(htmlnano(options))
  	.pipe(gulp.dest("css/"))
});

gulp.task('session', function() {
	gulp.watch('css_source/*.html',['default']);
	gulp.watch('css_source/*.less',['less']);
});

gulp.task('less', function () {
  return gulp.src('css_source/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});