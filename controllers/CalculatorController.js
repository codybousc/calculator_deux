angular.module("calculator", []).controller('CalculatorController', ['$scope',
function($scope) {
  $scope.result = 0;
  $scope.variableOrderingArray = [];
  $scope.operatorArray = [];
  $scope.finalVariableArray = [];
  $scope.operatorChosen = false;
  $scope.operator = "";

$scope.choseOperator = function(operator) {
  $scope.operatorChosen = true;
  $scope.operatorArray.push(operator);
  $scope.operator = operator;
  if(operator == 'equals') {
    if ($scope.variableOrderingArray.length > 0) {
       if ($scope.variableOrderingArray.length == 1) {
         $scope.finalVariableArray.push($scope.variableOrderingArray[0]);
       }
       else if ($scope.variableOrderingArray.length > 1) {
         $scope.finalVariableArray.push(parseInt($scope.variableOrderingArray.join("")));
       }
     }
  }
}

$scope.assignVar = function(variable) {
  //If operator has been chosen and there are two or more numbers in variableOrderingArray
  if($scope.operatorChosen && $scope.variableOrderingArray.length > 1) {
    $scope.finalVariableArray.push(parseInt($scope.variableOrderingArray.join("")));
    $scope.finalVariableArray.push($scope.operator);
    $scope.operator = "";

    $scope.variableOrderingArray = [];
    $scope.variableOrderingArray.push(variable);
    $scope.operatorChosen = false;
  }
  //If operator has been chosen and variableOrderingArray contains one character
  else if ($scope.operatorChosen && $scope.variableOrderingArray.length == 1) {
    //first push existing variable to finalVariableArray
    $scope.finalVariableArray.push($scope.variableOrderingArray[0]);
    $scope.finalVariableArray.push($scope.operator);
    $scope.operator = "";

    //next clear varOrderingArray
    $scope.variableOrderingArray = [];
    //next push current variable into variableOrderingArray
    $scope.variableOrderingArray.push(variable);
    //reset operatorChosen
    $scope.operatorChosen = false;
  }
  else if (!$scope.operatorChosen && $scope.variableOrderingArray.length >= 1) {
    $scope.variableOrderingArray.push(variable);
    $scope.result = $scope.variableOrderingArray.join("");
  }
  else if (!$scope.operatorChosen && $scope.variableOrderingArray.length == 0) {
    $scope.variableOrderingArray.push(variable);
    $scope.result = variable;
  }
  else {
    $scope.variableOrderingArray.push(variable)
  }
}

$scope.calculate = function() {
  console.log("==============================================================")
  $scope.result = 0;
  console.log("finalVariableArray from calculate = ", $scope.finalVariableArray);
  for(var i = 0; i < $scope.finalVariableArray.length; i++) {
    //works for first operator call
    if(isNaN($scope.finalVariableArray[i]) && i == 1) {
      console.log("==================================================================================")
      console.log("Making it to first conditional");
        var firstNum = $scope.finalVariableArray[i - 1];
        var secondNum = $scope.finalVariableArray[i + 1];
        console.log("firstNum = ", firstNum, " secondNum = ", secondNum);
        if($scope.finalVariableArray[i] == 'add') {
          $scope.result += firstNum + secondNum;
        }
        else if ($scope.finalVariableArray[i] == 'subtract') {
          $scope.result += firstNum - secondNum;
        }
        else if ($scope.finalVariableArray[i] == 'multiply') {
          $scope.result = $scope.result + (firstNum * secondNum);
        }
        else if ($scope.finalVariableArray[i] == 'divide') {
          $scope.result = $scope.result + (firstNum / secondNum);
        }
        console.log("result from first Conditional = ", $scope.result);

    }
    else if(isNaN($scope.finalVariableArray[i]) && i > 1) {
      console.log("==================================================================================")
      console.log("Making it to second CONDITIONAL ");
      var secondNum = $scope.finalVariableArray[i + 1];
      console.log(" starting result from second conditional = ", $scope.result);
      if($scope.finalVariableArray[i] == 'add') {
        $scope.result += secondNum;
      }
      else if ($scope.finalVariableArray[i] == 'subtract') {
        $scope.result += secondNum;
      }
      else if ($scope.finalVariableArray[i] == 'multiply') {
        $scope.result = $scope.result * secondNum;
      }
      else if ($scope.finalVariableArray[i] == 'divide') {
        $scope.result = $scope.result / secondNum;
      }

  }

}
console.log("RESULT = ", $scope.result);

}



$scope.clearOrderingArr = function() {
  $scope.variableOrderingArray = [];
  $scope.finalVariableArray = [];
  $scope.result = 0;
}

}]);
