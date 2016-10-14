#Animations with Anuglar
__add in the script to HTML *below* the Angular Script:__ `<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>`

__add in to controller:__ `angular.module('animateApp', ['ngAnimate'])`

###ngAnimate
- gives us access to Angular's event loop which makes it so the animations happen at the correct time, so we don't have to fight with the framework we are using.

###how
- Angular triggers animations based on events. Then it attaches a class to the element affected by the event, and this will target css and set an animation
- _this doesn't actualy do animations_. it gives access to a set of css classes to target for the animation, and gives the ability to create our own custom animations.
- understanding of CSS animations is important

#CSSS Transitions, transformations and animations
- [source](https://github.com/gSchool/css-animations)
- [tutorial](https://css-tricks.com/animations-the-angular-way/)
