#HTTP Service
- *Angular's wrapper for AJAX calls*
- angular services are objects that contain code that can be shared on the app.
- can write out own custom services
__Examples of built in services:__
$http
$location
$rootScope
$q
$animate
$routeParams

##useing HTTP service
1. add it as a dependency into the _server side_ app.js
`app.controller('someControllerName', function($scope, $http) {
});`
  - now we have access to modthods defined on `$http` services
  $http.get
  $http.head
  $http.post
  $http.put
  $http.delete
  $http.jsonp
  $http.patch

2. use `$http.get()` to retrieve simple data from an API - returns a promise!
