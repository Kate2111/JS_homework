let { src, dest, watch, series, parallel }    = require('gulp');
let rename          = require('gulp-rename');
let autoprefixer    = require('gulp-autoprefixer');
let csso            = require('gulp-csso');
let cleanCSS        = require('gulp-clean-css');
let uglify          = require('gulp-uglify');
let concat          = require('gulp-concat');
let browserSync     = require('browser-sync').create();
let del = require('del');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
}

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
		.pipe(dest('dist/css'))
        .pipe(browserSync.stream())
}

function html() {
    return src('src/*.html')
        .pipe(dest('dist/'))
}

function script() {
    return src('src/js/**/*.js')
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/css/*.css'], styles);
    watch(['src/js/**/*.js'], script);
    watch(['src/*.html']).on('change', browserSync.reload);
}

exports.watching = watching;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;
exports.styles = styles;
exports.html = html;
exports.script = script;


exports.default = series(cleanDist, parallel(styles, html, script, browsersync, watching));

