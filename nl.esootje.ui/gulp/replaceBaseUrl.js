var gulp = require(node_modules  + 'gulp'),
    replace = require(node_modules  + 'gulp-replace'),
    es = require(node_modules  + 'event-stream');

gulp.task('replaceBaseUrl', ['copyScripts'], function() {
    return gulp.src(outputDir + '/' + config.javascript.appFileName + '.js', {base: './'})
        .pipe(replace('//localhost:8080', ''))
        .pipe(gulp.dest("."));
});
