'use strict';

/**
 * @ngdoc function
 * @name redjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redjsApp
 */
angular.module('redjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
