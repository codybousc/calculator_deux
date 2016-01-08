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
  console.log("operator chosen = ", $scope.operatorChosen);
  //If operator has been chosen and there are two or more numbers in variableOrderingArray
  if($scope.operatorChosen && $scope.variableOrderingArray.length > 1) {
    console.log("Hittting Operator chosen and LENGTH > 1 ")
    // console.log("from line 22, ", $scope.variableOrderingArray.join(""))
    $scope.finalVariableArray.push(parseInt($scope.variableOrderingArray.join("")));
    $scope.finalVariableArray.push($scope.operator);
    $scope.operator = "";

    $scope.variableOrderingArray = [];
    $scope.variableOrderingArray.push(variable);
    $scope.operatorChosen = false;
  }
  //If operator has been chosen and variableOrderingArray contains one character
  //ISSUE HERE
  else if ($scope.operatorChosen && $scope.variableOrderingArray.length == 1) {
    console.log("Hittting Operator chosen and LENGTH == 1 ")
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
    console.log("Hittting Operator NOT chosen and LENGTH >= 1 ")
    $scope.variableOrderingArray.push(variable);
    $scope.result = $scope.variableOrderingArray.join("");
  }
  else if (!$scope.operatorChosen && $scope.variableOrderingArray.length == 0) {
    console.log("Hittting Operator NOT chosen and LENGTH == 0  ")
    $scope.variableOrderingArray.push(variable);
    $scope.result = variable;
  }
  else {
    console.log("Hittting ELSE statement")
    $scope.variableOrderingArray.push(variable)
  }
  console.log("variableOrderingArray = , ", $scope.variableOrderingArray);
  console.log("finalVariableArray = , ", $scope.finalVariableArray);
}

$scope.calculate = function() {
  console.log("finalVariableArray from calculate = ", $scope.finalVariableArray);
  for(var i = 0; i < finalVariableArray.length; i++) {
    
  }

}



$scope.clearOrderingArr = function() {
  $scope.variableOrderingArray = [];
  $scope.result = 0;
}

}]);
