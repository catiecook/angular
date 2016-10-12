var app = angular.module("pingpong", [])

app.controller("game", ($scope) => {
  $scope.view = {}
  $scope.view.score1 = 0
  $scope.view.score2 = 0
  $scope.view.player1Wins = false
  $scope.view.player2Wins = false
  $scope.view.winner = " "
  $scope.view.games = false
  $scope.view.p1GamesWon = 0
  $scope.view.p2GamesWon = 0
  $scope.view.serve1 = true
  $scope.view.serve2 = false
  $scope.view.totalPoints = $scope.view.score1 + $scope.view.score2

  $scope.p1Scores = () => {
    $scope.view.score1 += 1
    $scope.view.serve += 1
    if(($scope.view.totalPoints % 2) === 0){
      $scope.view.serve1 = false
      $scope.view.serve2 = true
    }
    if($scope.view.score1 === 11) {
      $scope.view.player1Wins = true
      $scope.view.player2Wins = false
      $scope.view.winner = "Player 1 wins!"
      $scope.view.games = true
      $scope.view.p1GamesWon += 1
    }


  }

  $scope.p2Scores = () => {
    $scope.view.score2 += 1
    if($scope.view.score2 === 11) {
      $scope.view.player2Wins = true
      $scope.view.player1Wins = false
      $scope.view.winner = "Player 2 wins!"
      $scope.view.games = true
      $scope.view.p2GamesWon += 1
    }
  }

  $scope.reset = () => {
    $scope.view.score1 = 0
    $scope.view.score2 = 0
    $scope.view.player1Wins = false
    $scope.view.player2Wins = false
    $scope.view.serve1 = true
    $scope.view.serve2 = false
  }
});
