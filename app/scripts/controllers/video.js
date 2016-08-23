'use strict';

angular.module('iissApp')
  .controller('VideosCtrl', ['$scope', function($scope) {
    $scope.videoso = [
      {video: 'https://www.youtube.com/v/BTa52QJHrV4',
       imagen: 'http://img.youtube.com/vi/BTa52QJHrV4/default.jpg'},
      {video: 'https://youtu.be/Xfqu1yUGgjE',
       imagen: 'http://img.youtube.com/vi/Xfqu1yUGgjE/default.jpg'},
      {video: 'http://www.youtube.com/v/Z6egFKGBixs',
       imagen: 'http://img.youtube.com/vi/Z6egFKGBixs/default.jpg'},
      {video: 'http://www.youtube.com/v/C2I6E6TLZC8',
       imagen: 'http://img.youtube.com/vi/C2I6E6TLZC8/default.jpg'},
      {video: 'http://www.youtube.com/v/gZgCimry5xM',
       imagen: 'http://img.youtube.com/vi/gZgCimry5xM/default.jpg'},
      {video: 'http://www.youtube.com/v/0rwm6ds7F0g',
       imagen: 'http://img.youtube.com/vi/0rwm6ds7F0g/default.jpg'},
      {video: 'http://www.youtube.com/v/gfv7QuNaVDU',
       imagen: 'http://img.youtube.com/vi/gfv7QuNaVDU/default.jpg'},
      {video: 'http://www.youtube.com/v/hzxZxlTBhO0',
       imagen: 'http://img.youtube.com/vi/hzxZxlTBhO0/default.jpg'}
    ];
  }]);
