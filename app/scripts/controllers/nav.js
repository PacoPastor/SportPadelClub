'use strict';

angular.module('iissApp')
  .controller('NavCtrl', ['$scope', function($scope) {
    $scope.active = 0;
    $scope.setTab = function(newTab) {
      $scope.active = newTab;
    };
    $scope.isTab = function(tab) {
      return $scope.active === tab;
    };
  }]);
