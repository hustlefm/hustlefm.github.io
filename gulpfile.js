'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-minify-css'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        // img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/css/*.css',
        // img: 'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },
    clean: './build'
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            removeComments: true
        }))
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// gulp.task('image:build', function () {
//     gulp.src(path.src.img)
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()],
//             interlaced: true
//         }))
//         .pipe(gulp.dest(path.build.img))
//         .pipe(reload({stream: true}));
// });

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build'
    // 'image:build'
]);

gulp.task('default', ['build']);