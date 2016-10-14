var app = angular.module("formPractice", [])

app.controller("form", ($scope) => {
  $scope.view= {}
  $scope.view.allUsers = []
  $scope.form = {}

  $scope.submitted = false
  $scope.userExists = false

  $scope.addUser = () => {
  console.log('made it in the function');
      var users = {
        username: $scope.form.username,
        password: $scope.form.password,
        email: $scope.form.email,
        zip: $scope.form.zip
      }

      $scope.form.username = ""
      $scope.form.password = ""
      $scope.form.email = ""
      $scope.form.zip = ""

      $scope.view.allUsers.push(users)
      $scope.userExists = true

  }

});
