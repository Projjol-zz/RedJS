'use strict';

/**
 * @ngdoc function
 * @name redjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redjsApp
 */
angular.module('redjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
