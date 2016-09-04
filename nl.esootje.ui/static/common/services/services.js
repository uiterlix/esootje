'use strict';
define(["require", "exports", 'angular', './WordListService'], function (require, exports, angular, wordListService) {
    var services = angular.module('services', []);
    services.service('wordListService', wordListService);
    return services;
});
