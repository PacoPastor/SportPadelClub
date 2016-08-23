'use strict';

angular.module('databaseConection', ['mongolabResourceHttp'])
  .constant('MONGOLAB_CONFIG',{API_KEY:'mvYfeESSlsgAp8dvDhBJxCVy7Ef3JWdn', DB_NAME:'anuncios'})

  .factory('Anuncios', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('anuncio');
  });
