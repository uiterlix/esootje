/**
 * This config is used by the Gulp tasks in the 'gulp' directory.
 */
module.exports = {
    images: {
        src: [
            applSrc + '/**/images/**/*',
            applSrc + '/*.ico'
        ]
    },
    typescript: {
        src: [
            applSrc + '/**/*.ts',
            applSrc + '/**/*.js',
            '!' + applSrc + '/**/*.d.ts'
        ],
        tsconfigFile: applSrc + '/tsconfig.json'
    },
    javascript: {
        appFileName: 'ig.app'
    },
    html: {
        src: [applSrc + '/**/*.html']
    },
    sass: {
        src: [
            applSrc + '/**/*.scss',
            applSrc + '/**/*.css'
        ]
    },
    css: {
        src: [outputDir + '/**/*.css']
    },
    serve: {
        port: '8000',
        baseDir: '/',
        root: './static/'
    }
};
