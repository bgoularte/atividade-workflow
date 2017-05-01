	// Plugins
var gulp 	= require('gulp');
var minify  = require('gulp-minify');
var sass    = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require("gulp-clean-css");

	// Arquivos Raiz
var scssarqv  = './source/scss/*.scss';
var indexarqv = './source/index.html';

	// Local para salvar
var cssdestino   = './dist/css/';
var indexdestino = './dist/';

	
	// TASK transform SCSS
gulp.task('minify-scss',function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(cssdestino))
});

	// TASK minificar CSS
	gulp.task('minify-css', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssdestino));
});

	// TASK minificar HTML
gulp.task('minify-html', function() {
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(indexdestino));
});

	// TASK watch
gulp.task('watch',function(){
	gulp.watch('./source/scss/*.scss',['minify-css']);
	gulp.watch('./source/index.html',['minify-html']);	
});
