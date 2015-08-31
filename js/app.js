var app = angular.module('expensesApp', ['ngRoute']);


app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html',
			controller: 'ExpensesViewController'
	})
		.when('/expenses' , {
			templateUrl: 'index.html' ,
			controller: 'ExpensesViewController'
	})
		.when('/expenses/new',{
			templateUrl:'view/from.html',
			controller: 'ExpenseViewController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('HomeViewController', [ '$scope', function ($scope) {
 $scope.apptitle = 'aplicacion Manutromero';
}]);
app.controller('ExpensesViewController',['$scope' , function($scope) {
	$scope.expenses =[
		{description: 'fooOd' , amount:10 , date:'2015-03-11'},
		{description: 'Comida' , amount:30 , date:'2015-03-12'},
		{description: 'CoMiDa' , amount:30 , date:'2015-03-12'},
	];
}]);

app.controller('ExpenseViewController',['$scope' , function($scope){
	$scope.sometext = 'The Word is round';
}]);
