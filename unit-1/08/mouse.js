var app = angular.module("mouseEnter", [])

app.controller("mouse", ($scope) => {
  $scope.view = {}
  $scope.view.enterCount = 0
  $scope.view.rColor = {}
  $scope.view.colors = []
  $scope.replay = false

  $scope.randomColor = () => {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    $scope.view.colors.push(color)
    return color;
  }

  $scope.replay = () => {
    $scope.view.colors.reverse();
    var reverseColors = () => {
      for(var i=0; i<$scope.view.colors.length; i++){
        $scope.view.rColor = {'background-color' : $scope.view.colors[i]}
      }
    };
    $timeout(reverseColors(), 1000);
    // if(!$scope.replay) {
    //   $scope.replay = true
    //   $timeout(() => { reverseColors() }, 500)
    // }
  }

});
