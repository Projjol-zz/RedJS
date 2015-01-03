/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name redjsApp
 * @description
 * # redjsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('redjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
