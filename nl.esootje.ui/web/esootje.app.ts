/// <reference path="types/libs.d.ts" />
// We only need the side-effect of Angular module creation. A normal TypeScript require would be removed as dead code,
// since we don't actually use the imported value:
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="angular-bootstrap"/>
/// <amd-dependency path="angular-bootstrap-tpls"/>
/// <amd-dependency path="angular-recursion"/>
/// <amd-dependency path="wordlist/wordlist"/>
/// <amd-dependency path="common/services/services"/>

import angular = require('angular');

/* app module */
var esootjeApp:angular.IModule = angular.module('igApp', [
    'ui.router',
    'ui.bootstrap',
    'services',
    'wordlist'
]);

esootjeApp.constant('BASE_URL', '//localhost:8080/data');

esootjeApp.config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $httpProvider) {
    // ensure the authentication cookie is sent with each request
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise('/wordlist');
    $stateProvider
        .state("root", {
            url: "/wordlist/overview",
            abstract: true
        })
}
]);

angular.bootstrap(document, ['igApp']);
