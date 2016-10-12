#Events

##ng-click
run a specific method on the current `$scope` when an element is clicked. (this is just like the `onclick` property)

```javascript
app.controller("clicking", ($scope) => {
  $scope.view = {}
  $scope.view.number = 5

  $scope.pickRandomNumber = () => {
    $scope.view.number = Math.floor(Math.random() * 10) + 1
  }
})
```
This will update the number by the click on a button containing the ng-click function 'pickRandomNumber()' because the `$scope.view ={}` is giving us an empty object to add in a key of 'number'. The function then dynamically updates that value as the button is clicked because it is in the scope of the controller.


##timeout
- returns a promise, which is resolved when the delay has passed and the timeout function is executed
_to cancel_ : `$timeout.cancel(promise)`
