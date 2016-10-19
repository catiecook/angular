angular.module('toDoApp')
  .controller('toDoController', function($scope, toDoService){

    $scope.view = {}
    $scope.view.toDoItems= []
    $scope.view.itemsExist = false


    $scope.add = function(item){
      console.log($scope.view.editItem);
      $scope.view.itemsExist = true
      $scope.view.toDoItems.push(toDoService.addToDo(item))
      console.log("service app called in controller", toDoService.addToDo(item));

    }

    $scope.edit = function(todo) {
      console.log("changing to do to ture");
      todo.update = true
    }

    $scope.update = function(oldItem, newItem) {
      console.log(oldItem, newItem);
      toDoService.updateItem(oldItem, newItem)
      $scope.view.editItem = true
    }

    $scope.delete = function(todoObject) {
      console.log("deleting....", todoObject);
      toDoService.deleteItem(todoObject)
    }

})
