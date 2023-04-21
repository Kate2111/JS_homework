let { src, dest, watch, series, parallel }    = require('gulp');
let rename          = require('gulp-rename');
let autoprefixer    = require('gulp-autoprefixer');
let csso            = require('gulp-csso');
let cleanCSS        = require('gulp-clean-css');
let cleanJS         = require('gulp-uglify');
let concat          = require('gulp-concat');
let del = require('del');

function cleanDist() {
    return del('dist')
}

function styles() {
	return src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(cleanCSS())
		.pipe(dest('dist/css'));
}

function script() {
    return src('src/js/**/*.js')
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(cleanJS())
        .pipe(dest('dist/js'))
}

function watching() {
    watch(['src/css/*.css'], styles);
    watch(['src/js/**/*.js'], script);
}

exports.default = series(cleanDist, parallel(styles, script, watching));

