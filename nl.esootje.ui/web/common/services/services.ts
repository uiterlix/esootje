'use strict'
import angular = require('angular');
import wordListService = require('./WordListService');

var services:angular.IModule = angular.module('services', []);

services.service('wordListService', wordListService);

export = services;
