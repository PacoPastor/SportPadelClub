'use strict';

describe('Tests', function () {

  beforeEach(module('iissApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('NavCtrl', function() {

    it('active deberá ser 0 al iniciar el controlador', function() {
      var $scope = {};
      var controller = $controller('NavCtrl', { $scope: $scope });
      expect($scope.active).toBe(0);
    });

    it('active deberá cambiar al llamar a setTab', function() {
      var $scope = {};
      var controller = $controller('NavCtrl', { $scope: $scope });
      $scope.setTab(1);
      expect($scope.active).toBe(1);
    });

    it('isTab deberá devolver true cuando el número pasado sea igual a active', function() {
      var $scope = {};
      var controller = $controller('NavCtrl', { $scope: $scope });
      $scope.setTab(1);
      expect($scope.isTab(0)).toBe(false);
      expect($scope.isTab(1)).toBe(true);
    });

  });

  describe('GalleryCtrl', function() {
    it('debería haber 19 fotos en la galería', function() {
      var $scope = {};
      var controller = $controller('GalleryCtrl', { $scope: $scope });
      expect($scope.images.length).toBe(19);
    });
  });

  describe('VideosCtrl', function() {
    it('debería haber 10 vidos en la galería', function() {
      var $scope = {};
      var controller = $controller('VideosCtrl', { $scope: $scope });
      expect($scope.videoso.length).toBe(10);
    });
  });

});

