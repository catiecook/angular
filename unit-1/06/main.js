var app = angular.module("madLib", []);

  app.controller("madLibController", function($scope){
    $scope.fullThing = false;
    console.log("right before function");
    $scope.generate = function() {
          console.log("HI function");
      $scope.fullThing = true;
    }

  $scope.clear = function() {
    $scope.fullThing = false;
    $scope.pluralNoun = " "
    $scope.boyName = " "
    $scope.pluralNoun2 = " "
    $scope.pluralNoun3 = " "
    $scope.insect = " "
    $scope.adjective = " "
    $scope.verb = " "
  }
})
