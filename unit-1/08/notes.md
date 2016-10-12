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

##ng-submit
-_anti patterns: (bad practices)_
  • Do not use `ng-submit` on the form and `ng-click` on the submit button at the same time. Use either `ng-submit` on the form and no directive on the submit button, or use `ng-click` on the submit button and no directive on the form. `ng-submit` is preferred in a form.
  • Don't create separate properties on the $scope object for each form field. _create an object that will contain all of the form properties inside of it_
  i.e. `$scope.favoriteForm = {};`
  • never do DOM manipulation on your controller.
  • never do DOM manipulation on your controller.
  • never do DOM manipulation on your controller.
  _Instead, add the data that you want to display to an object in the scope that will then be displayed in the view._
