var gulp = require(node_modules  + 'gulp');
var revReplace = require(node_modules  + 'gulp-rev-replace');

gulp.task('buildDist', ['copyHtml', 'copyImages', 'distScripts', 'distStyles'], function() {
    var manifest = gulp.src(outputDir + "/rev-manifest.json");
    return gulp.src([outputDir + "/index.html", outputDir + "/main*.js"])
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(outputDir));

});
