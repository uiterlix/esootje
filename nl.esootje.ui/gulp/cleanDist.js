var gulp = require(node_modules  + 'gulp'),
    del = require(node_modules  + 'del');

gulp.task('cleanDist', function (done) {
    del([
        outputDir + "/**/*.ts",
        outputDir + "/**/*.js",
        '!' + outputDir + '/main-*.js',
        '!' + outputDir + '/lib/requirejs/*',
        '!' + outputDir + '/lib/requirejs-*/**/*'
    ], {force: true}, done);
});
