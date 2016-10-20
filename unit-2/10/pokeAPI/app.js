var app = angular.module("pokeApp", [])

  app.controller('pokeController', function($scope, pokeService) {
    $scope.view = {}
    $scope.view.pokeStuff = []
    $scope.randomPokeIds = []

//create random number
    $scope.randomNumber = function() {
      for(var i = 0; i<7; i++){
        var randomPokeID = Math.floor(Math.random() * 10)
        $scope.randomPokeIds.push(randomPokeID)
      }
    }
//get all the pokemon data
    $scope.getPoke = function($scope.randomPokeIDs){
      pokeService.getPokeNames($scope.randomPokeIDs)
    }
  })

  app.service('pokeService', function($http, $q) {
    // var poke = {}
    var baseUrl = "http://pokeapi.co/api/v2/pokemon"
    var cashedPoke = []

    this.getPokeNames = function(pokeIDs) {
      var deferred = $q.defer()
      var allPokeData = [] //where to load all 6 pokes
      //get data for each poke ID

      //using for each to make an $http request for 6 different pokemon picked at random.
      angular.forEach(pokeIDs, function(pokeID) {
        allPokeData.push($http.get(url + pokeID))
      })

      $q.all(allPokeData)
        .then(
          function(results) {
            deffered.resolve(
            JSON.stringify(results))
          },
          function(err) {
            deffered.reject(err)
          },
          function(updates) {
            deferred.update(updates)
          })
          return deffered.promise
        }
      }); //whole service ends
