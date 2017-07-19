/*
* @Author: Tao
* @Date:   2017-07-19 11:30:59
* @Last Modified by:   V-Ziky
* @Last Modified time: 2017-07-19 14:22:21
*/

'use strict';

var less = require('gulp-less');
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
 	// console.log('dddd');
	gulp.src('css_yuan/*.html') // 匹配所有后缀为html文件
	  .pipe(gulp.dest('css/'));  // 写入

});

gulp.task('zhixing', function() {
	// 第一个参数 源文件路径
	// 第二个参数 执行调用方法名称
	gulp.watch('css_yuan/*.html', ['default'])
});

