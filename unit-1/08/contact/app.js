var app = angular.module("ngContact", [])

app.controller("contact", ($scope) => {
  $scope.contact = {}
  $scope.contact.name = " "
  $scope.contact.street1 = " "
  $scope.contact.street2 = " "
  $scope.contact.city = " "
  $scope.contact.state = " "
  $scope.contact.zip = " "

  $scope.submitFav = () => {
    $scope.contact.name = " "
    $scope.contact.street1 = " "
    $scope.contact.street2 = " "
    $scope.contact.city = " "
    $scope.contact.state = " "
    $scope.contact.zip = " "
  }
});
