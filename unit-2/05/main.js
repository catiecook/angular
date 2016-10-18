angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './home.html',
        controller: 'HomeController'
      })
    $locationProvider.html5Mode(true);
  })
