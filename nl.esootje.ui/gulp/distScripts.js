var gulp = require(node_modules  + 'gulp'),
    rjs = require(node_modules  + 'gulp-requirejs'),
    ngAnnotate = require(node_modules  + 'gulp-ng-annotate'),
    rev = require(node_modules  + 'gulp-rev'),
    uglify = require(node_modules  + 'gulp-uglify');

gulp.task('distScripts', ['replaceBaseUrl', 'copyBowerLibs'], function() {
    gulp.src(outputDir + '/lib/requirejs/require.js')
        .pipe(uglify({
            mangle: false
        })) // Since ng-min doesn't seem to catch all minification problems, don't mangle identifiers
        .pipe(gulp.dest(outputDir + '/lib/requirejs/'));
    return rjs({
            baseUrl: outputDir,
            name: 'main',
            out: 'main.js',
            mainConfigFile: outputDir + '/main.js',
            include: [config.javascript.appFileName]
        })
        .pipe(ngAnnotate())
        .pipe(uglify({
            mangle: false
        })) // Since ng-min doesn't seem to catch all minification problems, don't mangle identifiers
        .pipe(rev())
        .pipe(gulp.dest(outputDir))
        .pipe(rev.manifest({base: outputDir, path: outputDir + "/rev-manifest.json", merge: true}))
        .pipe(gulp.dest(outputDir));
});
