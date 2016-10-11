#Angular MVC
Angular uses MVC (model view controller) design pattern to separate operations in the app.

##Model
__What is it?__
this is where the application's data lives, represented in its current state

__How it is defined__
With javascript, inside Angular services -imperatively

__What does it include__
1. Access to persistent layer/store
2. Business logic
3. CRUD functions
4. Data validation

##View
__What is it?__
Displays application's data (from the model) for the user.
Handles user interaction..

__how its defined__
HTML, CSS, JavaScript, Angular directives (aka _ng-_ attributes) and _two way data bindings_ declaritively inside the HTML document

__what does it include?__
1. Markup for
  - presenting data
  - handling user interactions
  - showing and hiding elements
2. Filters to limit/organize data
3. Expressions/logic

##Controller
__what__
control the relationship between the Models and Views by exposing parts of the model and managing state.

__how it is defined__
JavasScript with angular controllers

###see index.html for example
Links: [MVC MVVM with AngularJS] (https://web.archive.org/web/20160229124959/http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)
