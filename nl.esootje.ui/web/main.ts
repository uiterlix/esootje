// The following path mappings are used in the TypeScript code by ///<amd-dependency> directives
require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap',
        'angular-bootstrap-tpls': 'lib/angular-bootstrap/ui-bootstrap-tpls',
        'angular-recursion': 'lib/angular-recursion/angular-recursion',
        'requirejs-dplugins': 'lib/requirejs-dplugins',
        'requirejs-text': 'lib/requirejs-text',
        'jquery': 'lib/jquery/dist/jquery',
        'async': 'lib/requirejs-plugins/src/async'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular-bootstrap']
        },
        'angular-recursion': {
            deps: ['angular']
        }
    }

});
