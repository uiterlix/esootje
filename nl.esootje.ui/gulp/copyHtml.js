var gulp = require(node_modules  + 'gulp');

gulp.task('copyHtml', function() {
    return gulp.src(config.html.src, { base: applSrc })
        .pipe(gulp.dest(outputDir));
});
