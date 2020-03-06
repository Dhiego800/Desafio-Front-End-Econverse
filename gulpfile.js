const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function compilaSass() {
    return gulp
    .src('css/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
}
gulp.task('sass', compilaSass);

function gulpJs() {
    return gulp.src('js/*.js')    
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist'))
}
gulp.task('mainjs', gulpJs);

function browser() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}
gulp.task('browser-sync', browser);

function watch() {
    gulp.watch('css/scss/*.scss', compilaSass);
    gulp.watch('js/*.js', gulpJs);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'))