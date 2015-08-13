var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function () {
    gulp.src('./front/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./front/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./front/scss/**/*.scss', ['scss']);
});