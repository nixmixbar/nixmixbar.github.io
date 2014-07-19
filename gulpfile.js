/*!
 * Static Site Starter Kit | https://github.com/kriasoft/static-site-starter
 * Copyright (c) Konstantin Tarkus, KriaSoft LLC. All rights reserved. See COPYRIGHT.txt
 */

'use strict';

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var argv = require('minimist')(process.argv.slice(2));

// Settings
var DEST = './build';
var TEST = !!argv.test;
var RELEASE = Boolean(argv.release);
var GOOGLE_ANALYTICS_ID = 'UA-XXXXX-X';
var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

var src = {};
var watch = false;
var reload = browserSync.reload;
var pkgs = (function () {
    var temp = {};
    var map = function (source) {
        for (var key in source) {
            temp[key.replace(/[^a-z0-9]/gi, '')] = source[key].substring(1);
        }
    };
    map(require('./package.json').dependencies);
    map(require('./bower.json').dependencies);
    return temp;
}());

// The default task
gulp.task('default', ['serve']);

// Clean up
gulp.task('clean', del.bind(null, [DEST]));

// 3rd party libraries
gulp.task('vendor', function () {
    return merge(
        gulp.src('bower_components/jquery/dist/**')
            .pipe(gulp.dest(DEST + '/vendor/jquery-' + pkgs.jquery)),
        gulp.src('bower_components/modernizr/modernizr.js')
            .pipe($.rename('modernizr.min.js'))
            .pipe($.uglify())
            .pipe(gulp.dest(DEST + '/vendor/modernizr-' + pkgs.modernizr))
    );
});

// Static files
gulp.task('assets', function () {
    src.assets = 'assets/**';
    return gulp.src(src.assets)
        .pipe($.if('**/robots.txt', TEST ? $.replace('Disallow:', 'Disallow: /') : $.util.noop()))
        .pipe(gulp.dest(DEST))
        .pipe($.if(watch, reload({stream: true})));
});

// Images
gulp.task('images', function () {
    src.images = 'images/**';
    return gulp.src(src.images)
        .pipe(gulp.dest(DEST + '/img'))
        .pipe($.if(watch, reload({stream: true})));
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src('node_modules/bootstrap/fonts/**')
        .pipe(gulp.dest(DEST + '/fonts'));
});

// HTML pages
gulp.task('pages', function () {
    src.pages = ['pages/**/*', 'layouts/**/*', 'partials/**/*'];
    return gulp.src(src.pages[0])
        .pipe($.if('*.hbs', $.assemble({
            data: { pkgs: pkgs },
            partials: 'partials/**/*.hbs',
            layout: 'default',
            layoutext: '.hbs',
            layoutdir: 'layouts'
        })))
        .pipe($.if(RELEASE, $.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true, minifyCSS: true
        })))
        .pipe($.replace('UA-XXXXX-X', GOOGLE_ANALYTICS_ID))
        .pipe(gulp.dest(DEST))
        .pipe($.if(watch, reload({stream: true})));
});

// CSS style sheets
gulp.task('styles', function () {
    src.styles = ['styles/**/*.{css,less}', 'vendor/**/*.{css,less}'];
    return gulp.src('styles/bootstrap.less')
        .pipe($.less())
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe($.csscomb())
        .pipe(RELEASE ? $.cssmin() : $.util.noop())
        .pipe($.rename('style.css'))
        .pipe(gulp.dest(DEST + '/css'))
        .pipe($.if(watch, reload({stream: true})));
});

// JavaScript
gulp.task('scripts', function () {
    src.scripts = ['vendor/jquery.onepage-scroll.js', 'scripts/plugins.js', 'scripts/main.js'];
    return gulp.src(src.scripts)
        .pipe($.if(!RELEASE, $.sourcemaps.init()))
        .pipe($.concat('bundle.js'))
        .pipe($.if(RELEASE, $.uglify()))
        .pipe($.if(!RELEASE, $.sourcemaps.write()))
        .pipe(gulp.dest(DEST + '/js'))
        .pipe($.if(watch, reload({stream: true})));
});

// Build
gulp.task('build', ['clean'], function (cb) {
    runSequence(['vendor', 'assets', 'images', 'fonts', 'pages', 'styles', 'scripts'], cb);
});

// Run BrowserSync
gulp.task('serve', ['build'], function () {
    browserSync({
        notify: false,
        server: { baseDir: [DEST] }
    });

    gulp.watch(src.assets, ['assets']);
    gulp.watch(src.images, ['images']);
    gulp.watch(src.pages, ['pages']);
    gulp.watch(src.styles, ['styles']);
    gulp.watch(src.scripts, ['scripts']);
    watch = true;
});

// Publish to GitHub Pages
gulp.task('deploy', function () {
    return gulp.src(DEST + '/**/*')
        .pipe($.ghPages({
            remoteUrl: 'https://github.com/nixmixbar/nixmixbar.github.io.git',
            branch: 'master'
        }));
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
    // By default, we use the PageSpeed Insights free (no API key) tier.
    // You can use a Google Developer API key if you have one.
    // See http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
    url: 'https://example.com',
    strategy: 'mobile'
}));