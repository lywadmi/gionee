//导入模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

//发布任务
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
function fnCopyLib(){
    return gulp.src('./src/lib/*.js')
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}
function fnHtml(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/pages'));
}
function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/lib/*.js',fnCopyLib);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/pages/*.html',fnHtml);
    gulp.watch('./src/js/*.js',fnJS);
}
//导出模块
exports.copyIndex = fnCopyIndex;
exports.css = fnCss;
exports.lib = fnCopyLib;
exports.img = fnImg;
exports.html = fnHtml;
exports.js = fnJS;
exports.default = fnWatch;