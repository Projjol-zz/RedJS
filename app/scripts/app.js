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
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://blazing-fire-6602.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostCtrl'
      })
      .when('/posts/:postId',{
        templateUrl: 'views/showposts.html',
        controller: 'PostViewCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register',{
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve:{
          user: function(Auth){
            return Auth.resolveUser();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
