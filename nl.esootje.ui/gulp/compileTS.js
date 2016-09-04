var gulp = require(node_modules  + 'gulp'),
    typescript = require(node_modules  + 'gulp-typescript');

gulp.task('compileTS', function() {
    var tsProject = typescript.createProject(config.typescript.tsconfigFile);
    var tsResult = gulp.src(config.typescript.src)
        .pipe(typescript(tsProject));

    return tsResult.js
        .pipe(gulp.dest(outputDir))
});
