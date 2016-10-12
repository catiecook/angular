var app = angular.module("events", [])

app.controller("clicking", ($scope) => {
  $scope.view = {}
  $scope.view.number = 5
  $scope.view.reverse = " "
  $scope.reversed = false
  $scope.number = false

    $scope.pickRandomNumber = () => {
      $scope.number = true
      $scope.view.number = Math.floor(Math.random() * 10) + 1
    }

    $scope.reverseWord = (input) => {
        $scope.reversed = true;
        $scope.view.reverse = input.split('').reverse().join('');
    }

  });

  //
  // app.filter = ("reverse", (input) => {
  //     $scope.view.reverse = input.split('').reverse().join('');
  // });
