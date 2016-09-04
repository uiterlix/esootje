var gulp = require(node_modules  + 'gulp'),
    rev = require(node_modules  + 'gulp-rev'),
    minifycss = require(node_modules  + 'gulp-minify-css');

gulp.task('distStyles', ['compileSass'], function() {
    return gulp.src(config.css.src)
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest(outputDir))
        .pipe(rev.manifest({base: outputDir, path: outputDir + "/rev-manifest.json", merge: true}))
        .pipe(gulp.dest(outputDir));
});
