const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('es6', () => {
	browserify('src/App.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('App.js'))
		.pipe(buffer())
		.pipe(gulp.dest('public/app/js'));
});

gulp.task('default', ['es6'], () => {
	gulp.watch('src/App.js', ['es6']);
});