var myApp = angular.module('myApp', ['ngRoute'])

  myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'zen.html',
        controller: 'ZenController'
      })
    $locationProvider.html5Mode(true);
  })

  myApp.controller('ZenController', function($scope, $http) {
    $scope.message = "Add a Chat Message"
    $http.get('https://messagehttpservice.herokuapp.com/messages').then(function(data){
      $scope.chatData = data;
    })
  })
