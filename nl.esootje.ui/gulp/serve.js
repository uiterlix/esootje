var gulp = require(node_modules  + 'gulp'),
    http = require('http'),
    ecstatic = require(node_modules  + 'ecstatic');

gulp.task('serve', function (done) {
    http.createServer(ecstatic({ root: config.serve.root }))
        .listen(config.serve.port, done);
});
