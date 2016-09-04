var gulp = require(node_modules  + 'gulp');

gulp.task('copyScripts', ['compileTS'], function() {
    return gulp.src(config.typescript.src, { base: applSrc })
        .pipe(gulp.dest(outputDir));
});
