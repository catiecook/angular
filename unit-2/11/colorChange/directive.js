angular.module('mouseOverDirectiveApp')

.directive('myChangeColor', function() {
  return {
    link: function($scope, element) {
      var oldColor = element.css('color');

      element.on('mouseenter', function(event) {
        element.css('color', $scope.colorPick);
      });
      element.on('mouseleave', function(event) {
        element.css('color', oldColor);
      })
    }
  };
});
