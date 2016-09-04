var gulp = require(node_modules  + 'gulp'),
    del = require(node_modules  + 'del');

gulp.task('clean', function () {
    return del.sync(['!./' + outputDir + '/.gitignore', outputDir + "/*"], {force: true});
});
