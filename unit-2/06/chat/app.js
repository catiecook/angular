var chatApp = angular.module('chatApp', ['ngRoute'])

  chatApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/message', {
      templateUrl: 'message.html',
      controller: 'MessageController'
    })
      .when('/', {
        templateUrl: 'chat.html',
        controller: 'ChatController'
      })
    $locationProvider.html5Mode(true);
  })
// controllers
  chatApp.controller('ChatController', function($scope, $http, $location) {
    console.log("in CHAT CONTROLLER");
    $scope.create = function() {
      console.log($scope.username, $scope.message);
      const newMsg = { message: {
        name: $scope.username,
        content: $scope.message
      }}

      $http.post('https://messagehttpservice.herokuapp.com/messages', newMsg)
        .then(function(data){
          console.log("post sucessful", data);
          $location.path('/message')
        }).catch(function(err){
          console.error("whoops, couldn't post to messages ", err)
        })
      }
  });

  chatApp.controller('MessageController', function($scope, $http) {

    console.log("in message controller");
    $http.get('https://messagehttpservice.herokuapp.com/messages')
    .then(function(data) {
    }).catch(function(err) {
      console.error("Nope, can't get messages ", err);
    })
  })
