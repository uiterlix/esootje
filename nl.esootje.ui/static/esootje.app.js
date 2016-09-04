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
define(["require", "exports", 'angular', "angular", "angular-ui-router", "angular-bootstrap", "angular-bootstrap-tpls", "angular-recursion", "wordlist/wordlist", "common/services/services"], function (require, exports, angular) {
    var esootjeApp = angular.module('igApp', [
        'ui.router',
        'ui.bootstrap',
        'services',
        'wordlist'
    ]);
    esootjeApp.constant('BASE_URL', '//localhost:8080/data');
    esootjeApp.config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {
            $httpProvider.defaults.withCredentials = true;
            $urlRouterProvider.otherwise('/wordlist');
            $stateProvider
                .state("root", {
                url: "/wordlist/overview",
                abstract: true
            });
        }
    ]);
    angular.bootstrap(document, ['igApp']);
});
