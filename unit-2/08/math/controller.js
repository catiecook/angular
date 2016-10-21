angular.module('mathApp')

  .controller("mathController", function($scope, mathServices){

    $scope.view= {}

    $scope.calculate = function(sign, a, b){
      switch(sign) {
        case 'addition':
            $scope.view.result = mathServices.add(a,b);
            break;
        case 'subtract':
            $scope.view.result = mathServices.sub(a, b);
            break;
        case 'multiply':
            $scope.view.result = mathServices.mult(a, b);
            break;
        case 'divide':
            $scope.view.result = mathServices.div(a, b);
            break;
        case 'power':
            $scope.view.result = mathServices.pow(a, b);
            break;
      }
    }
    $scope.view.result = $scope.calculate()

    this.reset = function() {
      $scope.view.setPristine();
      $scope.view.result = ''
    }

  });
