angular.module('toDoApp', [])

.service("toDoService", function(){
  this.addToDo = function(item) {
    console.log("service.....adding ", item);
    var toAdd = {
      itemDesc: item,
      update: false
    }
    return toAdd
  }

  this.updateItem = function(oldItem, newItem){
    oldItem.itemDesc  = newItem
    return newItem
  }

  this.deleteItem = function(todoObject){

  }
})
