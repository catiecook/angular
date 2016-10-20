angular.module('mouseOverDirectiveApp', ['ngMaterial', 'ngAria', 'ngAnimate', 'ngRoute'])

.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
  $mdThemingProvider.theme('default')
    .dark();
  $routeProvider
    .when('/', {
        templateUrl: 'color.html',
        controller: 'colorController'
      })
    $locationProvider.html5Mode(true);
});
