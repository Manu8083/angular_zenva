var app = angular.module('expensesApp', []);

app.controller('HomeViewController', [ '$scope', function ($scope) {
 $scope.apptitle = 'aplicacion Manutromero';
}]);
app.controller('ExpensesViewController',['$scope' , function($scope) {
	$scope.expenses =[
		{description: 'food' , amount:10 , date:'2015-03-11'},
		{description: 'comida' , amount:30 , date:'2015-03-12'},
	];
}]);