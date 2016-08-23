'use strict';

/**
 * @ngdoc overview
 * @name iissApp
 * @description
 * # iissApp
 *
 * Main module of the application.
 */
angular
  .module('iissApp', [
    'ngRoute',
    'jkuri.gallery',
    'databaseConection'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
	  .when('/ubicacion', {
        templateUrl: 'views/ubicacion.html'
      })
      .when('/anuncios', {
        templateUrl: 'views/anuncios.html',
        controller: 'NotifyCtrl',
        controllerAs: 'notify'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html'
      })
      .when('/precios', {
        templateUrl: 'views/precios.html',
        controller: 'PriceCtrl',
        controllerAs: 'price'
      })
      .when('/actividades', {
        templateUrl: 'views/actividades.html'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        controllerAs: 'videos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
