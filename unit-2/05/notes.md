#Routing
###steps
 - include `ngRoute` module :: [CDN] (http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.js")
 - load `ngRoute` into app.js
  `ar app = angular.module("yourAppName", ['ngRoute']);`
- index.html = layout file, similar to how we used the layout.hbs
- `ng-view` syntactically: `<div ng-view></div> or <ng-view></ng-view>`- tells angular where to render the views we set up in our js files
- declare routes in `app.js`
```javascript
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
});
```
