##Digest Cycle - Angular JS Internals

###$scope.$watch
- when you need to watch a variable, place a watch on it
    - similar to an event listener
- This will track whenever the variable is changed

###$scope.$digest
- in the background theres a digest cycle running which monitors what variables are getting changed (of the ones being watched).
- The method that is constantly called to update data in the digest cycle is `$digest`

###$scope.$apply
- Sometimes the data that is in the scope is not getting updated on our HTML content. This happens when we are using APIs that are external to our angular app.
- this causes the need for a *forceful digest cycle*
- `$scope.$apply` will help - but _limit use_

#D$scope.digest vs. $scope.apply
- when you use '$scope.digest' it only runs the digest loop from that particular scope.
- when `$apply` is called it uses the $rootScope and goes through all the scopes in the application
- if there are many watches and scopes, it is best to use `$digest` if only one scope is going to be modified. Otherwise use `$apply`

##Extend Browser + Digest Cycle
- Events are put on the event loop and when they fire they trigger callbacks.
(usually the callback will modify the DOM and the browser will render that change)
- in angular, the callbacks on the event queue have the $apply function in them automatically.
- when the event fires, it goes into the JavaScript context and JS starts processing it, the JS runs $apply and goes into the digest loop. THEN the DOM is modified and rendered in the browser
- When the digest loop runs, it is run against a `scope` (some directives create their own scope, and when the loops runs, it runs gains the scope of the specific directive)

##What is the digest loop?
- It is what runs after the $apply function brings a callback into the angular context.
- Digest loop has two sub-loops in it
  1. `$watch list`
    - where angular implements dirty checking. $digest runs iteratively until DOM is stable/not dirty
      _Dirty Checking_
        - process to check if the value of an expression/variable has changed. Compares an old value with a new one to see if it has changed.
        - determine whether a variable in the scope has changed or not. More [here](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)
        - Observes elements in the scope and when they change, while angular checks them. (aka `dirty checking`)
        runs callbacks that are associated with those watches that are put on the scope elements. You can issue your own $watch function inside of the $scope.
  2. `$evalAsync`
    - whateer we've called with the `$evalAsync()` is guarenteed to run on the next digest cycle. Good substitute for the setTimeout(which is not an Angular construct).

  More [info](http://stackoverflow.com/questions/9682092/angularjs-how-does-databinding-work/9693933#9693933)
  [info](https://docs.angularjs.org/guide/scope#scope-life-cycle) [info](https://www.youtube.com/watch?v=3DuyyNgXqsE)

##Parser and Compiler
- angular extends the browser in two ways.
  1. The event loop
  2. Parser (using the {{}})

  - while inside of angular program angular parses the directives
  
