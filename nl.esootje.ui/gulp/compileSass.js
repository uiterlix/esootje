var gulp = require(node_modules  + 'gulp'),
    sass = require(node_modules  + 'gulp-sass'),
    prefix = require(node_modules  + 'gulp-autoprefixer'),
    filters  = require(node_modules  + 'gulp-filter'),
    notify = require(node_modules  + 'gulp-notify');

gulp.task('compileSass', function() {
    return gulp.src(config.sass.src, { base: applSrc })
    	.pipe(filters(['**/*', '!**/*/main.scss']))
    	.pipe(sass({
	        sourceComments: 'map',
	        errLogToConsole: false,
	        onError: function (err) {
	            return notify().write(err);
	        }
    	}))
        .pipe(prefix("last 2 versions"))
        .pipe(gulp.dest(outputDir));
});
