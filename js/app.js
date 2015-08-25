var app = angular.module("expensesApp" , []);

app.controller('ExpensesViewController', [ '$scope', function ($scope) {
 $scope.name = "Manuel";
$scope.expense = {
	description: 'food' ,
	amount: 10
};
$scope.phrase = 'Es una frase cualquiera';
$scope.increaseAmount = function () {
	$scope.expense.amount++;
};
}]);
