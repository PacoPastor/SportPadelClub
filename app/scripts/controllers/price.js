'use strict';

angular.module('iissApp')
  .controller('PriceCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/scripts/precios.json').success(function(data) {
      $scope.precios = data;
    });
  }])
