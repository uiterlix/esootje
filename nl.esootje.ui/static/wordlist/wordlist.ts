'use strict'
import angular = require('angular');
import WordListCtrl = require('./WordListCtrl');

var partialsDir:string = 'wordlist/partials/';
var ngModule:angular.IModule = angular.module('wordlist', []);

ngModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('wordlist', {
            url: '/wordlist',
            template: '<ui-view></ui-view>',
            data: {
                breadcrumbDest: 'wordlist.overview'
            },
            abstract: true
        })
        .state('wordlist.overview', {
            url: '/overview',
            templateUrl: partialsDir + 'wordlist-overview.html',
            controller: 'WordListCtrl'
        })
}]);

ngModule.controller('WordListCtrl', WordListCtrl);

export = ngModule;
