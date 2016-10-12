#Scope

###What is scope?
- object used for data binding that we can define methods and properties on. Automatically injects into our controllers so that we can use it
*The glue between the controller and the view* LOL
- $scope is a JavaScript object

##$rootScope
- every app has a root scope - a scope at which all scopes descend from
```JavaScript
var rootScope = angular.element(document).scope()
```
- all scopes are created with prototypal inheritance (have access to parent scopes)
- when methods can't be found in local scopes the program will look into its parent scope and on and on and on.

##Pass scope to child controllers
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div ng-app="myApp">
    <div>
      <input type="text" ng-model="data">
      {{data}}
    </div>
    <div ng-controller="ScopeController">
      <input type="text" ng-model="data">
      {{data}}
    </div>
  </div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
<script>
  angular.module("myApp", []).controller("ScopeController", function($scope) { });
</script>

</body>
</html>
```
