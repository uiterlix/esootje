var gulp = require(node_modules + 'gulp'),
    mainBowerFiles = require(node_modules  + 'main-bower-files');

gulp.task('copyBowerLibs', function () {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
        .pipe(gulp.dest(outputDir + "/lib"));
});
