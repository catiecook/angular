##What does ng-model do?
- It allows you to select the value on input or selection and place into the handlebars to display to the user

##What is "dirty checking"?
- It is a term for how Angular checks for changes on varibles within a particular $scope - can be considered a loop

##Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
- `ng-init="BoJack"`

##What are those {{ }} expressions? Are they Handlebars?
- They are not handlebars but they act as receivers for the value that `ng-model` holds, and angular scans for

##Explain what two-way data binding is.
- when a model changes, the view knows about it, and when the view changes the model knows about it.
- templates will automatically update when data changes

#BONUS: Research the $digest loop
- this refers to the code that runs inside the angular event loop.
  - Two Components: The $watch list and the $evalAsync
### $watch list
- 'Any time a user updates the input field, {{ name }} changes in the UI. This change happens because we bind the input field in the UI to the $scope.name property. In order to update the view, Angular needs to track the change. It does so by adding a watch function to the $watch list.' - from the ng-book
- only items bound to the $scope will be added to the $watch list only if they are used in the view
- $watch lists are resolved in the $digest loop thru _dirty checking_

### More: [ng-book] (https://www.ng-book.com/p/The-Digest-Loop-and-apply/)
