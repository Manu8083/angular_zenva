var app = angular.module("expensesApp" , []);

app.controller('ExpensesViewController', [ '$scope', function ($scope) {
 $scope.name = "Manuel"; // se define variable name
$scope.expense = {
	description: 'food' ,
	amount: 10
};
$scope.phrase = 'Es una frase cualquiera';
$scope.increaseAmount = function () {
	$scope.expense.amount++;
};
$scope.items = [
	{
		name:'pizza' ,
		ingredients: ['queso' , 'pan' , 'bocadillito' , 'piña']
	},
	{
		name:'tortilla',
		ingredients: ['pan', 'sal' , 'pepper' , 'garlic']
	}
];
}]);
