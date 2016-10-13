var app = angular.module("myForm", [])

app.controller("form", ($scope) => {
  $scope.view= {}
  $scope.view.allUsers = []
  $scope.userInfo = {}

  $scope.submitted = false
  $scope.userExists = false

  $scope.addUser = () => {
    if($scope.signupForm.$valid) {
  
      console.log("valid as heck!");

      var users = {
        username: $scope.userInfo.username,
        password: $scope.userInfo.password,
        email: $scope.userInfo.email,
        zip: $scope.userinfo.zip
      }
      $scope.userInfo.username = ""
      $scope.userInfo.password = ""
      $scope.userInfo.email = ""
      $scope.userinfo.zip = ""

      $scope.view.allUsers.push(users)
      $scope.userExists = true
    }

  }

});
