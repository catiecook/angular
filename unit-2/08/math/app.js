angular.module('mathApp', [])

  .service("mathServices", function() {
      this.add = function(a, b) {
        return a+b
      }
      this.sub = function(a, b) {
        return a-b
      }
      this.mult = function(a,b) {
        return a*b
      }
      this.div = function(a,b) {
        return a/b
      }
      this.pow = function(a,b) {
        return Math.pow(a, b)
      }
});
