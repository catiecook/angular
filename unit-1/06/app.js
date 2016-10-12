var app = angular.module("firstApp", []);

app.controller("ExerciseController", function($scope){
  $scope.favColor = "Moss Green";
  $scope.secondsInACentury = (((60 * 60) * 24) * 365) * 100;
  $scope.rightNow = new Date(); 
})
