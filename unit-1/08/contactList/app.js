var app = angular.module("ngContact", [])

app.controller("contact", ($scope) => {
  $scope.view= {}

  $scope.view.allContacts = []
  $scope.contactsForm = {}

  $scope.contactsExist = false

  $scope.addContact = () => {
    $scope.contactsExist = true
    var contacts = {
      name: $scope.contactsForm.name,
      email: $scope.contactsForm.email,
      phone: $scope.contactsForm.phone
    }

    $scope.contactsForm.name = ""
    $scope.contactsForm.email = ""
    $scope.contactsForm.phone = ""

    $scope.view.allContacts.push(contacts)
  }
});
