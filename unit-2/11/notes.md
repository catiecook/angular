#Custom Directives

###DOM Manipulation
- control the DOM with angular's `link` method

##Link
- use the `link` in the directive.
- example ofusing `link` to change the background color of an element whenever its moused over

`app.js`
```javascript
var app = angular.module("mouseOverDirectivepp", [])

app.directive('gsChangeBackground', function() {
  link: function(scope, element, attributes) {
    var oldColor = element.css('background-color') //finds the css tag for style of background color

    element.on('mouseenter', function(event) {
      element.css('background-color', 'yellow')
    })

    element.on('mouseleave', function(event) {
      element.css('background-color', oldColor)
    })
  }
})
```

`index.html`
```html
<!DOCTYPE html>
<html ng-app="mouseOverDirectiveApp">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
  </head>

  <body>
    <div ng-controller=""
    <div gs-change-background style="background-color: red">Hello World!</div>
  </body>
</html>
```

##angular.element
- wraps a raw DOM element or HTML string as a jQuery element
- if jQuery is not available it uses jqLite - a small API-compatible subset of jQuery that allows Angular to manipulate the DOM in cross browser compatible ways.
