var gulp = require(node_modules  + 'gulp');

gulp.task('copyImages', function() {
    return gulp.src(config.images.src, { base: applSrc })
        .pipe(gulp.dest(outputDir));
});
