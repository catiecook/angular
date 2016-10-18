#Custom Filters

__Steps__
1. create `filter.js` file
  ```Javascript
    app.filter('kebab', function () {

  });
  ```
2. Filters are functions to pass input and get some returned output to display - they need to return a function that takes a single argument.
  ```javascript
  app.filter('kebab', function () {
    return function (input) {
    };
  });
```

3. write the logic inside of the returned function
  ```javascript
  app.filter('kebab', function () {
    return function (input) {
      return input.replace(/_/g , "-");
    };
  });
```
