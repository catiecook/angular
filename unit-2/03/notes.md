#Dependency Injection
###What
- We break apart our code into more modular pieces so that we write more testable and maintainable code
- _Separation of Concerns_: design principle for separating a computer program into distinct sections so that each section addresses a concern (a set of information that affects the code of a computer program)

###terms
- Single Responsibility Principle -
- Interface (you can start here)
- Duck Typing
- Law of Demeter
- Tight Coupling (in contrast with Loose Coupling)
- Separation of Concerns (in your own words :P )

```app.controller('SampleController', function($scope, $rootScope){
  $scope.view.val = "some value from $scope";
  $rootScope.rootView.val = "some value from $rootScope";
});```
