#Directives
Angular's way of extending HTML.
You cna use directives to add functionality to HTML elements and attributes.
They can create a dynamic compnent that re-renders when the underlying data changes.
'At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children'

##use tag names to write directives
`<pop-up-dialog> </pop-up-dialog>`
`<side-bar>`
##use attributes
`<span fav-spell='expecto patronum'></span>`
`<div weather-widget='94114'></div>`

__Angular comes with a lot of built in directives__
ng-repeat
  - iterates over a collection and creates a template for ever item in the collection. Angular's equivilant to `forEach`
  Steps:
  1. Define a collection in the body tag

  ```HTML
  <body ng-init="names=['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks']">
  </body>;
  ```
  2. Iterate over and display the items in collection
  ```HTML
  <ul>
    <li ng-repeat='name in names'>
      {{name}}
    </li>
  </ul>
  ```
   - If you have duplicated in an array, there will be a problem with the ng-repeat. The way to fix this is to tell Angular to track the items by the index. `track by $index` into the expression. `ng-repeat='name in names track by $index'`
   - this problem happens because the ng-repeat uses the values as keys by default, so it errors when there are duplicate 'keys'

ng-hide
  - use a conditional to make hide or show initialize
  ```HTML<div ng-show='3 + 4 == 5'>
  3 + 4 isn't 5, don't show
</div>

<div ng-show='3 + 4 == 7'>
  3 + 4 is 7, do show
</div>

<div ng-hide='3 + 4 == 5'>
    3 + 4 isn't 5, don't hide
</div>

<div ng-hide='3 + 4 == 7'>
  3 + 4 is 7, do hide
</div>
```

ng-href
ng-class
  - will dynamically set an element's class depending on a provided expression.
ng-src
ng-app
ng-show
ng-click
ng-disabled
ng-checked
ng-selected
ng-model
ng-style
ng-disabled
ng-readonly
ng-include
ng-switch
ng-controller
ng-view
ng-if
ng-init
ng-bind
ng-cloak
ng-bind-template
ng-model-options
ng-change
ng-form
ng-submit

[complete list](https://docs.angularjs.org/api/ng/directive)

 __but you can also write your own__
