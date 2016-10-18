var chatApp = angular.module('chatApp', ['ngRoute'])

  chatApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'chat.html',
        controller: 'ChatController'
      })
      .when('/message', {
        templateUrl: '/message.html',
        controller: 'MessageController'
      })
    $locationProvider.html5Mode(true);
  })
// controllers
  chatApp.controller('ChatController', function($scope, $http, $lcoation) {
    $scope.create = function() {
      const newMsg = {
        name: $scope.username,
        content: $scope.message
      }

      $http.post('https://api.github.com/zen/message')
        .then(function(data){
          $location.path('/message')
        });
      }
  });

  chatApp.controller('MessageController', function($scope, $http) {
    $http.get('https://api.github.com/zen/message')
    .then(function(data) {
      $scope.message = data;
    }).catch(function(err) {
      console.error("Nope", err);
    })
  })
