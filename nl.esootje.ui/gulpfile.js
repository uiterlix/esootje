// global variables used by the injected gulp tasks
appl = 'nl.esootje.ui';
applSrc = 'web';
outputDir = './static/';
config = require('./gulpconfig');
node_modules = '../node_modules/';

// require gulp and all the tasks
var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./gulp'),
    watchInterval = 500;

// base tasks to fire up all the magic
gulp.task('default', ['clean', 'copyBowerLibs'], function () {
    return gulp.start('watch');
});

gulp.task('dist', ['clean', 'copyBowerLibs'], function () {
    return gulp.start('buildDist');
});

gulp.task('watch', ['compileSass', 'copyAssets', 'serve'], function (done) {
    gulp.watch(config.sass.src, { interval: watchInterval }, ['compileSass']);
    gulp.watch(config.typescript.src, { interval: watchInterval }, ['copyScripts']);
    gulp.watch(config.html.src, { interval: watchInterval }, ['copyHtml']);
    gulp.watch(config.images.src, { interval: watchInterval }, ['copyImages']);
    return done();
});
