angular.module('mouseOverDirectiveApp')

.controller('colorController', function($scope) {
  $scope.view = {}
  $scope.nameExists = false
  $scope.colorPicked = false
  $scope.colors = [
    {color: 'indeianred'},
    {color:'teal'},
    {color:'darkgreen'},
    {color:'lightgreen'},
    {color:'lightblue'},
    {color:'coral'},
    {color:'pink'},
    {color:'crimson'},
    {color:'darkgrey'},
    {color:'darkcyan'},
    {color:'darkorange'},
    {color: 'darkred'},
    {color: 'darkslategrey'},
    {color: 'deeppink'},
    {color: 'gainsboro'},
    {color: 'goldrod'},
    {color: 'lightslategrey'},
    {color: 'mediumaquamarine'},
    {color: 'palevioletred'}
  ]

  $scope.type = function() {
    $scope.nameExists = true
  }

  $scope.color = function(colorPick) {
    $scope.colorPicked = true
  }

}); //end controller
