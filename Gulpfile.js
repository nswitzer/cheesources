// Defining base vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

// Compile Sass
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});