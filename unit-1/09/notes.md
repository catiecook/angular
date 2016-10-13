#Form Validation

##validation from client side
- form and controls provide validation services, so the user can be notified of invalid input before submitting a form.
- provides a better user experience because the user gets instant feedback, instead of having to wait for the serve to return the error to them.
- saves process time because if the user catches the error before sending the request, we don't have to figure out what is going on server side

##validation for server side
- good user experience isn't a trust all
- people can miss the instructions and still send bad requests
- _server side validation is necessary for a secure application_
- imagine the things we can do to manipulate code in the DOM - need to make sure validation is happening somewhere where users don't have access to those tools

##Building a form
- create a action (go to a page, go to nowhere `javascript:void(0)` etc)
- add a label with a `for` attribute and an input field with a matching `id`
- make sure to instantiate the inputs with the word `required` if that field is required

###form validation
- there much be a name associated with inputs
- on the `<form>` element, add in a `novalidate` flag so that it cannot be submitted untill all the required parts have been completed

__required__: add this to make sure an input is not skipped
__ng-minlength="4"__: determine minimum length
__ng-maxlength="4"__: max length
__ng-pattern="/[a-zA-Z]"__: pattern the input must follow
__type="email"__: make sure user enters a valid email address
__type="number"__: make sure user enters only a number
__type="url"__: make sure user enters a valid url
__ng-valid__ `$valid`: boolean that indicates whether an item is currently valid based on tules
__ng-invalid__ `$invalid`: boolean, opposite of ng-valid
__ng-pristine__ `$pristine`: boolean true if the form/input has been used
__ng-dirty__ `$dirty`: boolean, opposite of pristine
__ng-touched__ `$touched`: boolean true if the input has been blurred

###Custom validations
- checking if a username already exists:
```javascript
var app = angular.module('validationExample', []);

app.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function() {
        $http({
          method: 'POST',
          url: '/api/check/' + attrs.ensureUnique,
          data: {'field': attrs.ensureUnique}
        }).success(function(data, status, headers, cfg) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data, status, headers, cfg) {
          c.$setValidity('unique', false);
        });
      });
    }
  }
}]);
```
- This code will check every time the form changes to see if it has a unique entry

##accessing and tageting
- give form item name attribute
    - allows for calls like `formName.$valid` which will check if it is valid `boolean`
- give each input an ng-model
- if no standard HTML5 validations are added, make sure to add `novalidate` to the form tag
- the format to access angular properties: `formName.inputName.angularProperty` SO `firstForm.username.$valid`

##styling forms
__using ng-class__
- `ng-class="{ 'class-name' : expression, 'another-class': another expression }"` OR `{ 'has-error' : sampleForm.username.$invalid }"`
_throwing error message with ng-show_
`<span ng-show="sampleForm.username.$invalid">Username is invalid</span>
`
###Questions:
_When does a form/input have a property of $valid? What class accompanies this property?_
  - $valid is a boolean that is true is all the requirements are met in the form `ng-valid`

_When does a form/input have a property of $invalid? What class accompanies this property?_
  - $invalid would be true if the inputs are not valid `ng-invalid`

_When does a form/input have a property of $pristine? What class accompanies this property?_
  - This is a boolean that will be true if the form is not touched yet. `ng-pristine`

_When does a form/input have a property of $dirty? What class accompanies this property?_
  - When the input has been changed by the user. `ng-dirty`

_When does a form/input have a property of $touched? What class accompanies this property?_
  - boolean, when the form has been blurred `ng-touched`

_What does blurred mean? (research the blur event)_
  - happens when an element looses focus `ng-blur`
  

More info [here] (http://www.ng-newsletter.com/posts/form-validation-with-angularjs.html)
