'use strict';

angular.module('iissApp')
  .controller('NotifyCtrl', ['$scope','$window', 'Anuncios', function($scope, $window, Anuncios) {
    Anuncios.all().then(function(data) {
      $scope.anuncios = data;
    })
    $scope.nuevo = new Anuncios();
    $scope.anadirAnuncio = function() {
      $scope.nuevo.$saveOrUpdate();
      $scope.nuevo = new Anuncios();
      alert("Mensaje añadido con éxito. Recarga para verlo");
    };
    $scope.borrarAnuncio = function(id) {
      Anuncios.getById(id).then(function(data) {
        data.$remove();
      });
      alert("Mensaje borrado con éxito. Recarga para verlo");
    };
    $scope.verAnuncios = true;
    $scope.mostrarCreacion = function() {
      $scope.verAnuncios = false;
    };
    $scope.mostrarAnuncios = function() {
      $scope.verAnuncios = true;
    };
  }]);
