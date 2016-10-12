#Controllers
provide properties and functionality for use in the view

the programmer needs to add properties into the `$scope` and use them inside the view

 - when a new controller is created, it is given a new scope automatically
##$scope
 - JavaScript object that glues controllers and views together
 - _properties that are on the `$scope` object are available in the view and the controller._

###Notes for debugging:
 - does the <html> tag have ng-app="name-of-app-from-js-file"?
 - does the ng-controller="name-of-controller-from-js-file"
