var OMDb = angular.module('OMDb', ['ngRoute'])

  OMDb.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/movie/:title', {
      templateUrl: 'movie.html',
      controller: 'MovieController'
    })
      .when('/', {
        templateUrl: 'form.html',
        controller: 'SearchController'
      })
    $locationProvider.html5Mode(true);
  })
// controllers
  OMDb.controller('SearchController', function($scope, $http, $location) {
    console.log('Search Controller');
    $scope.searchStarted = false

    $scope.findMovies = function() {
      var searchTitle = $scope.movieTitle
      $http.get('http://www.omdbapi.com/?s=' + searchTitle)
        .then(function(movies) {
          $scope.moviesFound = movies.data.Search
          $scope.searchStarted = true
        }).catch(function(err) {
          console.error("Nope, can't get movies ", err);
          })
    }
    $scope.movieTitle=""
    $scope.singleMovie = function(movieTitle) {
      $location.path('/movie/:title')
    }
  });

  OMDb.controller('MovieController', function($scope, $http, $routeParams) {
    $http.get('http://www.omdbapi.com/?t=' + $routeParams.title)
      .then(function(movieInfo) {
        $scope.movie = movieInfo.data
      }).catch(function(err){
        console.error("Whoops", err)
        })

  })
